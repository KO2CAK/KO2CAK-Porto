import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const { t } = useTranslation()

  const workExp = [
    {
      id: "freelance_surveyor",
      key: "freelance_surveyor",
      color: "blue"
    },
    {
      id: "qc_assistant",
      key: "qc_assistant",
      color: "teal"
    },
    {
      id: "pimpro",
      key: "pimpro",
      color: "navy"
    },
    {
      id: "marine_surveyor_freelance",
      key: "marine_surveyor_freelance",
      color: "gray"
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
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

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
                    <div className="bg-background rounded-2xl p-6 md:p-8 shadow-xl border border-border/50 hover:border-maritime-ocean transition-colors group">
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
