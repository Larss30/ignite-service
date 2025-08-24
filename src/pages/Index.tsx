import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SectorsSection from "@/components/SectorsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <SectorsSection />
        <HowItWorksSection />
        <section id="services">
          <ServicesSection />
        </section>
        <CTASection />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
