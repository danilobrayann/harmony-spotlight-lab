import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-navy text-primary-foreground">
      {/* CTA Section */}
      <section id="matricula" className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
              Comece Sua Jornada Musical
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-primary-foreground/90">
              Inscreva-se agora e descubra o músico que existe em você.
              Vagas limitadas!
            </p>
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Seu nome"
                  id="enrollment-name"
                  className="w-full rounded-full bg-primary-foreground/10 px-6 py-4 font-body text-primary-foreground placeholder:text-primary-foreground/60 backdrop-blur-sm transition-all focus:bg-primary-foreground/20 focus:outline-none"
                />
                <select
                  id="enrollment-course"
                  className="w-full rounded-full bg-primary-foreground/10 px-6 py-4 font-body text-primary-foreground backdrop-blur-sm transition-all focus:bg-primary-foreground/20 focus:outline-none cursor-pointer appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="text-foreground">Selecione o curso</option>
                  <option value="Piano" className="text-foreground">Piano</option>
                  <option value="Violão" className="text-foreground">Violão</option>
                  <option value="Violino" className="text-foreground">Violino</option>
                  <option value="Canto" className="text-foreground">Canto</option>
                  <option value="Bateria" className="text-foreground">Bateria</option>
                  <option value="Teoria Musical" className="text-foreground">Teoria Musical</option>
                </select>
              </div>
              <button
                onClick={() => {
                  const name = (document.getElementById('enrollment-name') as HTMLInputElement).value;
                  const course = (document.getElementById('enrollment-course') as HTMLSelectElement).value;
                  if (!name || !course) {
                    alert('Por favor, preencha seu nome e escolha um curso!');
                    return;
                  }
                  const message = encodeURIComponent(`Olá! Gostaria de me matricular no curso de ${course} na Harmony Spotlight Lab. Meu nome é ${name}.`);
                  window.open(`https://wa.me/551112345678?text=${message}`, '_blank');
                }}
                className="mt-6 w-full rounded-full bg-primary-foreground px-8 py-4 font-body font-bold text-primary transition-all hover:scale-105 hover:shadow-glow flex items-center justify-center gap-2"
              >
                Matricular via WhatsApp 🚀
              </button>
              <p className="mt-4 text-xs text-primary-foreground/60">
                Ao clicar, você será redirecionado para o nosso WhatsApp.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="font-display text-xl font-bold">Escola de Música</h3>
            <p className="mt-4 font-body text-sm text-primary-foreground/70">
              Transformando vidas através da música há mais de 15 anos. Oferecemos
              cursos gratuitos de alta qualidade para todas as idades.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-all hover:bg-primary hover:text-primary-foreground"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold">Links Rápidos</h3>
            <ul className="mt-4 space-y-3">
              {["Início", "Cursos", "Nossa Escola", "Professores", "Blog"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-display text-xl font-bold">Cursos</h3>
            <ul className="mt-4 space-y-3">
              {["Piano", "Violão", "Violino", "Canto", "Bateria", "Teoria Musical"].map(
                (course) => (
                  <li key={course}>
                    <a
                      href="#"
                      className="font-body text-sm text-primary-foreground/70 transition-colors hover:text-primary"
                    >
                      {course}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-bold">Contato</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-body text-sm text-primary-foreground/70">
                  Rua da Música, 123 - Centro
                  <br />
                  São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-body text-sm text-primary-foreground/70">
                  (11) 1234-5678
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-body text-sm text-primary-foreground/70">
                  contato@escolademusica.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-body text-sm text-primary-foreground/70">
                  Seg - Sex: 8h às 21h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-sm text-primary-foreground/50">
            © 2024 Escola de Música. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
