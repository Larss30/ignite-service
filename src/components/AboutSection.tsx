import { Award, Users, Wrench, Shield } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "Technical Expertise",
      description: "Qualified engineers with proven commercial experience"
    },
    {
      icon: Users,
      title: "Clear Communication", 
      description: "Professional updates you don't need to chase"
    },
    {
      icon: Wrench,
      title: "Professional Site Presence",
      description: "Teams that represent your company standards"
    },
    {
      icon: Shield,
      title: "Reliable Delivery",
      description: "Projects completed efficiently to the highest standards"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 transform skew-x-12 origin-top-right"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-accent/10 rounded-full px-6 py-3 mb-6">
              <Award className="h-5 w-5 text-accent mr-2" />
              <span className="text-accent font-semibold">About Us</span>
            </div>
            
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-primary mb-8">
              Your Mechanical Services <span className="text-accent">Partner Since 2012</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ignite Service is based in the south of England, with a team of qualified engineers covering the UK.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">We specialise in:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Commercial heating & plumbing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Gas systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Mechanical maintenance & emergency callouts
                  </li>
                </ul>
              </div>
              
              <p>
                Over the years, we've worked in education, healthcare, defence, retail fit-outs, production facilities, and more.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 lg:grid-cols-2 sm:grid-cols-1">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent/20"
              >
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}