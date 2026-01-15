'use client';

import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Hero = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Animation d'entrée douce
    gsap.fromTo(contentRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] bg-noise pt-20">
      
      {/* 1. Lumières d'ambiance */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* 2. Conteneur principal */}
      <div ref={contentRef} className="relative z-10 max-w-5xl w-full mx-4">
        
        <div className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
          
          {/* A. Image / Avatar */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]"></div>
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-white/20 p-1">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image 
                  src="/portfolio/PDP.png" 
                  alt="Marzouk Marecar" 
                  width={300} 
                  height={300}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
            
            <div className="absolute bottom-0 right-4 bg-[#0a0a0a] border border-green-500/50 text-green-400 text-xs px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Open to work
            </div>
          </div>

          {/* B. Texte et Infos */}
          <div className="text-center md:text-left space-y-6 flex-1">
            <h2 className="text-cyan-400 font-mono tracking-widest text-sm uppercase">
              Portfolio 2024-2026
            </h2>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Marzouk <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-text-gradient">Marecar</span>
            </h1>

            {/* --- C'EST ICI QUE J'AI INVERSÉ LES DEUX LIGNES --- */}
            <div className="space-y-2">
              {/* Ligne 1 : L'étudiant (Mise en avant) */}
              <p className="text-xl md:text-2xl text-white font-light">
                Étudiant <span className="text-cyan-300 border-b border-cyan-500/30 pb-0.5 font-medium">BUT 2 GEII</span> <span className=" text-cyan-500/80 font-mono ml-1 ">Parcours ESE</span>
              </p>
              
              {/* Ligne 2 : Le développeur (En support) */}
              <p className="text-lg md:text-xl text-gray-400">
                & Développeur Fullstack <span className="text-gray-500 text-base align-middle">(4 ans d'exp)</span>
              </p>
            </div>
            {/* -------------------------------------------------- */}

            <p className="text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
             Passionné par la création de solutions connectées. En parallèle de mon cursus GEII (Parcours ESE), je mobilise mon expérience en développement Web et mes acquis en électronique pour concevoir des projets IoT.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <SocialButton label="LinkedIn" href="#" icon={<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/>} />
              <SocialButton label="Email" href="mailto:tonemail@gmail.com" icon={<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6"/>} />
              <SocialButton label="GitHub" href="#" icon={<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialButton = ({ icon, href, label }: { icon: any, href: string, label: string }) => (
  <a 
    href={href}
    target="_blank"
    className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:scale-105 hover:border-cyan-500/50"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-cyan-400 transition-colors">
      {icon}
    </svg>
    <span className="text-sm font-medium text-gray-300 group-hover:text-white">{label}</span>
  </a>
);