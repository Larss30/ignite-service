import { Building2, Users, Wrench, Target, ArrowRight, CheckCircle } from "lucide-react";

export default function WhoWeHelpSection() {
  const personas = [
    {
      icon: Building2,
      title: "Contractors & Mechanical Managers",
      description: "Keep projects moving without micromanaging subcontractors",
      benefits: [
        "Reliable project timelines",
        "Professional site standards", 
        "Clear progress updates",
        "Seamless handovers"
      ],
      cta: "Get Project Support"
    },
    {
      icon: Users,
      title: "Building Owners & Operations Managers", 
      description: "Stay within budget, maintain smooth operations, and protect your reputation",
      benefits: [
        "Cost-effective solutions",
        "Minimal operational disruption",
        "Compliance assurance",
        "Long-term maintenance support"
      ],
      cta: "Schedule Consultation"
    }
  ];

  return (
    <section className="relative py-24 bg-primary text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Target className="h-5 w-5 text-accent mr-2" />
            <span className="text-white font-semibold">Who We Help</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Built for Busy <span className="text-accent">Professionals</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges facing commercial projects and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {personas.map((persona, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-accent rounded-full"></div>
              
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-accent rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <persona.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="font-display text-3xl font-bold mb-4">{persona.title}</h3>
                <p className="text-lg text-white/80 leading-relaxed mb-8">{persona.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {persona.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <button className="group/btn flex items-center text-accent hover:text-white font-semibold transition-colors">
                  {persona.cta}
                  <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-white/70">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">99%</div>
              <div className="text-sm text-white/70">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">10+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}