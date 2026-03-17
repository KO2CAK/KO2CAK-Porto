import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LangToggle() {
  const { i18n } = useTranslation()

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "id" : "en"
    i18n.changeLanguage(newLang)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLang}
      className="flex items-center gap-2 font-medium"
    >
      <Globe className="h-4 w-4" />
      <span>{i18n.language === "en" ? "ID 🇮🇩" : "EN 🇺🇸"}</span>
    </Button>
  )
}
