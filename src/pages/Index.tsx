import { Link } from "react-router-dom";
import { Clock, Shield, Users, Heart, Stethoscope, Activity } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/layout/HeroSection";
import SubHeroSection from "@/components/layout/SubHeroSection";
import CarouselSection from "@/components/layout/CarouselSection";
import heroImage from "@/assets/hero-home.jpg";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection
        backgroundImage={heroImage}
        title="Where Healing Meets Serenity"
        subtitle="Experience world-class healthcare infused with compassion, trust, and divine care at RK Multispeciality Hospital."
        cta={
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/specialities"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]"
            >
              Explore Specialities
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl border border-border text-foreground font-medium text-sm transition-all duration-300 hover:bg-muted/50 hover:scale-[1.02]"
            >
              Book Appointment
            </Link>
          </div>
        }
      />

      <SubHeroSection
        title="Why Choose RK MCH"
        subtitle="Trusted by thousands of families for compassionate, advanced healthcare"
        cards={[
          {
            icon: Clock,
            title: "24/7 Emergency Care",
            description: "Round-the-clock emergency services with rapid response teams and state-of-the-art trauma care.",
          },
          {
            icon: Shield,
            title: "Advanced Technology",
            description: "Equipped with cutting-edge medical technology for accurate diagnosis and effective treatment.",
          },
          {
            icon: Users,
            title: "Expert Specialists",
            description: "A team of highly experienced doctors and specialists dedicated to your well-being.",
          },
          {
            icon: Heart,
            title: "Compassionate Care",
            description: "Patient-first approach ensuring comfort, dignity, and holistic healing at every step.",
          },
          {
            icon: Stethoscope,
            title: "Comprehensive Services",
            description: "From preventive care to complex surgeries, all under one roof with seamless coordination.",
          },
          {
            icon: Activity,
            title: "Modern Infrastructure",
            description: "World-class facilities designed for patient comfort with serene healing environments.",
          },
        ]}
      />

      <CarouselSection
        title="Our Departments"
        subtitle="Specialized care across every medical discipline"
        items={[
          { title: "Cardiology", description: "Advanced cardiac care with state-of-the-art catheterization labs and heart surgery suites.", icon: "🫀" },
          { title: "Orthopaedics", description: "Comprehensive bone and joint care, from sports medicine to complex joint replacements.", icon: "🦴" },
          { title: "Neurology", description: "Expert neurological care for brain, spine, and nervous system conditions.", icon: "🧠" },
          { title: "Paediatrics", description: "Gentle, expert care for children from newborns to adolescents.", icon: "👶" },
          { title: "Obstetrics & Gynaecology", description: "Complete women's health services with compassionate maternity care.", icon: "🤱" },
          { title: "General Surgery", description: "Minimally invasive and traditional surgical procedures with precision and care.", icon: "⚕️" },
        ]}
      />
    </PageLayout>
  );
};

export default Index;
