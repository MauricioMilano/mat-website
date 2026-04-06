import React from "react";

const WHATSAPP_NUMBER = "5512982910109";
const DEFAULT_MESSAGE = "Olá Callseg (Consórcio Porto Seguro), gostaria de saber mais.";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  position?: "bottom-right" | "bottom-left";
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = DEFAULT_MESSAGE,
  className = "",
  position = "bottom-right",
}) => {
  const positionClasses =
    position === "bottom-left" ? "left-6" : "right-6";

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      className={`fixed bottom-6 ${positionClasses} bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg z-50 transition-colors ${className}`}
      aria-label="WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.82L3 21l1.17-4.28A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
