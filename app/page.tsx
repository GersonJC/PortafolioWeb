import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
//import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Placeholder sections */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-secondary/20">
        <h2 className="text-4xl font-bold">Sobre Mí (Próximamente)</h2>
      </section>
      
      <section id="experience" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Experiencia (Próximamente)</h2>
      </section>
      
      <section id="projects" className="min-h-screen flex items-center justify-center bg-secondary/20">
        <h2 className="text-4xl font-bold">Proyectos (Próximamente)</h2>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">Contacto (Próximamente)</h2>
      </section>
    </main>
  );
}
