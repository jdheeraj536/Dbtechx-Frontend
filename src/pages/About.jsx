import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import Dheeraj from "../assets/dheeraj.jpeg";
import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  FaArrowRight,
  FaBullseye,
  FaChartLine,
  FaCheck,
  FaChevronDown,
  FaCode,
  FaCubes,
  FaGlobe,
  FaLightbulb,
  FaLaptopCode,
  FaLayerGroup,
  FaMobileAlt,
  FaPaintBrush,
  FaRocket,
  FaShieldAlt,
  FaUsers,
  FaBullhorn,
  FaSearch,
  FaRobot,
  FaHandshake,
  FaRegCompass,
  FaRegComments,
} from "react-icons/fa";

const services = [
  { icon: FaLaptopCode, title: "Web Development", desc: "Fast, responsive websites built around your business goals." },
  { icon: FaMobileAlt, title: "App Development", desc: "Practical mobile experiences for customers on the move." },
  { icon: FaBullhorn, title: "Digital Marketing", desc: "Campaigns designed to build visibility and generate enquiries." },
  { icon: FaSearch, title: "SEO & Local Growth", desc: "Help the right people discover your business online." },
  { icon: FaPaintBrush, title: "Branding & Design", desc: "A consistent visual identity across every touchpoint." },
  { icon: FaRobot, title: "AI & Automation", desc: "Smarter workflows that reduce repetitive manual work." },
];

const principles = [
  { icon: FaRegCompass, number: "01", title: "Understand first", desc: "We start by learning about your business, audience, goals and challenges before recommending a solution." },
  { icon: FaLayerGroup, number: "02", title: "Build with purpose", desc: "Every design choice, feature and campaign should have a clear role in the wider customer experience." },
  { icon: FaChartLine, number: "03", title: "Improve continuously", desc: "We use feedback and performance signals to identify what can be refined after launch." },
];

const values = [
  { icon: FaHandshake, title: "Partnership", desc: "Clear communication, shared goals and a collaborative working relationship." },
  { icon: FaLightbulb, title: "Thoughtful innovation", desc: "Using technology where it solves a real problem—not simply because it is new." },
  { icon: FaShieldAlt, title: "Responsibility", desc: "Careful execution, honest expectations and respect for each client's time and resources." },
  { icon: FaRocket, title: "Momentum", desc: "A practical focus on progress, timely delivery and meaningful next steps." },
];

const industries = [
  { title: "Healthcare", detail: "Hospitals, clinics and healthcare brands", icon: "✚" },
  { title: "Education", detail: "Schools, institutes and coaching centres", icon: "↗" },
  { title: "Retail & Lifestyle", detail: "Showrooms, stores and consumer brands", icon: "◇" },
  { title: "Professional Services", detail: "Local businesses and service providers", icon: "⌘" },
  { title: "Public Campaigns", detail: "Campaign communication and digital outreach", icon: "◎" },
  { title: "Startups & SMEs", detail: "Growing teams building their digital presence", icon: "↗" },
];

const faqs = [
  { q: "What does Dbtechx help businesses with?", a: "Dbtechx brings website and software development, digital marketing, SEO, branding, design, social media, PR and automation services together so businesses can plan their digital presence with one team." },
  { q: "Can I choose only one service?", a: "Yes. You can start with a single requirement—such as a website, SEO or a marketing campaign—and explore other services only if they fit your goals." },
  { q: "How does a project usually begin?", a: "We begin with a conversation about your goals, audience, scope and timeline. From there, we can discuss an appropriate approach and the next steps." },
  { q: "Does Dbtechx work with local businesses?", a: "Yes. Dbtechx works with businesses and organisations and has a strong connection to Purnia and the wider Seemanchal region, while digital services can support clients beyond a single location." },
  { q: "How can I discuss my project?", a: "Use the contact options on this website or message the team on WhatsApp. Share a brief description of what you need, and the conversation can start from there." },
];

function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const reduceMotion = useReducedMotion();
  const offsets = { up: { y: 28 }, left: { x: -28 }, right: { x: 28 }, down: { y: -20 } };
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionIntro({ eyebrow, title, accent, text, light = false }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.24em] ${light ? "text-red-300" : "text-red-600"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl md:text-5xl ${light ? "text-white" : "text-zinc-950"}`}>
        {title} <span className="text-red-600">{accent}</span>
      </h2>
      {text && <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 md:text-lg ${light ? "text-zinc-300" : "text-zinc-600"}`}>{text}</p>}
    </Reveal>
  );
}

