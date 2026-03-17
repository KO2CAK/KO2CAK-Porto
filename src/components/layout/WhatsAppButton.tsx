import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const phoneNumber = "+62895408434433"
  const message = "Hello Koko, I'm interested in your services."
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-lg transition-transform group-hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 text-white fill-white" />
      </Button>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background border px-3 py-1 rounded-md text-sm font-medium shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  )
}
