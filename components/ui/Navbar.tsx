'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '/contact' }
  ];

  // Animation simple du menu mobile (Apparition / Disparition)
  useGSAP(() => {
    if (isOpen) {
      // Ouvre le menu : descend légèrement et devient visible
      gsap.to(menuRef.current, {
        y: 0,
        opacity: 1,
        visibility: 'visible',
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.fromTo(".mobile-link",
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.3, delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, {
        y: -10,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
           if (menuRef.current) menuRef.current.style.visibility = 'hidden';
        }
      });
    }
  }, { dependencies: [isOpen] });

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex flex-col items-center pointer-events-none">
      
      {/* 1. LA BARRE PRINCIPALE (Dynamic Island ) */}
      <nav className="pointer-events-auto bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full px-2 py-2 flex items-center justify-between gap-2 transition-all hover:border-white/20 hover:shadow-cyan-500/10 hover:shadow-lg">
        
        {/* Logo */}
        <Link href="/" className="pl-4 pr-2 font-bold text-white tracking-tight hover:text-cyan-400 transition-colors">
          Marzouk<span className="text-cyan-400">.</span>
        </Link>

        {/* Liens Desktop  */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all"
            >
              {link.name}
            </Link>
          ))}
          
        </div>

        {/* Bouton Contact (Desktop) */}
        <Link 
          href="/contact"
          target="_self"
          className="hidden md:block bg-white text-black text-xs font-bold px-5 py-2.5 rounded-full hover:scale-105 transition-transform mr-1"
        >
          Voir mon CV
        </Link>

        {/* Bouton Burger (Mobile ) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 bg-white/5 rounded-full text-white hover:bg-white/10 transition-colors active:scale-95"
        >
           <div className="w-5 h-5 flex flex-col justify-center items-center relative">
              <span className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-1'}`}></span>
              <span className={`absolute h-0.5 w-5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-1'}`}></span>
           </div>
        </button>
      </nav>

      {/* 2. LE MENU MOBILE */}
      <div 
        ref={menuRef}
        className="pointer-events-auto mt-2 w-[90vw] max-w-[300px] bg-[#111] border border-white/10 rounded-3xl p-2 shadow-xl flex flex-col gap-1 opacity-0 invisible translate-y-[-10px]"
      >
        {links.map((link) => (
          <Link 
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="mobile-link text-center text-sm font-medium text-gray-300 hover:text-white py-3 hover:bg-white/5 rounded-2xl transition-colors"
          >
            {link.name}
          </Link>
        ))}
        
        <Link 
          href="/contact"
          target="_self"
          onClick={() => setIsOpen(false)}
          className="mobile-link mt-1 text-center text-sm font-bold bg-cyan-500/10 text-cyan-400 py-3 rounded-2xl border border-cyan-500/20"
        >
          Voir mon CV
        </Link>
      </div>

    </div>
  );
};