'use client';

import { useState, useRef } from 'react';
import Link from 'next/link'; 
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, Project } from '@/data/projets'; 

gsap.registerPlugin(ScrollTrigger);

type Category = 'WEB' | 'GEII';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('WEB');
  const containerRef = useRef(null);

  const filteredProjects = projects.filter(project => project.category === activeCategory);

  useGSAP(() => {
    gsap.fromTo('.project-card', 
      { y: 20, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "power2.out", overwrite: true }
    );
  }, { scope: containerRef, dependencies: [activeCategory] });

  return (
    <section ref={containerRef} id="projects" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] rounded-full pointer-events-none transition-colors duration-700 ease-in-out ${
          activeCategory === 'WEB' ? 'bg-cyan-900/20' : 'bg-amber-900/20'
        }`} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Mes Réalisations
            </h2>
            <p className="text-gray-400">
              {activeCategory === 'WEB' ? 'Projets Web & Applications' : 'Projets Électroniques & SAE'}
            </p>
          </div>

          {/* SWITCH */}
          <div className="relative p-1 bg-white/5 border border-white/10 rounded-full flex items-center shadow-inner w-[320px]">
            <div 
              className={`absolute top-1 bottom-1 rounded-full transition-all duration-300 ease-out shadow-lg w-[50%] ${
                activeCategory === 'WEB' 
                  ? 'left-1 bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.5)]' 
                  : 'left-[50%] bg-amber-600 shadow-[0_0_15px_rgba(217,119,6,0.5)]'
              }`}
            />
            <button onClick={() => setActiveCategory('WEB')} className={`relative z-10 w-1/2 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${activeCategory === 'WEB' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
              Dev Fullstack
            </button>
            <button onClick={() => setActiveCategory('GEII')} className={`relative z-10 w-1/2 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${activeCategory === 'GEII' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
              SAE & Élec
            </button>
          </div>
        </div>

        {/* GRILLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} activeCategory={activeCategory} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant pour chaque carte de projet
const ProjectCard = ({ project, activeCategory }: { project: Project, activeCategory: Category }) => {
  const isWeb = activeCategory === 'WEB';
  
  const glowClass = isWeb ? 'hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'hover:border-amber-500/30 hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]';
  const titleColor = isWeb ? 'group-hover:text-cyan-400' : 'group-hover:text-amber-400';
  
  return (
    <div className={`project-card group flex flex-col bg-[#111] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${glowClass}`}>
      
      {/* Image */}
      <div className="h-48 relative overflow-hidden bg-gray-900">
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 text-[10px] font-bold bg-black/80 border border-white/10 rounded text-white">
            {project.context}
          </span>
        </div>
        <div className={`w-full h-full bg-gradient-to-br ${isWeb ? 'from-slate-800 to-cyan-900' : 'from-slate-800 to-amber-900'} group-hover:scale-105 transition-transform duration-700 opacity-80`} />
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`text-xl font-bold text-white mb-2 transition-colors ${titleColor}`}>
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-1 text-[11px] font-mono text-gray-500 border border-white/5 rounded bg-white/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-white/5">
           {project.links.github && (
            <a href={project.links.github} target="_blank" className="flex-1 text-center py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-gray-300 transition-colors border border-white/5">
              GitHub
            </a>
          )}

          {isWeb ? (
             /* CAS WEB : Lien externe vers le site (<a>) */
             project.links.demo && (
              <a href={project.links.demo} target="_blank" className="flex-1 text-center py-2 rounded-lg text-sm font-bold border transition-colors text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/10">
                Voir le site
              </a>
             )
          ) : (
             /* CAS GEII : Lien interne vers ta page de détails (<Link>) */
             <Link 
               href={`/projet/${project.id}`} 
               className="flex-1 text-center py-2 rounded-lg text-sm font-bold border transition-colors text-amber-400 border-amber-500/30 hover:bg-amber-500/10"
             >
               Lire le rapport
             </Link>
          )}
        </div>
      </div>
    </div>
  );
};