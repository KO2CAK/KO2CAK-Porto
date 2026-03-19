import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

import { Monitor, Ruler, PenTool, Languages } from "lucide-react"

export function Skills() {
  const { t } = useTranslation()

  const skillGroups = [
    {
      title: "Design & Drafting",
      icon: <PenTool className="h-6 w-6 text-accent" />,
      skills: [
        { name: "AutoCAD", level: 90 },
        { name: "Rhinoceros", level: 85 },
        { name: "Maxsurf Modeller", level: 80 },
      ]
    },
    {
      title: "Project & Inspection",
      icon: <Ruler className="h-6 w-6 text-accent" />,
      skills: [
        { name: "Marine Surveying", level: 95 },
        { name: "Quality Control", level: 90 },
        { name: "NDE/NDT Inspection", level: 85 },
      ]
    },
    {
      title: "Web & Digital Mastery",
      icon: <Monitor className="h-6 w-6 text-accent" />,
      skills: [
        { name: "React & Modern JavaScript", level: 85 },
        { name: "Tailwind CSS & UI Components", level: 90 },
        { name: "Photoshop & CorelDraw", level: 75 },
        { name: "MS Excel & Word", level: 95 },
      ]
    },

    {
      title: "Languages",
      icon: <Languages className="h-6 w-6 text-accent" />,
      skills: [
        { name: "Indonesian (Native)", level: 100 },
        { name: "English (Elementary)", level: 45 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground">{t("skills.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("skills.technical")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {skillGroups.map((group, gIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gIndex * 0.1 }}
            >
              <div className="glass-card h-full flex flex-col p-6 sm:p-8 border border-white/5 hover:border-accent/40">
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <div className="p-3 sm:p-4 bg-accent/10 rounded-2xl shadow-inner border border-accent/20 text-accent">
                      {group.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">{group.title}</h3>
                  </div>

                  <div className="space-y-6 flex-1">
                    {group.skills.map((skill, index) => (
                      <motion.div 
                        key={skill.name} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (index * 0.1) }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-semibold text-foreground/90">{skill.name}</span>
                          <span className="text-accent font-bold bg-accent/10 px-2 py-0.5 rounded-md">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2.5 bg-secondary/30" />
                      </motion.div>
                    ))}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
