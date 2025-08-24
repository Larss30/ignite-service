import { GraduationCap, Shield, Building2, Factory, ShoppingBag, Heart } from "lucide-react";

export default function SectorsSection() {
  const sectors = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Schools, colleges, and universities across the UK",
      projects: "200+ projects"
    },
    {
      icon: Heart,
      title: "Public Health", 
      description: "Hospitals, clinics, and healthcare facilities",
      projects: "50+ facilities"
    },
    {
      icon: Shield,
      title: "Defence (MoD projects)",
      description: "Military facilities and government buildings",
      projects: "Classified"
    },
    {
      icon: Factory,
      title: "Industrial & Production Facilities",
      description: "Manufacturing plants and production facilities",
      projects: "100+ installations"
    },
    {
      icon: Building2,
      title: "Commercial Developments",
      description: "Office buildings and commercial complexes",
      projects: "300+ projects"
    },
    {
      icon: ShoppingBag,
      title: "Retail Fit-outs",
      description: "Retail stores and shopping centers",
      projects: "150+ fit-outs"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-diagonal transform skew-y-1 -translate-y-16 opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-accent/10 rounded-full px-6 py-3 mb-6">
            <Building2 className="h-5 w-5 text-accent mr-2" />
            <span className="text-accent font-semibold">Sectors We Work In</span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-6">
            Trusted Across <span className="text-accent">Multiple Sectors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From education to defence, we've delivered reliable mechanical services across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-subtle rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/20 overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <sector.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">{sector.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">{sector.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                    {sector.projects}
                  </div>
                </div>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}