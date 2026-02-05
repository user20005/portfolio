import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/skills';
import { About } from '@/components/sections/About';
import { CV } from '@/components/sections/CV';
import { Projects } from '@/components/sections/projets';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <CV />
      <Projects />
      <div id="skills" className="relative z-10 -mt-20 pt-20">
        <Skills />
      </div>

    </main>
  );
}