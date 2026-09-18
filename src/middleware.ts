import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

/* Routes under /admin that a signed-in but not-yet-verified user may reach.
   The password recovery link lands here with a recovery session. */
const PUBLIC_ADMIN_PATHS = ["/admin/login", "/admin/reset"];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;
  const isPublicAdminPath = PUBLIC_ADMIN_PATHS.includes(path);

  if (!data.user) {
    if (isPublicAdminPath) return response;
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  /* Being signed in is NOT authorization. This Supabase project is shared with
     other products, so every one of their users would otherwise reach this
     dashboard. Authorization comes from the gapstech_admins allowlist, which
     RLS also enforces on writes — the check below cannot be bypassed by
     calling the database directly. */
  const { data: adminRow } = await supabase
    .from("gapstech_admins")
    .select("email")
    .eq("email", data.user.email ?? "")
    .maybeSingle();

  const isAdmin = !!adminRow;

  if (!isAdmin) {
    // Signed in, but not for this product. End the session so the login page
    // does not bounce them straight back here.
    await supabase.auth.signOut();
    const url = new URL("/admin/login", request.url);
    url.searchParams.set("denied", "1");
    return NextResponse.redirect(url);
  }

  if (path === "/admin/login") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return response;
}

export const config = { matcher: ["/admin/:path*"] };
