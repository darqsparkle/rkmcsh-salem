import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  cta?: ReactNode;
}

const FloatingParticle = ({ delay, left, size }: { delay: number; left: string; size: number }) => (
  <div
    className="floating-particle bg-emerald-light/30"
    style={{
      width: size,
      height: size,
      left,
      bottom: "-20px",
      animationDelay: `${delay}s`,
      animationDuration: `${14 + delay * 2}s`,
    }}
  />
);

const HeroSection = ({ title, subtitle, backgroundImage, cta }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
      )}

      {/* Aura glows */}
      <div className="hero-glow top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow-secondary bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />

      {/* Floating particles */}
      <FloatingParticle delay={0} left="10%" size={6} />
      <FloatingParticle delay={3} left="30%" size={4} />
      <FloatingParticle delay={6} left="55%" size={8} />
      <FloatingParticle delay={9} left="75%" size={5} />
      <FloatingParticle delay={2} left="90%" size={6} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {cta}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
