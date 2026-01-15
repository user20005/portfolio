'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: 'mailto:marzoukmarecar5@gmail.com' },
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      if (isOpen) {
        // OUVERTURE : On transforme la pilule en rectangle arrondi
        
        // 1. Le conteneur devient un rectangle (moins arrondi)
        gsap.to(containerRef.current, {
          borderRadius: "24px", // Coins moins ronds pour laisser de la place
          width: "100%",        // Prend toute la largeur dispo
          maxWidth: "360px",    // Limite pour pas être trop large
          backgroundColor: "rgba(10, 10, 10, 0.95)", // Plus opaque pour la lisibilité
          duration: 0.4,
          ease: "power2.out"
        });

        // 2. Dérouler le menu
        gsap.to(menuRef.current, {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
        
        // 3. Apparition des liens
        gsap.fromTo(".nav-link-mobile", 
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, delay: 0.1 }
        );

      } else {
        // FERMETURE : Retour à la pilule
        
        // 1. Replier le menu
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power3.inOut",
        });

        // 2. Le conteneur redevient une pilule (attendre la fin du repli)
        gsap.to(containerRef.current, {
          borderRadius: "0", // Full rounded
          width: "auto",          // Largeur auto selon le contenu (logo + burger)
          backgroundColor: "rgba(10, 10, 10, 0.6)", // Retour à la transparence
          duration: 0.4,
          delay: 0.2 // Petit délai pour éviter que ça coupe le texte
        });
      }
    });

    // Reset Desktop
    mm.add("(min-width: 768px)", () => {
      gsap.set(menuRef.current, { height: "auto", opacity: 1 });
      gsap.set(containerRef.current, { borderRadius: "9999px", width: "auto", backgroundColor: "rgba(10, 10, 10, 0.6)" });
    });

  }, { scope: containerRef, dependencies: [isOpen] });

  return (
    <div className="fixed top-4 md:top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      {/* pointer-events-auto est important sur le nav pour qu'on puisse cliquer dessus,
         mais pas sur toute la largeur de l'écran (div parent) 
      */}
      <nav 
        ref={containerRef}
        className="pointer-events-auto relative bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden rounded-full"
        style={{ minWidth: 'min-content' }} // Empêche d'être trop petit
      >
        <div className="px-5 py-3 md:px-6 md:py-3 flex flex-col md:flex-row md:items-center">
          
          {/* HEADER (Logo + Burger) */}
          <div className="flex items-center justify-between gap-4 md:gap-8 w-full md:w-auto">
            <span className="font-bold text-white text-lg tracking-tight whitespace-nowrap">
              M<span className="text-cyan-400">.</span>Marecar
            </span>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1 text-gray-300 hover:text-white transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {/* Icône Burger / Croix simple */}
              <div className="w-6 h-6 flex items-center justify-center relative">
                 <span className={`absolute w-full h-0.5 bg-white transition-all ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                 <span className={`absolute w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                 <span className={`absolute w-full h-0.5 bg-white transition-all ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
              </div>
            </button>
          </div>

          {/* MENU DÉROULANT */}
          <div ref={menuRef} className="h-0 md:h-auto opacity-0 md:opacity-100 overflow-hidden md:overflow-visible w-full md:w-auto">
            
            <div className="flex flex-col md:flex-row md:items-center gap-1 pt-6 md:pt-0 pb-2 md:pb-0 border-t border-white/10 md:border-none mt-4 md:mt-0">
              
              {links.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link-mobile whitespace-nowrap block w-full md:w-auto px-4 py-3 md:py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl md:rounded-full transition-colors text-center md:text-left"
                >
                  {link.name}
                </Link>
              ))}

              <div className="hidden md:block w-[1px] h-6 bg-white/10 mx-2"></div>
              
              {/* Bouton CV */}
              <Link 
                href="/cv.pdf" 
                target="_blank"
                className="nav-link-mobile mt-2 md:mt-0 block w-full md:w-auto px-6 py-2.5 text-sm font-bold text-black bg-white rounded-xl md:rounded-full hover:bg-cyan-50 transition-transform text-center"
              >
                CV
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
};