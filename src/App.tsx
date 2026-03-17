import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { WhatsAppButton } from "./components/layout/WhatsAppButton"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Experience } from "./components/sections/Experience"
import { Skills } from "./components/sections/Skills"
import { Education } from "./components/sections/Education"
import { Contact } from "./components/sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
