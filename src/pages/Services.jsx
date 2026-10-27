import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaSearch,
  FaPaintBrush,
  FaRobot,
  FaUsers,
  FaHandshake,
  FaCheckCircle,
  FaTimes,
  FaArrowRight,
  FaCode,
  FaChartLine,
  FaPalette,
  FaStore,
  FaHospital,
  FaGraduationCap,
  FaBuilding,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaWhatsapp,
} from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    icon: <FaLaptopCode />,
    short: "Fast, responsive websites that make your business look credible and help turn visitors into enquiries.",
    details: ["Business & corporate websites", "Landing pages and portfolio websites", "Responsive UI and performance improvements", "Website maintenance and updates"],
    outcome: "A professional online home for your business",
    group: "Development",
  },
  {
    title: "E-Commerce Development",
    icon: <FaStore />,
    short: "Online stores built to showcase products, simplify shopping and support your sales journey.",
    details: ["Product and category pages", "Mobile-friendly shopping experience", "Enquiry and checkout journey planning", "Store setup and ongoing improvements"],
    outcome: "A smoother way for customers to discover your products",
    group: "Development",
  },
  {
    title: "App Development",
    icon: <FaMobileAlt />,
    short: "Mobile application planning and development for services, customer experiences and business workflows.",
    details: ["Android and iOS app planning", "User flows and interface design", "Business feature and workflow planning", "Testing and launch support"],
    outcome: "Digital experiences designed around your users",
    group: "Development",
  },
  {
    title: "Software Development",
    icon: <FaCode />,
    short: "Custom software concepts and web-based tools tailored to your organisation's specific workflow.",
    details: ["Requirement analysis", "Custom dashboards and portals", "Workflow and data management tools", "Integration and improvement planning"],
    outcome: "Technology that fits the way your team works",
    group: "Development",
  },
  {
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    short: "A practical digital strategy to improve visibility, communicate your offer and reach relevant audiences.",
    details: ["Campaign planning", "Audience and channel strategy", "Creative and content coordination", "Performance review and optimisation"],
    outcome: "A more consistent and measurable digital presence",
    group: "Growth",
  },
  {
    title: "SEO Optimization",
    icon: <FaSearch />,
    short: "Improve how your website communicates relevance to search engines and potential customers.",
    details: ["On-page SEO improvements", "Keyword and page structure planning", "Technical and content recommendations", "Local SEO and Google Business Profile support"],
    outcome: "A stronger foundation for organic search visibility",
    group: "Growth",
  },
  {
    title: "Social Media Marketing",
    icon: <FaChartLine />,
    short: "Consistent social content and campaigns for Facebook, Instagram, YouTube and other relevant platforms.",
    details: ["Content calendar planning", "Post and reel creative direction", "Page management support", "Paid campaign coordination"],
    outcome: "Clearer communication and stronger audience engagement",
    group: "Growth",
  },
  {
    title: "Graphic Design",
    icon: <FaPaintBrush />,
    short: "On-brand visual communication for promotions, social media, advertising and business materials.",
    details: ["Social media creatives", "Promotional and offer designs", "Campaign and event graphics", "Brand-consistent layouts"],
    outcome: "Visuals that make your message easier to notice",
    group: "Creative",
  },
  {
    title: "Business Branding",
    icon: <FaHandshake />,
    short: "Build a recognisable identity and a consistent way to present your business across channels.",
    details: ["Brand identity direction", "Visual consistency planning", "Business profile and presentation assets", "Brand messaging support"],
    outcome: "A more consistent and memorable business identity",
    group: "Creative",
  },
  {
    title: "AI & Workflow Automation",
    icon: <FaRobot />,
    short: "Explore practical automation opportunities that reduce repetitive work and streamline everyday processes.",
    details: ["Workflow discovery", "Automation opportunity mapping", "AI-assisted process planning", "Implementation guidance based on requirements"],
    outcome: "Less repetitive work and clearer workflows where suitable",
    group: "Technology",
  },
  {
    title: "Political Campaign Solutions",
    icon: <FaUsers />,
    short: "Digital communication, campaign creatives and online outreach support for political teams and public initiatives.",
    details: ["Campaign content planning", "Social media creatives and video concepts", "Digital outreach coordination", "Campaign communication support"],
    outcome: "More organised digital communication for your campaign",
    group: "Specialised",
  },
  {
    title: "PR & Media Communication",
    icon: <FaBullhorn />,
    short: "Support your public-facing communication with clear messaging, coordinated content and brand consistency.",
    details: ["Communication planning", "Announcement and event content", "Brand story development", "Digital media coordination"],
    outcome: "A clearer, more consistent public-facing message",
    group: "Specialised",
  },
];

