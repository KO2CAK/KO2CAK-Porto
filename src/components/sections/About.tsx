import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Layout } from "lucide-react"
import profilePic from "@/assets/profile.jpg"


export function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative z-10 rounded-2xl overflow-hidden glass p-2 shadow-2xl"
            >
              <img
                src={profilePic}
                alt="Koko Yoga Adhitya"
                className="w-full aspect-square object-cover rounded-xl"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 text-accent mb-4">
              <Layout className="h-6 w-6" />
              <span className="font-bold tracking-wider uppercase text-sm">{t("about.title")}</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              A Passionate <span className="text-gradient">Frontend Developer</span> Crafting Digital Experiences
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                As a transitioning professional with a strong technical background in Naval Architecture,
                I bring a unique perspective to **Frontend Development**. I specialize in building
                responsive, user-centric web applications using **React**, **JavaScript**, and **Modern CSS**.
              </p>
              <p>
                My experience in project management and quality control ensures that I approach coding
                with precision, performance, and scalability in mind.
              </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-10">
              <motion.div whileHover={{ y: -5 }} className="glass-card flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-3xl sm:text-4xl font-bold text-accent mb-2">3+</h3>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-widest">Years Experience</p>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="glass-card flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-3xl sm:text-4xl font-bold text-accent mb-2">10+</h3>
                <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-widest">Projects Managed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
