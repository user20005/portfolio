'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.skill-card');
    
    gsap.fromTo(cards, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="skills" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Compétences <span className="text-amber-500">Techniques</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CATEGORIE 1 : EMBARQUÉ  */}
          <SkillCard 
            title="Informatique Embarquée"
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
            skills={[
              { name: "C / C++", level: "Avancé" },
              { name: "Microcontrôleurs (STM32, Arduino)", level: "Intermédiaire" },
              { name: "VHDL / FPGA (Quartus)", level: "Scolaire" },
              { name: "Assembleur", level: "Notions" },
              { name: "Linux Embarqué", level: "En apprentissage" },
            ]}
            color="amber"
          />

          {/* CATEGORIE 2 : ÉLECTRONIQUE */}
          <SkillCard 
            title="Conception Électronique"
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />}
            skills={[
              { name: "Conception PCB (KiCad)", level: "Intermédiaire" },
              { name: "Simulation (LTspice, PSIM)", level: "Avancé" },
              { name: "Élec. Analogique & AOP", level: "Intermédiaire" },
              { name: "Élec. de Puissance", level: "Intermédiaire" },
              { name: "Traitement du Signal", level: "Scolaire" },
            ]}
            color="cyan" 
          />

          {/* CATEGORIE 3 : INSTRUMENTATION & OUTILS */}
          <SkillCard 
            title="Mesures & Industrie"
            icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />}
            skills={[
              { name: "LabVIEW & Supervision", level: "Intermédiaire" },
              { name: "MATLAB / Simulink", level: "Scolaire" },
              { name: "Oscilloscope / GBF", level: "Maîtrisé" },
              { name: "Soudure & Prototypage", level: "Autonome" },
              { name: "Git / Versionning", level: "Avancé" },
            ]}
            color="green"
          />

        </div>

        {/* SECTION PROTOCOLES  */}
        <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 text-center skill-card">
          <h3 className="text-lg font-bold text-white mb-6">Protocoles & Bus de Communication</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['I2C', 'SPI', 'UART/Serial', 'MQTT', 'LoRaWAN', 'TCP/IP'].map((proto) => (
              <span key={proto} className="px-4 py-2 bg-[#0a0a0a] border border-white/10 rounded-lg text-gray-300 font-mono text-sm hover:border-amber-500/50 hover:text-amber-400 transition-colors cursor-default">
                {proto}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Composant Carte
const SkillCard = ({ title, icon, skills, color }: any) => {
  const colorClasses: any = {
    amber: "text-amber-500 bg-amber-500/10 border-amber-500/20",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    green: "text-green-400 bg-green-500/10 border-green-500/20",
  };

  return (
    <div className="skill-card bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
      {/* Header Carte */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[color]}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Liste Compétences */}
      <div className="space-y-4">
        {skills.map((skill: any, i: number) => (
          <div key={i} className="group">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
              <span className="text-gray-500 text-xs">{skill.level}</span>
            </div>
            {/* Barre de progression décorative */}
            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${color === 'amber' ? 'bg-amber-500' : color === 'cyan' ? 'bg-cyan-400' : 'bg-green-400'}`} 
                style={{ 
                  width: skill.level === 'Avancé' || skill.level === 'Maîtrisé' ? '90%' : 
                         skill.level === 'Intermédiaire' || skill.level === 'Autonome' ? '70%' : 
                         '45%' 
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};