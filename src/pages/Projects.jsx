import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../assets/components/Navbar';
import Footer from '../assets/components/Footer';

// Existing project assets — keep these files in src/assets.
import Avanatara from '../assets/avantara.png';
import Tanweer from '../assets/tanweer.png';
import Smhhospital from '../assets/smhhospital.png';
import Shivamsuri from '../assets/shivamsuri.png';
import Bharat from '../assets/bharat.jpg';
import Homeo from '../assets/homeo.png';
import Catwalk from '../assets/catwalk.png';
import Kanchajunga from '../assets/kanchanjunga.png';
import Furniture from '../assets/furniture.jpeg';
import Mannat from '../assets/mannat.png';
import Grow from '../assets/grow.png';
import Aeham from '../assets/Aeham.png';
import Career from '../assets/career.jpg';
import Smh from '../assets/smh.webp';
import Luxera from '../assets/luxera.jpeg';
import Shivam from '../assets/shivam.jpeg';
import Kanchanjungawebsite from '../assets/kanchanjungawebsite.webp';
import Manjushree from '../assets/manjushree.webp';

const projects = [
  { id: 1, title: 'Avantara Global Pvt. Ltd.', category: 'web', type: 'Website Development', description: 'A corporate web experience for a direct-selling business, designed to present its products, business opportunity and brand clearly.', image: Avanatara, services: ['Dynamic Website', 'Corporate UI', 'E-commerce'], liveUrl: 'https://www.avantaraglobal.com/', status: 'Live Website' },
  { id: 2, title: 'SMH Hospital Purnea', category: 'web', type: 'Healthcare Website', description: 'A responsive healthcare website that helps visitors explore hospital services and find essential information with ease.', image: Smhhospital, services: ['Website Development', 'Healthcare UI', 'Responsive Design'], liveUrl: 'https://smhhospital.com/', status: 'Live Website' },
  { id: 3, title: 'Shivam Suri Architect', category: 'web', type: 'Portfolio Website', description: 'A visual portfolio experience for architectural work, with a clean presentation of designs and project work.', image: Shivamsuri, services: ['Portfolio Website', 'UI Design', 'Responsive Design'], liveUrl: 'https://beige-lion-509201.hostingersite.com/', status: 'Live Preview' },
  { id: 4, title: 'Kanchanjunga Foundation', category: 'web', type: 'Foundation Website', description: 'A digital presence for an education-focused foundation, built to introduce its work and make information easier to discover.', image: Kanchanjungawebsite, services: ['Dynamic Website', 'UI Design', 'Responsive Design'], liveUrl: 'https://kanchanjungafoundation.com/', status: 'Live Website' },
  { id: 5, title: 'Dr. Tanweer Razzaque', category: 'web', type: 'Doctor Website', description: 'A professional online profile for a healthcare provider, focused on credibility, clear information and patient-friendly navigation.', image: Tanweer, services: ['Doctor Website', 'Healthcare Branding', 'UI Design'], liveUrl: 'https://drtanweerrazzaque.com/', status: 'Live Website' },
  { id: 6, title: 'Mannat Automation', category: 'marketing', type: 'Digital Marketing', description: 'Digital promotion and brand positioning designed to improve online visibility and help the business connect with its audience.', image: Mannat, services: ['Social Media', 'Lead Generation', 'Brand Strategy'], liveUrl: '#', status: 'Campaign Work' },
  { id: 7, title: 'Grow Elevator', category: 'marketing', type: 'Digital Marketing', description: 'Promotional content and digital campaigns to improve brand awareness and support local business growth.', image: Grow, services: ['Digital Marketing', 'Social Media', 'Paid Campaigns'], liveUrl: '#', status: 'Campaign Work' },
  { id: 8, title: 'Bharat Enterprises', category: 'marketing', type: 'Brand Promotion', description: 'Promotional creatives and audience-engagement support to present the brand consistently across digital channels.', image: Bharat, services: ['Brand Promotion', 'Ad Creatives', 'Campaigns'], liveUrl: '#', status: 'Client Project' },
  { id: 9, title: 'Cat Walk Salon', category: 'marketing', type: 'Social Media Marketing', description: 'Social media management and visual content created to showcase salon services and reach nearby customers.', image: Catwalk, services: ['Social Media', 'Creative Design', 'Local Reach'], liveUrl: '#', status: 'Campaign Work' },
  { id: 10, title: 'Aeham Hospital', category: 'marketing', type: 'Healthcare Marketing', description: 'Healthcare-focused digital communication and promotional content to strengthen the hospital’s online presence.', image: Aeham, services: ['Healthcare Marketing', 'Ad Creatives', 'Branding'], liveUrl: '#', status: 'Client Project' },
  { id: 11, title: 'Advanced Homeo Care', category: 'marketing', type: 'Healthcare Marketing', description: 'Digital outreach and clinic promotion designed to make service information easier to find online.', image: Homeo, services: ['Digital Outreach', 'Social Media', 'SEO Support'], liveUrl: '#', status: 'Client Project' },
  { id: 12, title: 'Furniture Home', category: 'marketing', type: 'Retail Marketing', description: 'Product-led promotional content and social campaigns to showcase furniture and encourage customer enquiries.', image: Furniture, services: ['Product Promotion', 'Creative Design', 'Paid Campaigns'], liveUrl: '#', status: 'Campaign Work' },
  { id: 13, title: 'Career Craft', category: 'marketing', type: 'Education Marketing', description: 'Education-focused promotions and campaign content to communicate opportunities and generate student enquiries.', image: Career, services: ['Education Marketing', 'Lead Generation', 'Campaigns'], liveUrl: '#', status: 'Campaign Work' },
  { id: 14, title: 'Kanchanjunga Foundation for Higher Education', category: 'marketing', type: 'Foundation Marketing', description: 'Promotional campaigns and digital communication for an education-focused foundation and its initiatives.', image: Kanchajunga, services: ['Social Impact', 'Promotional Design', 'Campaigns'], liveUrl: '#', status: 'Campaign Work' },
  { id: 15, title: 'SMH Hospital (Hope Hospital)', category: 'marketing', type: 'Healthcare Marketing', description: 'Digital promotional content for a 24×7 emergency hospital in Purnea, supporting awareness of its healthcare services.', image: Smh, services: ['Healthcare Content', 'Social Media', 'Campaigns'], liveUrl: '#', status: 'Client Project' },
  { id: 16, title: 'Luxera Tiles', category: 'marketing', type: 'Retail Marketing', description: 'Digital promotion for tiles and sanitaryware, helping present products and offers through visual content.', image: Luxera, services: ['Product Promotion', 'Creative Design', 'Social Media'], liveUrl: '#', status: 'Client Project' },
  { id: 17, title: 'Shivam Suri Architect', category: 'marketing', type: 'Brand Marketing', description: 'Brand and social content support for an architectural consultancy based in Purnea.', image: Shivam, services: ['Brand Presence', 'Social Media', 'Creative Design'], liveUrl: '#', status: 'Client Project' },
  { id: 18, title: 'Universal Hospital & Research Centre', category: 'marketing', type: 'Healthcare Marketing', description: 'Digital communication for a healthcare and nursing-training institution in the Purnia area.', image: Manjushree, services: ['Healthcare Content', 'Social Media', 'Campaigns'], liveUrl: '#', status: 'Client Project' },
];

