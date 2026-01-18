'use client';

import { useState, useRef } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, Project } from '@/data/projets'; 

gsap.registerPlugin(ScrollTrigger);

type Category = 'WEB' | 'GEII';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('GEII');
  const containerRef = useRef(null);

  const filteredProjects = projects.filter(project => project.category === activeCategory);

  useGSAP(() => {
    gsap.fromTo('.project-card', 
      { y: 30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "power3.out", overwrite: true }
    );
  }, { scope: containerRef, dependencies: [activeCategory] });

  return (
    <section ref={containerRef} id="projects" className="py-24 bg-[#0a0a0a] relative overflow-hidden min-h-[75vh]">
      

      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[150px] rounded-full pointer-events-none transition-colors duration-1000 ease-in-out opacity-40 ${
          activeCategory === 'WEB' ? 'bg-cyan-600/20' : 'bg-amber-600/20'
        }`} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* EN-TÊTE + SWITCH */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Réalisations</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Une sélection de mes projets <span className={activeCategory === 'WEB' ? "text-cyan-400 font-medium" : "text-amber-400 font-medium"}>
                {activeCategory === 'WEB' ? 'Web & Fullstack' : 'Électronique & Embarqué'}
              </span>
            </p>
          </div>

          <div className="p-1.5 bg-white/5 border border-white/10 rounded-full flex items-center relative w-[280px]">
            {/* Le fond glissant */}
            <div 
              className={`absolute top-1.5 bottom-1.5 rounded-full transition-all duration-300 ease-out shadow-lg w-[calc(50%-6px)] ${
                activeCategory === 'WEB' 
                  ? 'left-1.5 bg-cyan-600' 
                  : 'left-[calc(50%+3px)] bg-amber-600'
              }`}
            />
            
            <button 
              onClick={() => setActiveCategory('WEB')} 
              className={`relative z-10 w-1/2 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${activeCategory === 'WEB' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              Web Dev
            </button>
            
            <button 
              onClick={() => setActiveCategory('GEII')} 
              className={`relative z-10 w-1/2 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${activeCategory === 'GEII' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              GEII 
            </button>
          </div>
        </div>

        {/* GRILLE DES PROJETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} activeCategory={activeCategory} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Composant Carte 
const ProjectCard = ({ project, activeCategory }: { project: Project, activeCategory: Category }) => {
  const isWeb = activeCategory === 'WEB';
  
  const themeColor = isWeb ? 'cyan' : 'amber';
  const borderColor = isWeb ? 'group-hover:border-cyan-500/50' : 'group-hover:border-amber-500/50';
  const shadowColor = isWeb ? 'group-hover:shadow-cyan-500/10' : 'group-hover:shadow-amber-500/10';
  const iconBg = isWeb ? 'bg-cyan-500/20 text-cyan-400' : 'bg-amber-500/20 text-amber-400';

  return (
    <div className={`project-card group relative flex flex-col bg-[#111] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${borderColor} ${shadowColor}`}>
      
      {/* ZONE IMAGE / COUVERTURE */}
      <div className="h-48 relative overflow-hidden bg-[#050505] border-b border-white/5">
        
        {project.image && <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />}
        
        <div className={`absolute inset-0 bg-gradient-to-br ${isWeb ? 'from-slate-900 via-cyan-900/20 to-slate-900' : 'from-slate-900 via-amber-900/20 to-slate-900'} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Motif de grille décoratif */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]" />

        {/* Badge Context  */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-white shadow-lg">
            {project.context}
          </span>
        </div>

      
      </div>

      {/* CONTENU DE LA CARTE */}
      <div className="p-6 flex flex-col flex-1 relative">
        
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
        
        {/* Tags Tech */}
        <div className="flex flex-wrap gap-2 mt-auto mb-6">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2.5 py-1 text-[10px] font-mono font-medium text-gray-400 border border-white/5 rounded-md bg-white/5 group-hover:border-white/10 transition-colors">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
             <span className="px-2 py-1 text-[10px] text-gray-500">+</span>
          )}
        </div>

        {/* Boutons d'action */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
           {/* Bouton GitHub */}
           {project.links.github && (
            <a 
              href={project.links.github} 
              target="_blank" 
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5 hover:border-white/20"
              title="Voir le code"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          )}

          {/* Bouton Principal  */}
          {isWeb ? (
             project.links.demo && (
              <a 
                href={project.links.demo} 
                target="_blank" 
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40 transition-all group/btn"
              >
                Voir le site
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
             )
          ) : (
             <Link 
               href={`/projet/${project.id}`} 
               className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 hover:border-amber-500/40 transition-all group/btn"
             >
               Lire le rapport
               <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
             </Link>
          )}
        </div>

      </div>
    </div>
  );
};