export interface Skill {
  name: string;
  level: number;
  icon?: string; 
}

export const webSkills: Skill[] = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js / NestJS", level: 85 },
  { name: "Docker / CI/CD", level: 80 },
  { name: "PostgreSQL / Prisma", level: 85 },
];

export const geiiSkills: Skill[] = [
  { name: "C / C++ Embarqué", level: 75 },
  { name: "VHDL / FPGA", level: 60 },
  { name: "Microcontrôleurs (STM32/ESP32)", level: 80 },
  { name: "Électronique Analogique", level: 65 },
  { name: "Protocoles (I2C, SPI, MQTT)", level: 85 },
];