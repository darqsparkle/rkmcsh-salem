import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/layout/HeroSection";
import heroImage from "@/assets/hero-gallery.jpg";

// Dummy gallery images - using gradient placeholders
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: [
    "Reception Area", "Patient Room", "Operation Theatre", "ICU Ward",
    "Diagnostic Lab", "Pharmacy", "Waiting Lounge", "Garden Courtyard",
    "Radiology Suite", "Neonatal ICU", "Rehabilitation Center", "Conference Hall",
  ][i],
  gradient: [
    "from-primary/20 to-secondary/20",
    "from-secondary/20 to-emerald/20",
    "from-primary/15 to-emerald/15",
    "from-emerald/20 to-primary/20",
    "from-secondary/15 to-primary/15",
    "from-primary/10 to-secondary/25",
    "from-emerald/15 to-secondary/15",
    "from-primary/20 to-emerald/10",
    "from-secondary/20 to-primary/10",
    "from-emerald/20 to-primary/15",
    "from-primary/15 to-secondary/20",
    "from-secondary/10 to-emerald/20",
  ][i],
}));

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSpotlight = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(nextSpotlight, 3000);
    return () => clearInterval(timer);
  }, [isHovering, nextSpotlight]);

  return (
    <PageLayout>
      <HeroSection
        backgroundImage={heroImage}
        title="A Glimpse Into Healing"
        subtitle="Explore the serene spaces and advanced facilities that make RK MCH a sanctuary of care and comfort."
      />

      {/* Sub-hero */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Healing Spaces</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every corner of RK MCH is designed with purpose — blending modern medical infrastructure with 
              environments that nurture comfort, trust, and recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Spotlight Gallery Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Gallery Spotlight</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Hover to pause, or watch the spotlight glide through our facilities</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => {
                  setIsHovering(true);
                  setActiveIndex(i);
                }}
                onMouseLeave={() => setIsHovering(false)}
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out ${
                  i === activeIndex
                    ? "scale-105 ring-2 ring-secondary ring-offset-2 ring-offset-background shadow-xl shadow-secondary/20 brightness-110 z-10"
                    : "brightness-75 hover:brightness-90"
                }`}
              >
                {/* Gradient placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${img.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                
                {/* Icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-40">🏥</span>
                </div>

                {/* Title overlay */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-500 ${
                  i === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}>
                  <p className="text-primary-foreground text-sm font-medium">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gallery;
