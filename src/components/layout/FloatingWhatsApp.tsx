import { buildWhatsAppUrl } from "@/lib/utils";

const WHATSAPP_URL = buildWhatsAppUrl(
  "+14328477432",
  "Hi Gapstech, I'd like to discuss a project"
);

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red shadow-red-lg transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="white" aria-hidden>
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.7 4.607 1.906 6.475L4 29l7.719-1.862A11.94 11.94 0 0 0 16.001 27C22.629 27 28 21.627 28 15S22.629 3 16.001 3Zm6.66 17.09c-.28.786-1.63 1.5-2.25 1.582-.575.078-1.31.11-2.113-.133-.487-.148-1.113-.36-1.916-.706-3.373-1.456-5.577-4.842-5.746-5.07-.168-.228-1.373-1.825-1.373-3.482s.868-2.47 1.176-2.807c.308-.336.673-.42.897-.42.224 0 .448.002.644.012.207.01.485-.078.758.578.28.673.951 2.33 1.034 2.5.084.17.14.37.028.598-.112.228-.168.37-.336.57-.168.2-.354.446-.505.6-.168.17-.343.354-.148.694.196.34.87 1.435 1.868 2.324 1.284 1.145 2.367 1.5 2.707 1.67.34.168.539.14.738-.084.196-.224.84-.98 1.064-1.316.224-.336.448-.28.756-.168.308.112 1.96.924 2.296 1.092.336.168.56.252.644.393.084.14.084.812-.196 1.598Z" />
      </svg>
    </a>
  );
}
