import Image from "next/image";

export default function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Image
        src="/images/hero/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-ink" />

      <div className="absolute inset-0 bg-hex-grid bg-[length:48px_48px] opacity-10 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_0%,transparent_75%)]" />
    </div>
  );
}
