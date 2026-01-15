// types/index.ts

// Pour séparer tes 10 ans d'XP dev de tes projets étudiants
export type ProjectCategory = 'FULLSTACK' | 'EMBARQUE' | 'IOT' | 'ELECTRONIQUE';

export interface TechStack {
  name: string;
  icon?: string; // Optionnel pour plus tard
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  technologies: string[];
  
  // Spécifique GEII : Lien vers le rapport PDF ou le schéma technique
  reportUrl?: string; 
  githubUrl?: string;
  
  // Pour l'affichage
  imageUrl?: string;
  featured: boolean; // Pour mettre en avant tes meilleurs projets sur l'accueil
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
}