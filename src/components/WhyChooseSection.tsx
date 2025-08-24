import { CheckCircle, Clock, MessageSquare, Users, Award, Wrench } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "Reliable",
      description: "On-site teams that show up professional and prepared",
      stat: "99%",
      statLabel: "On-time delivery"
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      description: "Updates you don't need to chase",
      stat: "24/7",
      statLabel: "Support"
    },
    {
      icon: Wrench,
      title: "Flexible Support",
      description: "Scale up or down as your project demands",
      stat: "48hr",
      statLabel: "Response time"
    },
    {
      icon: Award,
      title: "Trusted Experience",
      description: "Over a decade in commercial plumbing & mechanical",
      stat: "10+",
      statLabel: "Years experience"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-subtle">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-diagonal transform -skew-y-1 -translate-y-16"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-accent/10 rounded-full px-6 py-3 mb-6">
            <Award className="h-5 w-5 text-accent mr-2" />
            <span className="text-accent font-semibold">Why Choose Us</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Built for <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We've built our reputation on four core principles that set us apart in the commercial mechanical services industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-up border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-8 w-16 h-1 bg-gradient-accent rounded-full"></div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-2xl font-bold text-primary">{feature.title}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{feature.stat}</div>
                      <div className="text-sm text-muted-foreground">{feature.statLabel}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}