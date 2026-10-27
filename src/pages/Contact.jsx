import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaCheckCircle,
  FaTimes,
  FaArrowRight,
  FaRegPaperPlane,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";

const contactDetails = [
  {
    title: "Call our team",
    value: "+91 95043 93419",
    detail: "Let’s talk about your goals",
    href: "tel:+919504393419",
    icon: FaPhoneAlt,
    accent: "from-red-500 to-rose-600",
  },
  {
    title: "Email us",
    value: "contact@dbtechx.com",
    detail: "We’ll get back to you soon",
    href: "mailto:contact@dbtechx.com",
    icon: FaEnvelope,
    accent: "from-orange-500 to-red-500",
  },
  {
    title: "Visit our office",
    value: "Rps Plaza Near Hope Hospital Chowk",
    detail: "Purnea, Bihar, India",
    href: "https://www.google.com/maps/search/?api=1&query=Dbtechx%2C%20Purnea%2C%20Bihar",
    icon: FaMapMarkerAlt,
    accent: "from-rose-500 to-pink-600",
  },
  {
    title: "Business hours",
    value: "Mon – Sat",
    detail: "9:00 AM – 7:00 PM",
    href: null,
    icon: FaClock,
    accent: "from-zinc-700 to-zinc-900",
  },
];

const services = [
  "Website Development",
  "Digital Marketing",
  "SEO Optimization",
  "App Development",
  "Graphic Design",
  "Social Media Marketing",
  "Google Ads & Lead Generation",
  "Business Branding / Other",
];

