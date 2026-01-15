'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-text');
    
    elements.forEach((el: any) => {
      gsap.fromTo(el,
        { y: 40, opacity: 0 },
        {
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="about" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Decoratif */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center md:text-left">
        
        {/* En-tête */}
        <div className="mb-12 reveal-text text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Mon <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Parcours</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full"></div>
        </div>

        {/* --- TON TEXTE ICI --- */}
        <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-light reveal-text">
          
          <p>
            Tout a débuté au lycée <strong>Le Corbusier</strong> (Bac STI2D).Je me suis lancé en <strong className="text-white">freelance</strong>, créant des sites web en parallèle de mes études.
          </p>

          <p>
            Pendant plusieurs années, j'ai programmé des interfaces et des architectures numériques. J'appréciais cela, mais il me manquait une dimension  : <span className="text-amber-500 font-medium">le terrain</span>.
          </p>

          <p>
            Je ne voulais plus simplement afficher des données sur un écran. Je souhaitais comprendre leur origine. Je voulais <strong>concevoir la carte électronique</strong>, sélectionner les capteurs, souder les composants <em>ET</em> programmer l'intelligence qui les fait fonctionner.
          </p>


          
          <p className="text-base text-gray-400">
            Je recherche un stage de <strong className="text-white">10 à 12 semaines</strong> (dès avril 2026) pour mettre en pratique mes compétences en conception électronique et développement embarqué.
          </p>

        </div>

        {/* Grille focus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 reveal-text">
          <FocusCard 
            title="Conception" 
            desc="Création PCB, Choix composants, Soudure" 
            icon={<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
          />
          <FocusCard 
            title="Embarqué" 
            desc="C/C++, Microcontrôleurs, VHDL" 
            icon={<path d="M13 10V3L4 14h7v7l9-11h-7z" />}
          />
          <FocusCard 
            title="Fullstack" 
            desc="React, Next.js, Architecture Web" 
            icon={<path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />}
          />
        </div>

      </div>
    </section>
  );
};

// Petite carte pour les focus
const FocusCard = ({ title, desc, icon }: any) => (
  <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors text-center md:text-left group">
    <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center mb-3 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        {icon}
      </svg>
    </div>
    <h3 className="text-white font-bold mb-1">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);