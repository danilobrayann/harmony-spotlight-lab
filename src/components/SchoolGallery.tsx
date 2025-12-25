import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import studentsGuitar from "@/assets/students-guitar.jpg";
import pianoHands from "@/assets/piano-hands.jpg";
import violinLesson from "@/assets/violin-lesson.jpg";
import schoolInterior from "@/assets/school-interior.jpg";
import childrenSinging from "@/assets/children-singing.jpg";
import heroImage from "@/assets/hero-music-school.jpg";

const galleryImages = [
  { src: studentsGuitar, alt: "Aula de violão em grupo", category: "Aulas" },
  { src: pianoHands, alt: "Aula de piano", category: "Instrumentos" },
  { src: violinLesson, alt: "Aula de violino", category: "Aulas" },
  { src: schoolInterior, alt: "Interior da escola", category: "Estrutura" },
  { src: childrenSinging, alt: "Aula de canto infantil", category: "Aulas" },
  { src: heroImage, alt: "Sala de música", category: "Estrutura" },
];

export function SchoolGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="escola" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 font-body text-sm font-medium text-accent">
            Conheça Nosso Espaço
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Nossa Escola
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            Um ambiente acolhedor e equipado para você desenvolver todo seu
            potencial musical.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-64 sm:h-full" : "h-48 sm:h-64"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="inline-block rounded-full bg-primary/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  {image.category}
                </span>
                <p className="mt-2 font-body text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { value: "500+", label: "Alunos Formados" },
            { value: "15", label: "Anos de Experiência" },
            { value: "20", label: "Professores" },
            { value: "100%", label: "Gratuito" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl bg-card p-6 text-center shadow-card"
            >
              <span className="font-display text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </span>
              <p className="mt-2 font-body text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-h-[90vh] max-w-full rounded-2xl object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-primary-foreground/10 p-3 text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
              aria-label="Fechar"
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
