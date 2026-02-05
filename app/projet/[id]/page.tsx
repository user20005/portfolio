import Link from 'next/link';
import { projects } from '@/data/projets';
import { Navbar } from '@/components/ui/Navbar';

// 1. Génération statique 
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

const getSkillLevel = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return 75 + (Math.abs(hash) % 5) * 5;
};

// 2. Le Composant de la Page
export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params; 
  const id = params.id;

  const project = projects.find((p) => p.id === id);

  if (!project || !project.details) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold mb-4 text-red-500">Projet introuvable</h1>
          <Link href="/#projects" className="px-6 py-3 bg-cyan-600 rounded-full hover:bg-cyan-500 transition-colors font-bold">
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  // Couleurs dynamiques
  const isWeb = project.category === 'WEB';
  const accentColor = isWeb ? 'bg-cyan-500' : 'bg-amber-500';
  const textColor = isWeb ? 'text-cyan-400' : 'text-amber-400';
  const borderColor = isWeb ? 'hover:border-cyan-500/30' : 'hover:border-amber-500/30';

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-cyan-500/30 pb-20 overflow-x-hidden [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-orange-600/100 scroll-smooth no-scrollbar">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32">
        
        {/* BOUTON RETOUR */}
        <Link href="/#projects" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8 group">
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Retour au portfolio
        </Link>

        {/* HEADER COMPACT */}
        <div className="border-b border-white/10 pb-8 mb-12">
          <span className="text-amber-500 font-mono text-sm tracking-wider uppercase mb-3 block">
            {project.context}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-3">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGE PRINCIPALE DU PROJET */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-16 border border-white/10 bg-[#111] shadow-2xl">
           {!project.image ? (
             <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-amber-900/40" />
           ) : (
             <div 
               className="w-full h-full bg-cover bg-center"
               style={{ backgroundImage: `url(${project.image})` }} 
             />
           )}
           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-10 flex items-end">
             <p className="text-white/90 text-lg font-medium max-w-2xl leading-relaxed">
               {project.description}
             </p>
           </div>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* COLONNE GAUCHE  */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 1. CONTEXTE */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-blue-500 rounded-full"></span>
                Contexte
              </h2>
              <div className="text-gray-300 leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
                {project.details.context}
              </div>
            </section>

            {/* 2. TIMELINE HORIZONTALE */}
            {project.progression && project.progression.length > 0 && (
              <section className="relative">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-1 h-8 bg-purple-500 rounded-full"></span>
                  Étapes de réalisation
                </h2>
                
                {/* Ligne connectrice d'arrière-plan */}
                <div className="absolute top-[28px] left-0 w-full h-0.5 bg-white/10 hidden md:block"></div>

                {/* Conteneur Scroll Horizontal */}
                <div className="flex overflow-x-auto pb-8 gap-6 snap-x [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber-600 scroll-smooth no-scrollbar">
                  {project.progression.map((step, i) => (
                    <div key={i} className="min-w-[260px] md:min-w-[300px] snap-center flex flex-col relative group">
                      
                      <div className={`w-14 h-14 rounded-full ${accentColor} text-black font-bold text-xl flex items-center justify-center mb-6 relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform`}>
                        {i + 1}
                      </div>

                      <div className={`flex-1 bg-[#111] border border-white/10 rounded-2xl p-6 transition-all duration-300 ${borderColor} hover:bg-white/5 flex flex-col`}>
                        <div className={`text-xs font-mono font-bold mb-3 opacity-60 uppercase tracking-widest ${textColor}`}>
                          Étapes {i + 1}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3. BILAN */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-green-500 rounded-full"></span>
                Bilan personnel
              </h2>
              <div className="bg-green-900/10 p-6 rounded-2xl border border-green-500/20 text-gray-200 italic relative">
                <span className="text-4xl absolute top-2 left-2 text-green-500/20">“</span>
                {project.details.bilan}
                <span className="text-4xl absolute bottom-[-10px] right-4 text-green-500/20">”</span>
              </div>
            </section>

          </div>

          {/* COLONNE DROITE  */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              
              {/* HARD SKILLS */}
              <div className="bg-[#111] p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]"></span>
                  Hard Skills
                </h3>
                <div className="space-y-5">
                  {project.details.hardSkills.map((skill, i) => {
                    const level = getSkillLevel(skill);
                    return (
                      <div key={i} className="group">
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm font-medium text-gray-300">{skill}</span>
                          <span className="text-xs text-amber-500/70 font-mono">{level}%</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2">
                          <div 
                            className="bg-amber-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                            style={{ width: `${level}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SOFT SKILLS */}
              <div className="bg-[#111] p-6 rounded-2xl border border-white/10">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
                  Soft Skills
                </h3>
                <div className="space-y-5">
                  {project.details.softSkills.map((skill, i) => {
                    const level = getSkillLevel(skill);
                    return (
                      <div key={i} className="group">
                        <div className="flex justify-between mb-1.5">
                          <span className="text-sm font-medium text-gray-300">{skill}</span>
                          <span className="text-xs text-cyan-500/70 font-mono">{level}%</span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2">
                          <div 
                            className="bg-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                            style={{ width: `${level}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}