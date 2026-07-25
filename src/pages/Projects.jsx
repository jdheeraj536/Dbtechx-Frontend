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
      title: "Kanchanjunga Foundation",
      category: "web",
      description: "Clean, professional static NGO website designed for social impact showcasing foundation initiatives and mission.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600",
      tech: ["Static Website", "React/JS", "UI Design", "Tailwind CSS"],
      liveUrl: "http://kanchanjungafoundation.com",
      status: "Upcoming / Pre-launch"
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
  ];

  const filteredProjects = activeTab === 'all' 
    ? clientProjects 
    : clientProjects.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-zinc-100 font-sans flex flex-col justify-between">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content Body */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-28 sm:pt-36 pb-20 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-red-600 font-bold uppercase tracking-widest text-[11px] bg-red-950/40 border border-red-900/50 px-3 py-1 rounded-full">
            OUR CLIENT PORTFOLIO
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Websites & Brands We've <span className="text-red-600">Engineered</span>
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
            Explore our successfully deployed web portals, digital marketing campaigns, and brand partnerships.
          </p>
          
          {/* Filter Tabs */}
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
                  <h3 className="text-xs sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-red-500 transition-colors line-clamp-1">{project.title}</h3>
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

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}