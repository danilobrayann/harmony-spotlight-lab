import { motion } from "framer-motion";
import { Music2, Piano, Guitar, Mic2, Users, Clock } from "lucide-react";

const courses = [
  {
    icon: Piano,
    title: "Piano",
    description: "Do básico ao avançado, aprenda técnicas clássicas e contemporâneas.",
    duration: "6 meses",
    students: "120+",
  },
  {
    icon: Guitar,
    title: "Violão",
    description: "Desenvolva sua habilidade com acordes, dedilhado e solos.",
    duration: "4 meses",
    students: "200+",
  },
  {
    icon: Music2,
    title: "Violino",
    description: "Domine as cordas com técnicas tradicionais e modernas.",
    duration: "8 meses",
    students: "80+",
  },
  {
    icon: Mic2,
    title: "Canto",
    description: "Trabalhe sua voz com técnicas de respiração e projeção vocal.",
    duration: "4 meses",
    students: "150+",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function CoursesSection() {
  return (
    <section id="cursos" className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 font-body text-sm font-medium text-primary">
            100% Gratuito
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Nossos Cursos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
            Oferecemos uma variedade de cursos musicais completamente gratuitos,
            ministrados por professores experientes e apaixonados pela música.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {courses.map((course) => (
            <motion.div
              key={course.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <course.icon className="h-7 w-7" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground">
                {course.title}
              </h3>
              
              <p className="mt-2 font-body text-sm text-muted-foreground">
                {course.description}
              </p>
              
              <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-body text-xs text-muted-foreground">
                    {course.duration}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="font-body text-xs text-muted-foreground">
                    {course.students} alunos
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-1 -right-1 h-20 w-20 rounded-tl-full bg-primary/5 transition-all duration-300 group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#matricula"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body font-medium text-primary-foreground shadow-soft transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            Inscreva-se Gratuitamente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
