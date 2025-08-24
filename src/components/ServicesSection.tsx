import { Wrench, Flame, Zap, Wind, Settings, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Plumbing & Heating",
    description: "Complete commercial plumbing and heating solutions from installation to emergency repairs.",
    features: ["Emergency repairs", "New installations", "Boiler services", "System maintenance"]
  },
  {
    icon: Flame,
    title: "Gas Works", 
    description: "Certified gas engineers providing safe and compliant gas installation and maintenance services.",
    features: ["Gas safety checks", "Appliance installation", "Leak detection", "System upgrades"]
  },
  {
    icon: Zap,
    title: "Electrical",  
    description: "Professional electrical services for commercial and industrial mechanical systems.",
    features: ["Control systems", "Motor installation", "Electrical maintenance", "Safety testing"]
  },
  {
    icon: Wind,
    title: "HVAC / AC",
    description: "Complete heating, ventilation, and air conditioning solutions for optimal building climate control.", 
    features: ["System design", "Installation", "Maintenance", "Air quality testing"]
  },
  {
    icon: Settings,
    title: "Welding & Pipe Fabrication",
    description: "Custom fabrication and welding services for commercial mechanical systems and pipework.",
    features: ["Custom fabrication", "Pipe welding", "Structural work", "Pressure testing"]
  },
  {
    icon: CheckCircle,
    title: "Facilities Maintenance",
    description: "Comprehensive mechanical maintenance services to keep your building systems running efficiently.",
    features: ["Preventive maintenance", "Emergency callouts", "System optimization", "Compliance checks"]
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-subtle opacity-50 transform skew-x-12 origin-top-right"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center bg-accent/10 rounded-full px-6 py-3 mb-6">
              <Wrench className="h-5 w-5 text-accent mr-2" />
              <span className="text-accent font-semibold">Our Services</span>
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6">
              Comprehensive <span className="text-accent">Mechanical Services</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Professional mechanical services for commercial, industrial, and public sector clients across the UK.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8 italic">
              Full service list available on request.
            </p>
            <button className="group flex items-center text-accent hover:text-primary font-semibold text-lg transition-colors">
              View All Services
              <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Decorative element */}
                  <div className="absolute top-0 right-6 w-12 h-1 bg-gradient-accent rounded-full"></div>
                  
                  <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  
                  <div className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}