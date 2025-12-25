import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Music, Sun, Moon } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#cursos", label: "Cursos" },
  { href: "#escola", label: "Nossa Escola" },
  { href: "#contato", label: "Contato" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Music className="h-5 w-5 text-primary-foreground" />
          </div>
          <span
            className={`font-display text-xl font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Escola de Música
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`rounded-full p-2 transition-all hover:bg-primary/10 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          
          <a
            href="#matricula"
            className="rounded-full bg-primary px-6 py-2 font-body text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-glow"
          >
            Matricule-se
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDarkMode}
            className={`rounded-full p-2 transition-all ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-background/95 backdrop-blur-md md:hidden"
        >
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-body text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#matricula"
              className="mt-2 rounded-full bg-primary px-6 py-3 text-center font-body font-medium text-primary-foreground"
            >
              Matricule-se
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
