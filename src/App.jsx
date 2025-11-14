import React, { useEffect, useRef } from 'react'
import {
  Search,
  PiggyBank,
  Building2,
  Store,
  MessageSquare,
  Lightbulb,
  Code2,
  GraduationCap,
  ArrowRight,
  Globe,
  Paintbrush,
  Megaphone,
  Quote,
  Star,
  Instagram,
  Facebook,
  Linkedin,
  Phone,
  Mail
} from 'lucide-react'

// Simple intersection observer reveal utility
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// Shared styles
const glass =
  'backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_30px_rgba(31,38,135,0.25)]'
const glassLight =
  'backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_30px_rgba(31,38,135,0.18)]'

const indigoButton =
  'inline-flex items-center justify-center px-6 py-3 rounded-xl text-white font-semibold bg-indigo-600 hover:bg-indigo-500 transition-all shadow-[0_0_0_0_rgba(79,70,229,0.7)] hover:shadow-[0_0_24px_6px_rgba(79,70,229,0.45)] focus:outline-none focus:ring-2 focus:ring-indigo-400'

function Section({ children, className = '' }) {
  return (
    <section className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  )
}

function Card({ children, className = '', light = false }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`opacity-0 translate-y-6 transition-all duration-700 ${light ? glassLight : glass} rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full text-white">
      {/* Background gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1020] via-[#0e1330] to-[#0c0f24]" />
        {/* Accent gradients */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className={`flex items-center justify-between ${glass} rounded-2xl px-4 py-3`}>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg">
                <span className="font-bold text-white">S</span>
              </div>
              <div>
                <p className="font-semibold leading-tight">Sam Agency</p>
                <p className="text-xs text-white/70 leading-tight">Digital Marketing • Trieste</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <a href="#servizi" className="hover:text-white transition-colors">Servizi</a>
              <a href="#come-funziona" className="hover:text-white transition-colors">Come funziona</a>
              <a href="#chi-siamo" className="hover:text-white transition-colors">Founder</a>
              <a href="#testimonianze" className="hover:text-white transition-colors">Recensioni</a>
              <a href="#contatti" className={`${indigoButton} ml-2`}>Prenota</a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <Section className="pt-10 pb-20 md:pt-16 md:pb-28">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Hai un'attività di qualità, ma nessuno ti trova online?
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Ti diamo un volto digitale riconoscibile che attrae clienti prima ancora che ti conoscano.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#contatti" className={`${indigoButton} text-base`}>Prenota Chiamata Strategica Gratuita <ArrowRight className="ml-2 h-5 w-5" /></a>
              <p className="text-white/60 text-sm">Zero impegno. 30 minuti per capire come crescere.</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/30 via-blue-500/30 to-cyan-400/20 blur-2xl rounded-3xl" />
            <div className={`relative ${glass} rounded-3xl overflow-hidden p-4 sm:p-6`}> 
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
                alt="Imprenditrice al computer"
                className="rounded-2xl object-cover w-full h-64 sm:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/40 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </Section>

      {/* PROBLEM */}
      <Section className="pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/20 border border-white/20"><Search className="text-azure-200 text-blue-300" /></div>
              <div>
                <h3 className="font-semibold text-xl">Invisibili Online</h3>
                <p className="mt-2 text-white/70">I clienti cercano, ma non vi trovano: sito lento, SEO assente, nessuna presenza coerente.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/20 border border-white/20"><PiggyBank /></div>
              <div>
                <h3 className="font-semibold text-xl">Budget Limitato</h3>
                <p className="mt-2 text-white/70">Progetti pensati per PMI: massima resa con investimenti sostenibili e scalabili.</p>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/20 border border-white/20 flex"><Building2 className="mr-2" /><Store /></div>
              <div>
                <h3 className="font-semibold text-xl">Schiacciati dai Grandi</h3>
                <p className="mt-2 text-white/70">Competere con i big è possibile con una strategia locale chiara e mirata.</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* ABOUT FOUNDER */}
      <Section id="chi-siamo" className="pb-20">
        <Card className="p-0 overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="relative md:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                alt="Samantha, Founder"
                className="w-full h-72 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
            </div>
            <div className="md:col-span-2 p-8">
              <h2 className="text-3xl font-bold mb-2">Ciao, sono Samantha</h2>
              <p className="text-white/80 leading-relaxed">
                Da 8 anni aiuto ristoranti, saloni di bellezza e studi professionali a diventare visibili online. La mia missione è semplice: creare una presenza digitale elegante, chiara e misurabile, che porti prenotazioni reali senza spreco di budget.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div className={`${glassLight} rounded-xl p-4 text-center`}>
                  <p className="text-2xl font-extrabold">+120</p>
                  <p className="text-sm text-white/70">progetti lanciati</p>
                </div>
                <div className={`${glassLight} rounded-xl p-4 text-center`}>
                  <p className="text-2xl font-extrabold">Trieste</p>
                  <p className="text-sm text-white/70">focus locale</p>
                </div>
                <div className={`${glassLight} rounded-xl p-4 text-center`}>
                  <p className="text-2xl font-extrabold">PMI</p>
                  <p className="text-sm text-white/70">specializzazione</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="come-funziona" className="pb-20">
        <h2 className="text-3xl font-bold mb-8">Come Funziona</h2>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-6 bottom-6 w-1 bg-gradient-to-b from-indigo-500 via-blue-500 to-cyan-400 rounded-full opacity-60 sm:w-[2px]" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <Card className="flex flex-col items-start gap-3">
              <div className="p-3 rounded-xl bg-indigo-500/20 border border-white/20"><MessageSquare /></div>
              <h3 className="font-semibold text-xl">Analisi (30 min)</h3>
              <p className="text-white/70">Call gratuita per capire obiettivi, pubblico e priorità.</p>
            </Card>
            <Card className="flex flex-col items-start gap-3">
              <div className="p-3 rounded-xl bg-indigo-500/20 border border-white/20"><Lightbulb /></div>
              <h3 className="font-semibold text-xl">Strategia su Misura (48h)</h3>
              <p className="text-white/70">Roadmap chiara: azioni essenziali, tempi e budget.</p>
            </Card>
            <Card className="flex flex-col items-start gap-3">
              <div className="p-3 rounded-xl bg-indigo-500/20 border border-white/20"><Code2 /></div>
              <h3 className="font-semibold text-xl">Realizzazione (7-14 giorni)</h3>
              <p className="text-white/70">Design, sviluppo, contenuti e tracciamenti.</p>
            </Card>
            <Card className="flex flex-col items-start gap-3">
              <div className="p-3 rounded-xl bg-indigo-500/20 border border-white/20"><GraduationCap /></div>
              <h3 className="font-semibold text-xl">Formazione e Autonomia (1h)</h3>
              <p className="text-white/70">Sessione pratica per gestire sito e canali in autonomia.</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="servizi" className="pb-20">
        <h2 className="text-3xl font-bold mb-8">Servizi</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="group hover:shadow-[0_0_32px_8px_rgba(59,130,246,0.35)] transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-xl bg-blue-500/20 border border-white/20"><Globe /></div>
              <h3 className="text-xl font-semibold">Sito Web che Converte</h3>
            </div>
            <p className="text-white/70">Landing e siti veloci, SEO-ready, integrati con prenotazioni e tracciamenti.</p>
            <p className="mt-4 text-sm text-cyan-300">A partire da €800</p>
          </Card>
          <Card className="group hover:shadow-[0_0_32px_8px_rgba(79,70,229,0.35)] transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-xl bg-indigo-500/20 border border-white/20"><Paintbrush /></div>
              <h3 className="text-xl font-semibold">Branding Digitale</h3>
            </div>
            <p className="text-white/70">Identità visiva, tone of voice e kit social coerente e professionale.</p>
          </Card>
          <Card className="group hover:shadow-[0_0_32px_8px_rgba(6,182,212,0.35)] transition-shadow">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-xl bg-cyan-500/20 border border-white/20"><Megaphone /></div>
              <h3 className="text-xl font-semibold">Social Media & ADV</h3>
            </div>
            <p className="text-white/70">Piani editoriali, campagne mirate e report mensili chiari.</p>
          </Card>
        </div>
      </Section>

      {/* SOCIAL PROOF */}
      <Section id="testimonianze" className="pb-20">
        <h2 className="text-3xl font-bold mb-8">Cosa dicono i clienti</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="relative">
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-white/30" />
              <p className="text-white/90">
                “In poche settimane abbiamo riempito l'agenda. Il sito è bellissimo e semplice da usare.”
              </p>
              <div className="mt-5 flex items-center gap-3">
                <img src={`https://i.pravatar.cc/80?img=${i+10}`} alt="avatar" className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">Cliente {i}</p>
                  <p className="text-xs text-white/70">Ristorante • Trieste</p>
                </div>
              </div>
              <div className="mt-3 flex text-amber-300">
                {[...Array(5)].map((_, idx) => (<Star key={idx} className="h-4 w-4 fill-current" />))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* TRANSFORMATION */}
      <Section className="pb-20">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <Card className="h-full">
            <h3 className="text-2xl font-bold mb-2">Prima</h3>
            <p className="text-white/70">Agenda vuota, visibilità scarsa, branding poco chiaro.</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-white/70">
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5">
                <CalendarSadIcon />
                <p className="mt-2 text-xs">Agenda vuota</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5">
                <Search className="opacity-60" />
                <p className="mt-2 text-xs">Poco trovati</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5">
                <Building2 className="opacity-60" />
                <p className="mt-2 text-xs">Brand debole</p>
              </div>
            </div>
          </Card>
          <div className="flex items-center justify-center">
            <div className="hidden md:block h-0.5 w-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full" />
            <ArrowRight className="mx-4 h-10 w-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400" />
            <div className="hidden md:block h-0.5 w-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          </div>
          <Card className="h-full">
            <h3 className="text-2xl font-bold mb-2">Dopo</h3>
            <p className="text-white/70">Prenotazioni piene, presenza coerente, campagne che performano.</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-white/20">
                <CalendarHappyIcon />
                <p className="mt-2 text-xs">Agenda piena</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-white/20">
                <Globe />
                <p className="mt-2 text-xs">Visibilità</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-white/20">
                <Paintbrush />
                <p className="mt-2 text-xs">Brand forte</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section id="contatti" className="pb-20">
        <div className={`text-center ${glass} rounded-3xl p-10`}> 
          <h3 className="text-3xl font-bold">Pronto a Diventare Visibile Online?</h3>
          <p className="mt-3 text-white/80">Zero impegno. Parliamo della tua situazione.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className={`${indigoButton} text-base`}>Prenota Ora la Tua Chiamata Gratuita</a>
            <a href="tel:+39000000000" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"><Phone className="h-5 w-5" /> +39 000 000 0000</a>
            <a href="mailto:info@samagency.it" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"><Mail className="h-5 w-5" /> info@samagency.it</a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="pb-10">
        <Section>
          <div className={`${glass} rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4`}>
            <p className="text-sm text-white/70">Sam Agency - Digital Marketing Trieste</p>
            <div className="flex items-center gap-4 text-white/80">
              <a href="#" className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Instagram"><Instagram /></a>
              <a href="#" className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Facebook"><Facebook /></a>
              <a href="#" className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="LinkedIn"><Linkedin /></a>
            </div>
          </div>
        </Section>
      </footer>

      {/* Styles for reveal animation and custom icons */}
      <style>{`
        .reveal-in { opacity: 1 !important; transform: translateY(0) !important; }
        .text-azure-200 { color: #93c5fd; }
      `}</style>
    </div>
  )
}

// Simple placeholder icons for before/after
function CalendarSadIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="opacity-60">
      <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" opacity="0.6" />
      <line x1="3" y1="8" x2="21" y2="8" stroke="currentColor" opacity="0.6" />
      <circle cx="9" cy="14" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="15" cy="14" r="1" fill="currentColor" opacity="0.6" />
      <path d="M8 18c1.2-1 2.8-1 4 0" stroke="currentColor" opacity="0.6" />
    </svg>
  )
}

function CalendarHappyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" />
      <line x1="3" y1="8" x2="21" y2="8" stroke="currentColor" />
      <circle cx="9" cy="14" r="1" fill="currentColor" />
      <circle cx="15" cy="14" r="1" fill="currentColor" />
      <path d="M8 17c1.2 1 2.8 1 4 0" stroke="currentColor" />
    </svg>
  )
}
