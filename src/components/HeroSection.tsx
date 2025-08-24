import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import ContactDialog from "./ContactDialog";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay and Diagonal Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-diagonal opacity-90"></div>
      </div>

      {/* Diagonal Accent Shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 transform skew-x-12 origin-top-right"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 text-white">
            <div className="animate-fade-up">
              <h1 className="font-heading text-4xl md:text-7xl lg:text-5xl font-bold mb-6 leading-[0.9]">
                Commercial Heating,<br />
                <span className="light-accent font-heading">Plumbing & Gas</span><br />
                Services You Can Rely On
              </h1>
              
              <div className="w-24 h-1 bg-light-accent mb-8"></div>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-2xl opacity-90 font-medium">
                Specialists in mechanical services for contractors, building owners, and facilities managers across the UK.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-12 max-w-2xl border border-white/20">
                <p className="text-white/90 text-lg leading-relaxed">
                  Ignite Service is a UK-wide mechanical company founded in 2012. With over a decade of experience, we deliver reliable plumbing, heating, gas, and mechanical solutions for the commercial, industrial, and public sectors.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <ContactDialog triggerType="quote">
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="text-lg px-10 py-6 h-auto font-semibold shadow-glow"
                  >
                    Get a Quote
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </ContactDialog>
                
                <ContactDialog triggerType="call">
                  <Button 
                    variant="accent-outline" 
                    size="lg" 
                    className="text-lg px-10 py-6 h-auto font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-primary"
                  >
                    <Phone className="mr-3 h-6 w-6" />
                    Book a Call
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative transform lg:translate-x-8 xl:translate-x-16">
              {/* Multiple floating elements for more visual impact */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
              
              {/* Main stats card - larger and more prominent */}
              <div className="bg-white/8 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-center text-white space-y-8">
                  <div className="border-b border-white/20 pb-6">
                    <div className="text-5xl font-bold light-accent mb-3 font-heading">12+</div>
                    <div className="text-lg opacity-90 font-medium">Years Experience</div>
                  </div>
                  <div className="border-b border-white/20 pb-6">
                    <div className="text-5xl font-bold light-accent mb-3 font-heading">1000+</div>
                    <div className="text-lg opacity-90 font-medium">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold light-white mb-3 font-heading">UK-Wide</div>
                    <div className="text-lg opacity-90 font-medium">Coverage</div>
                  </div>
                </div>
              </div>

              {/* Additional floating badge */}
              <div className="absolute -top-6 -left-6 bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold shadow-glow transform -rotate-12">
                Est. 2012
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-60">
        <div className="animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90" />
        </div>
      </div>
    </section>
  );
}