import React, { useState } from 'react';
import Navbar from '../assets/components/Navbar';
import Footer from '../assets/components/Footer';

// Imports for available assets
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
import kanchanjungawebsite from '../assets/kanchanjungawebsite.png';
import Manjushree from '../assets/Manjushree.png';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  // ==========================================
  // 📂 ALL CLIENTS DATA (Web Development & Digital Marketing)
  // ==========================================
  const clientProjects = [
    {
      id: 1,
      title: "SMH Hospital Purnea",
      category: "web", 
      description: "Advanced dynamic healthcare portal with responsive UI, doctor consultation layout, and seamless user navigation.",
      image: Smhhospital,
      tech: ["Dynamic Web", "React/JS", "Healthcare UI", "Tailwind CSS"],
      liveUrl: "https://smhhospital.com/",
      status: "Live Website"
    },
    {
      id: 2,
      title: "Shivam Suri Architect",
      category: "web", 
      description: "High-end dynamic portfolio website showcasing architectural designs, project galleries, and client consultation features.",
      image: Shivamsuri,
      tech: ["Dynamic Web", "React/JS", "UI Design", "Tailwind CSS"],
      liveUrl: "https://beige-lion-509201.hostingersite.com/",
      status: "Live Preview"
    },

    {
      id: 3,
      title: "Kanchanjunga Foundation ",
      category: "web", 
      description: "High-end dynamic portfolio website showcasing architectural designs, project galleries, and client consultation features.",
      image: kanchanjungawebsite,
      tech: ["Dynamic Web", "React/JS", "UI Design", "Tailwind CSS"],
      liveUrl: "https://kanchanjungafoundation.com/",
      status: "Live Preview"
    },
    
    {
      id: 4,
      title: "Mannat Automation",
      category: "marketing",
      description: "Strategic digital marketing campaigns, lead generation funnels, and social media brand positioning.",
      image: Mannat,
      tech: ["Meta Ads", "Lead Generation", "Brand Strategy"],
      liveUrl: "#",
      status: "Active Campaign"
    },
    {
      id: 5,
      title: "Grow Elevator",
      category: "marketing",
      description: "Targeted digital promotions, local business optimization, and high-converting ad copies.",
      image: Grow,
      tech: ["Digital Marketing", "Social Media", "PPC"],
      liveUrl: "#",
      status: "Active Campaign"
    },
    {
      id: 6,
      title: "Bharat Enterprises",
      category: "marketing",
      description: "Comprehensive marketing solutions, promotional creatives, and audience engagement scaling.",
      image: Bharat,
      tech: ["Brand Promotions", "Ad Campaign", "Growth"],
      liveUrl: "#",
      status: "Client Partner"
    },
    {
      id: 7,
      title: "Cat Walk Salon",
      category: "marketing",
      description: "Social media management, aesthetic post designing, and local customer reach campaigns.",
      image: Catwalk,
      tech: ["Instagram Marketing", "Creatives", "Local SEO"],
      liveUrl: "#",
      status: "Active Campaign"
    },
    {
      id: 8,
      title: "Aeham Hospital",
      category: "marketing",
      description: "Healthcare digital marketing, patient outreach campaigns, and professional branding.",
      image: Aeham,
      tech: ["Healthcare Ads", "Lead Funnel", "Branding"],
      liveUrl: "#",
      status: "Client Partner"
    },
    {
      id: 9,
      title: "Advanced Homeo Care",
      category: "marketing",
      description: "Clinic growth strategies, targeted digital advertisements, and informational outreach.",
      image: Homeo,
      tech: ["Digital Outreach", "Meta Ads", "SEO"],
      liveUrl: "#",
      status: "Client Partner"
    },
    {
      id: 10,
      title: "Furniture Home",
      category: "marketing",
      description: "E-commerce promotion, product showcase ads, and high-engagement social media campaigns.",
      image: Furniture,
      tech: ["E-commerce Ads", "Visual Marketing", "PPC"],
      liveUrl: "#",
      status: "Active Campaign"
    },
    {
      id: 11,
      title: "Career Craft",
      category: "marketing",
      description: "Educational consultancy marketing, student lead generation, and career event promotions.",
      image: Career,
      tech: ["Lead Gen", "Education Marketing", "Campaigns"],
      liveUrl: "#",
      status: "Active Campaign"
    },
    {
      id: 12,
      title: "Kanchanjunga Foundation",
      category: "marketing",
      description: "Foundation promotional campaigns, social welfare outreach, and digital presence scaling.",
      image: Kanchajunga,
      tech: ["Lead Gen", "Social Impact", "Campaigns"],
      liveUrl: "#",
      status: "Active Campaign"
    },
    {
      id: 13,
      title: "SMH Hospital (Hope Hospital)",
      category: "marketing",
      description: "24*7 Emergency Hospital Also Known As Hope Hospital Purnea",
      image: Smh,
      tech: ["Lead Gen", "Social Impact", "Campaigns"],
      liveUrl: "#",
      status: "Active Campaign"
    },
    {
      id: 14,
      title: "Luxera Tiles",
      category: "marketing",
      description: "All Types Of Tiles & Sanitaryware",
      image: Luxera,
      tech: ["Lead Gen", "Social Impact", "Campaigns"],
      liveUrl: "#",
      status: "Active Campaign"
    },
    {
      id: 15,
      title: "Shivam Suri Architect",
      category: "marketing",
      description: "Shivam Suri Architect is a premier architectural consultancy practice based in Purnea",
      image: Shivam,
      tech: ["Lead Gen", "Social Impact", "Campaigns"],
      liveUrl: "#",
      status: "Active Campaign"
    },
    {
      id: 16,
      title: "Universal Hospital And Research Centre",
      category: "marketing",
      description: "Universal Hospital & Research Centre, Purnia ek healthcare aur nursing training institute.",
      image: Manjushree,
      tech: ["Lead Gen", "Social Impact", "Campaigns"],
      liveUrl: "#",
      status: "Active Campaign"
    },
  ];

  // ==========================================
  // 🎥 CLIENT AD VIDEOS DATA (YouTube Shorts)
  // ==========================================
  const clientAdVideos = [
    {
      id: 1,
      title: "Client Promotional Ad #1",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/bVw1mqrKXE0",
      tag: "YouTube Short"
    },
    {
      id: 2,
      title: "Client Promotional Ad #2",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/cruB9xu5QN0",
      tag: "YouTube Short"
    },
    {
      id: 3,
      title: "Client Promotional Ad #3",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/OCKxnZ_pxbI",
      tag: "YouTube Short"
    },
    {
      id: 4,
      title: "Client Promotional Ad #4",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/4Xwsn3wTQyI",
      tag: "YouTube Short"
    },
    {
      id: 5,
      title: "Client Promotional Ad #5",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/UDN4G1mktTQ",
      tag: "YouTube Short"
    },
    {
      id: 6,
      title: "Client Promotional Ad #6",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/FkGAL_JQCIM",
      tag: "YouTube Short"
    },
    {
      id: 7,
      title: "Client Promotional Ad #7",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/5GqLt0WPdKQ",
      tag: "YouTube Short"
    },
    {
      id: 8,
      title: "Client Promotional Ad #8",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/neEuYetytp4",
      tag: "YouTube Short"
    },
    {
      id: 9,
      title: "Client Promotional Ad #9",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/breMGposOxU",
      tag: "YouTube Short"
    },
    {
      id: 10,
      title: "Client Promotional Ad #10",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/YPP6KCHalZU",
      tag: "YouTube Short"
    },
    {
      id: 11,
      title: "Client Promotional Ad #11",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/0jQw35KoaN4",
      tag: "YouTube Short"
    },
    {
      id: 12,
      title: "Client Promotional Ad #12",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/uVzas-lI-Js",
      tag: "YouTube Short"
    },
    {
      id: 13,
      title: "Client Promotional Ad #13",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/6XFNHHg_IQ0",
      tag: "YouTube Short"
    },
    {
      id: 14,
      title: "Client Promotional Ad #14",
      client: "DBTechX Digital Partner",
      embedUrl: "https://www.youtube.com/embed/3OyuIbwiKvg",
      tag: "YouTube Short"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? clientProjects 
    : clientProjects.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-zinc-100 font-sans flex flex-col justify-between">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content Body */}
      <main className="w-full pb-20">
        
        {/* Service Page Style Hero Banner with Red Gradient Background */}
        <div className="relative w-full bg-gradient-to-b from-red-950/70 via-black/80 to-[#0c0d0e] pt-32 sm:pt-44 pb-16 px-4 sm:px-8 border-b border-zinc-900">
          <div className="text-center max-w-3xl mx-auto">
            
            {/* Top Ecosystem Badge */}
            <div className="inline-block mb-4">
              <span className="text-zinc-300 font-medium tracking-wider text-xs sm:text-sm bg-zinc-900/80 border border-zinc-800 px-4 py-1.5 rounded-full shadow-inner backdrop-blur-md">
                OUR CLIENT PORTFOLIO
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Websites & Brands We've <span className="text-red-600">Engineered</span>
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-400 text-xs sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
              Explore our successfully deployed web portals, digital marketing campaigns, and brand partnerships.
            </p>
            
            {/* Filter Tabs inside Hero */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'all' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-[#131517] text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200'}`}
              >
                All Projects ({clientProjects.length})
              </button>
              <button 
                onClick={() => setActiveTab('web')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'web' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-[#131517] text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200'}`}
              >
                🌐 Web Development
              </button>
              <button 
                onClick={() => setActiveTab('marketing')}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeTab === 'marketing' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-[#131517] text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200'}`}
              >
                📈 Digital Marketing
              </button>
            </div>

          </div>
        </div>

        {/* Projects Grid Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12">
          {/* Projects Grid Cards - Phone pe 2-2 aur Desktop pe 4-4 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-[#131517] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl hover:border-zinc-700 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative h-32 sm:h-48 overflow-hidden bg-black/40 p-2 sm:p-3 border-b border-zinc-800 flex items-center justify-center">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/80 backdrop-blur-md text-[8px] sm:text-[10px] font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider text-red-500 border border-zinc-700/80 shadow-md">
                      {project.status}
                    </span>
                  </div>

                  {/* Details Content */}
                  <div className="p-3 sm:p-6">
                    <h3 className="text-xs sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-red-500 transition-colors leading-snug">{project.title}</h3>
                    <p className="text-zinc-400 text-[10px] sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-none">{project.description}</p>
                    
                    {/* Tech / Service Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2">
                      {project.tech.map((t, index) => (
                        <span key={index} className="bg-[#0c0d0e] text-zinc-300 border border-zinc-800 text-[8px] sm:text-[10px] font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="px-3 pb-3 sm:px-6 sm:pb-6 pt-0">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-center w-full bg-zinc-900 hover:bg-red-600 text-zinc-300 hover:text-white font-bold py-2 sm:py-3 rounded-xl text-[10px] sm:text-xs transition-colors border border-zinc-800 hover:border-red-600 cursor-pointer shadow-md"
                  >
                    {project.category === 'web' ? 'Visit Live →' : 'View Details →'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* 🎬 DEDICATED CLIENT AD VIDEOS SECTION     */}
        {/* ========================================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-red-500 font-bold uppercase tracking-widest text-xs bg-red-950/40 border border-red-900/50 px-4 py-1.5 rounded-full">
              VIDEO CREATIVES & AD CAMPAIGNS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
              Client Ad <span className="text-red-600">Showcase</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2">
              Watch promotional reels, social media ad creatives, and performance marketing videos crafted for our clients.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientAdVideos.map((video) => (
              <div 
                key={video.id}
                className="bg-[#131517] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col justify-between group hover:border-red-600/50 transition-all"
              >
                <div>
                  {/* YouTube Short / Video Iframe container (Perfect vertical aspect ratio for Shorts) */}
                  <div className="relative w-full h-[420px] rounded-xl overflow-hidden bg-black border border-zinc-800 shadow-inner">
                    <iframe 
                      src={video.embedUrl} 
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Video Info */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-red-500 font-bold text-[10px] uppercase tracking-wider bg-red-950/30 px-2.5 py-0.5 rounded-md border border-red-900/40">
                        {video.tag}
                      </span>
                      <span className="text-zinc-500 text-xs font-medium">YouTube</span>
                    </div>
                    <h3 className="text-white font-bold text-base mt-2 group-hover:text-red-500 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-1">
                      {video.client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}