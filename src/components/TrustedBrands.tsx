import pasma from "@/assets/logos/pasma.png";
import gassafe from "@/assets/logos/gas-safe.png";
import chas from "@/assets/logos/chas.png";
import ipaf from "@/assets/logos/ipaf.png";
import wras from "@/assets/logos/wras.png";
import cscs from "@/assets/logos/cscs.png";

export default function LogosSection() {
  const logos = [
    { name: "Pasma", src: pasma },
    { name: "Gas Safe", src: gassafe },
    { name: "CHAS", src: chas },
    { name: "IPAF", src: ipaf },
    { name: "WRAS", src: wras },
    { name: "CSCS", src: cscs },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud to work with some of the UK's most respected companies across various sectors
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-w-full h-12 object-contain filter hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}