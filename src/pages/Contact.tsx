import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/layout/HeroSection";
import SubHeroSection from "@/components/layout/SubHeroSection";
import CarouselSection from "@/components/layout/CarouselSection";
import heroImage from "@/assets/hero-contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you for your message. We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <PageLayout>
      <HeroSection
        backgroundImage={heroImage}
        title="We're Here for You"
        subtitle="Reach out to us anytime. Your health and peace of mind are our top priority."
      />

      <SubHeroSection
        title="Get in Touch"
        subtitle="Multiple ways to connect with RK MCH"
        cards={[
          { icon: MapPin, title: "Visit Us", description: "123 Hospital Road, Chennai, Tamil Nadu, India - 600001" },
          { icon: Phone, title: "Call Us", description: "Emergency: +91 123 456 7890\nAppointments: +91 098 765 4321" },
          { icon: Mail, title: "Email Us", description: "General: info@rkmch.com\nAppointments: appointments@rkmch.com" },
          { icon: Clock, title: "Working Hours", description: "Emergency: 24/7\nOPD: Monday–Saturday, 8AM–8PM" },
        ]}
      >
        {/* Contact form */}
        <div className="mt-14 max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                required
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </SubHeroSection>

      <CarouselSection
        title="What Our Patients Say"
        subtitle="Words of trust from families we've served"
        items={[
          { title: "Ramesh & Family", description: "The doctors at RK MCH treated my mother with such compassion. The care was world-class and deeply personal.", icon: "💙" },
          { title: "Priya S.", description: "From admission to discharge, every step was handled with care and professionalism. Truly a healing experience.", icon: "🙏" },
          { title: "Anand K.", description: "The facilities are outstanding and the staff made us feel at home. I couldn't have asked for better care.", icon: "⭐" },
          { title: "Lakshmi D.", description: "My child's surgery went perfectly. The paediatric team was gentle, kind, and incredibly skilled.", icon: "💚" },
          { title: "Suresh M.", description: "Emergency care was swift and efficient. The team saved my life and I'm forever grateful.", icon: "❤️" },
        ]}
      />
    </PageLayout>
  );
};

export default Contact;