const process = [
  { step: "01", title: "Discovery", copy: "We understand your business, audience, goals, budget and current challenges." },
  { step: "02", title: "Strategy", copy: "We recommend the right service mix, priorities, deliverables and project timeline." },
  { step: "03", title: "Create & Build", copy: "Our team works on the website, creatives, campaign setup or solution agreed for your project." },
  { step: "04", title: "Launch & Improve", copy: "We help prepare for launch and identify practical next steps based on your goals and feedback." },
];

const industries = [
  { icon: <FaHospital />, title: "Healthcare", copy: "Hospitals, clinics, doctors and healthcare organisations." },
  { icon: <FaGraduationCap />, title: "Education", copy: "Schools, coaching institutes, training and education brands." },
  { icon: <FaStore />, title: "Retail & Local Business", copy: "Shops, showrooms, product businesses and service providers." },
  { icon: <FaBuilding />, title: "Professional Services", copy: "Consultants, architects, agencies and growing companies." },
];

const faqs = [
  {
    q: "Which areas does Dbtechx serve?",
    a: "Dbtechx is based around the Purnea (Purnia), Bihar market and supports businesses across the Seemanchal region, including Purnea, Araria, Katihar and Kishanganj. Project requirements and remote collaboration can be discussed for other locations too.",
  },
  {
    q: "Which service is right for my business?",
    a: "It depends on your goal. A new business may need a website and branding first; a business seeking more enquiries may explore local SEO, social media or paid campaigns. We can discuss your objectives before recommending a suitable combination.",
  },
  {
    q: "Can I request more than one service?",
    a: "Yes. Website development, branding, SEO, social media and digital advertising can be planned together when they support the same business goal. The scope is agreed with you before work begins.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the scope, deliverables, complexity and timeline. Share your requirements through the quote form and the team can discuss a suitable proposal.",
  },
  {
    q: "Can you guarantee first position on Google?",
    a: "No ethical SEO provider can guarantee a permanent first position. Search visibility depends on competition, website quality, relevance, location and many other factors. Dbtechx focuses on improving the foundations and following a practical optimisation process.",
  },
  {
    q: "How do I get started?",
    a: "Choose a service in the enquiry form, describe your goals and share your contact details. You can also start a conversation on WhatsApp to discuss the project.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Services() {
  const [selectedService, setSelectedService] = useState("");
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });
  const [openFaq, setOpenFaq] = useState(0);
  const [activeGroup, setActiveGroup] = useState("All Services");

  const groups = ["All Services", "Development", "Growth", "Creative", "Technology", "Specialised"];
  const visibleServices = useMemo(
    () => activeGroup === "All Services" ? services : services.filter((service) => service.group === activeGroup),
    [activeGroup]
  );

  const handleLearnMore = (serviceTitle) => {
    setSelectedService(serviceTitle);
    document.getElementById("quote-form-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@dbtechx.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setFormStatus({ loading: false, success: true, error: false });
        formElement.reset();
        setSelectedService("");
      } else {
        setFormStatus({ loading: false, success: false, error: true });
      }
    } catch {
      setFormStatus({ loading: false, success: false, error: true });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.dbtechx.com/#organization",
        name: "Dbtechx",
        url: "https://www.dbtechx.com/",
        email: "contact@dbtechx.com",
        telephone: "+91-9504393419",
        areaServed: [
          { "@type": "City", name: "Purnea" },
          { "@type": "AdministrativeArea", name: "Seemanchal, Bihar" },
          { "@type": "AdministrativeArea", name: "Bihar, India" },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.dbtechx.com/services#webpage",
        url: "https://www.dbtechx.com/services",
        name: "Web Development, Digital Marketing & SEO Services in Purnea and Seemanchal | Dbtechx",
        description: "Explore website development, app development, SEO, digital marketing, graphic design, branding and software services from Dbtechx for businesses in Purnea and Seemanchal, Bihar.",
        about: { "@id": "https://www.dbtechx.com/#organization" },
        inLanguage: "en-IN",
      },
      {
        "@type": "ItemList",
        name: "Dbtechx Services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          description: service.short,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#08090d] font-sans text-white">
      <Helmet>
        <title>Digital Marketing, Website Development & SEO in Purnea | Dbtechx</title>
        <meta
          name="description"
          content="Dbtechx offers website development, app development, SEO, digital marketing, social media management, graphic design and branding services for businesses in Purnea and Seemanchal, Bihar."
        />
        <meta
          name="keywords"
          content="digital marketing company in Purnea, web development company Purnia, SEO services Purnea, website development Seemanchal, digital marketing Seemanchal, app development Bihar, social media marketing Purnia, graphic design Purnea, Dbtechx"
        />
        <link rel="canonical" href="https://www.dbtechx.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dbtechx" />
        <meta property="og:title" content="Digital Marketing & Technology Services in Purnea | Dbtechx" />
        <meta property="og:description" content="Websites, SEO, digital marketing, branding and technology services for businesses across Purnea and Seemanchal." />
        <meta property="og:url" content="https://www.dbtechx.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dbtechx Services | Purnea & Seemanchal" />
        <meta name="twitter:description" content="Explore website development, SEO, digital marketing and creative services from Dbtechx." />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-white/10 px-4 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40">
          <div className="absolute inset-0 -z-20 bg-[#08090d]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_14%_20%,rgba(220,38,38,0.24),transparent_38%),radial-gradient(ellipse_at_86%_55%,rgba(99,102,241,0.13),transparent_34%),linear-gradient(180deg,#111218_0%,#08090d_100%)]" />
          <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:44px_44px]" />
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-red-200 sm:text-xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
                Technology · Creativity · Growth
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.06] tracking-tight sm:text-6xl xl:text-7xl">
                Digital services built for <span className="bg-gradient-to-r from-red-400 via-rose-300 to-orange-200 bg-clip-text text-transparent">real business growth.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-lg">
                Dbtechx brings website development, SEO, digital marketing, creative design and technology solutions together—helping businesses in Purnea and across Seemanchal strengthen their digital presence.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#services-list" className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold shadow-lg shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500">
                  Explore our services <FaArrowRight />
                </a>
                <a href="#quote-form-section" className="rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-zinc-200 transition hover:border-white/30 hover:bg-white/[0.08]">
                  Get a project quote
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-400 sm:text-sm">
                <span className="inline-flex items-center gap-2"><FaCheckCircle className="text-red-400" /> Strategy-led solutions</span>
                <span className="inline-flex items-center gap-2"><FaCheckCircle className="text-red-400" /> Built around your goals</span>
                <span className="inline-flex items-center gap-2"><FaCheckCircle className="text-red-400" /> Local market understanding</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18, duration: 0.7 }} className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-[2rem] bg-red-500/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111218]/95 p-5 shadow-2xl shadow-black/40 backdrop-blur sm:p-7">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-red-500/15 text-xl text-red-300"><FaChartLine /></div>
                    <div><p className="text-sm font-bold">Your digital growth stack</p><p className="mt-1 text-xs text-zinc-500">One connected strategy</p></div>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300">GOAL-FOCUSED</span>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    { icon: <FaLaptopCode />, title: "Build your digital foundation", detail: "Website · App · Software", width: "w-[92%]" },
                    { icon: <FaSearch />, title: "Get discovered online", detail: "SEO · Local visibility", width: "w-[78%]" },
                    { icon: <FaBullhorn />, title: "Reach the right audience", detail: "Marketing · Social media", width: "w-[86%]" },
                    { icon: <FaPalette />, title: "Make your brand memorable", detail: "Design · Brand identity", width: "w-[70%]" },
                  ].map((item, index) => (
                    <motion.div key={item.title} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + index * 0.12 }} className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-3.5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-red-300">{item.icon}</span>
                        <div className="min-w-0 flex-1"><p className="text-sm font-bold">{item.title}</p><p className="mt-1 text-xs text-zinc-500">{item.detail}</p></div>
                        <FaArrowRight className="text-xs text-zinc-600" />
                      </div>
                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]"><motion.div initial={{ width: 0 }} animate={{ width: item.width.replace("w-[", "").replace("]", "") }} transition={{ delay: 0.8 + index * 0.13, duration: 0.7 }} className={`h-full rounded-full bg-gradient-to-r from-red-600 to-rose-300 ${item.width}`} /></div>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-5 text-center text-[10px] leading-5 text-zinc-500">The right mix depends on your business goals, audience and project scope.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Local relevance */}
        <section className="border-b border-white/[0.07] bg-white/[0.02] px-4 py-6 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-red-400/20 bg-red-500/10 text-red-300"><FaMapMarkerAlt /></span>
              <div><p className="text-sm font-bold">Serving Purnea and the Seemanchal region</p><p className="mt-1 text-xs text-zinc-500">Purnea · Araria · Katihar · Kishanganj · Bihar</p></div>
            </div>
            <a href="#quote-form-section" className="text-xs font-bold text-red-300 transition hover:text-white">Discuss your local business goals <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        {/* Services list */}
        <section id="services-list" className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">Our capabilities</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Everything you need to <span className="text-zinc-500">move forward.</span></h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">Choose a service to see what it covers. We can also combine services into a plan based on your business needs.</p>
            </motion.div>

            <div className="mt-9 flex flex-wrap justify-center gap-2">
              {groups.map((group) => (
                <button key={group} type="button" onClick={() => setActiveGroup(group)} className={`rounded-full border px-4 py-2 text-xs font-bold transition sm:text-sm ${activeGroup === group ? "border-red-500 bg-red-600 text-white shadow-lg shadow-red-950/30" : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-white"}`}>
                  {group}
                </button>
              ))}
            </div>

            <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visibleServices.map((service, index) => (
                <motion.article layout key={service.title} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.45, delay: (index % 3) * 0.06 }} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.065] to-white/[0.018] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-400/35 hover:shadow-xl hover:shadow-red-950/10 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-red-400/20 bg-red-500/10 text-xl text-red-300 transition duration-300 group-hover:scale-105 group-hover:bg-red-500 group-hover:text-white">{service.icon}</span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-zinc-500">{service.group}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">{service.short}</p>
                  <div className="mt-5 border-t border-white/[0.08] pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">What it can include</p>
                    <ul className="mt-3 space-y-2.5">
                      {service.details.map((detail) => <li key={detail} className="flex gap-2.5 text-xs leading-5 text-zinc-300"><FaCheckCircle className="mt-0.5 shrink-0 text-[11px] text-red-400" />{detail}</li>)}
                    </ul>
                  </div>
                  <div className="mt-auto pt-5">
                    <div className="rounded-xl bg-black/25 p-3"><p className="text-[9px] font-bold uppercase tracking-wider text-red-300">Designed to support</p><p className="mt-1 text-xs leading-5 text-zinc-300">{service.outcome}</p></div>
                    <button type="button" onClick={() => handleLearnMore(service.title)} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold transition hover:border-red-500/50 hover:bg-red-600">
                      Enquire about this service <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Dbtechx */}
        <section className="border-y border-white/[0.07] bg-[#0d0e13] px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">Why work with us</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">A technology partner, not just a service provider.</h2>
              <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">Good digital work starts with understanding the business. We focus on clear communication, sensible priorities and solutions connected to the result you want to achieve.</p>
              <a href="#quote-form-section" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-red-300 transition hover:text-white">Tell us what you need <FaArrowRight /></a>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Business-first thinking", "Start with your objective, customers and constraints—not a one-size-fits-all package."],
                ["Connected capabilities", "Bring web, design, marketing and SEO into one coordinated project where useful."],
                ["Local market context", "Work with a team familiar with the business landscape around Purnea and Seemanchal."],
                ["Clear project scope", "Discuss deliverables, responsibilities and next steps before work gets underway."],
              ].map(([title, copy], index) => (
                <motion.div key={title} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.07 }} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-500/10 text-sm font-black text-red-300">0{index + 1}</span>
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">Who we support</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Digital solutions for different kinds of businesses.</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">Every sector has a different audience and customer journey. The right plan starts with those differences.</p>
            </div>
            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <motion.div key={industry.title} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.06 }} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-red-400/30 hover:bg-white/[0.045]">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-red-300">{industry.icon}</span>
                  <h3 className="mt-4 font-bold">{industry.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{industry.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-white/[0.07] bg-white/[0.02] px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">How we work</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">A clear path from idea to launch.</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">The exact steps depend on your service and scope, but the process begins with understanding what success means for you.</p>
            </div>
            <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent lg:block" />
              {process.map((item, index) => (
                <motion.div key={item.step} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="relative rounded-2xl border border-white/10 bg-[#0d0e13] p-5 sm:p-6">
                  <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-red-400/25 bg-[#1b1115] text-xl font-black text-red-300 shadow-lg shadow-black/20">{item.step}</span>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">Frequently asked questions</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Questions before you start?</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400">Here are some useful details about our services, project scope and local coverage.</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm font-bold">Still have a question?</p>
                <p className="mt-2 text-sm text-zinc-400">Tell us a little about your business and what you want to improve.</p>
                <a href="#quote-form-section" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-300 hover:text-white">Ask Dbtechx <FaArrowRight /></a>
              </div>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.q} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
                  <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left">
                    <span className="text-sm font-bold leading-6 sm:text-base">{faq.q}</span>
                    <FaChevronDown className={`shrink-0 text-xs text-red-300 transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && <div className="px-5 pb-5 text-sm leading-7 text-zinc-400">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote form */}
        <section id="quote-form-section" className="scroll-mt-20 relative isolate overflow-hidden border-t border-white/10 bg-[#0c0d12] px-4 py-16 sm:px-8 sm:py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_50%,rgba(220,38,38,0.15),transparent_40%),radial-gradient(ellipse_at_90%_20%,rgba(99,102,241,0.1),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">Start a conversation</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Let’s discuss your next project.</h2>
              <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">Share your requirements and the team can follow up to discuss the scope, suitable service and next steps.</p>
              <div className="mt-7 space-y-4">
                <a href="https://wa.me/919504393419" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-300"><FaWhatsapp /></span><span><strong className="block">WhatsApp</strong><span className="mt-1 block text-xs text-zinc-500">Start a direct conversation</span></span></a>
                <a href="mailto:contact@dbtechx.com" className="flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"><span className="grid h-10 w-10 place-items-center rounded-xl bg-red-500/10 text-red-300"><FaEnvelope /></span><span><strong className="block">Email</strong><span className="mt-1 block text-xs text-zinc-500">contact@dbtechx.com</span></span></a>
                <a href="tel:+919504393419" className="flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06] text-zinc-300"><FaPhoneAlt /></span><span><strong className="block">Call us</strong><span className="mt-1 block text-xs text-zinc-500">+91 95043 93419</span></span></a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111218]/90 p-5 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
              <div className="mb-7">
                <h3 className="text-2xl font-black">Request a project quote</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">Fields marked required help us understand and respond to your enquiry.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="New Service Quote Inquiry - Dbtechx" />
                <input type="hidden" name="_captcha" value="false" />
                <div>
                  <label htmlFor="full-name" className="mb-2 block text-xs font-semibold text-zinc-300">Full name *</label>
                  <input id="full-name" type="text" name="Full Name" autoComplete="name" placeholder="Enter your name" required className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/70" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-semibold text-zinc-300">Email address *</label>
                    <input id="email" type="email" name="Email" autoComplete="email" placeholder="you@example.com" required className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/70" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs font-semibold text-zinc-300">Phone number *</label>
                    <input id="phone" type="tel" name="Phone Number" autoComplete="tel" inputMode="tel" placeholder="Your contact number" required className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/70" />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-xs font-semibold text-zinc-300">Service you need *</label>
                  <select id="service" name="Requested Service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required className="w-full rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-500/70">
                    <option value="">Select a service</option>
                    {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
                    <option value="Not sure yet">Not sure yet — help me choose</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="project-details" className="mb-2 block text-xs font-semibold text-zinc-300">Project details *</label>
                  <textarea id="project-details" rows={5} name="Project Description" placeholder="Tell us about your business, goals, budget range or timeline..." required className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/70" />
                </div>
                {formStatus.error && <p role="alert" className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">We couldn’t submit your enquiry. Please try again or contact us through WhatsApp/email.</p>}
                <button type="submit" disabled={formStatus.loading} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 text-sm font-black transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60">
                  {formStatus.loading ? "Sending your enquiry..." : "Send project enquiry"} {!formStatus.loading && <FaArrowRight />}
                </button>
                <p className="text-center text-[10px] leading-5 text-zinc-600">Your details are used to respond to this project enquiry.</p>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl border border-red-400/20 bg-gradient-to-r from-red-950/70 via-[#17131a] to-[#101116] p-6 sm:flex-row sm:items-center sm:p-10">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">Dbtechx · Purnea, Bihar</p><h2 className="mt-3 text-2xl font-black sm:text-3xl">Ready to build a stronger digital presence?</h2><p className="mt-2 text-sm text-zinc-400">Let’s find the right next step for your business.</p></div>
            <a href="https://wa.me/919504393419" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-red-100"><FaWhatsapp className="text-lg" /> Chat on WhatsApp</a>
          </div>
        </section>
      </main>

      <Footer />

      {formStatus.success && (
        <div role="dialog" aria-modal="true" aria-labelledby="success-title" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <motion.div initial={{ opacity: 0, scale: 0.92, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="w-full max-w-md rounded-3xl border border-white/10 bg-[#14151b] p-8 text-center shadow-2xl">
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-3xl text-emerald-300"><FaCheckCircle /></div>
            <h3 id="success-title" className="text-2xl font-black">Enquiry submitted</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">Thank you for contacting Dbtechx. Your enquiry has been submitted successfully.</p>
            <button type="button" onClick={() => setFormStatus({ loading: false, success: false, error: false })} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold transition hover:bg-red-500">Close <FaTimes /></button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Services;
