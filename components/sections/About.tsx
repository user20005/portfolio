'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animation des cartes qui arrivent par la droite
    const cards = gsap.utils.toArray('.story-card');
    
    cards.forEach((card: any) => {
      gsap.fromTo(card,
        { x: 30, opacity: 0 },
        {
          x: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          }
        }
      );
    });

    // Animation de la ligne verticale
    gsap.fromTo(".timeline-line",
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      }
    );
  }, { scope: containerRef });

  return (

    <section ref={containerRef} id="about" className="relative py-16 bg-[#0a0a0a] overflow-hidden">
      
      {/* Fond Décoratif */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* --- COLONNE GAUCHE : TITRE  --- */}
          <div className="md:col-span-4">
            <div className="sticky top-24">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Mon <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  Parcours
                </span>
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4"></div>
              <p className="text-gray-400 text-base leading-relaxed">
                De la création web pure à l'ingénierie des systèmes embarqués.
              </p>
            </div>
          </div>

          {/* --- COLONNE DROITE : TIMELINE --- */}
          <div className="md:col-span-8 relative timeline-container pl-8 md:pl-10 border-l border-white/5">
            
            <div className="timeline-line absolute left-[-1px] top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_10px_rgba(34,211,238,0.4)]"></div>

            <div className="space-y-6">
              
              {/* ÉTAPE 1 */}
              <div className="story-card relative">
                <span className="absolute -left-[41px] md:-left-[50px] top-0 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-cyan-500 ring-4 ring-[#0a0a0a]"></span>
                
                <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="text-cyan-400 font-mono text-xs mb-1 tracking-widest">CHAPITRE 1</div>
                  <h3 className="text-xl text-white font-bold mb-2">Les Débuts & Le Freelance</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                     Tout a débuté au lycée <strong>Le Corbusier</strong>. Je me suis lancé en freelance, créant des sites web en parallèle de mes études.
                  </p>
                </div>
              </div>

              {/* ÉTAPE 2 */}
              <div className="story-card relative">
                 <span className="absolute -left-[41px] md:-left-[50px] top-0 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-blue-500 ring-4 ring-[#0a0a0a]"></span>

                <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-sm">
                  <div className="text-blue-400 font-mono text-xs mb-1 tracking-widest">CHAPITRE 2</div>
                  <h3 className="text-xl text-white font-bold mb-2">Le Manque du "Terrain"</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Coder des interfaces virtuelles me plaisait, mais il me manquait le <span className="text-amber-400 font-medium">terrain</span>. Je voulais comprendre l'origine des données, pas juste les afficher.
                  </p>
                </div>
              </div>

              {/* ÉTAPE 3 */}
              <div className="story-card relative">
                 <span className="absolute -left-[41px] md:-left-[50px] top-0 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-purple-500 ring-4 ring-[#0a0a0a]"></span>

                <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 p-5 rounded-xl hover:border-purple-500/50 transition-colors backdrop-blur-sm">
                  <div className="text-purple-400 font-mono text-xs mb-1 tracking-widest">AUJOURD'HUI</div>
                  <h3 className="text-xl text-white font-bold mb-2">La Double Compétence</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Mon but : concevoir la carte électronique, souder les composants <em>ET</em> programmer. Une fusion hardware/software complète.
                  </p>
                </div>
              </div>

            </div>

            {/* Note Stage */}
            <div className="story-card mt-8 inline-block bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
              <p className="text-green-400 text-xs font-bold flex items-center gap-2 uppercase tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Recherche stage 10-12 semaines (Avril 2026)
              </p>
            </div>

          </div>
        </div>

        {/* --- FOCUS --- */}
        <div className="mt-12 border-t border-white/5 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FocusCard 
              title="Conception Élec" 
              desc="Création PCB, Choix composants, Soudure, CAO, Autocad" 
              color="text-amber-400"
              bgColor="bg-amber-500/10"
              icon={<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
            />
            <FocusCard 
              title="Embarqué & IoT" 
              desc="C/C++, ESP32, STM32, Protocoles Communication" 
              color="text-cyan-400"
              bgColor="bg-cyan-500/10"
              icon={<path d="M13 10V3L4 14h7v7l9-11h-7z" />}
            />
            <FocusCard 
              title="Web Fullstack" 
              desc="React, Next.js, Dashboards IoT, API REST" 
              color="text-purple-400"
              bgColor="bg-purple-500/10"
              icon={<path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

// Carte Focus
const FocusCard = ({ title, desc, icon, color, bgColor }: any) => (
  <div className="group relative bg-[#111] border border-white/10 p-4 rounded-xl hover:-translate-y-1 transition-all duration-300">
    <div className={`absolute inset-0 ${bgColor} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>
    
    <div className="flex items-center gap-3 mb-2">
      <div className={`w-8 h-8 ${bgColor} ${color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="text-base text-white font-bold group-hover:text-white transition-colors">{title}</h3>
    </div>
    
    <p className="text-gray-400 text-xs leading-relaxed pl-11">{desc}</p>
  </div>
);