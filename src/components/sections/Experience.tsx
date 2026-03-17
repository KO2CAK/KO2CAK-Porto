import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"
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


  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-maritime-ocean text-maritime-ocean px-4 py-1">
            {t("nav.experience")}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("experience.title")}</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {workExp.map((exp, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 top-0 md:top-8 w-10 h-10 bg-background border-4 border-maritime-ocean rounded-full -translate-x-1/2 z-10 flex items-center justify-center">

                    <Briefcase className="h-4 w-4 text-maritime-ocean" />
                  </div>

                  {/* Content Card */}
                  <div className={cn(
                    "w-full md:w-1/2 pl-12 md:pl-0",
                    isEven ? "md:pr-16" : "md:pl-16"
                  )}>
                    <div className="bg-background rounded-2xl overflow-hidden shadow-xl border border-border/50 hover:border-maritime-ocean transition-colors group">
                      {/* Company Image Slider */}
                      <div className="h-48 md:h-64 overflow-hidden">
                        <ImageSlider images={exp.images} />
                      </div>

                      
                      <div className="p-6 md:p-8">
                        <div className="flex flex-col mb-4">
                          <span className="text-sm font-bold text-maritime-ocean mb-1 uppercase tracking-wider">
                            {t(`experience.${exp.key}.company`)}
                          </span>
                          <h3 className="text-xl font-bold group-hover:text-maritime-ocean transition-colors">
                            {t(`experience.${exp.key}.role`)}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{t(`experience.${exp.key}.period`)}</span>
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {(t(`experience.${exp.key}.desc`, { returnObjects: true }) as string[]).map((item, i) => (
                            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
                              <CheckCircle2 className="h-5 w-5 text-maritime-ocean shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}
