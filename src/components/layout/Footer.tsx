import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peacock-light to-emerald flex items-center justify-center">
                <span className="font-display font-bold text-lg text-primary-foreground">RK</span>
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-primary-foreground">RK MCH</p>
                <p className="text-xs text-primary-foreground/50">Multispeciality Hospital</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Providing compassionate, world-class healthcare with a blend of modern medicine and spiritual serenity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Specialities", path: "/specialities" },
                { name: "Facilities", path: "/facilities" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm text-primary-foreground/60 hover:text-emerald-light transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-emerald-light" />
                <p className="text-sm text-primary-foreground/60">+91 123 456 7890</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-emerald-light" />
                <p className="text-sm text-primary-foreground/60">info@rkmch.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-emerald-light" />
                <p className="text-sm text-primary-foreground/60">123 Hospital Road, Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">Hours</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-emerald-light" />
                <div>
                  <p className="text-sm text-primary-foreground/60">Emergency: 24/7</p>
                  <p className="text-sm text-primary-foreground/60">OPD: 8AM – 8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/40">© 2026 RK MCH. All rights reserved. Healing with divinity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
