import { Heart, Brain, Bone, Baby, Stethoscope, Eye } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/layout/HeroSection";
import SubHeroSection from "@/components/layout/SubHeroSection";
import CarouselSection from "@/components/layout/CarouselSection";
import heroImage from "@/assets/hero-specialities.jpg";

const Specialities = () => {
  return (
    <PageLayout>
      <HeroSection
        backgroundImage={heroImage}
        title="Excellence in Every Speciality"
        subtitle="Our team of leading specialists delivers expert care across a comprehensive range of medical disciplines."
      />

      <SubHeroSection
        title="Our Specialities"
        subtitle="Comprehensive expertise across key medical disciplines"
        cards={[
          { icon: Heart, title: "Cardiology", description: "Complete cardiac care including interventional cardiology, cardiac surgery, and preventive heart health." },
          { icon: Brain, title: "Neurology & Neurosurgery", description: "Advanced treatment for neurological conditions with cutting-edge diagnostic and surgical capabilities." },
          { icon: Bone, title: "Orthopaedics", description: "Comprehensive musculoskeletal care from joint replacements to sports medicine and trauma surgery." },
          { icon: Baby, title: "Paediatrics & Neonatology", description: "Gentle, expert care for children with a dedicated NICU for the tiniest patients." },
          { icon: Stethoscope, title: "General & Laparoscopic Surgery", description: "Minimally invasive surgical solutions with faster recovery and reduced complications." },
          { icon: Eye, title: "Ophthalmology", description: "Complete eye care from routine check-ups to advanced cataract and retinal surgeries." },
        ]}
      />

      <CarouselSection
        title="Meet Our Experts"
        subtitle="Dedicated specialists committed to your health"
        items={[
          { title: "Dr. Rajan Kumar", description: "Chief Cardiologist with 25+ years of experience in interventional and preventive cardiology.", icon: "👨‍⚕️" },
          { title: "Dr. Priya Sharma", description: "Senior Neurologist specializing in stroke management and neurodegenerative disorders.", icon: "👩‍⚕️" },
          { title: "Dr. Arun Patel", description: "Orthopaedic Surgeon renowned for complex joint replacement and sports injury management.", icon: "👨‍⚕️" },
          { title: "Dr. Meera Sundaram", description: "Paediatrician with expertise in neonatal intensive care and childhood developmental disorders.", icon: "👩‍⚕️" },
          { title: "Dr. Vikram Singh", description: "General Surgeon with vast experience in laparoscopic and minimally invasive procedures.", icon: "👨‍⚕️" },
        ]}
      />
    </PageLayout>
  );
};

export default Specialities;
