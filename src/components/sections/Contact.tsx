import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">{t("contact.title")}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-6 items-start">
              <div className="h-12 w-12 rounded-2xl bg-maritime-ocean/10 flex items-center justify-center shrink-0">
                <Mail className="h-6 w-6 text-maritime-ocean" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{t("contact.email")}</h4>
                <p className="text-muted-foreground">kokoyogaadhitya1997@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="h-12 w-12 rounded-2xl bg-maritime-ocean/10 flex items-center justify-center shrink-0">
                <Phone className="h-6 w-6 text-maritime-ocean" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                <p className="text-muted-foreground">+62895408434433</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="h-12 w-12 rounded-2xl bg-maritime-ocean/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-maritime-ocean" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Address</h4>
                <p className="text-muted-foreground">Perumahan BDS-1 Blok B.3 No.37</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <form action="https://formspree.io/f/xlgppqon" method="POST" className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t("contact.name")}</label>
                      <Input type="text" name="name" placeholder="Your Name" required className="bg-muted/30 border-none px-4 py-6" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t("contact.email")}</label>
                      <Input type="email" name="email" placeholder="yourEmail@example.com" required className="bg-muted/30 border-none px-4 py-6" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">{t("contact.message")}</label>
                    <Textarea name="message" placeholder="Type your message here..." required className="bg-muted/30 border-none p-4 min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full bg-maritime-ocean hover:bg-maritime-ocean/90 h-12 text-white font-bold">
                    <Send className="h-4 w-4 mr-2" />
                    {t("contact.send")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
