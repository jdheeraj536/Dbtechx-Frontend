import { Helmet } from "react-helmet-async";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import dheerajImg from "../assets/dheeraj.jpeg";
import Simran from "../assets/simran.webp";
import Deepika from "../assets/deepika.webp";
import Rahul from "../assets/rahul.webp";
import Monika from "../assets/monika.webp";
import Ravi from "../assets/ravi.png";
import Amrit from "../assets/amrit.jpeg";
import Anshu from "../assets/anshu.jpeg";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaUsers,
  FaLightbulb,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaHeart,
  FaHandshake,
  FaChevronDown,
  FaRegCompass,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Anshu Jha",
    role: "Team Leader",
    image: Anshu,
    department: "Leadership",
    desc: "Leading the team with dedication, teamwork, and a vision for success at Dbtechx.",
    socials: { facebook: "https://www.facebook.com/share/1DFu7komni/ ", instagram: "https://www.instagram.com/jha__ansh?exln=MTk2cHc4ZTBxZmgxOQ==", linkedin: "https://www.linkedin.com/in/anshu-kumar-34a66119a?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  },
  {
    name: "Rahul Kumar",
    role: "Social Media Manager",
    image: Rahul,
    department: "Social & Content",
    desc: "Focused on creating engaging content, managing social media platforms, and helping businesses grow their digital presence.",
    socials: { facebook: "https://www.facebook.com/rahul.roy.449286", instagram: "#", linkedin: "#" },
  },
  {
    name: "Ravi Kumar",
    role: "Social Media Manager",
    image: Ravi,
    department: "Social & Content",
    desc: "Supports social media planning and content delivery to help brands communicate consistently across digital platforms.",
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Amrit Anand",
    role: "Senior Web Developer (SDE)",
    image: Amrit,
    department: "Engineering",
    desc: "Responsible for developing, managing, and optimizing modern, high-performance websites and web solutions.",
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Monika Kumari",
    role: "Social Media Manager",
    image: Monika,
    department: "Social & Content",
    desc: "Focused on creating engaging content, managing social media platforms, and helping businesses grow their digital presence.",
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Simran Kumari",
    role: "Business Development Associate",
    image: Simran,
    department: "Business Development",
    desc: "Handles client relationships, business growth, and supports the website team in delivering effective digital solutions.",
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Deepika Kumari",
    role: "Business Development Associate",
    image: Deepika,
    department: "Business Development",
    desc: "Handles client relationships, business growth, and supports the website team in delivering effective digital solutions.",
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
];

const principles = [
  { icon: FaLightbulb, title: "Curiosity over assumptions", desc: "We ask questions, explore ideas and look for the real problem before jumping to a solution." },
  { icon: FaHandshake, title: "One team, shared goals", desc: "Creative, marketing and development work best when they collaborate from the start." },
  { icon: FaChartLine, title: "Progress you can see", desc: "We value clear communication, useful feedback and steady improvements throughout a project." },
];

const faqs = [
  { q: "What kind of work does the team handle?", a: "Our team works across web development, social media, digital marketing, business development, branding and related digital services." },
  { q: "Can I apply to join Dbtechx?", a: "Yes. Visit the Careers page to explore opportunities and follow the application instructions listed there." },
  { q: "How can I discuss a project with the team?", a: "You can message us on WhatsApp or email contact@dbtechx.com with a short description of your goals and requirements." },
];

function Reveal({ children, className = "", delay = 0, direction = "up" }) {
  const reduceMotion = useReducedMotion();
  const offsets = { up: { y: 24 }, left: { x: -24 }, right: { x: 24 } };
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: reduceMotion ? 0 : 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SocialLink({ href, label, children }) {
  const inactive = !href || href === "#";
  if (inactive) {
    return <span aria-label={`${label} link not provided`} title={`${label} link not provided`} className="flex h-10 w-10 cursor-not-allowed items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-300">{children}</span>;
  }
  return (
    <a href={href} aria-label={label} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-600 transition duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-600 hover:text-white">
      {children}
    </a>
  );
}

function Team() {
  const [activeFaq, setActiveFaq] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-white text-zinc-900 antialiased">
      <Helmet>
        <title>Meet the Team | Dbtechx</title>
        <meta name="description" content="Meet the people behind Dbtechx, working across web development, social media, digital marketing and business growth." />
        <meta name="keywords" content="Dbtechx team, digital marketing team, web developers, business development, Purnia Bihar" />
        <link rel="canonical" href="https://dbtechx.com/team" />
        <meta property="og:title" content="Meet the Team | Dbtechx" />
        <meta property="og:description" content="The people, skills and collaboration behind Dbtechx digital projects." />
      </Helmet>

      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#090a0e] pb-20 pt-32 text-white sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(220,38,38,.2),transparent_32%),radial-gradient(circle_at_85%_75%,rgba(120,120,140,.16),transparent_30%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          {!reduceMotion && <motion.div aria-hidden="true" className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-red-600/20 blur-[100px]" animate={{ x: [0, -25, 0], y: [0, 25, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />}
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10">
            <Reveal>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-zinc-200 backdrop-blur-xl sm:text-sm"><span className="h-2 w-2 rounded-full bg-red-500" /> THE PEOPLE BEHIND THE WORK</div>
              <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl xl:text-7xl">Good people.<span className="mt-2 block bg-gradient-to-r from-red-400 via-rose-500 to-red-600 bg-clip-text text-transparent">Great things together.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">Meet the people bringing ideas to life at Dbtechx—combining technology, creativity and client-focused thinking to build better digital experiences.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#our-team" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition duration-300 hover:-translate-y-1 hover:bg-red-500">Meet the team <FaArrowRight className="transition-transform group-hover:translate-x-1" /></a>
                <a href="/careers" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"><FaUsers /> Explore careers</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-zinc-400 sm:text-sm"><span className="inline-flex items-center gap-2"><FaCode className="text-red-400" /> Technology</span><span className="inline-flex items-center gap-2"><FaBullhorn className="text-red-400" /> Creativity</span><span className="inline-flex items-center gap-2"><FaHandshake className="text-red-400" /> Collaboration</span></div>
            </Reveal>
            <Reveal direction="right" delay={0.12} className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-red-600/20 via-transparent to-white/5 blur-2xl" />
              <div className="relative rounded-[1.7rem] border border-white/15 bg-white/[0.055] p-3 shadow-2xl backdrop-blur-xl sm:p-4">
                <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4 pt-2"><div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-500" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div><span className="font-mono text-[10px] uppercase tracking-[.2em] text-zinc-500">Dbtechx / Team</span><FaUsers className="text-zinc-400" /></div>
                <div className="grid grid-cols-2 gap-3 p-2 sm:gap-4 sm:p-4">
                  <div className="col-span-2 rounded-2xl border border-white/10 bg-[#111218] p-5 sm:p-6"><p className="text-xs text-zinc-500">How we work</p><h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Different skills.<br /><span className="text-red-400">One shared direction.</span></h2><div className="mt-5 flex items-center"><div className="flex -space-x-3">{[Anshu, Rahul, Amrit, Simran, Deepika].map((image, i) => <motion.div key={i} whileHover={reduceMotion ? {} : { y: -5 }} className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#111218] bg-zinc-800"><img src={image} alt="" className="h-full w-full object-cover object-top" /></motion.div>)}</div><span className="ml-4 text-xs text-zinc-400">A team built around collaboration</span></div></div>
                  {[
                    { icon: FaCode, title: "Build", sub: "Web & software" },
                    { icon: FaBullhorn, title: "Connect", sub: "Content & campaigns" },
                    { icon: FaChartLine, title: "Grow", sub: "Strategy & insights" },
                    { icon: FaHeart, title: "Support", sub: "Client relationships" },
                  ].map((item, i) => <motion.div key={item.title} whileHover={reduceMotion ? {} : { y: -4 }} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-red-500/30"><item.icon className="mb-4 text-lg text-red-400" /><p className="text-sm font-bold text-zinc-100">{item.title}</p><p className="mt-1 text-[10px] leading-5 text-zinc-500">{item.sub}</p></motion.div>)}
                </div>
                <div className="border-t border-white/10 px-4 py-3 text-[10px] text-zinc-500">People first • Ideas in motion • Work with purpose</div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TEAM INTRO / STATS */}
        <section className="border-b border-zinc-100 bg-white py-10 sm:py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 sm:px-8 md:grid-cols-4 lg:px-10">
            {[["08", "Team profiles"], ["04", "Core disciplines"], ["01", "Shared mission"], ["∞", "Ideas to explore"]].map(([value, label], i) => <Reveal key={label} delay={i * 0.05} className="text-center"><p className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl">{value}</p><p className="mt-2 text-xs font-medium text-zinc-500 sm:text-sm">{label}</p></Reveal>)}
          </div>
        </section>

        {/* FOUNDER - ONLY IMAGE INSTANCE HERE */}
        <section className="bg-zinc-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal className="mb-8 flex items-center gap-3"><span className="h-px w-8 bg-red-600" /><p className="text-xs font-bold uppercase tracking-[.22em] text-red-600">Leadership</p></Reveal>
            <Reveal className="group overflow-hidden rounded-[1.7rem] bg-[#0a0b0f] text-white shadow-xl shadow-zinc-900/10">
              <div className="grid md:grid-cols-[.78fr_1.22fr]">
                <div className="relative min-h-[340px] overflow-hidden bg-zinc-800 md:min-h-[520px]">
                  <img src={dheerajImg} alt="Dheeraj Jha, Founder and CEO of Dbtechx" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#0a0b0f]/40" />
                  <div className="absolute bottom-5 left-5 rounded-xl border border-white/15 bg-black/40 px-4 py-3 backdrop-blur-md md:hidden"><p className="font-bold">Dheeraj Jha</p><p className="mt-1 text-xs text-zinc-300">Founder & CEO</p></div>
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <span className="w-fit rounded-full border border-red-400/25 bg-red-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.2em] text-red-300">Founder & CEO</span>
                  <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">Dheeraj Jha</h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">Building Dbtechx with a mission to help businesses grow through technology, digital marketing and creative branding.</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">The focus is simple: understand each business, bring the right skills together and deliver digital work with care, clarity and purpose.</p>
                  <div className="mt-7 flex gap-3">
                    <a href="https://www.facebook.com/jdheeraj536" target="_blank" rel="noreferrer" aria-label="Dheeraj Jha on Facebook" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-200 transition hover:-translate-y-1 hover:bg-white hover:text-red-600"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/dheeraj_jha_vlogs" target="_blank" rel="noreferrer" aria-label="Dheeraj Jha on Instagram" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-zinc-200 transition hover:-translate-y-1 hover:bg-white hover:text-red-600"><FaInstagram /></a>
                  </div>
                  <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3"><div><p className="text-xs text-zinc-500">Focus</p><p className="mt-1 text-sm font-bold">Digital growth</p></div><div><p className="text-xs text-zinc-500">Approach</p><p className="mt-1 text-sm font-bold">People-first</p></div><div><p className="text-xs text-zinc-500">Principle</p><p className="mt-1 text-sm font-bold">Technology & trust</p></div></div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TEAM GRID */}
        <section id="our-team" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
              <p className="text-xs font-bold uppercase tracking-[.24em] text-red-600">Meet the people</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Our professional <span className="text-red-600">team.</span></h2>
              <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">A mix of leadership, development, social media and business development skills working together on client goals.</p>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => <Reveal key={member.name} delay={(index % 3) * 0.07} className="h-full">
                <motion.article whileHover={reduceMotion ? {} : { y: -6 }} transition={{ duration: 0.25 }} className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-zinc-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-zinc-900/5">
                  <div className="relative h-[310px] overflow-hidden bg-zinc-100 sm:h-[340px]">
                    <img src={member.image} alt={`${member.name} — ${member.role}`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                    <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-white backdrop-blur-md">{member.department}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl font-extrabold tracking-tight text-zinc-950">{member.name}</h3>
                    <p className="mt-1.5 text-xs font-bold uppercase leading-5 tracking-[.12em] text-red-600">{member.role}</p>
                    <p className="mt-4 flex-1 text-sm leading-7 text-zinc-600">{member.desc}</p>
                    <div className="mt-6 flex gap-2 border-t border-zinc-100 pt-5">
                      <SocialLink href={member.socials.facebook} label={`${member.name} Facebook`}><FaFacebookF /></SocialLink>
                      <SocialLink href={member.socials.instagram} label={`${member.name} Instagram`}><FaInstagram /></SocialLink>
                      <SocialLink href={member.socials.linkedin} label={`${member.name} LinkedIn`}><FaLinkedinIn /></SocialLink>
                    </div>
                  </div>
                </motion.article>
              </Reveal>)}
            </div>
            <p className="mt-6 text-center text-xs text-zinc-400">Social icons are enabled only where a profile URL is provided.</p>
          </div>
        </section>

        {/* CULTURE */}
        <section className="relative overflow-hidden bg-[#090a0e] py-20 text-white sm:py-28">
          <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-red-600/10 blur-[100px]" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.24em] text-red-400">Our culture</p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">Better work comes from <span className="text-red-500">working better together.</span></h2><p className="mt-5 leading-8 text-zinc-400">We believe in transparency, technical integrity, creative collaboration and continuous improvement. Every perspective can help make the final work stronger.</p></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {principles.map((item, i) => <Reveal key={item.title} delay={i * 0.08} className="rounded-2xl border border-white/10 bg-white/[.035] p-6 sm:p-8"><item.icon className="text-2xl text-red-400" /><h3 className="mt-5 text-lg font-bold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-zinc-400">{item.desc}</p></Reveal>)}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-zinc-50 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-16 lg:px-10">
            <Reveal><p className="text-xs font-bold uppercase tracking-[.24em] text-red-600">Quick answers</p><h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">A little more about <span className="text-red-600">our team.</span></h2><p className="mt-5 leading-7 text-zinc-600">Want to collaborate, discuss a project or explore a role? Here are a few useful starting points.</p><a href="mailto:contact@dbtechx.com" className="mt-6 inline-flex items-center gap-2 font-bold text-red-600 hover:gap-3">Contact Dbtechx <FaArrowRight /></a></Reveal>
            <div className="space-y-3">{faqs.map((item, i) => <div key={item.q} className={`overflow-hidden rounded-2xl border bg-white transition-colors ${activeFaq === i ? "border-red-200 shadow-sm" : "border-zinc-200"}`}><button type="button" aria-expanded={activeFaq === i} onClick={() => setActiveFaq(activeFaq === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"><span className="font-bold leading-6">{item.q}</span><FaChevronDown className={`shrink-0 text-sm text-red-600 transition-transform ${activeFaq === i ? "rotate-180" : ""}`} /></button><motion.div initial={false} animate={{ height: activeFaq === i ? "auto" : 0, opacity: activeFaq === i ? 1 : 0 }} transition={{ duration: 0.25 }} className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-7 text-zinc-600">{item.a}</p></motion.div></div>)}</div>
          </div>
        </section>

        {/* JOIN CTA */}
        <section className="relative isolate overflow-hidden bg-red-600 py-20 text-white sm:py-24">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,.16),transparent_30%),radial-gradient(circle_at_90%_90%,rgba(0,0,0,.18),transparent_30%)]" />
          <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-8"><p className="text-xs font-bold uppercase tracking-[.24em] text-red-100">The next chapter</p><h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Bring your talent. Build something meaningful.</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-red-100">Interested in working with Dbtechx? Explore our careers page and find out about opportunities to grow with the team.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="/careers" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-extrabold text-red-600 shadow-xl transition hover:-translate-y-1 hover:bg-zinc-100">View careers <FaArrowRight className="transition-transform group-hover:translate-x-1" /></a><a href="https://wa.me/919504393419" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"><FaWhatsapp /> Talk to us</a></div></Reveal>
        </section>
      </main>
      <Footer />
      <a href="https://wa.me/919504393419" target="_blank" rel="noreferrer" aria-label="Contact Dbtechx on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-xl shadow-green-950/20 transition duration-300 hover:-translate-y-1 hover:bg-green-600 sm:bottom-6 sm:right-6"><FaWhatsapp /></a>
    </div>
  );
}

export default Team;
