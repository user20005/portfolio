import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OBLIGATOIRE : Génère un dossier 'out' statique (HTML/CSS/JS)
  output: 'export',

  // OBLIGATOIRE : Désactive l'optimisation d'image (qui nécessite un serveur Node)
  images: {
    unoptimized: true,
  },

  // OPTIONNEL : Si ton repo s'appelle "portfolio", décommente la ligne ci-dessous :
  basePath: "/portfolio",
};

export default nextConfig;