import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Award, BookOpen } from "lucide-react"
import logoITK from "@/assets/Logo_ITK.png"

export function Education() {
  const { t } = useTranslation()

  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{t("education.title")}</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Main Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background p-10 rounded-3xl shadow-xl border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-20">
              <img src={logoITK} alt="ITK Logo" className="h-24 w-24 object-contain" />
            </div>

            
            <div className="flex items-center gap-4 mb-8 text-maritime-ocean">
              <BookOpen className="h-8 w-8" />
              <h3 className="text-2xl font-bold">University</h3>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-bold">Institut Teknologi Kalimantan (ITK)</h4>
              <p className="text-maritime-ocean font-semibold">{t("education.itk.degree")}</p>
              <div className="flex justify-between items-center text-sm text-muted-foreground pt-4 border-t">
                <span>{t("education.itk.period")}</span>
                <span className="bg-maritime-ocean/10 text-maritime-ocean px-3 py-1 rounded-full font-bold">
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
            <div className="bg-background p-8 rounded-2xl shadow-lg border">
              <div className="flex items-center gap-3 mb-4 text-maritime-ocean">
                <Award className="h-6 w-6" />
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-muted-foreground italic">
                  <span>Non-Destructive Test Workshop, ITK 2019 (PT. Kwalita Inspection Dinamika)</span>
                </li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-2xl shadow-lg border">
              <div className="flex items-center gap-3 mb-4 text-maritime-ocean">
                <Award className="h-6 w-6" />
                <h3 className="text-xl font-bold">Achievements</h3>
              </div>
              <ul className="space-y-2">
                <li className="text-sm font-medium">Speakers of Pengmas @SMKN 5 Balikpapan (KKCTBN 2018)</li>
                <li className="text-sm text-muted-foreground">Electrical Category Participant, Poltera Madura</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
