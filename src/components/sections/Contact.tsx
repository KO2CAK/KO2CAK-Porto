import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 text-center text-foreground">{t("contact.title")}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-8"
          >
            <motion.div whileHover={{ x: 5 }} className="flex gap-4 sm:gap-6 items-start glass p-4 sm:p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 shadow-inner border border-accent/20">
                <Mail className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg sm:text-xl mb-1">{t("contact.email")}</h4>
                <p className="text-foreground/70 font-medium text-sm sm:text-base break-all">kokoyogaadhitya1997@gmail.com</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="flex gap-4 sm:gap-6 items-start glass p-4 sm:p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 shadow-inner border border-accent/20">
                <Phone className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg sm:text-xl mb-1">WhatsApp</h4>
                <p className="text-foreground/70 font-medium text-sm sm:text-base">+62895408434433</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="flex gap-4 sm:gap-6 items-start glass p-4 sm:p-6 rounded-2xl border border-white/5 hover:border-accent/30 transition-all">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 shadow-inner border border-accent/20">
                <MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
              </div>
              <div>
                <h4 className="font-bold text-lg sm:text-xl mb-1">Address</h4>
                <p className="text-foreground/70 font-medium text-sm sm:text-base">Perumahan BDS-1 Blok B.3 No.37</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="glass-card h-full border border-white/10 p-6 sm:p-8 hover:border-accent/30 transition-colors">
                <form action="https://formspree.io/f/xlgppqon" method="POST" className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-sm font-semibold tracking-wide text-foreground/90">{t("contact.name")}</label>
                      <Input type="text" name="name" placeholder="Your Name" required className="bg-white/5 border border-white/10 px-4 py-5 sm:py-6 rounded-xl focus-visible:ring-accent transition-all text-sm sm:text-base" />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="text-sm font-semibold tracking-wide text-foreground/90">{t("contact.email")}</label>
                      <Input type="email" name="email" placeholder="yourEmail@example.com" required className="bg-white/5 border border-white/10 px-4 py-5 sm:py-6 rounded-xl focus-visible:ring-accent transition-all text-sm sm:text-base" />
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-sm font-semibold tracking-wide text-foreground/90">{t("contact.message")}</label>
                    <Textarea name="message" placeholder="Type your message here..." required className="bg-white/5 border border-white/10 p-4 min-h-[140px] sm:min-h-[160px] rounded-xl focus-visible:ring-accent transition-all resize-none text-sm sm:text-base" />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 sm:h-14 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all text-base sm:text-lg mt-2 sm:mt-4">
                      <Send className="h-5 w-5 mr-2 sm:mr-3" />
                      {t("contact.send")}
                    </Button>
                  </motion.div>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
