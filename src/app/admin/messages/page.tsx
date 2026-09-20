import Link from "next/link";
import { getContactMessages } from "@/lib/contact-messages";

export const dynamic = "force-dynamic";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminMessagesPage() {
  const messages = await getContactMessages();

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <h1 className="font-display text-2xl font-semibold text-foreground">Messages</h1>
        <p className="font-mono text-meta uppercase text-faint">
          {messages.length} {messages.length === 1 ? "submission" : "submissions"}
        </p>
      </div>

      {messages.length === 0 ? (
        <p className="mt-10 text-sm text-muted">
          No messages yet. Submissions from the contact form will appear here.
        </p>
      ) : (
        <ul className="mt-10 border-t border-line">
          {messages.map((m) => (
            <li key={m.id} className="border-b border-line py-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <p className="font-display text-lg font-semibold text-foreground">{m.name}</p>
                  <a
                    href={`mailto:${m.email}?subject=${encodeURIComponent("Re: your message to Gapstech")}`}
                    className="text-sm text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {m.email}
                  </a>
                </div>
                <time
                  dateTime={m.createdAt}
                  className="tnum font-mono text-meta uppercase text-faint"
                >
                  {formatDate(m.createdAt)}
                </time>
              </div>

              <p className="mt-4 max-w-measure whitespace-pre-line leading-relaxed text-muted">
                {m.message}
              </p>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-10 text-sm text-faint">
        <Link href="/admin" className="underline underline-offset-4 hover:text-accent">
          Back to projects
        </Link>
      </p>
    </div>
  );
}
