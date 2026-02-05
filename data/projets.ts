export type Category = 'WEB' | 'GEII';

export interface ProgressionStep {
  title: string;
  description: string;
}
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
  progression?: ProgressionStep[];
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
  {
    id: 'robot',
    title: 'SAE ROBOT ESP32 WIFI',
    category: 'WEB',
    context: 'Projet universitaire',
    description: "Interface de contrôle d'un robot via une application web(WEBSOCKET).",
    image: '/robot/esp32.jpeg',
    tags: ['C++', 'JavaScript', 'WebSocket'],
    links: { github: 'https://github.com/user20005/robot' }
  },
  {
    id: 'station-meteo',
    title: 'Station Météo Qtcreator',
    category: 'WEB',
    context: 'Projet universitaire',
    description: "Application de visualisation des données d'une station météo.",
    image: '',
    tags: ['C++', ' Qt', 'json'],
    links: { github: 'https://github.com/user20005/station-meteo' }
  },{
    id: 'a-venir',
    title: 'Projet à venir...',
    category: 'WEB',
    context: 'En production',
    description: "Mise en progression de mon portfolio.",
    image: '/soon.jpg',
    tags: ['Bientôt Disponible'],
    links: {}
  },


  // --- PROJETS GEII (Avec les pages détaillées) ---
  {
    id: 'geii-alarme',
    title: 'Alarme Sécurisée FPGA',
    category: 'GEII',
    context: 'SAE 1.01 - Logique',
    description: "Système d'alarme sur FPGA avec différenciation des codes utilisateur et technicien.",
    image: '/alarme/alarme.jpg',
    progression: [
      { title: "Analyse du Cahier des Charges", description: "Compréhension des exigences fonctionnelles et contraintes matérielles." },
      { title: "Conception Circuits", description: "Développement des modules VHDL pour la gestion des codes et des états de l'alarme." },
      { title: "Simulation", description: "Simulation du système sur Waveforme pour valider le comportement." },
      { title: "Implémentation", description: "Utilisation de Quartus pour synthétiser le design et le programmer sur la carte FPGA." }
    ],
    tags: ['VHDL', 'FPGA', 'Logique Combinatoire'],
    links: {},
    details: {
      context: "Réalisation d'un système de contrôle d'accès sécurisé implémenté sur cible FPGA (Intel/Altera). L'objectif était de gérer plusieurs niveaux de privilèges.",
      hardSkills: [
        "Programmation VHDL",
        "Synthèse et Routage (Quartus)",
        "Circuits Séquentiels et Combinatoires",
        "Testbench et simulation"
      ],
      softSkills: [
        "Logique déductive",
        "Optimisation des ressources",
        "Gestion des contraintes temporelles",
        "Travail en équipe"
      ],
      bilan: "Première approche concrète du hardware programmable. J'ai appris à penser en 'parallèle' plutôt qu'en 'séquentiel' (comme en C)."
    }
  },
  {
    id: 'geii-aspi',
    title: 'Robot Aspirateur',
    category: 'GEII',
    context: 'SAE 1.02 - Embarqué',
    progression: [
      { title: "Étude des Capteurs", description: "Analyse des capteurs IR pour détection d'obstacles et de vide." },
      { title: "Intégration Matérielle", description: "Assemblage des composants électroniques (optocoupleurs, ultrasons)." },
      { title: "Développement", description: "Programmation en C++ sur Arduino pour la détection obstacles." },
      { title: "Validation", description: "Validation sur banc d'essai avec l'oscilloscope." }
    ],
    description: "Robot autonome avec évitement d'obstacles et détection du vide.",
    image: '/rommba/roomba.png',
    tags: ['Arduino', 'C++', 'Capteurs IR', 'Ultrasons'],
    links: {},
    details: {
      context: "Développement du firmware d'un robot aspirateur autonome. Le robot doit couvrir une surface sans tomber dans les escaliers ni heurter les murs.",
      hardSkills: [
        "Programmation C++ sur microcontrôleur",
        "Traitement du signal (Capteurs IR, Ultrasons(HC-SR04))",
        "Contrôle moteur (PWM / Pont en H)",
        "Débuggage hardware (Oscilloscope)"
      ],
      softSkills: [
        "Travail en binôme",
        "Gestion de version (Git)",
        "Résolution de problèmes complexes",
        "Adaptabilité face aux contraintes matérielles"
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
    image: '/velo/velo.jpg',
    progression: [
      { title: "Analyse Théorique", description: "Étude des principes de l'électronique de puissance et du hacheur série." },
      { title: "Dimensionnement", description: "Calcul des composants (MOSFET, diodes, résistances)." },
      { title: "Simulation", description: "Modélisation du système sous PSIM pour valider les performances." },
      { title: "Tests Pratiques", description: "Creation de la carte électronique et soudure des composants." }
    ],
    tags: ['PSIM', 'Hacheur', 'Moteur DC'],
    links: {},
    details: {
      context: "Étude et réalisation du variateur de vitesse d'un vélo électrique. Dimensionnement des composants de puissance et de la commande.",
      hardSkills: [
        "Électronique de puissance (MOSFET, Diodes)",
        "Simulation thermique et électrique (PSIM)",
        "Régulation de vitesse (Boucle fermée)",
        "Sécurité électrique "
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
    title: 'Robot esp32 bluetooth',
    category: 'GEII',
    context: 'SAE 2.02 - Systèmes Embarqués',
    description: "Robot esp32 bluetooth avec ESP32 et capteurs ultrasoniques.",
    image: '/robot/esp32.jpeg',
    progression: [
      { title: "Choix du Microcontrôleur", description: "Sélection de l'ESP32 pour ses capacités." },
      { title: "Intégration des Capteurs", description: "Connexion et calibration des capteurs ultrasoniques pour la détection d'obstacles." },
      { title: "Développement du Firmware", description: "Programmation en C++ pour la communication Bluetooth,WIFI et le contrôle des moteurs." },
      { title: "Tests et Optimisation", description: "Validation des performances sur piste et ajustement des paramètres." }
    ],
    tags: ['ESP32', 'Bluetooth', 'Capteurs Ultrasoniques'],
    links: {},
    details: {
      context: "Développement d'un robot utilisant une carte ESP32 programmée en C++. Le robot doit suivre une trajectoire définie par une ligne noire sur fond blanc.",
      hardSkills: [
        "Programmation C++ sur ESP32",
        "Traitement de signal des capteurs ultrasoniques",
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
    image: '/ags/soleis.png',
    progression: [
      { title: "Étude du Cahier des Charges", description: "Compréhension des besoins en acquisition et traitement des données solaires." },
      { title: "Développement de l'IHM", description: "Création de l'interface utilisateur sous LabVIEW pour la visualisation des données." },
      { title: "Création de la carte électronique", description: "Conception et assemblage de la carte d'acquisition des capteurs avec des filtres." },
      { title: "Conversion analogique - numérique", description: "Mise en place de la conversion A/N pour le traitement numérique des signaux sur le PIC18F45K20." }
    ],
    tags: ['LabVIEW', 'Instrumentation', 'Capteurs', 'PIC18F45K20'],
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
        "Gestion de projet",
        "Travail en équipe"
      ],
      bilan: "Maîtrise de l'environnement LabVIEW et de la chaîne d'acquisition complète, du capteur à l'écran."
    }
  },{
    id: 'geii-pt100',
    title: 'Conditionnement Sonde PT100',
    category: 'GEII',
    context: 'SAE 3.02 - Instrumentation',
    description: "Conception complète d'un circuit de conditionnement pour capteur de température PT100. Linéarisation du signal.",
    image: '/pt100/pt100.jpg',
    progression: [
      { title: "Analyse du Capteur PT100", description: "Étude des caractéristiques du Sonde PT100." },
      { title: "Conception du Circuit", description: "Développement du schéma de conditionnement avec amplification et linéarisation sur Ltspice." },
      { title: "Simulation LTspice", description: "Modélisation et simulation du circuit pour valider les performances." },
      { title: "Implémentation et Tests", description: "Réalisation du prototype, tests pratiques et validation des résultats." },
      { title: "Intégration ESP32 et MQTT", description: "Ajout d'un module ESP32 pour la transmission des données via MQTT chiffré." }
    ],
    tags: ['LTspice', 'AOP', 'MQTT'],
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
      bilan: "Approfondissement des connaissances en électronique analogique et en instrumentation.",
      
    }
  }
];