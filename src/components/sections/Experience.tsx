import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Company Images - Kokoh Semesta
import kokoh1 from "@/assets/company-img/Kokoh-semesta/1.jpeg"
import kokoh2 from "@/assets/company-img/Kokoh-semesta/2.jpg"
import kokoh3 from "@/assets/company-img/Kokoh-semesta/3.jpg"

// Company Images - Mega Ocean Jaya
import mega1 from "@/assets/company-img/Mega-Ocean-Jaya/WhatsApp Image 2026-03-17 at 13.30.44 (1).jpeg"
import mega2 from "@/assets/company-img/Mega-Ocean-Jaya/WhatsApp Image 2026-03-17 at 13.30.44.jpeg"
import mega3 from "@/assets/company-img/Mega-Ocean-Jaya/WhatsApp Image 2026-03-17 at 13.30.45 (1).jpeg"
import mega4 from "@/assets/company-img/Mega-Ocean-Jaya/WhatsApp Image 2026-03-17 at 13.30.45.jpeg"

// Company Images - Candi Pasifik
import candi1 from "@/assets/company-img/candi-pasifik/1.jpg"
import candi2 from "@/assets/company-img/candi-pasifik/2.jpg"
import candi3 from "@/assets/company-img/candi-pasifik/3.jpg"

// Company Images - Citra Surveyor
import citra1 from "@/assets/company-img/citra-surveyor-indonesia/1.jpg"
import citra2 from "@/assets/company-img/citra-surveyor-indonesia/2.jpg"
import citra3 from "@/assets/company-img/citra-surveyor-indonesia/3.jpg"
import citra4 from "@/assets/company-img/citra-surveyor-indonesia/4.jpg"

function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  const next = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prev = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative h-full w-full group/slider overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover/slider:opacity-100 transition-opacity">
        <button
          onClick={prev}
          className="p-1 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-300",
              i === currentIndex ? "bg-white w-3" : "bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  )
}


export function Experience() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(0)

  const workExp = [
    {
      id: "freelance_surveyor",
      key: "freelance_surveyor",
      color: "blue",
      images: [mega1, mega2, mega3, mega4]
    },
    {
      id: "qc_assistant",
      key: "qc_assistant",
      color: "teal",
      images: [kokoh1, kokoh2, kokoh3]
    },
    {
      id: "pimpro",
      key: "pimpro",
      color: "navy",
      images: [candi1, candi2, candi3]
    },
    {
      id: "marine_surveyor_freelance",
      key: "marine_surveyor_freelance",
      color: "gray",
      images: [citra1, citra2, citra3, citra4]
    }
  ]

  const activeExp = workExp[activeTab]

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/4 left-0 w-full h-[500px] bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent px-4 py-1 text-sm tracking-wider uppercase bg-accent/10">
            {t("nav.experience")}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground">{t("experience.title")}</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Side: Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {workExp.map((exp, index) => {
              const isActive = activeTab === index
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "text-left p-6 rounded-2xl transition-all duration-300 relative overflow-hidden border",
                    isActive
                      ? "glass pointer-events-none border-accent/50 shadow-[0_0_30px_rgba(14,165,233,0.15)] scale-[1.02]"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20 cursor-pointer hover:scale-[1.01]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="pl-2">
                    <span className={cn("text-xs font-bold uppercase tracking-widest block mb-2 transition-colors duration-300", isActive ? "text-accent" : "text-foreground/50")}>
                      {t(`experience.${exp.key}.period`)}
                    </span>
                    <h4 className={cn("text-xl font-bold transition-colors duration-300", isActive ? "text-foreground" : "text-foreground/70")}>
                      {t(`experience.${exp.key}.company`)}
                    </h4>
                    <p className={cn("text-sm mt-1 transition-colors duration-300", isActive ? "text-foreground/80" : "text-foreground/40")}>
                      {t(`experience.${exp.key}.role`)}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Side: Detailed Content */}
          <div className="w-full lg:w-2/3">
            <div className="glass-card group overflow-hidden p-0 border border-white/10 relative h-full min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Company Image Slider */}
                  <div className="h-64 md:h-80 overflow-hidden rounded-t-2xl relative shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />
                    <ImageSlider images={activeExp.images} />

                    {/* Floating Title over Slider */}
                    <div className="absolute bottom-6 left-6 md:left-8 right-6 z-20">
                      <div className="flex items-center gap-2 text-accent mb-3">
                        <div className="p-1.5 bg-accent/20 rounded-md backdrop-blur-sm border border-accent/30">
                          <Briefcase className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-bold tracking-widest uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white">
                          {t(`experience.${activeExp.key}.role`)}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg">
                        {t(`experience.${activeExp.key}.company`)}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex-1 bg-gradient-to-b from-background/50 to-transparent dark:from-white/5">
                    <h4 className="text-lg font-bold mb-6 text-foreground/90 flex items-center gap-2">
                      <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-4">
                      {(t(`experience.${activeExp.key}.desc`, { returnObjects: true }) as string[]).map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + (i * 0.05) }}
                          className="flex gap-4 text-foreground/80 leading-relaxed text-sm md:text-base bg-white/5 p-4 rounded-xl border border-white/5 hover:border-accent/30 transition-colors"
                        >
                          <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
