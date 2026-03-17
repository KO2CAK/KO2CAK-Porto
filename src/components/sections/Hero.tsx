import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
  const { t } = useTranslation()
  const [bgIndex, setBgIndex] = useState(0)
  const backgrounds = ["/hero-maritime.png", "/hero-frontend.png"]

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Prepare roles for typewriter
  const roles = t("hero.roles", { returnObjects: true }) as string[]
  const typeSequence = roles.flatMap((role) => [role, 2000])

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Backgrounds */}
      {backgrounds.map((bg, idx) => (
        <motion.div
          key={bg}
          initial={{ opacity: 0 }}
          animate={{ opacity: bgIndex === idx ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${bg}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-maritime-navy/30 to-background" />

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-maritime-ocean font-bold tracking-widest uppercase mb-4 block">
            {t("hero.greeting")}
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">
            Koko Yoga Adhitya
          </h1>

          <div className="text-lg md:text-3xl text-gray-200 mb-10 min-h-[4rem] flex flex-col sm:flex-row justify-center items-center gap-x-2">
            <span>{t("hero.role_prefix")}</span>
            <span className="text-maritime-ocean font-bold">
              <TypeAnimation
                sequence={typeSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>


          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-maritime-ocean hover:bg-maritime-ocean/90 text-white min-w-[200px]" asChild>
              <a href="/CV_KOKO_YOGA_ADHITYA.pdf" target="_blank" rel="noopener noreferrer">{t("hero.cta_cv")}</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm min-w-[200px]" asChild>
              <a href="#contact">{t("hero.cta_contact")}</a>
            </Button>
          </div>


        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about">
          <ArrowDownRigid className="h-8 w-8" />
        </a>
      </motion.div>
    </section>
  )
}

function ArrowDownRigid(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
    </svg>
  )
}
