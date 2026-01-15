'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CV = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animation séquentielle des colonnes
    const cols = gsap.utils.toArray('.cv-column');
    
    gsap.fromTo(cols, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="cv" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE AVEC BOUTON DOWNLOAD */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Vitae</span>
            </h2>

          </div>
          
          <a 
            href="/cv.pdf" 
            target="_blank"
            className="group relative px-8 py-3 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Télécharger le PDF
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* --- COLONNE GAUCHE : EXPÉRIENCE  --- */}
          <div className="cv-column lg:col-span-7 space-y-8">
            <SectionTitle icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />} title="Expérience Professionnelle" color="text-cyan-400" />

            <div className="relative border-l-2 border-white/10 ml-3 md:ml-4 space-y-12 pb-4">
              
              {/* Exp 1 : Freelance  */}
              <ExpCard 
                role="Développeur Fullstack"
                company="Freelance / Indépendant"
                period="2019 - 2024"
                description="Pilotage de projets Web de A à Z. Conception d'applications sur-mesure et accompagnement technique des clients."
                tasks={[
                  "Conception d'architectures Scalables (Next.js / Node.js)",
                  "Optimisation des performances & SEO",
                  "Gestion de la relation client et du cahier des charges"
                ]}
                techs={['React', 'Next.js', 'Node.js', 'AWS']}
              />

              {/* Exp 2 : Eurostar (Job Étudiant ) */}
              <ExpCard 
                role="Préparateur de commandes"
                company="Eurostar"
                period="2023 - 2024"
                description="Poste logistique dans un environnement international exigeant. Développement de la rigueur et du respect des procédures."
                tasks={[
                  "Gestion des flux logistiques et des stocks",
                  "Respect strict des normes de sécurité ferroviaire",
                  "Travail d'équipe en flux tendu "
                ]}
                techs={['Logistique', 'Rigueur', 'Sécurité', 'Anglais']}
              />
            </div>
          </div>

          {/* --- COLONNE DROITE : FORMATION & CERTIFS  --- */}
          <div className="cv-column lg:col-span-5 flex flex-col gap-12">
            
            {/* 1. FORMATION */}
            <div className="space-y-8">
               <SectionTitle icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />} title="Formation Académique" color="text-amber-500" />
               
               <div className="space-y-6">
                 <EduCard 
                   degree="BUT GEII (Parcours ESE)"
                   school="IUT Villetaneuse"
                   period="2024 - 2027 "
                   details="Spécialisation Électronique & Systèmes Embarqués."
                   highlight={true}
                 />

                 <EduCard 
                   degree="BTS Cybersecurité Informatique Électronique"
                   school="Lycée Newton, Clichy"
                   period="2023-2024"
                   details="Formation axée sur la sécurité des systèmes d'information et les infrastructures Cloud."
                 />

                 
                 <EduCard 
                   degree="Baccalauréat Scientifique (STI2D)"
                   school="Lycée Le Corbusier, Aubervilliers"
                   period="2021-2023"
                   details="Option SIN (Informatique et Systèmes Numériques). Mention Assez Bien."
                 />
               </div>
            </div>

            {/* 2. CERTIFICATIONS */}
            <div className="space-y-8">
              <SectionTitle icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />} title="Certifications" color="text-green-400" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <CertifCard name="Meta Front-End Developer" issuer="W3schools / Meta" year="2021" />
                <CertifCard name="Cybersecurity & Cloud" issuer="Coursera" year="2022" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

/* --- SOUS-COMPOSANTS --- */

const SectionTitle = ({ icon, title, color }: any) => (
  <h3 className={`text-2xl font-bold text-white flex items-center gap-3`}>
    <span className={`p-2 rounded-lg bg-white/5 ${color} border border-white/5`}>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
    </span>
    {title}
  </h3>
);

const ExpCard = ({ role, company, period, description, tasks, techs }: any) => (
  <div className="relative pl-8 md:pl-10 group">
    {/* Point timeline */}
    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-gray-600 bg-[#0a0a0a] group-hover:border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-[0_0_0_4px_#0a0a0a]"></div>
    
    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-all duration-300 hover:bg-white/10">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
        <div>
          <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{role}</h4>
          <span className="text-cyan-500/80 font-medium">{company}</span>
        </div>
        <span className="text-xs font-mono text-gray-400 border border-white/10 px-3 py-1 rounded-full bg-black/20 whitespace-nowrap">
          {period}
        </span>
      </div>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      
      {/* Liste des tâches */}
      <ul className="space-y-2 mb-5">
        {tasks.map((task: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
             <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0"></span>
             {task}
          </li>
        ))}
      </ul>

    </div>
  </div>
);

const EduCard = ({ degree, school, period, details, highlight }: any) => (
  <div className={`p-6 rounded-2xl border transition-all duration-300 ${highlight ? 'bg-amber-900/10 border-amber-500/30' : 'bg-white/5 border-white/5 hover:border-white/20'}`}>
    <div className="flex justify-between items-start mb-2">
      <h4 className={`text-lg font-bold ${highlight ? 'text-amber-400' : 'text-white'}`}>{degree}</h4>
      <span className="text-xs text-gray-500">{period}</span>
    </div>
    <div className="text-gray-400 text-sm font-medium mb-2">{school}</div>
    <p className="text-gray-500 text-sm leading-relaxed">{details}</p>
  </div>
);

const CertifCard = ({ name, issuer, score, year }: any) => (
  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-green-500/5 transition-all group">
    {/* Icône Certif */}
    <div className="w-10 h-10 rounded-full bg-green-900/20 text-green-400 flex items-center justify-center border border-green-500/20 group-hover:scale-110 transition-transform">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </div>
    <div>
      <h4 className="text-white font-bold text-sm group-hover:text-green-400 transition-colors">{name}</h4>
      <div className="text-xs text-gray-500 flex gap-2">
        <span>{issuer}</span>
        <span>•</span>
        <span>{year}</span>
        {score && <span className="text-green-400/80 font-mono">• {score}</span>}
      </div>
    </div>
  </div>
);

