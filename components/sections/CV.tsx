'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const CV = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const contentRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".tab-content",
      { y: 20, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
    );
  }, { scope: contentRef, dependencies: [activeTab] });

  const tabs = [
    { id: 'experience', label: 'Expérience', icon: <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
    { id: 'education', label: 'Formation', icon: <path d="M12 14l9-5-9-5-9 5 9 5z" /> },
    { id: 'certifs', label: 'Certifications', icon: <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /> },
  ];

  return (
    <section id="cv" className="py-20 bg-[#0a0a0a] relative min-h-[600px] flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* TITRE & HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Curriculum <span className="text-cyan-400">Vitae</span>
            </h2>
          </div>
          
          <a href="/contact" target="_self" className="px-6 py-2.5 bg-white/10 hover:bg-white text-white hover:text-black border border-white/10 rounded-full transition-all text-sm font-bold flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Télécharger PDF
          </a>
        </div>

        {/* --- INTERFACE À ONGLETS --- */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12" ref={contentRef}>
          
          {/* MENU LATÉRAL (Gauche) */}
          <div className="flex md:flex-col gap-2 md:w-64 shrink-0 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 border text-sm font-medium whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.1)]' 
                    : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">{tab.icon}</svg>
                {tab.label}
              </button>
            ))}
          </div>

          {/* ZONE DE CONTENU */}
          <div className="flex-1 min-h-[400px]">
            
            {/* CONTENU : EXPÉRIENCE */}
            {activeTab === 'experience' && (
              <div className="tab-content space-y-4">
                <Card 
                  title="Développeur Fullstack"
                  subtitle="Freelance / Indépendant"
                  date="2019 - 2024"
                  desc="Pilotage de projets Web de A à Z. Conception d'architectures Scalables (Next.js) et optimisation des performances."
                  tags={['React', 'Next.js', 'Node.js', 'Relation Client']}
                />
                <Card 
                  title="Préparateur de commandes"
                  subtitle="Eurostar"
                  date="2023 - 2024"
                  desc="Poste logistique en environnement international. Gestion des flux et respect strict des normes de sécurité."
                  tags={['Logistique', 'Sécurité', 'Travail d\'équipe']}
                />
              </div>
            )}

            {/* CONTENU : FORMATION */}
            {activeTab === 'education' && (
              <div className="tab-content space-y-4">
                <Card 
                  title="BUT GEII (Parcours ESE)"
                  subtitle="IUT Villetaneuse"
                  date="2024 - 2027"
                  desc="Spécialisation Électronique & Systèmes Embarqués. Programmation microcontrôleurs et conception PCB."
                  highlight
                />
                <Card 
                  title="BTS Cybersecurité"
                  subtitle="Lycée Newton, Clichy"
                  date="2023 - 2024"
                  desc="Sécurité des systèmes d'information et infrastructures réseaux."
                />
                <Card 
                  title="Baccalauréat STI2D"
                  subtitle="Lycée Le Corbusier"
                  date="2021 - 2023"
                  desc="Option Systèmes d'Information et Numérique.Bases en programmation et réseaux."
                />
              </div>
            )}

            {/* CONTENU : CERTIFICATIONS */}
            {activeTab === 'certifs' && (
              <div className="tab-content grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MiniCard 
                  title="Meta Front-End Developer"
                  issuer="W3Schools"
                  date="2021"
                />
                <MiniCard 
                  title="Cybersecurity & Cloud"
                  issuer="Coursera"
                  date="2022"
                />
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};

/* --- COMPOSANTS INTERNES --- */

const Card = ({ title, subtitle, date, desc, tags, highlight }: any) => (
  <div className={`p-6 rounded-2xl border transition-all hover:bg-white/5 group ${highlight ? 'bg-cyan-900/10 border-cyan-500/30' : 'bg-[#111] border-white/10'}`}>
    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
      <div>
        <h3 className={`text-lg font-bold ${highlight ? 'text-cyan-400' : 'text-white'} group-hover:text-cyan-400 transition-colors`}>{title}</h3>
        <p className="text-cyan-500/70 text-sm font-medium">{subtitle}</p>
      </div>
      <span className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-400">
        {date}
      </span>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
    
    {tags && (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-md border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

const MiniCard = ({ title, issuer, date }: any) => (
  <div className="p-5 rounded-xl bg-[#111] border border-white/10 hover:border-green-500/50 hover:bg-green-900/10 transition-all group cursor-default">
    <div className="flex items-center justify-between mb-2">
      <div className="p-2 rounded-lg bg-white/5 text-green-400 group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
      <span className="text-xs text-gray-500 font-mono">{date}</span>
    </div>
    <h3 className="text-white font-bold mb-1 group-hover:text-green-400 transition-colors">{title}</h3>
    <p className="text-gray-500 text-xs">{issuer}</p>
  </div>
);