import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselItem {
  title: string;
  description: string;
  icon?: string;
}

interface CarouselSectionProps {
  title: string;
  subtitle?: string;
  items: CarouselItem[];
}

const CarouselSection = ({ title, subtitle, items }: CarouselSectionProps) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Show 3 items at a time on desktop
  const getVisibleItems = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (current + i + items.length) % items.length;
      visible.push({ ...items[idx], index: idx, offset: i });
    }
    return visible;
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop: 3-card view */}
          <div className="hidden md:flex gap-6 justify-center items-stretch">
            {getVisibleItems().map((item) => (
              <motion.div
                key={`${item.title}-${item.index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: item.offset === 0 ? 1 : 0.6,
                  scale: item.offset === 0 ? 1 : 0.95,
                }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`flex-1 max-w-sm rounded-2xl p-8 transition-all duration-500 ${
                  item.offset === 0
                    ? "glass-card shadow-lg shadow-primary/10 ring-1 ring-secondary/20"
                    : "bg-muted/30"
                }`}
              >
                {item.icon && <span className="text-4xl mb-4 block">{item.icon}</span>}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl p-8"
              >
                {items[current].icon && <span className="text-4xl mb-4 block">{items[current].icon}</span>}
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{items[current].title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{items[current].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-muted/50 hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
