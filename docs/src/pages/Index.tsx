import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Apply animations when components are in view
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    document.querySelectorAll('.opacity-0').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Novo: rolar automaticamente para a seção correta quando a página carrega
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash; // ex: "#/projects" ou "#projects"
      if (!hash) return;

      // normalize para seletor "#projects"
      const selector = hash.startsWith('#/') ? `#${hash.slice(2)}` : hash.startsWith('#') ? hash : `#${hash}`;

      const el = document.querySelector(selector);
      if (el) {
        // pequeno timeout pra garantir que tudo esteja renderizado
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    };

    // roda no mount
    scrollToHash();

    // escuta mudanças de hash (ex.: usuário colou outro link)
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
