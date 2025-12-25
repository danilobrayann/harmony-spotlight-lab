import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CoursesSection } from "@/components/CoursesSection";
import { SchoolGallery } from "@/components/SchoolGallery";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="inicio">
        <HeroCarousel />
      </section>
      <CoursesSection />
      <SchoolGallery />
      <Footer />
    </main>
  );
};

export default Index;
