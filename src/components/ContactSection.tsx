import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Get In Touch With Ignite
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to discuss your project? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Phone</h4>
                        <p className="text-muted-foreground">02392009890 / 07766335965</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Email</h4>
                        <p className="text-muted-foreground">info@igniteservice.co.uk</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 mt-1">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          Cambridge House, 32 Padwell Road<br />
                          Southampton, SO14 6QZ
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Name *
                    </label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Your phone number" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <Button variant="accent" size="lg" className="w-full text-lg py-3">
                  Submit Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}