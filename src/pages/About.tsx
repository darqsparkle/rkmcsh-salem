import { Eye, Target, Gem, Award, Star, TrendingUp } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/layout/HeroSection";
import SubHeroSection from "@/components/layout/SubHeroSection";
import CarouselSection from "@/components/layout/CarouselSection";
import heroImage from "@/assets/hero-about.jpg";

const About = () => {
  return (
    <PageLayout>
      <HeroSection
        backgroundImage={heroImage}
        title="Our Vision, Our Promise"
        subtitle="Rooted in tradition, guided by innovation — RK MCH stands as a beacon of trust, healing, and excellence in healthcare."
      />

      <SubHeroSection
        title="Our Foundation"
        subtitle="Built on values that prioritize human dignity and compassionate healing"
        cards={[
          { icon: Eye, title: "Our Vision", description: "To be the most trusted healthcare institution, blending modern medicine with holistic care." },
          { icon: Target, title: "Our Mission", description: "Delivering accessible, affordable, and advanced healthcare to every patient who walks through our doors." },
          { icon: Gem, title: "Our Values", description: "Compassion, integrity, excellence, and respect form the cornerstone of everything we do." },
          { icon: Award, title: "Leadership", description: "Led by renowned medical professionals with decades of experience and a passion for healing." },
          { icon: Star, title: "Patient First", description: "Every decision, every innovation, every effort is centered around patient well-being and comfort." },
          { icon: TrendingUp, title: "Continuous Growth", description: "Constantly evolving through research, education, and adoption of the latest medical breakthroughs." },
        ]}
      />

      <CarouselSection
        title="Milestones & Achievements"
        subtitle="A legacy of excellence and compassionate care"
        items={[
          { title: "Founded with Purpose", description: "Established with a vision to provide world-class healthcare rooted in compassion and divine care.", icon: "🏛️" },
          { title: "10,000+ Surgeries", description: "Successfully performed over ten thousand surgeries with outstanding patient outcomes.", icon: "⚕️" },
          { title: "Award-Winning Care", description: "Recognized by national healthcare bodies for excellence in patient care and safety standards.", icon: "🏆" },
          { title: "Community Impact", description: "Conducted hundreds of health camps and outreach programs serving the wider community.", icon: "🤝" },
          { title: "Technology Leader", description: "Among the first to adopt advanced robotic and minimally invasive surgical technologies.", icon: "🔬" },
        ]}
      />
    </PageLayout>
  );
};

export default About;
