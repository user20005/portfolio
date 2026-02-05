'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type SkillCategory = 'GEII' | 'WEB';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('GEII');
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  // Animation lors du changement d'onglet
  useGSAP(() => {
    if (contentRef.current) {
      gsap.fromTo(".skill-group", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, { scope: containerRef, dependencies: [activeTab] });

  return (
    <section ref={containerRef} id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* FOND DYNAMIQUE  */}
      <div 
        className={`absolute top-1/4 right-0 w-[600px] h-[600px] blur-[150px] rounded-full pointer-events-none transition-colors duration-700 opacity-30 ${
          activeTab === 'GEII' ? 'bg-amber-600/20' : 'bg-cyan-600/20'
        }`} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* EN-TÊTE + SWITCH */}
        <div className="flex flex-col items-center mb-16 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Compétences</span>
            </h2>
            <p className="`text-gray-400 max-w-2xl mx-auto ">
              {activeTab === 'GEII' 
                ? "Compétences techniques acquises durant ma formation en Génie Électrique et Informatique Industrielle." 
                : "Technologies et outils que j'utilise pour développer des applications web."
              }
            </p>
          </div>

          {/* SWITCH STYLE IOS */}
          <div className="p-1.5 bg-white/5 border border-white/10 rounded-full flex items-center relative w-[300px] shadow-2xl">
            <div 
              className={`absolute top-1.5 bottom-1.5 rounded-full transition-all duration-500 ease-out shadow-lg w-[calc(50%-6px)] ${
                activeTab === 'GEII' 
                  ? 'left-1.5 bg-amber-600' 
                  : 'left-[calc(50%+3px)] bg-cyan-600'
              }`}
            />
            
            <button 
              onClick={() => setActiveTab('GEII')} 
              className={`relative z-10 w-1/2 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${activeTab === 'GEII' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              G.E.I.I.
            </button>
            
            <button 
              onClick={() => setActiveTab('WEB')} 
              className={`relative z-10 w-1/2 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${activeTab === 'WEB' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              Fullstack
            </button>
          </div>
        </div>

        {/* CONTENU DES SKILLS */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {activeTab === 'GEII' ? (
            /* --- CONTENU GEII --- */
            <>
              <SkillGroup 
                title="Informatique Embarquée"
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />}
                skills={[
                  { name: "C / C++", level: 90 },
                  { name: "STM32 / ESP32", level: 85 },
                  { name: "VHDL / FPGA", level: 60 },
                  { name: "Linux Embarqué", level: 40 },
                ]}
                color="amber"
              />
              <SkillGroup 
                title="Électronique"
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />}
                skills={[
                  { name: "Conception PCB (KiCad)", level: 75 },
                  { name: "Simulation (LTspice)", level: 85 },
                  { name: "Élec. Analogique", level: 70 },
                  { name: "Traitement Signal", level: 60 },
                ]}
                color="amber"
              />
              <SkillGroup 
                title="Industrie & Mesures"
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />}
                skills={[
                  { name: "LabVIEW", level: 70 },
                  { name: "Instrumentation", level: 95 },
                  { name: "Soudure / Proto", level: 90 },
                  { name: "Automatisme", level: 50 },
                ]}
                color="amber"
              />
            </>
          ) : (
            /* --- CONTENU WEB --- */
            <>
              <SkillGroup 
                title="Frontend Modern"
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />}
                skills={[
                  { name: "React / Next.js", level: 95 },
                  { name: "TypeScript", level: 90 },
                  { name: "Tailwind CSS", level: 95 },
                  { name: "Framer Motion / GSAP", level: 80 },
                ]}
                color="cyan"
              />
              <SkillGroup 
                title="Backend & Data"
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />}
                skills={[
                  { name: "Node.js / Express", level: 85 },
                  { name: "PostgreSQL / Prisma", level: 80 },
                  { name: "API REST", level: 90 },
                  { name: "Auth (NextAuth)", level: 75 },
                ]}
                color="cyan"
              />
              <SkillGroup 
                title="DevOps & Outils"
                icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
                skills={[
                  { name: "Git / GitHub", level: 90 },
                  { name: "Docker", level: 70 },
                  { name: "Vercel / Deploy", level: 85 },
                  { name: "Linux / Bash", level: 75 },
                ]}
                color="cyan"
              />
            </>
          )}

        </div>

        {/* BARRE OUTILS / PROTOCOLES (FOOTER) */}
        <div className="mt-12 pt-10 border-t border-white/5">
          <p className="text-center text-sm font-mono text-gray-500 mb-6 uppercase tracking-widest">
            {activeTab === 'GEII' ? 'Protocoles & Hardware' : 'Stack & Outils'}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {(activeTab === 'GEII' 
              ? ['I2C', 'SPI', 'UART', 'MQTT', 'LoRaWAN', 'CAN Bus', 'Oscilloscope', 'Multimètre', 'Imprimante 3D'] 
              : ['VS Code', 'Figma', 'Notion', 'ESLint', 'Prettier','npm/pnpm']
            ).map((item) => (
              <span 
                key={item} 
                className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-default ${
                  activeTab === 'GEII' 
                    ? 'bg-amber-900/10 border-amber-500/20 text-amber-500 hover:border-amber-500/50' 
                    : 'bg-cyan-900/10 border-cyan-500/20 text-cyan-500 hover:border-cyan-500/50'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Composant Groupe de Compétences
const SkillGroup = ({ title, icon, skills, color }: any) => {
  const isAmber = color === 'amber';
  
  return (
    <div className="skill-group bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* En-tête Carte */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
          isAmber 
            ? 'bg-amber-500/10 border-amber-500/20 text-amber-500' 
            : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
        }`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>

      {/* Liste des Skills avec Barres */}
      <div className="space-y-5">
        {skills.map((skill: any) => (
          <div key={skill.name} className="group/skill">
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors">{skill.name}</span>
              <span className={`text-xs font-mono opacity-50 ${isAmber ? 'group-hover/skill:text-amber-400' : 'group-hover/skill:text-cyan-400'}`}>
                {skill.level}%
              </span>
            </div>
            
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                  isAmber ? 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]'
                }`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};