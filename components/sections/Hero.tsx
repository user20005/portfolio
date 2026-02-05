"use client";

import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {

      gsap.fromTo(
        ".bento-box",
        { scale: 0.9, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.2)", 
          delay: 0.2,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex justify-center items-center px-4 py-24 relative overflow-hidden">
      {/* Fond subtil technique */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* --- GRILLE  --- */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-4 relative z-10">
        {/* BLOC 1 : INTRODUCTION */}
        <div className="bento-box md:col-span-8 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center space-y-4 hover:border-white/20 transition-colors group">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-medium text-cyan-300 uppercase tracking-wider">
              Portfolio 
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Marzouk{" "}
            <span className="text-gray-500 group-hover:text-white transition-colors duration-500">
              Marecar
            </span>
          </h1>
          <div className="hero-content space-y-1">
            {/* Ligne 1 : L'étudiant */}
            <p className="text-xl md:text-2xl text-white font-light">
              Étudiant{" "}
              <span className="text-cyan-300 border-b border-cyan-500/30 pb-0.5 font-medium">
                BUT 2 GEII
              </span>{" "}
              <span className="text-cyan-500/80 font-mono ml-1 text-sm">
                Parcours ESE
              </span>
            </p>

            {/* Ligne 2 : Le développeur */}
            <p className="text-lg md:text-xl text-gray-400">
              & Développeur Fullstack{" "}
              <span className="text-gray-500 text-base align-middle">
                (4 ans d'exp)
              </span>
            </p>
          </div>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Passionné par la création de solutions connectées. En parallèle de
            mon cursus GEII, je mobilise mon expérience en développement Web et
            mes acquis en électronique pour concevoir des projets IoT innovants
          </p>
        </div>

        {/* BLOC 2 : PHOTO */}
        <div className="bento-box md:col-span-4 bg-[#111] border border-white/10 rounded-3xl relative overflow-hidden min-h-[300px] group">
          <Image
            src="/PDP.png"
            alt="Marzouk"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl flex items-center justify-between">
            <span className="text-sm font-bold text-white">Marzouk.M</span>
            <span className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
          </div>
        </div>

        {/* BLOC 3 : INFO ÉTUDIANT */}
        <div className="bento-box md:col-span-5 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
          <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 text-blue-400">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">
              Étudiant BUT 2 GEII
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Parcours Électronique & Systèmes Embarqués
            </p>
          </div>
        </div>

        {/* BLOC 4 : INFO DEV  */}
        <div className="bentobox md:col-span-4 bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:bg-white/5 transition-colors">
          <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-400">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">
              Développeur Fullstack
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              4 ans d'expérience React / Next.js C / C++
            </p>
          </div>
        </div>

        {/* BLOC 5 : RÉSEAUX  */}
        <div className="bento-box md:col-span-3 grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-4">
          {/* Bouton GitHub */}
          <a
            href="https://github.com/user20005"
            target="_blank"
            className="relative overflow-hidden bg-[#111] border border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group p-4 md:p-0">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Icône GitHub  */}
            <svg
              className="w-6 h-6 mb-2 md:mb-0 md:mr-2 transition-transform group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>

            <span className="font-bold text-sm md:text-base group-hover:scale-105 transition-transform">
              GitHub
            </span>
          </a>

          {/* Bouton Contact */}
          <a
            href="mailto:marzoukmarecar5@gmail.com"
            className="relative overflow-hidden bg-[#111] border border-white/10 rounded-3xl flex flex-col md:flex-row items-center justify-center text-white hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300 group p-4 md:p-0">
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Icône Mail */}
            <svg
              className="w-6 h-6 mb-2 md:mb-0 md:mr-2 transition-transform group-hover:scale-110 group-hover:-rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>

            <span className="font-bold text-sm md:text-base group-hover:scale-105 transition-transform">
              Contact
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
