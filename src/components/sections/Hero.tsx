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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/80 to-background bg-gradient-mesh mix-blend-overlay opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 }
            }
          }}
          className="flex flex-col items-center"
        >
          <motion.span 
            variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 }}}
            className="text-accent font-bold tracking-widest uppercase mb-4 block"
          >
            {t("hero.greeting")}
          </motion.span>
          <motion.h1 
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 }}}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-accent mb-6 drop-shadow-lg"
          >
            Koko Yoga Adhitya
          </motion.h1>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}}
            className="text-xl md:text-3xl text-gray-200 mb-10 min-h-[4rem] flex flex-col sm:flex-row justify-center items-center gap-x-3 glass px-8 py-4 rounded-full"
          >
            <span className="opacity-90">{t("hero.role_prefix")}</span>
            <span className="text-accent font-bold drop-shadow-md">
              <TypeAnimation
                sequence={typeSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.div>


          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white min-w-[200px] shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] rounded-full transition-all duration-300 text-lg h-14" asChild>
                <a href="src\assets\CV_KOKO_YOGA_ADHITYA.pdf" target="_blank" rel="noopener noreferrer">{t("hero.cta_cv")}</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="glass hover:bg-white/20 text-white border-white/30 rounded-full min-w-[200px] transition-all duration-300 text-lg h-14" asChild>
                <a href="#contact">{t("hero.cta_contact")}</a>
              </Button>
            </motion.div>
          </motion.div>
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
