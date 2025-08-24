import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Ignite<span className="text-accent">Service</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Commercial mechanical services you can rely on. Since 2012, we've been helping contractors and building owners keep projects on schedule.
            </p>
            <p className="text-sm text-primary-foreground/60">
              © Ignite Service Ltd 2025<br />
              Company number 08127904
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">What We Do</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-accent" />
                <span className="text-primary-foreground/80">023 9200 9890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <span className="text-primary-foreground/80">info@igniteservice.co.uk</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-accent mt-1" />
                <span className="text-primary-foreground/80">
                  Cambridge House, 32 Padwell Road<br />
                  Southampton, SO14 6QZ
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            Alternatively, contact us by phone or email. We'd like to hear from you.
          </p>
        </div>
      </div>
    </footer>
  );
}