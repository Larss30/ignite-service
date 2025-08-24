import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";
import teamAtWork from "@/assets/team-at-work.jpg";
import ContactDialog from "./ContactDialog";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${teamAtWork})` }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Need Mechanical Support You Can Trust?
          </h2>

          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Send us your project details for a fast, honest quote. Let's book a
            quick call to see if we're a good fit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <ContactDialog triggerType="call">
              <Button
                variant="accent"
                size="lg"
                className="text-lg px-8 py-4 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ContactDialog>

            <ContactDialog triggerType="quote">
              <Button
                variant="accent-outline"
                size="lg"
                className="text-lg px-8 py-4 h-auto font-semibold border-2 border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <Phone className="mr-3 h-6 w-6" />
                Book a Call
              </Button>
            </ContactDialog>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-lg mb-4 opacity-80">
              Have a job in mind? Send us your project details for a fast,
              honest quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center light-accent font-semibold">
              <span className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                023 9200 9890
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                077 6633 5965
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                info@igniteservice.co.uk
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
