import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Menu, X, Code2 } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { LangToggle } from "./LangToggle"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b py-2 shadow-sm"
          : "bg-gradient-to-b from-black/60 to-transparent py-4 text-white"
      )}
    >

      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Code2 className="h-6 w-6 text-maritime-ocean" />
          <span className="hidden sm:inline">Koko Yoga Adhitya</span>
          <span className="sm:hidden">KYA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-maritime-ocean",
                  !scrolled && "text-white/90 hover:text-white"
                )}
              >
                {link.name}
              </a>

            ))}
          </div>
          <div className="flex items-center gap-2 border-l pl-6">
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2 mr-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-maritime-ocean"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-sm text-muted-foreground">Language</span>
              <LangToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
