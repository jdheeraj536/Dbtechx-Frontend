import Navbar from '../assets/components/Navbar';
import Footer from '../assets/components/Footer';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FaLaptopCode, FaBullhorn, FaMobileAlt, FaSearch, FaPaintBrush, FaRobot,
  FaUsers, FaHandshake, FaCheckCircle, FaTimes, FaArrowRight, FaPlay,
  FaCode, FaBolt, FaShieldAlt, FaLayerGroup, FaStar
} from 'react-icons/fa';

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, className = '', delay = 0, y = 32 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -60px 0px' }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  useEffect(() => {
    if (!isInView) return undefined;
    let current = 0;
    const duration = 1700;
    const startTime = performance.now();
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      current = Math.floor(target * eased);
      setCount(progress === 1 ? target : current);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, isInView]);
  return (
    <div ref={ref} className="stat-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-7 text-center backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-red-500/40 hover:bg-white/[0.075]">
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-500/80 to-transparent" />
      <h3 className="text-4xl font-black tracking-tight text-white md:text-5xl">{count}<span className="text-red-500">+</span></h3>
      <p className="mt-3 text-sm font-medium tracking-wide text-zinc-400">{label}</p>
    </div>
  );
}

function SectionHeading({ eyebrow, title, accent, description, light = false }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] ${light ? 'border-white/15 bg-white/5 text-zinc-300' : 'border-red-100 bg-red-50 text-red-600'}`}><span className="h-1.5 w-1.5 rounded-full bg-red-500" />{eyebrow}</div>}
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl md:text-5xl ${light ? 'text-white' : 'text-zinc-950'}`}>{title} <span className="text-red-600">{accent}</span></h2>
      {description && <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 md:text-lg ${light ? 'text-zinc-400' : 'text-zinc-500'}`}>{description}</p>}
      <div className="mx-auto mt-6 flex w-24 items-center gap-1.5"><span className="h-1 flex-1 rounded-full bg-red-600"/><span className="h-1 w-5 rounded-full bg-red-300"/><span className={`h-1 w-2 rounded-full ${light ? 'bg-white/30' : 'bg-zinc-200'}`}/></div>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });
  const reduceMotion = useReducedMotion();

  const services = [
    { title: 'Web Development', icon: <FaLaptopCode />, desc: 'Modern websites built using React & Next.js.' },
    { title: 'App Development', icon: <FaMobileAlt />, desc: 'Android & iOS mobile applications.' },
    { title: 'Digital Marketing', icon: <FaBullhorn />, desc: 'Business growth through online marketing.' },
    { title: 'SEO Optimization', icon: <FaSearch />, desc: 'Rank your business on Google.' },
    { title: 'Graphic Design', icon: <FaPaintBrush />, desc: 'Creative branding & design solutions.' },
    { title: 'AI Automation', icon: <FaRobot />, desc: 'Smart AI tools & automation systems.' },
    { title: 'Political Campaign', icon: <FaUsers />, desc: 'Election campaign management.' },
    { title: 'Business Branding', icon: <FaHandshake />, desc: 'Build a powerful business identity.' },
    { title: 'PR Management', icon: <FaBullhorn />, desc: 'Media & public relations services.' },
    { title: 'Software Development', icon: <FaLaptopCode />, desc: 'Custom business software solutions.' },
    { title: 'Social Media Marketing', icon: <FaBullhorn />, desc: 'Facebook, Instagram & YouTube growth.' },
    { title: 'E-Commerce Development', icon: <FaLaptopCode />, desc: 'Online store & marketplace solutions.' },
  ];

  const testimonials = [
    { name: 'Milesh Yadav', company: 'Aeham Hospital', review: 'Dbtechx transformed our online presence and generated quality leads.' },
    { name: 'Sumit Kumar', company: 'Kanchanjunga Foundation Purnea', review: 'Professional team with excellent support and timely delivery.' },
    { name: 'Md. Murshid Alam', company: 'Mla Jokihat', review: 'Outstanding campaign management and branding solutions.' },
    { name: 'Amit Gupta', company: 'Vidyasagar Int. School Purnea', review: 'Outstanding campaign management and branding solutions.' },
    { name: 'Nitish Jaiswal', company: 'Career Craft Bhagalpur', review: 'Outstanding campaign management and branding solutions.' },
    { name: 'Sarfaraz Khan', company: 'Mannat Automation', review: 'Outstanding campaign management and branding solutions.' },
  ];

  const clients = [
    'SEEMANCHAL24', 'MAXTRON EV', 'KANCHANJUNGA', 'CAREER CRAFT',
    'AEHAM HOSPITAL', 'MIMANSA HOSPITAL', 'B2 CAREER SOLUTION',
    'MANNAT AUTOMATION', 'GROW ELEVATOR', 'ADVANCE HOMEO CARE',
    'LUXERA TILES', 'CAT WALK SALON', 'FURNITURE HOME',
    'SMH HOSPITAL', 'BHARAT ENTERPRISES', 'MURSHID ALAM (MLA JOKIHAT)'
  ];

  const advantages = [
    { title: 'Fast Delivery', desc: 'We deliver projects on time without compromising architectural quality.', icon: <FaBolt /> },
    { title: 'Affordable Pricing', desc: 'Premium quality development assets engineered at modular prices.', icon: <FaLayerGroup /> },
    { title: 'Experienced Team', desc: 'Professional full-stack developers, growth marketers, and identity architects.', icon: <FaUsers /> },
    { title: '24/7 Production Support', desc: 'Dedicated cloud framework maintenance and structural support lines.', icon: <FaShieldAlt /> },
    { title: 'Business Growth Focus', desc: 'We scale business data parameters to drive functional sales and leads.', icon: <FaBullhorn /> },
    { title: 'Latest Framework Stack', desc: 'Modern microservices using fast, optimized, and secure modern systems.', icon: <FaCode /> },
  ];

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });
    const formData = new FormData(e.target);
    try {
      const response = await fetch('https://formsubmit.co/ajax/contact@dbtechx.com', { method: 'POST', body: formData });
      if (response.ok) {
        setFormStatus({ loading: false, success: true, error: false });
        setOpen(false);
        e.target.reset();
        setSelectedService('');
      } else setFormStatus({ loading: false, success: false, error: true });
    } catch (err) {
      setFormStatus({ loading: false, success: false, error: true });
    }
  };

  const openEnquiry = (service = '') => {
    setSelectedService(service);
    setFormStatus((old) => ({ ...old, error: false }));
    setOpen(true);
  };
  const scrollToServices = () => document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="overflow-hidden bg-white font-sans text-zinc-900 antialiased selection:bg-red-600 selection:text-white">
      <Helmet>
        <title>Dbtechx | Best Digital Marketing & Web Development Agency in Purnia, Bihar</title>
        <meta name="description" content="Dbtechx offers professional Website Development, Digital Marketing, SEO, and Branding services in Purnia, Bihar." />
        <meta property="og:site_name" content="Dbtechx" />
        <meta property="og:title" content="Dbtechx | Best Digital Marketing & Web Development Agency" />
        <link rel="canonical" href="https://dbtechx.com/" />
        <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebSite', name: 'Dbtechx', alternateName: 'Dbtechx', url: 'https://dbtechx.com' })}</script>
      </Helmet>
      <Navbar />

      {/* HERO */}
      <section className="hero-grid relative isolate flex min-h-[92vh] items-center overflow-hidden bg-[#070709] pb-20 pt-28 text-white md:min-h-screen md:pt-20">
        <div className="absolute inset-0 -z-20 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=80')" }} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#070709]/85 via-[#070709]/90 to-[#070709]" />
        <div className="hero-grid-lines pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <motion.div className="pointer-events-none absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-red-600/25 blur-[120px] md:h-[30rem] md:w-[30rem]" animate={reduceMotion ? {} : { x: [0, 45, 0], y: [0, -25, 0], scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[130px]" animate={reduceMotion ? {} : { x: [0, -30, 0], y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-10">
          <div className="relative z-10 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-wide text-zinc-200 shadow-lg shadow-black/20 backdrop-blur-xl">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-70"/><span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"/></span>
              Next-Gen Digital Architecture
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease }} className="text-4xl font-black leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl xl:text-[5.2rem]">
              Grow Your Business With <span className="hero-gradient-text mt-2 block">Dbtechx<span className="text-red-500">.</span></span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.22, ease }} className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg md:leading-8 lg:mx-0">
              Website Development, App Development, Digital Marketing, Branding, SEO & AI Solutions.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.34, ease }} className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <button onClick={() => openEnquiry()} className="group inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-red-600/25 transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-red-500/30">Get Started <FaArrowRight className="transition-transform group-hover:translate-x-1" /></button>
              <button onClick={scrollToServices} className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/[0.04] px-7 py-4 text-sm font-bold text-white backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"><FaPlay className="text-xs text-red-400" /> View Services</button>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-medium tracking-wide text-zinc-400 lg:justify-start">
              <span className="flex items-center gap-2"><FaCheckCircle className="text-red-500"/> Strategy-led execution</span><span className="flex items-center gap-2"><FaCheckCircle className="text-red-500"/> Modern technology</span><span className="flex items-center gap-2"><FaCheckCircle className="text-red-500"/> Growth focused</span>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.92, x: 24 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.2, ease }} className="relative mx-auto hidden w-full max-w-[510px] lg:block">
            <motion.div animate={reduceMotion ? {} : { y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative rounded-[2rem] border border-white/15 bg-white/[0.055] p-4 shadow-2xl shadow-black/50 backdrop-blur-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#101014] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-500"/><span className="h-2.5 w-2.5 rounded-full bg-yellow-500"/><span className="h-2.5 w-2.5 rounded-full bg-green-500"/></div><span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">DBX / Digital Systems</span></div>
                <div className="mt-6 flex items-start justify-between gap-4"><div><p className="text-xs text-zinc-500">Your digital ecosystem</p><h3 className="mt-2 text-2xl font-bold text-white">Built for what’s next.</h3><p className="mt-2 max-w-[230px] text-xs leading-5 text-zinc-400">Creative thinking meets purposeful technology.</p></div><div className="grid h-14 w-14 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10 text-2xl text-red-400"><FaCode/></div></div>
                <div className="mt-7 grid grid-cols-2 gap-3"><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><FaLaptopCode className="text-xl text-red-400"/><p className="mt-3 text-sm font-bold text-white">Digital Products</p><p className="mt-1 text-[11px] text-zinc-500">Web · App · Software</p></div><div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"><FaBullhorn className="text-xl text-red-400"/><p className="mt-3 text-sm font-bold text-white">Digital Growth</p><p className="mt-1 text-[11px] text-zinc-500">Marketing · SEO · Brand</p></div></div>
                <div className="mt-3 flex items-center gap-3 rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-500/10 to-transparent p-4"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-500 text-white"><FaRobot/></div><div><p className="text-sm font-semibold text-white">Intelligent solutions</p><p className="mt-1 text-[11px] text-zinc-400">Designed to move your business forward</p></div><span className="ml-auto text-red-400"><FaArrowRight/></span></div>
              </div>
              <div className="pointer-events-none absolute -right-7 top-20 rounded-2xl border border-white/15 bg-zinc-900/90 px-4 py-3 shadow-xl backdrop-blur-xl"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-red-500/15 text-red-400"><FaStar/></span><div><p className="text-xs font-bold text-white">Innovation first</p><p className="mt-1 text-[10px] text-zinc-400">Every detail, engineered</p></div></div></div>
              <div className="pointer-events-none absolute -bottom-5 -left-7 rounded-2xl border border-white/15 bg-zinc-900/90 px-4 py-3 shadow-xl backdrop-blur-xl"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-500/15 text-emerald-400"><FaCheckCircle/></span><div><p className="text-xs font-bold text-white">Ready to scale</p><p className="mt-1 text-[10px] text-zinc-400">Strategy · Build · Grow</p></div></div></div>
            </motion.div>
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full border border-red-500/10"/><div className="pointer-events-none absolute -inset-14 -z-10 rounded-full border border-white/5"/>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        <motion.div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500 md:flex" animate={reduceMotion ? {} : { y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }}><span>Scroll to explore</span><span className="h-8 w-px bg-gradient-to-b from-red-500 to-transparent"/></motion.div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-red-50 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal className="relative" y={40}>
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-red-600/20 via-red-100 to-zinc-100 blur-xl transition duration-700" />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-zinc-200/80 bg-zinc-100 p-2 shadow-2xl shadow-zinc-900/10"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Team Workshop" className="h-[330px] w-full rounded-[1.3rem] object-cover sm:h-[430px]"/><div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-black/55 p-5 text-white backdrop-blur-xl"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-300">Technology with purpose</p><p className="mt-1 text-lg font-bold sm:text-xl">Ideas engineered into impact.</p></div></div>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-red-600"><span className="h-px w-7 bg-red-600"/> Who we are</div>
            <h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">About <span className="text-red-600">Dbtechx</span></h2>
            <p className="mt-6 text-lg font-medium leading-8 text-zinc-600">Dbtechx is a leading technology and digital marketing company dedicated to helping businesses establish a strong online presence and achieve sustainable growth.</p>
            <p className="mt-4 leading-7 text-zinc-500">We specialize in Website Development, Mobile App Development, Digital Marketing, SEO, Graphic Design, Branding, Political Campaign Management, PR Management, Software Development, AI Automation and Business Consulting.</p>
            <p className="mt-4 leading-7 text-zinc-500">Our mission is to provide innovative, scalable and result-driven solutions that help startups and businesses grow faster.</p>
            <div className="mt-8 grid grid-cols-2 gap-3"><div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-50 text-red-600"><FaCode/></span><div><p className="text-sm font-bold">Smart technology</p><p className="mt-1 text-xs text-zinc-500">Built for real needs</p></div></div><div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-50 text-red-600"><FaBolt/></span><div><p className="text-sm font-bold">Growth driven</p><p className="mt-1 text-xs text-zinc-500">Focused on outcomes</p></div></div></div>
          </Reveal>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="relative overflow-hidden bg-[#08080a] py-20 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.15),transparent_55%)]"/><div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)', backgroundSize: '48px 48px' }}/>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10"><Reveal><SectionHeading eyebrow="Progress in motion" title="Our Strategy By The" accent="Numbers" description="Building momentum through meaningful digital work." light/></Reveal><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Counter target={252} label="Projects Completed"/><Counter target={215} label="Happy Clients"/><Counter target={13} label="Team Members"/><Counter target={7} label="Years Experience"/></div></div>
      </section>

      {/* SERVICES */}
      <section id="services-section" className="relative scroll-mt-20 overflow-hidden bg-[#f7f7f8] py-20 md:py-28">
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-red-100/70 blur-3xl"/><div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-zinc-200/70 blur-3xl"/>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10"><Reveal><SectionHeading eyebrow="What we do" title="Our" accent="Services" description="We deliver end-to-end engineering and deployment solutions optimized for market scalability."/></Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{services.map((service, i) => (
            <motion.button type="button" key={service.title} onClick={() => openEnquiry(service.title)} initial={reduceMotion ? false : { opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, delay: (i % 4) * 0.07, ease }} whileHover={reduceMotion ? {} : { y: -8 }} className="service-card group relative flex min-h-[245px] flex-col items-start overflow-hidden rounded-2xl border border-zinc-200/80 bg-white p-6 text-left shadow-sm transition duration-300 hover:border-red-200 hover:shadow-xl hover:shadow-red-950/5 sm:p-7">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-red-50 transition duration-500 group-hover:scale-[2.2] group-hover:bg-red-50/80"/><div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-red-100 bg-red-50 text-xl text-red-600 transition duration-300 group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">{service.icon}</div>
              <h3 className="relative mt-6 text-lg font-extrabold tracking-tight text-zinc-900 transition group-hover:text-red-600">{service.title}</h3><p className="relative mt-3 flex-1 text-sm leading-6 text-zinc-500">{service.desc}</p>
              <span className="relative mt-6 flex w-full items-center justify-between border-t border-zinc-100 pt-4 text-xs font-bold text-red-600">Enquiry Now <span className="grid h-7 w-7 place-items-center rounded-full bg-red-50 transition duration-300 group-hover:translate-x-1 group-hover:bg-red-600 group-hover:text-white"><FaArrowRight size={11}/></span></span>
            </motion.button>
          ))}</div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-red-100/60 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><SectionHeading eyebrow="From idea to impact" title="A smarter way to" accent="build and grow" description="A clear, collaborative process keeps your project moving from the first conversation to launch and beyond." /></Reveal>
          <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-red-200 via-red-500/50 to-red-200 lg:block" />
            {[
              { n: '01', title: 'Discover', desc: 'We understand your business, audience, goals and current challenges.', icon: <FaSearch /> },
              { n: '02', title: 'Plan & Design', desc: 'We shape the strategy, user journey, visual direction and project roadmap.', icon: <FaPaintBrush /> },
              { n: '03', title: 'Build & Launch', desc: 'Our team develops, tests and prepares your digital solution for launch.', icon: <FaCode /> },
              { n: '04', title: 'Improve & Grow', desc: 'We help you measure performance, refine the experience and keep improving.', icon: <FaBolt /> },
            ].map((step, i) => <Reveal key={step.n} delay={i * 0.08} className="h-full"><article className="group relative h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl hover:shadow-red-950/5 sm:p-7"><div className="relative z-10 mb-7 flex items-center justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl border border-red-100 bg-red-50 text-xl text-red-600 transition duration-300 group-hover:bg-red-600 group-hover:text-white">{step.icon}</span><span className="text-3xl font-black tracking-tight text-zinc-100 transition group-hover:text-red-100">{step.n}</span></div><h3 className="text-xl font-extrabold text-zinc-900">{step.title}</h3><p className="mt-3 text-sm leading-7 text-zinc-500">{step.desc}</p><div className="mt-6 h-1 w-10 rounded-full bg-red-500 transition-all duration-500 group-hover:w-20" /></article></Reveal>)}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative overflow-hidden bg-[#08080a] py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(220,38,38,0.16),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal><SectionHeading eyebrow="Solutions for real businesses" title="Technology for every" accent="ambition" description="From local businesses building their first digital presence to established teams ready to scale, we shape solutions around the way you work." light /></Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Healthcare & Hospitals', desc: 'Build trust online with professional websites, patient-focused content and local visibility.', icon: <FaShieldAlt />, tags: 'Websites · Local SEO · Social Media' },
              { title: 'Education & Coaching', desc: 'Reach students and parents with clear communication, campaign landing pages and lead generation.', icon: <FaLaptopCode />, tags: 'Admissions · Landing Pages · Ads' },
              { title: 'Retail & E-commerce', desc: 'Showcase products, strengthen your brand and make it easier for customers to discover and enquire.', icon: <FaLayerGroup />, tags: 'Online Stores · Branding · Campaigns' },
              { title: 'Professional Services', desc: 'Present your expertise with a polished digital identity and a friction-free enquiry journey.', icon: <FaHandshake />, tags: 'Business Websites · SEO · Content' },
              { title: 'Public & Political Campaigns', desc: 'Coordinate digital communication, creative content and campaign visibility across platforms.', icon: <FaUsers />, tags: 'Campaign Strategy · Creatives · PR' },
              { title: 'Startups & Growing Teams', desc: 'Turn an idea into a useful digital product with a clear roadmap and room to scale.', icon: <FaRobot />, tags: 'MVP · Apps · Automation' },
            ].map((item, i) => <motion.article key={item.title} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease }} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-500 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.06] sm:p-7"><div className="mb-6 flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-xl border border-red-500/20 bg-red-500/10 text-xl text-red-400 transition group-hover:bg-red-600 group-hover:text-white">{item.icon}</span><FaArrowRight className="text-sm text-zinc-600 transition group-hover:translate-x-1 group-hover:text-red-400" /></div><h3 className="text-xl font-extrabold">{item.title}</h3><p className="mt-3 min-h-[72px] text-sm leading-7 text-zinc-400">{item.desc}</p><p className="mt-5 border-t border-white/10 pt-4 text-[10px] font-bold uppercase leading-5 tracking-[0.13em] text-red-300">{item.tags}</p></motion.article>)}
          </div>
        </div>
      </section>

      {/* DIGITAL ECOSYSTEM */}
      <section className="overflow-hidden bg-[#f7f7f8] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
          <Reveal><div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-red-600"><span className="h-px w-7 bg-red-600"/> One connected ecosystem</div><h2 className="text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">More than a website. <span className="text-red-600">A digital system.</span></h2><p className="mt-6 text-base leading-8 text-zinc-600">Your website, brand, content and marketing should work together. DBTechX brings creative and technical execution under one roof so your digital presence feels consistent at every touchpoint.</p><button onClick={() => openEnquiry()} className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-zinc-950 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-red-600">Discuss your project <FaArrowRight className="transition-transform group-hover:translate-x-1"/></button></Reveal>
          <Reveal delay={0.12} className="relative"><div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-red-200/70 to-zinc-200/60 blur-xl"/><div className="relative rounded-[1.7rem] border border-zinc-200 bg-white p-5 shadow-2xl shadow-zinc-900/10 sm:p-7"><div className="flex items-center justify-between border-b border-zinc-100 pb-5"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">Connected workflow</p><h3 className="mt-1 text-lg font-extrabold text-zinc-900">Your digital growth stack</h3></div><span className="grid h-11 w-11 place-items-center rounded-xl bg-zinc-950 text-lg text-white"><FaLayerGroup/></span></div><div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">{[{icon:<FaLaptopCode/>,name:'Build',desc:'Websites & apps'},{icon:<FaPaintBrush/>,name:'Brand',desc:'Design & identity'},{icon:<FaBullhorn/>,name:'Reach',desc:'Campaigns & content'},{icon:<FaSearch/>,name:'Discover',desc:'SEO & visibility'},{icon:<FaRobot/>,name:'Automate',desc:'Smarter workflows'},{icon:<FaBolt/>,name:'Improve',desc:'Measure & refine'}].map((x,i)=><motion.div key={x.name} initial={reduceMotion?false:{opacity:0,scale:.94}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.07,duration:.4}} className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 transition hover:border-red-200 hover:bg-red-50/50"><span className="text-lg text-red-600">{x.icon}</span><p className="mt-3 text-sm font-extrabold text-zinc-900">{x.name}</p><p className="mt-1 text-[11px] leading-5 text-zinc-500">{x.desc}</p></motion.div>)}</div><div className="mt-4 flex items-center gap-3 rounded-xl bg-zinc-950 p-4 text-white"><span className="grid h-9 w-9 place-items-center rounded-lg bg-red-600"><FaCheckCircle/></span><div><p className="text-sm font-bold">One team. Connected execution.</p><p className="mt-1 text-xs text-zinc-400">Strategy, creative and technology aligned.</p></div></div></div></Reveal>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="overflow-hidden border-y border-zinc-100 bg-white py-16 md:py-20">
        <Reveal><SectionHeading eyebrow="Built on collaboration" title="Our Enterprise" accent="Partners"/></Reveal>
        <div className="relative overflow-hidden border-y border-zinc-100 bg-zinc-50/80 py-5"><div className="marquee-track flex w-max items-center gap-4 px-2">{[...clients, ...clients].map((client, index) => <div key={`${client}-${index}`} className="flex min-h-[62px] items-center gap-3 rounded-xl border border-zinc-200/80 bg-white px-6 py-4 text-xs font-extrabold tracking-[0.12em] text-zinc-600 shadow-sm transition hover:border-red-200 hover:text-red-600 sm:text-sm"><span className="h-2 w-2 rounded-full bg-red-500"/>{client}</div>)}</div></div>
      </section>

      {/* TESTIMONIALS */}
      <section className="overflow-hidden bg-[#fafafa] py-20 md:py-28">
        <Reveal><SectionHeading eyebrow="Trusted relationships" title="Client" accent="Endorsements" description="Long-term partnerships begin with listening, collaboration, and reliable delivery."/></Reveal>
        <div className="relative overflow-hidden"><div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-[#fafafa] to-transparent sm:w-28"/><div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-[#fafafa] to-transparent sm:w-28"/>
          <motion.div className="flex w-max gap-5 px-3" animate={reduceMotion ? {} : { x: ['0%', '-50%'] }} transition={{ duration: 42, ease: 'linear', repeat: Infinity }}>{[...testimonials, ...testimonials].map((item, index) => <article key={`${item.name}-${index}`} className="flex w-[290px] flex-col justify-between rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm sm:w-[350px]"><div><div className="mb-5 flex items-center justify-between"><span className="text-lg tracking-[0.18em] text-amber-400">★★★★★</span><span className="text-3xl font-serif text-red-100">“</span></div><p className="text-sm leading-7 text-zinc-600">“{item.review}”</p></div><div className="mt-7 flex items-center gap-3 border-t border-zinc-100 pt-5"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-red-600 to-red-400 text-sm font-black text-white">{item.name.split(' ').map(n => n[0]).slice(0, 2).join('')}</div><div className="min-w-0"><h3 className="truncate text-sm font-extrabold text-zinc-900">{item.name}</h3><p className="mt-1 truncate text-xs font-semibold text-red-600">{item.company}</p></div></div></article>)}</motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-[#08080a] py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(220,38,38,0.14),transparent_55%)]"/><div className="relative mx-auto max-w-7xl px-6 lg:px-10"><Reveal><SectionHeading eyebrow="The Dbtechx difference" title="Why Choose" accent="Dbtechx" description="A thoughtful blend of technology, creativity, and reliable execution." light/></Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{advantages.map((item, index) => <motion.div key={item.title} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.06] sm:p-8"><div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-600/0 blur-2xl transition duration-500 group-hover:bg-red-600/20"/><div className="relative mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-red-500/20 bg-red-500/10 text-xl text-red-400 transition group-hover:border-red-500 group-hover:bg-red-600 group-hover:text-white">{item.icon}</div><h3 className="relative text-xl font-extrabold tracking-tight text-white">{item.title}</h3><p className="relative mt-3 text-sm leading-7 text-zinc-400">{item.desc}</p><div className="relative mt-6 h-px w-10 bg-red-500/70 transition-all duration-500 group-hover:w-20"/></motion.div>)}</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <Reveal><div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-red-600"><span className="h-px w-7 bg-red-600"/> Helpful answers</div><h2 className="text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl md:text-5xl">Questions before we <span className="text-red-600">get started?</span></h2><p className="mt-5 max-w-md leading-7 text-zinc-500">Every project starts with a conversation. Here are a few things clients commonly want to know.</p><button onClick={() => openEnquiry()} className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-red-600 transition hover:gap-3">Ask us directly <FaArrowRight/></button></Reveal>
          <div className="space-y-3">{[
            {q:'What services does DBTechX provide?',a:'We work across website and app development, software solutions, digital marketing, SEO, graphic design, branding, social media, PR, political campaign support and AI automation.'},
            {q:'Can you help if my business is just starting?',a:'Yes. We can help you choose a practical starting point—such as a professional website, brand identity or a focused marketing plan—based on your goals and budget.'},
            {q:'How do I get a quote for my project?',a:'Use the Get Started or enquiry button and share your contact details, the service you need and a short description of your project. We can then discuss the scope and next steps.'},
            {q:'Do you provide support after launch?',a:'Support and ongoing improvements can be discussed as part of your project scope. We aim to make the handover clear and help you understand the next steps.'},
            {q:'Can website development and digital marketing be handled together?',a:'Yes. A coordinated approach can align your website, content, search visibility and campaigns so customers get a consistent experience across channels.'},
          ].map((item,i)=><Reveal key={item.q} delay={i*.04}><details className="group rounded-2xl border border-zinc-200 bg-white p-5 transition open:border-red-200 open:bg-red-50/30 sm:p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-extrabold text-zinc-900 sm:text-base"><span>{item.q}</span><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-zinc-100 text-zinc-600 transition group-open:rotate-45 group-open:bg-red-600 group-open:text-white">+</span></summary><p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-zinc-500">{item.a}</p></details></Reveal>)}</div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="relative overflow-hidden border-y border-red-500/20 bg-[#0b090a] py-12 text-white sm:py-14"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(220,38,38,0.2),transparent_45%)]"/><div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left lg:px-10"><div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-red-300">Have a project in mind?</p><h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Let’s turn your next idea into reality.</h2><p className="mt-2 text-sm text-zinc-400">Tell us what you’re building. We’ll help you map the next step.</p></div><button onClick={() => openEnquiry()} className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-red-600 px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-red-950/30 transition hover:-translate-y-1 hover:bg-red-500">Start a Conversation <FaArrowRight/></button></div></section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-[#100708] py-20 text-center text-white md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(220,38,38,0.3),transparent_60%)]"/><div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"/>
        <Reveal><div className="mx-auto max-w-4xl px-6"><div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-red-500/30 bg-red-500/10 text-2xl text-red-400"><FaStar/></div><p className="text-xs font-bold uppercase tracking-[0.25em] text-red-300">Your next chapter starts here</p><h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">Ready To Scale <span className="hero-gradient-text">Operations?</span></h2><p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-300 md:text-lg">Let's build cross-platform digital infrastructure together.</p><button onClick={() => openEnquiry()} className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-red-600 px-8 py-4 text-sm font-extrabold text-white shadow-xl shadow-red-950/40 transition duration-300 hover:-translate-y-1 hover:bg-red-500">Start Project <FaArrowRight className="transition-transform group-hover:translate-x-1"/></button></div></Reveal>
      </section>

      {/* ENQUIRY MODAL */}
      {open && <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-md" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
        <motion.div role="dialog" aria-modal="true" aria-labelledby="enquiry-title" initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.3, ease }} className="relative my-auto w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-white p-6 shadow-2xl sm:p-8">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-orange-400"/><button aria-label="Close enquiry form" onClick={() => setOpen(false)} className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-zinc-100 text-zinc-500 transition hover:bg-red-50 hover:text-red-600"><FaTimes/></button>
          <div className="mb-7 pr-8"><div className="mb-3 inline-flex rounded-full bg-red-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-red-600">Let’s talk business</div><h2 id="enquiry-title" className="text-2xl font-black tracking-tight text-zinc-950 sm:text-3xl">Get Free Consultation</h2><p className="mt-2 text-sm leading-6 text-zinc-500">Tell us a little about your project and our team will connect with you.</p></div>
          <form onSubmit={handleEnquirySubmit} className="space-y-3.5"><input type="hidden" name="_subject" value="New Website Enquiry - DBTECHX"/><input type="text" name="Client Name" placeholder="Your Name" required autoComplete="name" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"/><input type="tel" name="Mobile Number" placeholder="Mobile Number" required autoComplete="tel" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"/><input type="email" name="Email ID" placeholder="Email Address" required autoComplete="email" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"/><select name="Target Service Requirement" required value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full appearance-none rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-700 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"><option value="">Select Service</option>{services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}</select><textarea rows="3" name="Project Architecture Brief" placeholder="Tell us about your project requirements..." className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10"/>
            {formStatus.error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">Something went wrong while sending your enquiry. Please try again.</p>}
            <button type="submit" disabled={formStatus.loading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 text-sm font-extrabold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-zinc-400">{formStatus.loading ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"/> Processing Transmission...</> : <>Submit Enquiry <FaArrowRight/></>}</button>
            <p className="text-center text-[11px] text-zinc-400">Your details are used to respond to your enquiry.</p>
          </form>
        </motion.div>
      </div>}

      {formStatus.success && <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"><motion.div initial={{ opacity: 0, scale: 0.94, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#101014] p-8 text-center shadow-2xl"><button aria-label="Close success message" onClick={() => setFormStatus((old) => ({ ...old, success: false }))} className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-zinc-400 transition hover:bg-white/10 hover:text-white"><FaTimes/></button><div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-3xl text-emerald-400"><FaCheckCircle/></div><h3 className="text-2xl font-black text-white">Enquiry Logged!</h3><p className="mt-3 text-sm leading-6 text-zinc-400">Your project parameters have been verified and transmitted successfully.</p><button onClick={() => setFormStatus((old) => ({ ...old, success: false }))} className="mt-7 w-full rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white transition hover:bg-red-500">Acknowledge</button></motion.div></div>}
      <Footer />
      <style>{`
        .hero-grid { isolation:isolate; }
        .hero-grid-lines { background-image:linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px);background-size:58px 58px;mask-image:linear-gradient(to bottom,black,transparent 92%); }
        .hero-gradient-text { background:linear-gradient(105deg,#fff 8%,#fca5a5 42%,#ef4444 70%,#f97316 100%);-webkit-background-clip:text;background-clip:text;color:transparent; }
        .marquee-track { animation: dbx-marquee 48s linear infinite; }
        .marquee-track:hover { animation-play-state:paused; }
        @keyframes dbx-marquee { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation:none; } *,*::before,*::after { scroll-behavior:auto !important; } }
      `}</style>
    </div>
  );
}
