import { WHATSAPP_NUMBER } from "../config";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 right-4 bottom-20 sm:bottom-10 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-transform"
      style={{
        width: "48px", // más pequeño
        height: "48px",
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-full h-full p-1.5"
      />
    </a>
  );
}
