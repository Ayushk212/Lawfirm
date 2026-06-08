import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919999999999"; // change this to real number

  const message = encodeURIComponent(
    "Hello, I need legal consultation."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full shadow-lg
        transition-transform hover:scale-110
      "
    >
      <MessageCircle size={24} />
    </a>
  );
}