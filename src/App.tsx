import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { InspirationGallery } from './components/InspirationGallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#242321] flex flex-col font-sans selection:bg-[#B69A70]/30 selection:text-[#242321]">
      {/* Sticky Header with 3-Zone Contract */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* 6 Core Services */}
        <Services />

        {/* Curated Projects & Concepts */}
        <Projects />

        {/* Why Choose Aura Interior */}
        <WhyChooseUs />

        {/* 5-Step Design Process Timeline */}
        <Process />

        {/* Visual Inspiration Gallery */}
        <InspirationGallery />

        {/* Client Testimonials Carousel */}
        <Testimonials />

        {/* Interactive Contact & WhatsApp Lead Generation */}
        <ContactForm />

        {/* Studio Location Section */}
        <LocationSection />
      </main>

      {/* Luxury Brand Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
