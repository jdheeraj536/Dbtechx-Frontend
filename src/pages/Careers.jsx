import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTimes,
  FaArrowRight,
  FaMapMarkerAlt,
  FaBriefcase,
  FaUsers,
  FaLaptopCode,
  FaBullhorn,
  FaSearch,
  FaPaintBrush,
  FaPhoneAlt,
  FaEnvelope,
  FaUpload,
  FaWhatsapp,
} from "react-icons/fa";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";

const jobs = [
  {
    title: "Digital Marketing Executive",
    location: "Purnea",
    type: "Full Time",
    icon: <FaBullhorn />,
    description: "Help plan, coordinate and improve digital campaigns and social media communication.",
    skills: ["Digital platforms", "Communication", "Campaign coordination"],
  },
  {
    title: "SEO Specialist",
    location: "Purnea",
    type: "Full Time",
    icon: <FaSearch />,
    description: "Support website optimisation, keyword research, local SEO and search visibility improvements.",
    skills: ["On-page SEO", "Keyword research", "Analytical thinking"],
  },
  {
    title: "Web Developer",
    location: "Purnea",
    type: "Full Time",
    icon: <FaLaptopCode />,
    description: "Build and maintain responsive websites and contribute to real client projects.",
    skills: ["HTML/CSS/JavaScript", "Responsive UI", "Problem-solving"],
  },
  {
    title: "Graphic Designer",
    location: "Purnea",
    type: "Full Time",
    icon: <FaPaintBrush />,
    description: "Create clear, engaging visual content for brands, social media and campaigns.",
    skills: ["Visual design", "Typography", "Creative thinking"],
  },
  {
    title: "Sales Executive",
    location: "Purnea",
    type: "Full Time",
    icon: <FaUsers />,
    description: "Connect with potential clients, understand their needs and help them explore suitable services.",
    skills: ["Communication", "Client coordination", "Follow-up"],
  },
  {
    title: "Telecaller",
    location: "Purnea",
    type: "Full Time",
    icon: <FaPhoneAlt />,
    description: "Speak with prospective customers, share service information and coordinate follow-ups.",
    skills: ["Phone communication", "Listening", "Organisation"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function Careers() {
  const [selectedJob, setSelectedJob] = useState("");
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleApply = (jobTitle) => {
    setSelectedJob(jobTitle);
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => document.getElementById("applicant-name")?.focus({ preventScroll: true }), 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const file = fileInputRef.current?.files?.[0];

    if (!file) {
      setFormStatus({ loading: false, success: false, error: true });
      return;
    }

    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    const maxSize = 5 * 1024 * 1024;
    if (!allowedTypes.includes(file.type) || file.size > maxSize) {
      setFormStatus({ loading: false, success: false, error: true });
      return;
    }

    setFormStatus({ loading: true, success: false, error: false });
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
        setSelectedJob("");
        setFileName("");
      } else {
        setFormStatus({ loading: false, success: false, error: true });
      }
    } catch {
      setFormStatus({ loading: false, success: false, error: true });
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dbtechx",
    url: "https://www.dbtechx.com/",
    email: "contact@dbtechx.com",
    telephone: "+91-9504393419",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Purnea",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#08090d] font-sans text-white">
      <Helmet>
        <title>Careers at Dbtechx | Digital Marketing & IT Jobs in Purnea, Bihar</title>
        <meta
          name="description"
          content="Explore career opportunities at Dbtechx in Purnea, Bihar. Apply for digital marketing, SEO, web development, graphic design, sales and telecalling roles."
        />
        <meta
          name="keywords"
          content="jobs in Purnea, IT jobs Purnea, digital marketing jobs Purnia, web developer jobs Bihar, graphic designer jobs Purnea, SEO jobs Bihar, Dbtechx careers"
        />
        <link rel="canonical" href="https://www.dbtechx.com/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dbtechx" />
        <meta property="og:title" content="Careers at Dbtechx | Jobs in Purnea, Bihar" />
        <meta property="og:description" content="Build your career in technology, digital marketing and creative work with Dbtechx in Purnea, Bihar." />
        <meta property="og:url" content="https://www.dbtechx.com/careers" />
        <meta name="robots" content="index,follow" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-white/10 px-4 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
          <div className="absolute inset-0 -z-20 bg-[#08090d]" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_15%,rgba(220,38,38,0.24),transparent_40%),radial-gradient(ellipse_at_88%_70%,rgba(99,102,241,0.12),transparent_35%),linear-gradient(180deg,#111218_0%,#08090d_100%)]" />
          <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.13)_1px,transparent_1px)] [background-size:44px_44px]" />
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-red-200 sm:text-xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" /> Careers at Dbtechx
              </span>
              <h1 className="mt-6 text-4xl font-black leading-[1.06] tracking-tight sm:text-6xl xl:text-7xl">
                Do meaningful work. <span className="bg-gradient-to-r from-red-400 via-rose-300 to-orange-200 bg-clip-text text-transparent">Grow with us.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-lg">
                Bring your ideas, skills and curiosity to a team working across technology, digital marketing and creative solutions in Purnea, Bihar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#open-positions" className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold shadow-lg shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500">Explore opportunities <FaArrowRight /></a>
                <a href="#application-form" className="rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-zinc-200 transition hover:border-white/30 hover:bg-white/[0.08]">Apply now</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-400 sm:text-sm">
                <span className="inline-flex items-center gap-2"><FaMapMarkerAlt className="text-red-400" /> Purnea, Bihar</span>
                <span className="inline-flex items-center gap-2"><FaBriefcase className="text-red-400" /> Listed roles</span>
                <span className="inline-flex items-center gap-2"><FaUsers className="text-red-400" /> Collaborative team</span>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.65 }} className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] bg-red-500/10 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[#111218]/90 p-6 shadow-2xl backdrop-blur sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-red-300">Your next chapter</p><h2 className="mt-2 text-xl font-black sm:text-2xl">Find your place here.</h2></div>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-red-400/20 bg-red-500/10 text-2xl text-red-300"><FaUsers /></span>
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    ["Technology", "Build and improve digital experiences", <FaLaptopCode />],
                    ["Marketing", "Help brands connect with customers", <FaBullhorn />],
                    ["Creative", "Turn ideas into strong visual stories", <FaPaintBrush />],
                  ].map(([title, copy, icon], index) => (
                    <motion.div key={title} initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + index * 0.12 }} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] p-4">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-red-300">{icon}</span>
                      <div><p className="text-sm font-bold">{title}</p><p className="mt-1 text-xs leading-5 text-zinc-500">{copy}</p></div>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-6 text-zinc-500">Interested in a listed role? Select it below to start your application.</p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Roles */}
        <section id="open-positions" className="scroll-mt-24 px-4 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">Open positions</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Find the role that fits you.</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">Explore the roles listed below and apply with your details and resume. Please confirm current availability with our team before making travel arrangements.</p>
            </motion.div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {jobs.map((job, index) => (
                <motion.article key={job.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: (index % 3) * 0.07 }} className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.065] to-white/[0.018] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-400/35 hover:shadow-xl hover:shadow-red-950/10 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-red-400/20 bg-red-500/10 text-xl text-red-300 transition group-hover:bg-red-600 group-hover:text-white">{job.icon}</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-[10px] font-bold text-zinc-400">{job.type}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{job.title}</h3>
                  <p className="mt-3 flex items-center gap-2 text-xs text-zinc-500"><FaMapMarkerAlt className="text-red-400" /> {job.location}, Bihar</p>
                  <p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.skills.map((skill) => <span key={skill} className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[10px] text-zinc-400">{skill}</span>)}
                  </div>
                  <button type="button" onClick={() => handleApply(job.title)} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-bold transition hover:bg-red-500">Apply for this role <FaArrowRight className="text-xs" /></button>
                </motion.article>
              ))}
            </div>
            <p className="mt-6 text-center text-xs leading-6 text-zinc-500">These are the roles currently listed on this page; listing a role does not guarantee that a vacancy is still open.</p>
          </div>
        </section>

        {/* Application form */}
        <section id="application-form" className="scroll-mt-20 relative isolate overflow-hidden border-y border-white/10 bg-[#0d0e13] px-4 py-16 sm:px-8 sm:py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_10%_40%,rgba(220,38,38,0.15),transparent_42%),radial-gradient(ellipse_at_90%_10%,rgba(99,102,241,0.08),transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">Application form</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Tell us about yourself.</h2>
              <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">Choose the role you’re applying for, share your contact details and attach your resume or portfolio in PDF, JPG or PNG format.</p>
              <div className="mt-7 space-y-4">
                <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-red-500/10 text-red-300"><FaMapMarkerAlt /></span><div><p className="text-sm font-bold">Location</p><p className="mt-1 text-xs text-zinc-500">Purnea, Bihar</p></div></div>
                <a href="mailto:contact@dbtechx.com" className="flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.06] text-zinc-300"><FaEnvelope /></span><span><strong className="block">Recruitment enquiries</strong><span className="mt-1 block text-xs text-zinc-500">contact@dbtechx.com</span></span></a>
                <a href="https://wa.me/919504393419" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/10 text-emerald-300"><FaWhatsapp /></span><span><strong className="block">Ask us a question</strong><span className="mt-1 block text-xs text-zinc-500">Chat on WhatsApp</span></span></a>
              </div>
            </div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55 }} className="rounded-3xl border border-white/10 bg-[#111218]/90 p-5 shadow-2xl shadow-black/30 sm:p-8 lg:p-10">
              <div className="mb-7"><h3 className="text-2xl font-black">Submit your application</h3><p className="mt-2 text-sm leading-6 text-zinc-400">Please make sure your contact details and attached file are correct.</p></div>
              <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-5">
                <input type="hidden" name="_subject" value="New Job Application - Dbtechx" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label htmlFor="applicant-name" className="mb-2 block text-xs font-semibold text-zinc-300">Full name *</label>
                  <input id="applicant-name" type="text" name="Full Name" autoComplete="name" placeholder="Enter your full name" required className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/70" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label htmlFor="applicant-email" className="mb-2 block text-xs font-semibold text-zinc-300">Email address *</label><input id="applicant-email" type="email" name="Email" autoComplete="email" placeholder="you@example.com" required className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/70" /></div>
                  <div><label htmlFor="applicant-phone" className="mb-2 block text-xs font-semibold text-zinc-300">Phone number *</label><input id="applicant-phone" type="tel" name="Phone Number" autoComplete="tel" inputMode="tel" placeholder="Your contact number" required className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/70" /></div>
                </div>
                <div>
                  <label htmlFor="position" className="mb-2 block text-xs font-semibold text-zinc-300">Position applying for *</label>
                  <select id="position" name="Position" value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)} required className="w-full rounded-xl border border-white/10 bg-[#0c0d12] px-4 py-3.5 text-sm text-white outline-none transition focus:border-red-500/70">
                    <option value="">Select a position</option>
                    {jobs.map((job) => <option key={job.title} value={job.title}>{job.title}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="resume" className="mb-2 block text-xs font-semibold text-zinc-300">Resume / portfolio file * <span className="font-normal text-zinc-500">(PDF, JPG, PNG · up to 5 MB)</span></label>
                  <input ref={fileInputRef} id="resume" type="file" name="attachment" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" required onChange={(e) => setFileName(e.target.files?.[0]?.name || "")} className="w-full rounded-xl border border-white/10 bg-black/30 p-3 text-sm text-zinc-400 file:mr-3 file:rounded-lg file:border-0 file:bg-red-600 file:px-4 file:py-2 file:text-xs file:font-bold file:text-white hover:file:bg-red-500" />
                  {fileName && <p className="mt-2 flex items-center gap-2 text-xs text-zinc-400"><FaUpload className="text-red-300" /> {fileName}</p>}
                </div>
                <div>
                  <label htmlFor="applicant-message" className="mb-2 block text-xs font-semibold text-zinc-300">About you *</label>
                  <textarea id="applicant-message" rows={5} name="Message" placeholder="Briefly share your skills, experience, portfolio link or why you're interested..." required className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/70" />
                </div>
                {formStatus.error && <p role="alert" className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-200">We couldn’t submit the application. Please check that your file is PDF, JPG or PNG and under 5 MB, then try again. If the issue continues, email contact@dbtechx.com.</p>}
                <button type="submit" disabled={formStatus.loading} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-4 text-sm font-black transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60">
                  {formStatus.loading ? "Submitting application..." : "Submit application"} {!formStatus.loading && <FaArrowRight />}
                </button>
                <p className="text-center text-[10px] leading-5 text-zinc-600">By submitting, you confirm that the information provided is accurate and may be used to contact you about this application.</p>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-4 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-3xl border border-red-400/20 bg-gradient-to-r from-red-950/70 via-[#17131a] to-[#101116] p-6 sm:flex-row sm:items-center sm:p-10">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">Let’s connect</p><h2 className="mt-3 text-2xl font-black sm:text-3xl">Have a question before applying?</h2><p className="mt-2 text-sm text-zinc-400">Contact the team and ask about the application process.</p></div>
            <a href="mailto:contact@dbtechx.com" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-black text-black transition hover:-translate-y-0.5 hover:bg-red-100"><FaEnvelope /> Email Dbtechx</a>
          </div>
        </section>
      </main>

      <Footer />

      {formStatus.success && (
        <div role="dialog" aria-modal="true" aria-labelledby="application-success-title" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <motion.div initial={{ opacity: 0, scale: 0.93, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="w-full max-w-md rounded-3xl border border-white/10 bg-[#14151b] p-8 text-center shadow-2xl">
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-3xl text-emerald-300"><FaCheckCircle /></div>
            <h3 id="application-success-title" className="text-2xl font-black">Application submitted</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">Thank you for applying to Dbtechx. Your application was submitted successfully. The team will review your details and contact you if there is a suitable next step.</p>
            <button type="button" onClick={() => setFormStatus({ loading: false, success: false, error: false })} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold transition hover:bg-red-500">Close <FaTimes /></button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Careers;
