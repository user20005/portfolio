import { Navbar } from '@/components/ui/Navbar';
import { ContactForm } from '@/components/sections/contactForm'; 

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-200 selection:bg-cyan-500/30 pb-20">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-32">
        
        {/* EN-TÊTE */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contactez-<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">moi</span>
          </h1>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLONNE GAUCHE : INFOS & CARTE */}
          <div className="space-y-6">
            
            {/* Carte Email */}
            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-900/20 rounded-xl flex items-center justify-center text-cyan-400 border border-cyan-500/10 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email</h3>
                </div>
              </div>
              <a href="mailto:marzoukmarecar5@gmail.com" className="text-gray-300 hover:text-white transition-colors block break-all">
                marzoukmarecar5@gmail.com
              </a>
            </div>

            {/* Carte Localisation */}
            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-900/20 rounded-xl flex items-center justify-center text-purple-400 border border-purple-500/10 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Localisation</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Mobilité</p>
                </div>
              </div>
              <p className="text-gray-300">Île-de-France, France</p>
            </div>

            {/* Carte CV */}
            <div className="bg-[#111] p-6 rounded-2xl border border-white/10 hover:border-green-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-900/20 rounded-xl flex items-center justify-center text-green-400 border border-green-500/10 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Mon CV</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Format PDF</p>
                </div>
              </div>
              <a href="CV__Marzouk_Marecar.pdf" target="_blank" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium">
                Télécharger le document
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              </a>
            </div>

          </div>

          {/* COLONNE DROITE : LE FORMULAIRE */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}