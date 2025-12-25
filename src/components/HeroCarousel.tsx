import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroImage from "@/assets/hero-music-school.jpg";
import studentsGuitar from "@/assets/students-guitar.jpg";
import pianoHands from "@/assets/piano-hands.jpg";
import violinLesson from "@/assets/violin-lesson.jpg";

const slides = [
  {
    image: heroImage,
    title: "Descubra a Magia da Música",
    subtitle: "Cursos gratuitos para todas as idades",
  },
  {
    image: studentsGuitar,
    title: "Aprenda com os Melhores",
    subtitle: "Professores qualificados e apaixonados",
  },
  {
    image: pianoHands,
    title: "Do Iniciante ao Avançado",
    subtitle: "Metodologia personalizada para você",
  },
  {
    image: violinLesson,
    title: "Transforme sua Paixão em Arte",
    subtitle: "Matricule-se gratuitamente",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-4xl font-bold text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {slides[currentSlide].title}
            </h1>
            <p className="mt-4 font-body text-lg text-primary-foreground/90 sm:text-xl md:text-2xl">
              {slides[currentSlide].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="#cursos"
            className="rounded-full bg-primary px-8 py-4 font-body font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            Ver Cursos
          </a>
          <a
            href="#escola"
            className="rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-4 font-body font-medium text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:bg-primary-foreground/20"
          >
            Conhecer Escola
          </a>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-foreground/10 p-3 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-foreground/10 p-3 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-3 bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
