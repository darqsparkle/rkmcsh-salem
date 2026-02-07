import { Microscope, Bed, MonitorCheck, Syringe, Pill, Scan } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/layout/HeroSection";
import SubHeroSection from "@/components/layout/SubHeroSection";
import CarouselSection from "@/components/layout/CarouselSection";
import heroImage from "@/assets/hero-facilities.jpg";

const Facilities = () => {
  return (
    <PageLayout>
      <HeroSection
        backgroundImage={heroImage}
        title="Advanced Facilities, Compassionate Care"
        subtitle="Our world-class infrastructure combines cutting-edge medical technology with environments designed for healing and comfort."
      />

      <SubHeroSection
        title="Our Services"
        subtitle="Comprehensive medical services tailored to your needs"
        cards={[
          { icon: Microscope, title: "Diagnostic Laboratory", description: "Fully automated pathology lab with rapid and accurate diagnostic services." },
          { icon: Bed, title: "Premium Patient Rooms", description: "Comfortable, serene rooms designed to promote healing and well-being." },
          { icon: MonitorCheck, title: "ICU & Critical Care", description: "State-of-the-art intensive care units with 24/7 monitoring and expert staff." },
          { icon: Syringe, title: "Operation Theatres", description: "Modern, modular OTs equipped for minimally invasive and complex surgeries." },
          { icon: Pill, title: "In-House Pharmacy", description: "24/7 pharmacy with a complete range of medicines and medical supplies." },
          { icon: Scan, title: "Radiology & Imaging", description: "Advanced MRI, CT, X-ray, and ultrasound imaging services." },
        ]}
      />

      <CarouselSection
        title="Inside RK MCH"
        subtitle="A glimpse into our healing spaces"
        items={[
          { title: "Modern Operation Theatres", description: "Laminar flow OTs with the latest surgical equipment for safe, precise procedures.", icon: "🏥" },
          { title: "Patient Rooms", description: "Thoughtfully designed rooms blending comfort with medical functionality.", icon: "🛏️" },
          { title: "Diagnostic Center", description: "Advanced laboratory and imaging center for comprehensive health assessments.", icon: "🔬" },
          { title: "Emergency Department", description: "Fully equipped emergency care with rapid triage and life-saving capabilities.", icon: "🚑" },
          { title: "Rehabilitation Center", description: "Physiotherapy and rehabilitation services for complete recovery.", icon: "💪" },
        ]}
      />
    </PageLayout>
  );
};

export default Facilities;
