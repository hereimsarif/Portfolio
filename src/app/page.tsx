import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Skills from '@/components/ui/Skills';
import Projects from '@/components/ui/Projects';
import Testimonials from '@/components/ui/Testimonials';
import Contact from '@/components/ui/Contact';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-light dark:bg-dark transition-colors duration-500">
      {/* Navbar (sticky) */}
      <Navbar />

      {/* All sections, spaced */}
      <section id="home" className="pt-32 md:pt-36">
        <Hero />
      </section>
      <section id="about" className="pt-20 pb-16">
        <About />
      </section>
      <section id="skills" className="pt-20 pb-16">
        <Skills />
      </section>
      <section id="projects" className="pt-20 pb-16">
        <Projects />
      </section>
      <section id="testimonials" className="pt-20 pb-16">
        <Testimonials />
      </section>
      <section id="contact" className="pt-20 pb-28">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