export default function About() {
  const [activeFaq, setActiveFaq] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-white text-zinc-900 antialiased">
      <Helmet>
        <title>About Dbtechx | Technology & Digital Growth Company</title>
        <meta name="description" content="Meet DBTechX, a technology and digital growth company helping businesses with web development, software, digital marketing, SEO, branding and automation." />
        <meta name="keywords" content="About DBTechX, web development Purnia, digital marketing Bihar, software development, SEO, branding, digital transformation" />
        <link rel="canonical" href="https://dbtechx.com/about" />
        <meta property="og:title" content="About Dbtechx | Technology & Digital Growth" />
        <meta property="og:description" content="Technology, creativity and thoughtful digital strategy for businesses ready to move forward." />
        <meta property="og:url" content="https://dbtechx.com/about" />
      </Helmet>

      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#08090d] pb-20 pt-32 text-white sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(220,38,38,0.22),transparent_32%),radial-gradient(circle_at_82%_70%,rgba(80,80,100,0.24),transparent_34%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          </div>
          {!reduceMotion && (
            <>
              <motion.div className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" animate={{ x: [0, 35, 0], y: [0, 24, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-rose-900/25 blur-[110px]" animate={{ x: [0, -25, 0], y: [0, -30, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
            </>
          )}
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10">
            <div className="relative z-10">
              <Reveal>
                <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-zinc-200 backdrop-blur-xl sm:text-sm">
                  <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" /></span>
                  ABOUT Dbtechx <span className="text-zinc-500">/</span> Technology with intent
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl xl:text-7xl">
                  Good ideas deserve
                  <span className="mt-2 block bg-gradient-to-r from-red-400 via-rose-500 to-red-600 bg-clip-text text-transparent">great digital execution.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                  We bring technology, design and digital marketing together to help businesses build a stronger presence, communicate clearly and move forward with confidence.
                </p>
              </Reveal>
              <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="https://wa.me/919504393419" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-[0_12px_40px_rgba(220,38,38,.22)] transition duration-300 hover:-translate-y-1 hover:bg-red-500">
                  Talk about your project <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#our-story" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/[0.09]">
                  Discover our story
                </a>
              </Reveal>
              <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-zinc-400 sm:text-sm">
                {["Strategy-led thinking", "Design that serves a purpose", "Technology built for people"].map((item) => <span key={item} className="inline-flex items-center gap-2"><FaCheck className="text-red-400" />{item}</span>)}
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.12} className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-red-600/20 via-transparent to-white/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-white/[0.055] p-3 shadow-2xl backdrop-blur-xl sm:p-4">
                <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4 pt-2">
                  <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-500" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">DBX / Digital systems</span>
                  <FaCubes className="text-zinc-400" />
                </div>
                <div className="grid grid-cols-2 gap-3 p-2 sm:gap-4 sm:p-4">
                  <div className="col-span-2 rounded-2xl border border-white/10 bg-[#111218] p-5 sm:p-6">
                    <div className="flex items-start justify-between">
                      <div><p className="text-xs text-zinc-500">Our approach</p><p className="mt-2 text-xl font-bold text-white sm:text-2xl">Connected thinking.</p><p className="mt-1 text-xl font-bold text-red-400 sm:text-2xl">Clear execution.</p></div>
                      <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-red-400"><FaCode size={22} /></div>
                    </div>
                    <div className="mt-6 flex h-20 items-end gap-2 overflow-hidden rounded-lg bg-white/[0.025] px-3 pt-3">
                      {[35, 48, 40, 62, 53, 72, 60, 84, 68, 95, 78, 100].map((h, i) => <motion.div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-red-700/50 to-red-400" initial={{ height: reduceMotion ? `${h}%` : "8%" }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.045 }} />)}
                    </div>
                    <div className="mt-3 flex justify-between text-[10px] uppercase tracking-widest text-zinc-600"><span>Plan</span><span>Build</span><span>Improve</span></div>
                  </div>
                  {[
                    { icon: FaGlobe, label: "Digital presence", sub: "Web · SEO · Content" },
                    { icon: FaChartLine, label: "Business growth", sub: "Campaigns · Insights" },
                    { icon: FaMobileAlt, label: "Digital products", sub: "Websites · Apps" },
                    { icon: FaRobot, label: "Smart workflows", sub: "Tools · Automation" },
                  ].map((item, i) => <motion.div key={item.label} whileHover={reduceMotion ? {} : { y: -4 }} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-red-500/30">
                    <item.icon className="mb-4 text-lg text-red-400" /><p className="text-sm font-bold text-zinc-100">{item.label}</p><p className="mt-1 text-[10px] leading-5 text-zinc-500">{item.sub}</p>
                  </motion.div>)}
                </div>
                <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-[10px] text-zinc-500"><span>Technology • Creativity • Trust</span><span className="font-mono">BUILD / BETTER</span></div>
              </div>
              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/15 bg-zinc-900/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:block">
                <p className="text-xs text-zinc-400">One connected partner</p><p className="mt-1 text-sm font-bold text-white">From first idea to launch</p>
              </div>
            </Reveal>
          </div>
          <div className="relative mx-auto mt-16 max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
              {[
                ["250+", "Projects delivered"],
                ["215+", "Clients served"],
                ["13+", "Team members"],
                ["24/7", "Support commitment"],
              ].map(([value, label], i) => <Reveal key={label} delay={i * 0.06} className="bg-[#0d0e13] px-4 py-6 text-center sm:py-8"><p className="text-3xl font-black tracking-tight text-white sm:text-4xl">{value}</p><p className="mt-2 text-xs text-zinc-400 sm:text-sm">{label}</p></Reveal>)}
            </div>
            <p className="mt-3 text-center text-[10px] text-zinc-600">Company figures shown from the existing Dbtechx website content.</p>
          </div>
        </section>

        {/* STORY */}
        <section id="our-story" className="scroll-mt-24 py-20 sm:py-28 lg:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
            <Reveal direction="left" className="relative">
              <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l-2 border-t-2 border-red-500/60" />
              <div className="relative overflow-hidden rounded-[1.7rem] bg-zinc-100">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85" alt="Team collaborating on digital projects" loading="lazy" className="h-[360px] w-full object-cover sm:h-[500px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">The idea behind DBTechX</p><p className="mt-2 max-w-md text-2xl font-bold leading-snug sm:text-3xl">Make digital progress feel practical, not complicated.</p></div>
              </div>
              <div className="absolute -bottom-5 -right-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl sm:-right-5 sm:p-5"><p className="text-xs text-zinc-500">Our focus</p><p className="mt-1 font-bold text-zinc-900">People. Purpose. Progress.</p></div>
            </Reveal>
            <div>
              <Reveal><p className="text-xs font-bold uppercase tracking-[0.24em] text-red-600">Our story</p><h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">Technology should move your business <span className="text-red-600">forward.</span></h2></Reveal>
              <Reveal delay={0.08}><p className="mt-6 text-base leading-8 text-zinc-600 sm:text-lg">Dbtechx is a technology and digital growth company built around a simple idea: businesses do better when their digital tools, brand and marketing work together.</p></Reveal>
              <Reveal delay={0.14}><p className="mt-4 leading-8 text-zinc-600">We bring web and software development, design, digital marketing, SEO, branding and automation into one connected service experience. Whether a business is building its first online presence or improving an existing one, the work begins with understanding what it needs to achieve.</p></Reveal>
              <Reveal delay={0.2}><p className="mt-4 leading-8 text-zinc-600">With roots in Purnia and the Seemanchal region, we understand the value of clear communication, local context and digital solutions that make sense for the people using them.</p></Reveal>
              <Reveal delay={0.26} className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 p-5"><FaRegCompass className="text-xl text-red-600" /><h3 className="mt-3 font-bold">Start with clarity</h3><p className="mt-2 text-sm leading-6 text-zinc-500">Know the goal before choosing the tools.</p></div>
                <div className="rounded-2xl border border-zinc-200 p-5"><FaLayerGroup className="text-xl text-red-600" /><h3 className="mt-3 font-bold">Think end-to-end</h3><p className="mt-2 text-sm leading-6 text-zinc-500">Connect design, development and growth.</p></div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* MISSION / VISION */}
        <section className="relative overflow-hidden bg-zinc-50 py-20 sm:py-28">
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-red-100/70 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionIntro eyebrow="What guides us" title="A clear purpose." accent="A bigger vision." text="The best digital work starts with a shared understanding of what success should look like." />
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal className="group rounded-[1.6rem] border border-zinc-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-2xl text-red-600 transition group-hover:bg-red-600 group-hover:text-white"><FaBullseye /></div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-red-600">Our mission</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Make digital growth more achievable.</h3>
                <p className="mt-4 leading-8 text-zinc-600">To empower businesses with thoughtful technology and marketing solutions that improve visibility, create better customer experiences and support sustainable growth.</p>
              </Reveal>
              <Reveal delay={0.1} className="group rounded-[1.6rem] bg-[#0b0c10] p-7 text-white shadow-xl transition duration-500 hover:-translate-y-1 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl text-red-400 transition group-hover:bg-red-600 group-hover:text-white"><FaRocket /></div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-red-300">Our vision</p>
                <h3 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">Be a trusted partner for what comes next.</h3>
                <p className="mt-4 leading-8 text-zinc-300">To help more businesses embrace digital opportunities with confidence—through reliable execution, useful innovation and long-term partnerships.</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionIntro eyebrow="How we think" title="Good work is a process," accent="not a shortcut." text="We keep the work grounded in business goals, considered decisions and steady improvement." />
            <div className="grid gap-5 md:grid-cols-3">
              {principles.map((item, i) => <Reveal key={item.number} delay={i * 0.08} className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-7 transition duration-300 hover:border-red-200 hover:shadow-xl sm:p-8">
                <div className="flex items-center justify-between"><span className="text-sm font-black tracking-[0.2em] text-red-600">{item.number}</span><span className="h-px flex-1 bg-zinc-200 mx-4" /><FaArrowRight className="text-sm text-zinc-400 transition group-hover:text-red-600" /></div>
                <h3 className="mt-8 text-xl font-extrabold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-zinc-600">{item.desc}</p>
              </Reveal>)}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-[#090a0e] py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionIntro light eyebrow="What we bring together" title="The right capabilities." accent="One connected team." text="A practical mix of creative, technical and growth services to support different stages of your digital journey." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((item, i) => <Reveal key={item.title} delay={i * 0.05} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.06] sm:p-7">
                <div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-xl text-red-400 transition group-hover:bg-red-600 group-hover:text-white"><item.icon /></div><span className="text-xs font-mono text-zinc-600">0{i + 1}</span></div>
                <h3 className="mt-6 text-lg font-bold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-zinc-400">{item.desc}</p>
                <a href="https://wa.me/919504393419" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-zinc-200 transition hover:text-red-300">Discuss your requirement <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" /></a>
              </Reveal>)}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionIntro eyebrow="Who we work with" title="Different industries." accent="Different challenges." text="Every business has its own audience and priorities. The solution should reflect that." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item, i) => <Reveal key={item.title} delay={i * 0.05} className="group flex gap-5 rounded-2xl border border-zinc-200 p-6 transition duration-300 hover:border-red-200 hover:shadow-lg sm:p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-xl font-bold text-red-600 transition group-hover:bg-red-600 group-hover:text-white">{item.icon}</span>
                <div><h3 className="font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{item.detail}</p></div>
              </Reveal>)}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Reveal><p className="text-xs font-bold uppercase tracking-[0.24em] text-red-600">Our values</p><h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">The way we work matters as much as <span className="text-red-600">what we make.</span></h2><p className="mt-5 leading-8 text-zinc-600">Strong partnerships are built through everyday choices: how we listen, how we solve problems and how we deliver.</p></Reveal>
              </div>
              <div className="space-y-4">
                {values.map((item, i) => <Reveal key={item.title} delay={i * 0.06} className="flex gap-5 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-xl text-red-600"><item.icon /></div><div><h3 className="text-lg font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-7 text-zinc-600">{item.desc}</p></div>
                </Reveal>)}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionIntro eyebrow="From brief to launch" title="A straightforward way" accent="to get things done." text="A transparent process helps keep priorities clear and work moving in the right direction." />
            <div className="relative grid gap-5 md:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-red-200 via-red-500 to-red-200 md:block" />
              {[
                { n: "01", title: "Discover", desc: "Discuss goals, audience, requirements and what success means for your business." },
                { n: "02", title: "Plan & design", desc: "Shape the scope, user experience, creative direction and practical milestones." },
                { n: "03", title: "Build & launch", desc: "Develop, review, refine and prepare the solution for its intended audience." },
                { n: "04", title: "Support & improve", desc: "Review feedback, resolve issues and identify opportunities for future improvements." },
              ].map((item, i) => <Reveal key={item.n} delay={i * 0.08} className="relative rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-red-600 text-sm font-black text-white shadow-md shadow-red-600/20">{item.n}</span>
                <h3 className="mt-6 text-lg font-extrabold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-zinc-600">{item.desc}</p>
              </Reveal>)}
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="overflow-hidden bg-[#0a0b0f] py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:gap-20 lg:px-10">
            <Reveal direction="left" className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] border border-red-500/20" />
              <div className="relative overflow-hidden rounded-[1.7rem] bg-zinc-800">
                <img src={Dheeraj} alt="Dheeraj Jha, Founder and CEO of DBTechX" loading="lazy" className="h-[390px] w-full object-cover object-top sm:h-[500px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6"><p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">Founder & CEO</p><h3 className="mt-2 text-2xl font-black">Dheeraj Jha</h3><p className="mt-1 text-sm text-zinc-300">DBTechX</p></div>
              </div>
            </Reveal>
            <div>
              <Reveal><p className="text-xs font-bold uppercase tracking-[0.24em] text-red-400">A note from our founder</p><h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">Build with purpose. <span className="text-red-500">Grow with confidence.</span></h2></Reveal>
              <Reveal delay={0.1}><p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">“Every business has a story and an ambition. Our role is to understand both, then help turn them into a digital experience that feels clear, useful and credible.”</p></Reveal>
              <Reveal delay={0.17}><p className="mt-5 leading-8 text-zinc-400">At DBTechX, we aim to be more than a service provider. We want to be a dependable partner that listens carefully, communicates honestly and brings together the right skills for each project. Good work is not only about how something looks on launch day—it is also about how well it serves the people who use it.</p></Reveal>
              <Reveal delay={0.23}><p className="mt-5 leading-8 text-zinc-400">That mindset shapes how we approach every brief, from a first website to a broader digital growth plan.</p></Reveal>
              <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3"><span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300">Technology</span><span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300">Solution</span><span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300">Trust</span></Reveal>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionIntro eyebrow="Our journey" title="Built step by step." accent="Focused on what’s next." text="Our work continues to evolve as businesses, technology and customer expectations change." />
            <div className="mx-auto max-w-3xl">
              {[
                { year: "The foundation", title: "Start with a clear purpose", desc: "Dbtechx began with the ambition to make digital services more accessible and useful for businesses." },
                { year: "Growing capabilities", title: "Bring more disciplines together", desc: "Web development, creative services, branding and digital marketing became part of a more connected offering." },
                { year: "The next chapter", title: "Keep building for changing needs", desc: "We continue to refine how we work and explore practical ways technology can support business goals." },
              ].map((item, i) => <Reveal key={item.year} delay={i * 0.08} className="relative border-l border-zinc-200 pb-10 pl-8 last:pb-0 sm:pl-10">
                <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-600 ring-4 ring-red-50" />
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">{item.year}</p><h3 className="mt-2 text-xl font-extrabold sm:text-2xl">{item.title}</h3><p className="mt-3 leading-7 text-zinc-600">{item.desc}</p>
              </Reveal>)}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-10">
            <div>
              <Reveal><p className="text-xs font-bold uppercase tracking-[0.24em] text-red-600">Questions, answered</p><h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">A few things you may <span className="text-red-600">want to know.</span></h2><p className="mt-5 leading-8 text-zinc-600">Have a question that isn’t covered here? Get in touch and tell us what you’re planning.</p></Reveal>
              <Reveal delay={0.1} className="mt-7"><a href="https://wa.me/919504393419" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-red-600 transition hover:gap-3">Ask us directly <FaArrowRight /></a></Reveal>
            </div>
            <div className="space-y-3">
              {faqs.map((item, i) => <div key={item.q} className={`overflow-hidden rounded-2xl border bg-white transition-colors ${activeFaq === i ? "border-red-200 shadow-sm" : "border-zinc-200"}`}>
                <button type="button" aria-expanded={activeFaq === i} onClick={() => setActiveFaq(activeFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6">
                  <span className="font-bold leading-6 text-zinc-900">{item.q}</span><FaChevronDown className={`shrink-0 text-sm text-red-600 transition-transform duration-300 ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                <motion.div initial={false} animate={{ height: activeFaq === i ? "auto" : 0, opacity: activeFaq === i ? 1 : 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-7 text-zinc-600 sm:px-6">{item.a}</p>
                </motion.div>
              </div>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative isolate overflow-hidden bg-red-600 py-20 text-white sm:py-28">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,.18),transparent_28%),radial-gradient(circle_at_90%_90%,rgba(0,0,0,.18),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-100">Let’s build something meaningful</p>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">Your next chapter starts with a conversation.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-red-100 sm:text-lg">Tell us what you want to build, improve or grow. We’ll help you explore a practical way forward.</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://wa.me/919504393419" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-extrabold text-red-600 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-zinc-100">Start a conversation <FaArrowRight className="transition-transform group-hover:translate-x-1" /></a>
              <a href="mailto:contact@dbtechx.com" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"><FaRegComments /> Email our team</a>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
