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
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-background shadow-2xl">
              <img
                src={profilePic}
                alt="Koko Yoga Adhitya"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-maritime-ocean/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-maritime-navy/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-3 text-maritime-ocean mb-4">
              <Layout className="h-6 w-6" />
              <span className="font-bold tracking-wider uppercase">{t("about.title")}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              A Passionate <span className="text-maritime-ocean">Frontend Developer</span> Crafting Digital Experiences
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


            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-primary">3+</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">10+</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest mt-1">Projects Managed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