function Contact() {
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ loading: true, success: false, error: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@dbtechx.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result && result.success !== "false" && result.success !== false) {
        form.reset();
        setFormStatus({ loading: false, success: true, error: "" });
      } else {
        setFormStatus({
          loading: false,
          success: false,
          error: "We couldn’t send your message right now. Please try again or contact us on WhatsApp/email.",
        });
      }
    } catch {
      setFormStatus({
        loading: false,
        success: false,
        error: "Connection issue. Please check your internet or contact us directly on WhatsApp/email.",
      });
    }
  };

  const closeSuccess = () => setFormStatus((current) => ({ ...current, success: false }));

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900">
      <Helmet>
        <title>Contact Dbtechx | Digital Marketing & Software Company in Purnea</title>
        <meta
          name="description"
          content="Contact Dbtechx in Purnea, Bihar for website and app development, digital marketing, SEO, branding and business growth solutions. Tell us about your project."
        />
        <meta
          name="keywords"
          content="Contact Dbtechx, digital marketing company Purnea, website development Bihar, SEO services Seemanchal, software company Purnia"
        />
        <meta property="og:title" content="Contact Dbtechx | Let's Build Something Great" />
        <meta
          property="og:description"
          content="Have a project in mind? Talk to Dbtechx about digital marketing, websites, apps and branding."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.dbtechx.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dbtechx",
            url: "https://www.dbtechx.com",
            email: "contact@dbtechx.com",
            telephone: "+91 95043 93419",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rps Plaza Near Hope Hospital Chowk",
              addressLocality: "Purnea",
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className="flex-grow overflow-hidden">
        {/* Premium hero */}
        <section className="relative isolate bg-zinc-950 text-white">
          <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute -top-36 left-[8%] h-96 w-96 rounded-full bg-red-600/25 blur-3xl" />
            <div className="absolute -right-20 bottom-[-8rem] h-[28rem] w-[28rem] rounded-full bg-orange-500/15 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:52px_52px]" />
          </div>
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[1.15fr_.85fr] lg:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-200 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,.9)]" />
                Let’s connect
              </div>
              <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Big ideas start with a <span className="bg-gradient-to-r from-red-400 via-rose-300 to-orange-300 bg-clip-text text-transparent">conversation.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
                Tell us what you’re building. From a high-performing website to a complete digital growth strategy, the Dbtechx team is ready to help you move forward.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-6 py-4 font-bold text-white shadow-lg shadow-red-950/40 transition duration-300 hover:-translate-y-1 hover:bg-red-500"
                >
                  Tell us about your project <FaArrowRight />
                </a>
                <a
                  href="https://wa.me/919504393419?text=Hello%20Dbtechx%2C%20I%20would%20like%20to%20discuss%20my%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.05] px-6 py-4 font-bold text-white transition duration-300 hover:border-green-400/50 hover:bg-white/10"
                >
                  <FaWhatsapp className="text-xl text-green-400" /> Chat on WhatsApp
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-400">
                <span className="inline-flex items-center gap-2"><FaCheckCircle className="text-red-400" /> Practical recommendations</span>
                <span className="inline-flex items-center gap-2"><FaCheckCircle className="text-red-400" /> Clear next steps</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-red-500/25 to-orange-400/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 shadow-2xl backdrop-blur-xl sm:p-9">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-300">Your next move</p>
                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Let’s make it happen.</h2>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-2xl shadow-lg shadow-red-950/40">
                    <FaRegPaperPlane />
                  </div>
                </div>
                <p className="mt-4 leading-7 text-zinc-300">A little about your business and your goals is all we need to get the conversation started.</p>
                <div className="my-7 h-px bg-gradient-to-r from-red-400/60 via-white/15 to-transparent" />
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-red-300"><FaGlobe /></span>
                    <div><p className="font-semibold">Digital solutions, tailored to you</p><p className="mt-1 text-sm leading-6 text-zinc-400">Websites, marketing, SEO, apps and branding.</p></div>
                  </div>
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-red-300"><FaShieldAlt /></span>
                    <div><p className="font-semibold">A straightforward process</p><p className="mt-1 text-sm leading-6 text-zinc-400">Share your requirements and we’ll discuss the right approach.</p></div>
                  </div>
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Serving businesses across</p>
                  <p className="mt-2 font-semibold text-zinc-100">Purnea · Araria · Katihar · Kishanganj</p>
                  <p className="mt-1 text-sm text-zinc-400">Seemanchal, Bihar and beyond</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact information cards */}
        <section className="relative z-10 -mt-1 bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mb-9 max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-600">Reach out directly</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">We’re easy to reach.</h2>
              <p className="mt-3 leading-7 text-zinc-600">Choose the contact option that works best for you.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} text-lg text-white shadow-lg transition duration-300 group-hover:scale-105`}><Icon /></div>
                    <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 break-words text-sm font-bold text-zinc-900">{item.value}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-500">{item.detail}</p>
                  </>
                );
                const cardClass = "group h-full rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-zinc-900/[0.06] sm:p-7";
                return item.href ? (
                  <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className={cardClass}>{content}</a>
                ) : <div key={item.title} className={cardClass}>{content}</div>;
              })}
            </div>
          </div>
        </section>

        {/* Form and map */}
        <section id="contact-form" className="scroll-mt-24 bg-zinc-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid items-start gap-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
              <div className="rounded-[1.75rem] border border-zinc-200/80 bg-white p-6 shadow-xl shadow-zinc-900/[0.04] sm:p-9 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-red-700"><span className="h-1.5 w-1.5 rounded-full bg-red-600" /> Project enquiry</div>
                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Tell us what you need.</h2>
                <p className="mt-3 leading-7 text-zinc-600">Share a few details below and our team can understand your requirements before getting in touch.</p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <input type="hidden" name="_subject" value="New Website Contact Message - Dbtechx" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-zinc-800">Full name <span className="text-red-600">*</span></label>
                      <input id="contact-name" type="text" name="Full Name" placeholder="Your name" autoComplete="name" required maxLength={100} className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-zinc-800">Phone number <span className="text-red-600">*</span></label>
                      <input id="contact-phone" type="tel" name="Phone Number" placeholder="Your phone number" autoComplete="tel" required maxLength={20} className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-zinc-800">Email address <span className="text-red-600">*</span></label>
                    <input id="contact-email" type="email" name="Email Address" placeholder="you@company.com" autoComplete="email" required maxLength={150} className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-zinc-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" />
                  </div>
                  <div>
                    <label htmlFor="contact-service" className="mb-2 block text-sm font-semibold text-zinc-800">What can we help with? <span className="text-red-600">*</span></label>
                    <select id="contact-service" name="Selected Service" required defaultValue="" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm text-zinc-700 outline-none transition focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10">
                      <option value="" disabled>Select a service</option>
                      {services.map((service) => <option key={service} value={service}>{service}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-zinc-800">Project details <span className="text-red-600">*</span></label>
                    <textarea id="contact-message" name="Message Requirements" rows={5} required minLength={10} maxLength={3000} placeholder="Tell us a little about your business, goals, timeline or budget..." className="w-full resize-y rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-zinc-400 focus:border-red-500 focus:bg-white focus:ring-4 focus:ring-red-500/10" />
                  </div>
                  {formStatus.error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700">{formStatus.error}</p>}
                  <button type="submit" disabled={formStatus.loading} className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-zinc-950 px-6 py-4 font-bold text-white shadow-lg shadow-zinc-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-600/20 disabled:cursor-not-allowed disabled:opacity-60">
                    {formStatus.loading ? "Sending your message…" : "Send project enquiry"}
                    {!formStatus.loading && <FaArrowRight className="transition-transform group-hover:translate-x-1" />}
                  </button>
                  <p className="text-center text-xs leading-5 text-zinc-500">By submitting this form, you agree that Dbtechx may contact you about your enquiry.</p>
                </form>
              </div>

              <div className="space-y-6 lg:sticky lg:top-24">
                <div className="overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-xl shadow-zinc-900/[0.04]">
                  <div className="flex items-start justify-between gap-4 p-6 sm:p-7">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">Find us</p>
                      <h3 className="mt-2 text-2xl font-black">Come say hello.</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">Rps Plaza Near Hope Hospital Chowk, Purnea, Bihar</p>
                    </div>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-xl text-red-600"><FaMapMarkerAlt /></span>
                  </div>
                  <div className="h-72 bg-zinc-200 sm:h-80">
                    <iframe
                      title="Dbtechx office location in Purnea, Bihar"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.1142503168479!2d87.49204256959092!3d25.788493106122687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eff9bb4dee49e1%3A0xadb750fef6a8026e!2sDbtechx!5e0!3m2!1sen!2sin!4v1784276153232!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <a href="https://www.google.com/maps/search/?api=1&query=Dbtechx%2C%20Purnea%2C%20Bihar" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 p-5 text-sm font-bold text-zinc-900 transition hover:text-red-600 sm:px-7">
                    Open directions in Google Maps <FaArrowRight />
                  </a>
                </div>
                <div className="rounded-[1.5rem] bg-gradient-to-br from-red-600 via-red-600 to-rose-700 p-6 text-white shadow-xl shadow-red-900/15 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl"><FaWhatsapp /></div>
                    <div>
                      <h3 className="text-xl font-black">Need a quick answer?</h3>
                      <p className="mt-2 text-sm leading-6 text-red-100">Message our team directly on WhatsApp to start the conversation.</p>
                      <a href="https://wa.me/919504393419?text=Hello%20Dbtechx%2C%20I%20have%20a%20project%20enquiry." target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-red-700 transition hover:bg-red-50">Chat with Dbtechx <FaArrowRight /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative isolate overflow-hidden bg-zinc-950 py-16 text-white sm:py-20">
          <div className="absolute -right-20 -top-36 -z-10 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />
          <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-red-300">Your growth starts here</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Have a vision? Let’s build it together.</h2>
            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">Let’s turn your next idea into a practical digital solution for your business.</p>
            <a href="https://wa.me/919504393419?text=Hello%20Dbtechx%2C%20I%20would%20like%20a%20free%20consultation." target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-xl bg-red-600 px-7 py-4 font-bold text-white shadow-lg shadow-red-950/40 transition hover:-translate-y-1 hover:bg-red-500"><FaWhatsapp className="text-xl" /> Get a free consultation <FaArrowRight /></a>
          </div>
        </section>
      </main>

      <Footer />

      {formStatus.success && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/75 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="contact-success-title">
          <div className="relative w-full max-w-md rounded-[1.75rem] border border-white/10 bg-zinc-950 p-8 text-center text-white shadow-2xl sm:p-10">
            <button type="button" onClick={closeSuccess} aria-label="Close confirmation" className="absolute right-4 top-4 rounded-lg p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"><FaTimes /></button>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-3xl text-green-400"><FaCheckCircle /></div>
            <h3 id="contact-success-title" className="mt-6 text-2xl font-black">Message sent successfully!</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300">Thanks for reaching out to Dbtechx. Your enquiry has been submitted. Our team will review your message and get in touch.</p>
            <button type="button" onClick={closeSuccess} className="mt-7 w-full rounded-xl bg-red-600 px-5 py-3.5 font-bold text-white transition hover:bg-red-500">Back to website</button>
          </div>
        </div>
      )}

      <a
        href="https://wa.me/919504393419?text=Hello%20Dbtechx%2C%20I%20have%20a%20question."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Dbtechx on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-xl shadow-green-950/25 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-green-600 sm:bottom-7 sm:right-7"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default Contact;