const adVideos = [
  ['Client Promotional Ad #1', 'bVw1mqrKXE0'],
  ['Client Promotional Ad #2', 'cruB9xu5QN0'],
  ['Client Promotional Ad #3', 'OCKxnZ_pxbI'],
  ['Client Promotional Ad #4', '4Xwsn3wTQyI'],
  ['Client Promotional Ad #5', 'UDN4G1mktTQ'],
  ['Client Promotional Ad #6', 'FkGAL_JQCIM'],
  ['Client Promotional Ad #7', '5GqLt0WPdKQ'],
  ['Client Promotional Ad #8', 'neEuYetytp4'],
  ['Client Promotional Ad #9', 'breMGposOxU'],
  ['Client Promotional Ad #10', 'YPP6KCHalZU'],
  ['Client Promotional Ad #11', '0jQw35KoaN4'],
  ['Client Promotional Ad #12', 'uVzas-lI-Js'],
  ['Client Promotional Ad #13', '6XFNHHg_IQ0'],
  ['Client Promotional Ad #14', '3OyuIbwiKvg'],
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'marketing', label: 'Digital Marketing' },
];

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = activeTab === 'all' || project.category === activeTab;
      const matchesSearch = !term || `${project.title} ${project.description} ${project.type} ${project.services.join(' ')}`.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchTerm]);

  const webCount = projects.filter((project) => project.category === 'web').length;
  const marketingCount = projects.filter((project) => project.category === 'marketing').length;

  return (
    <div className="min-h-screen overflow-hidden bg-[#08090d] font-sans text-white">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden border-b border-white/10 px-4 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_15%,rgba(220,38,38,0.22),transparent_42%),radial-gradient(ellipse_at_85%_65%,rgba(99,102,241,0.13),transparent_35%),linear-gradient(180deg,#101116_0%,#08090d_100%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:46px_46px]" />
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="mx-auto max-w-6xl"
          >
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-red-300 sm:text-xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
                Selected work · Real client projects
              </span>
              <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
                Ideas into <span className="bg-gradient-to-r from-red-400 via-rose-300 to-orange-200 bg-clip-text text-transparent">digital impact.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-lg">
                Explore how Dbtechx helps businesses build a stronger online presence through website development, creative content and digital marketing.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href="#portfolio" className="rounded-xl bg-red-600 px-6 py-3 text-sm font-bold shadow-lg shadow-red-950/40 transition hover:-translate-y-0.5 hover:bg-red-500">
                  Explore projects <span aria-hidden="true">↘</span>
                </a>
                <a href="#work-process" className="rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-white/30 hover:bg-white/[0.08]">
                  What we do
                </a>
              </div>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-3 sm:mt-16 sm:gap-5">
              {[
                { value: `${projects.length}+`, label: 'Project entries' },
                { value: `${webCount}`, label: 'Website projects' },
                { value: `${adVideos.length}`, label: 'Video creatives' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.12, duration: 0.55 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-center backdrop-blur-sm sm:p-6"
                >
                  <div className="text-2xl font-black tracking-tight text-white sm:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-[10px] font-medium text-zinc-400 sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* What we do */}
        <section id="work-process" className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
          <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">How we help</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">One team. <span className="text-zinc-500">Multiple ways to grow.</span></h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">A quick overview of the kind of work represented in this portfolio.</p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { n: '01', icon: '✳', title: 'Website Development', copy: 'Business websites, doctor and hospital websites, portfolio pages and responsive digital experiences.', tags: 'Business sites · Healthcare · Portfolios' },
              { n: '02', icon: '◉', title: 'Digital Marketing', copy: 'Social media content, campaign creatives, paid promotions and local brand visibility support.', tags: 'Social media · Ads · Local reach' },
              { n: '03', icon: '↗', title: 'Creative & Brand Content', copy: 'Promotional visuals and short-form video creatives made to communicate offers, services and brand stories.', tags: 'Design · Reels · Promotions' },
            ].map((service, index) => (
              <motion.div key={service.n} variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-red-400/40 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-red-400/20 bg-red-500/10 text-xl text-red-300">{service.icon}</span>
                  <span className="text-xs font-bold tracking-widest text-zinc-600">{service.n}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold sm:text-xl">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{service.copy}</p>
                <p className="mt-4 border-t border-white/10 pt-4 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 sm:text-xs">{service.tags}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="border-y border-white/[0.07] bg-white/[0.018] px-4 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">The portfolio</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Work that speaks for itself.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">Browse the projects currently featured on our website. This is a selected showcase, not the complete list of every project.</p>
              </div>
              <div className="text-sm text-zinc-500"><span className="font-bold text-white">{filteredProjects.length}</span> projects shown</div>
            </motion.div>

            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
                {filters.map((filter) => {
                  const selected = activeTab === filter.id;
                  const count = filter.id === 'all' ? projects.length : filter.id === 'web' ? webCount : marketingCount;
                  return (
                    <button key={filter.id} type="button" role="tab" aria-selected={selected} onClick={() => setActiveTab(filter.id)} className={`rounded-xl border px-4 py-2.5 text-xs font-bold transition sm:text-sm ${selected ? 'border-red-500 bg-red-600 text-white shadow-lg shadow-red-950/40' : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-white'}`}>
                      {filter.label} <span className={selected ? 'ml-1 text-red-100' : 'ml-1 text-zinc-600'}>{count}</span>
                    </button>
                  );
                })}
              </div>
              <label className="relative block w-full lg:max-w-xs">
                <span className="sr-only">Search projects</span>
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">⌕</span>
                <input value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search projects or services..." className="w-full rounded-xl border border-white/10 bg-[#111218] py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/70" />
              </label>
            </div>

            {filteredProjects.length > 0 ? (
              <motion.div layout className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <motion.article
                    layout
                    key={project.id}
                    variants={rise}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
                    className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111218] shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1.5 hover:border-red-400/35 hover:shadow-red-950/20"
                  >
                    <div className="relative flex h-48 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-white/[0.06] to-black/30 p-5 sm:h-56">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.09),transparent_65%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                      <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="relative z-10 h-full w-full object-contain transition duration-700 group-hover:scale-[1.04]" />
                      <span className="absolute left-3 top-3 z-20 rounded-full border border-white/10 bg-black/65 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-zinc-200 backdrop-blur-md">{project.category === 'web' ? 'Website' : 'Marketing'}</span>
                      <span className="absolute bottom-3 right-3 z-20 rounded-full border border-white/10 bg-black/65 px-3 py-1 text-[9px] font-semibold text-zinc-300 backdrop-blur-md">{project.status}</span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-red-400">{project.type}</p>
                      <h3 className="mt-2 text-lg font-bold leading-snug text-white transition group-hover:text-red-300">{project.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400">{project.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.services.map((service) => <span key={service} className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[10px] font-medium text-zinc-400">{service}</span>)}
                      </div>
                      <div className="mt-5 border-t border-white/[0.08] pt-4">
                        {project.liveUrl !== '#' ? (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-red-300">
                            Visit live project <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500"><span className="h-1.5 w-1.5 rounded-full bg-zinc-600" /> Campaign / creative showcase</span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <div className="mt-8 rounded-2xl border border-dashed border-white/15 px-6 py-14 text-center">
                <p className="text-lg font-bold">No matching projects found</p>
                <p className="mt-2 text-sm text-zinc-500">Try another search term or choose a different category.</p>
                <button type="button" onClick={() => { setSearchTerm(''); setActiveTab('all'); }} className="mt-5 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold transition hover:bg-red-500">Reset filters</button>
              </div>
            )}
          </div>
        </section>

        {/* Video creatives */}
        <section id="video-showcase" className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
          <motion.div variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }} className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">Creative showcase</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Short-form ads. <span className="text-zinc-500">Made to get noticed.</span></h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">A selection of client promotional videos and ad creatives. Play any video to watch it here.</p>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {adVideos.map(([title, videoId], index) => (
              <motion.article key={videoId} variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: (index % 4) * 0.06 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111218] p-3 transition duration-300 hover:-translate-y-1 hover:border-red-400/35">
                <div className="overflow-hidden rounded-xl bg-black">
                  <iframe src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={title} loading="lazy" className="aspect-[9/16] w-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
                <div className="flex items-center justify-between gap-3 px-1 pb-1 pt-4">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-white transition group-hover:text-red-300">{title}</h3>
                    <p className="mt-1 text-xs text-zinc-500">Dbtechx digital partner</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-red-400/20 bg-red-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-red-300">Reel</span>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Simple project journey */}
        <section className="px-4 pb-16 sm:px-8 sm:pb-24">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-950/55 via-[#15151d] to-[#0e0f14] p-7 sm:p-12">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">Have a project in mind?</p>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Let’s build your next <span className="text-red-300">success story.</span></h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300">Tell us what you want to achieve. We’ll help you choose the right mix of website, design and digital marketing support for your business.</p>
                <a href="https://www.dbtechx.com/" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-red-100">Talk to Dbtechx <span aria-hidden="true">↗</span></a>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  ['01', 'Understand', 'Your goals, audience and business needs'],
                  ['02', 'Create', 'A tailored website or marketing plan'],
                  ['03', 'Improve', 'Build, launch and refine your digital presence'],
                ].map(([number, title, copy]) => (
                  <div key={number} className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-500/15 text-sm font-black text-red-300">{number}</span>
                    <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-xs leading-5 text-zinc-400">{copy}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
