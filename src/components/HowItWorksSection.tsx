import { FileText, Calculator, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Send Over the Details",
    description: "Share photos, drawings, or a brief description of your requirements."
  },
  {
    icon: Calculator,
    number: "02", 
    title: "Get a Fast Quote",
    description: "Receive a clear, itemised, and honest quote within 24 hours."
  },
  {
    icon: Calendar,
    number: "03",
    title: "Schedule the Work", 
    description: "Book the work at a time that suits your site operations."
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Job Done, Professionally",
    description: "Respectful, reliable engineers with clean handovers and documentation."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-24 bg-gradient-subtle overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-3 mb-6">
            <CheckCircle className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-semibold">How It Works</span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            Simple, <span className="text-accent">Hassle-Free Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures your projects are completed efficiently, professionally, and without surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step number badge */}
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
              </div>
              
              {/* Connection line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-0 -right-4 w-8 h-0.5 bg-gradient-accent opacity-30 mt-6"></div>
              )}
              
              <div className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg" className="text-lg px-10 py-6 h-auto font-semibold shadow-glow">
            Request a Quote Today
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}