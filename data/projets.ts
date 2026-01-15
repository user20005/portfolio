export type Category = 'WEB' | 'GEII';

export interface Project {
  id: string;
  title: string;
  category: Category;
  context: string;
  description: string;
  image?: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  // NOUVEAU : Les détails pour la page dédiée
  details?: {
    context: string;
    hardSkills: string[];
    softSkills: string[];
    bilan: string;
    images_gallery?: string[]; 
  };
}

export const projects: Project[] = [
  // --- PROJETS WEB  ---
  // {
  //   id: 'web-rentcar',
  //   title: 'Admin Location de Voiture',
  //   category: 'WEB',
  //   context: 'SaaS / CRM',
  //   description: "Dashboard d'administration complet pour agences de location. Gestion de flotte en temps réel et planning.",
  //   image: '',
  //   tags: ['React', 'TypeScript', 'Supabase'],
  //   links: { github: '#' }
  // },
  // {
  //   id: 'web-iot',
  //   title: 'Dashboard IoT Industriel',
  //   category: 'WEB',
  //   context: 'Projet Freelance',
  //   description: "Plateforme SaaS de visualisation de données capteurs en temps réel.",
  //   image: '',
  //   tags: ['Next.js', 'Socket.io', 'Redis'],
  //   links: { github: '#' }
  // },

  // --- PROJETS GEII (Avec les pages détaillées) ---
  {
    id: 'geii-alarme',
    title: 'Alarme Sécurisée FPGA',
    category: 'GEII',
    context: 'SAE 1.01 - Logique',
    description: "Système d'alarme sur FPGA avec différenciation des codes utilisateur et technicien.",
    image: '/portfolio/alarme.jpg',
    tags: ['VHDL', 'FPGA', 'Logique Combinatoire'],
    links: {},
    details: {
      context: "Réalisation d'un système de contrôle d'accès sécurisé implémenté sur cible FPGA (Intel/Altera). L'objectif était de gérer plusieurs niveaux de privilèges.",
      hardSkills: [
        "Programmation VHDL",
        "Synthèse et Routage (Quartus)",
        "Machines à états finis (FSM)",
        "Testbench et simulation"
      ],
      softSkills: [
        "Logique déductive",
        "Optimisation des ressources",
        "Gestion des contraintes temporelles"
      ],
      bilan: "Première approche concrète du hardware programmable. J'ai appris à penser en 'parallèle' plutôt qu'en 'séquentiel' (comme en C)."
    }
  },
  {
    id: 'geii-aspi',
    title: 'Robot Aspirateur',
    category: 'GEII',
    context: 'SAE 1.02 - Embarqué',
    description: "Robot autonome avec évitement d'obstacles et détection du vide.",
    image: '/portfolio/roomba.png',
    tags: ['Arduino', 'C++', 'Capteurs IR'],
    links: {},
    details: {
      context: "Développement du firmware d'un robot aspirateur autonome. Le robot doit couvrir une surface sans tomber dans les escaliers ni heurter les murs.",
      hardSkills: [
        "Programmation C++ sur microcontrôleur",
        "Traitement du signal (Capteurs IR)",
        "Contrôle moteur (PWM / Pont en H)",
        "Débuggage hardware (Oscilloscope)"
      ],
      softSkills: [
        "Travail en binôme",
        "Gestion de version (Git)",
        "Résolution de problèmes complexes"
      ],
      bilan: "Un projet complet mêlant code et électronique. J'ai particulièrement aimé l'optimisation de l'algorithme de déplacement pour couvrir le maximum de surface."
    }
  },
  {
    id: 'geii-velo',
    title: 'Vélo Électrique',
    category: 'GEII',
    context: 'SAE 2.01 - Puissance',
    description: "Chaîne de conversion d'énergie pour vélo électrique (Hacheur série).",
    image: '/portfolio/velo.jpg',
    tags: ['PSIM', 'Hacheur', 'Moteur DC'],
    links: {},
    details: {
      context: "Étude et réalisation du variateur de vitesse d'un vélo électrique. Dimensionnement des composants de puissance et de la commande.",
      hardSkills: [
        "Électronique de puissance (MOSFET, Diodes)",
        "Simulation thermique et électrique (PSIM)",
        "Régulation de vitesse (Boucle fermée)",
        "Sécurité électrique"
      ],
      softSkills: [
        "Prise de recul sur la sécurité",
        "Autonomie sur banc d'essai",
        "Respect des normes"
      ],
      bilan: "J'ai acquis une solide compréhension des contraintes de puissance (échauffement, commutation) et de l'importance du dimensionnement des dissipateurs."
    }
  },{
    id: 'geii-robot-esp32',
    title: 'Robot Suiveur de Ligne',
    category: 'GEII',
    context: 'SAE 2.02 - Systèmes Embarqués',
    description: "Robot suiveur de ligne avec ESP32 et capteurs infrarouges.",
    image: '/portfolio/robot-ligne.jpg',
    tags: ['ESP32', 'MicroPython', 'Capteurs IR'],
    links: {},
    details: {
      context: "Développement d'un robot suiveur de ligne utilisant une carte ESP32 programmée en MicroPython. Le robot doit suivre une trajectoire définie par une ligne noire sur fond blanc.",
      hardSkills: [
        "Programmation MicroPython sur ESP32",
        "Traitement de signal des capteurs IR",
        "Contrôle moteur (PWM)",  
        "Algorithmes de suivi de ligne"
      ],
      softSkills: [
        "Travail en équipe",  
        "Gestion de projet",
        "Résolution de problèmes techniques"
      ],
      bilan: "Ce projet m'a permis de me familiariser avec les microcontrôleurs modernes et de développer des compétences en robotique embarquée."
    }
  },
   {
    id: 'geii-ags',
    title: 'AGS - Analyseur Solaire',
    category: 'GEII',
    context: 'SAE 3.01 - Supervision',
    description: "Système d'analyse de gisement solaire sous LabVIEW.",
    image: '/portfolio/soleis.png',
    tags: ['LabVIEW', 'Instrumentation', 'Capteurs'],
    links: {},
    details: {
      context: "Création d'une interface de supervision pour caractériser le rendement de panneaux solaires en fonction de l'ensoleillement.",
      hardSkills: [
        "Développement LabVIEW (G-Code)",
        "Acquisition de données (DAQ)",
        "Traitement de données en temps réel",
        "IHM (Interface Homme-Machine)"
      ],
      softSkills: [
        "Design d'interface utilisateur",
        "Synthèse de données",
        "Curiosité pour les énergies renouvelables"
      ],
      bilan: "Maîtrise de l'environnement LabVIEW et de la chaîne d'acquisition complète, du capteur à l'écran."
    }
  },{
    id: 'geii-pt100',
    title: 'Conditionnement Sonde PT100',
    category: 'GEII',
    context: 'SAE 3.02 - Instrumentation',
    description: "Conception complète d'un circuit de conditionnement pour capteur de température PT100. Linéarisation du signal.",
    image: '/portfolio/pt100.jpg',
    tags: ['LTspice', 'AOP', 'Pont de Wheatstone'],
    links: {},
    details: {
      context: "Conception complète d'un circuit de conditionnement pour capteur de température PT100. Linéarisation du signal.",
      hardSkills: [
        "Simulation (LTspice)",
        "Amplification (AOP)",
        "Microcontrôleur ESP32",
        "Tests & Validation"
      ],
      softSkills: [
        "Rigueur",
        "Patience",
        "Logique",
        "Travail en équipe"
      ],
      bilan: "Approfondissement des connaissances en électronique analogique et en instrumentation."
    }
  }
];