import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Ruler, PenTool, Languages } from "lucide-react"

export function Skills() {
  const { t } = useTranslation()

  const skillGroups = [
    {
      title: "Design & Drafting",
      icon: <PenTool className="h-6 w-6 text-maritime-ocean" />,
      skills: [
        { name: "AutoCAD", level: 90 },
        { name: "Rhinoceros", level: 85 },
        { name: "Maxsurf Modeller", level: 80 },
      ]
    },
    {
      title: "Project & Inspection",
      icon: <Ruler className="h-6 w-6 text-maritime-ocean" />,
      skills: [
        { name: "Marine Surveying", level: 95 },
        { name: "Quality Control", level: 90 },
        { name: "NDE/NDT Inspection", level: 85 },
      ]
    },
    {
      title: "Web & Digital Mastery",
      icon: <Monitor className="h-6 w-6 text-maritime-ocean" />,
      skills: [
        { name: "React & Modern JavaScript", level: 85 },
        { name: "Tailwind CSS & UI Components", level: 90 },
        { name: "Photoshop & CorelDraw", level: 75 },
        { name: "MS Excel & Word", level: 95 },
      ]
    },

    {
      title: "Languages",
      icon: <Languages className="h-6 w-6 text-maritime-ocean" />,
      skills: [
        { name: "Indonesian (Native)", level: 100 },
        { name: "English (Elementary)", level: 45 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("skills.title")}</h2>
          <p className="text-muted-foreground">{t("skills.technical")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, gIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gIndex * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg bg-muted/20">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-background rounded-xl shadow-sm">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-bold">{group.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground font-bold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-background" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
