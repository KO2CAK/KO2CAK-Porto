import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Award, BookOpen } from "lucide-react"
import logoITK from "@/assets/Logo_ITK.png"

export function Education() {
  const { t } = useTranslation()

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-muted/10">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center text-foreground">{t("education.title")}</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="glass-card p-10 flex flex-col justify-center relative overflow-hidden h-full border border-white/10 hover:border-accent/50 group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <img src={logoITK} alt="ITK Logo" className="h-28 w-28 object-contain drop-shadow-lg grayscale group-hover:grayscale-0 transition-all" />
            </div>

            
            <div className="flex items-center gap-4 mb-8 text-accent">
              <div className="p-3 bg-accent/10 rounded-xl shadow-inner border border-accent/20 text-accent">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold">University</h3>
            </div>

            <div className="space-y-4 relative z-10">
              <h4 className="text-2xl font-bold tracking-tight">Institut Teknologi Kalimantan (ITK)</h4>
              <p className="text-accent font-semibold text-lg">{t("education.itk.degree")}</p>
              <div className="flex justify-between items-center text-sm text-foreground/80 pt-6 border-t border-white/10 mt-6">
                <span className="bg-white/5 px-3 py-1 rounded-full border border-white/5">{t("education.itk.period")}</span>
                <span className="bg-accent text-white px-4 py-1.5 rounded-full font-bold shadow-md">
                  {t("education.itk.gpa")}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Certifications & Workshops */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-8 border border-white/5 hover:border-accent/30 transition-all">
              <div className="flex items-center gap-3 mb-6 text-accent">
                <div className="p-2 bg-accent/10 rounded-lg shadow-inner">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-foreground/80 italic bg-white/5 p-4 rounded-xl border border-white/5">
                  <span>Non-Destructive Test Workshop, ITK 2019 (PT. Kwalita Inspection Dinamika)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-8 border border-white/5 hover:border-accent/30 transition-all">
              <div className="flex items-center gap-3 mb-6 text-accent">
                <div className="p-2 bg-accent/10 rounded-lg shadow-inner">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <ul className="space-y-3">
                <li className="text-sm font-medium bg-white/5 p-3 rounded-lg border border-white/5">Speakers of Pengmas @SMKN 5 Balikpapan (KKCTBN 2018)</li>
                <li className="text-sm text-foreground/70 bg-white/5 p-3 rounded-lg border border-white/5">Electrical Category Participant, Poltera Madura</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
