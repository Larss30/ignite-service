import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, User, Building } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactDialogProps {
  children: React.ReactNode;
  triggerType?: "quote" | "call";
}

export default function ContactDialog({ children, triggerType = "quote" }: ContactDialogProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setOpen(false);
  };

  const dialogTitle = triggerType === "call" ? "Book a Call" : "Get a Quote";
  const dialogDescription = triggerType === "call" 
    ? "Schedule a quick call to discuss your mechanical services needs."
    : "Send us your project details for a fast, honest quote.";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-primary flex items-center gap-2">
            {triggerType === "call" ? (
              <Phone className="h-6 w-6 text-accent" />
            ) : (
              <Mail className="h-6 w-6 text-accent" />
            )}
            {dialogTitle}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary font-medium flex items-center gap-2">
                <User className="h-4 w-4" />
                Name *
              </Label>
              <Input
                id="name"
                placeholder="Your full name"
                required
                className="border-border focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-primary font-medium flex items-center gap-2">
                <Building className="h-4 w-4" />
                Company
              </Label>
              <Input
                id="company"
                placeholder="Company name"
                className="border-border focus:border-accent"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="border-border focus:border-accent"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary font-medium flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                className="border-border focus:border-accent"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="project" className="text-primary font-medium">
              {triggerType === "call" ? "What would you like to discuss?" : "Project Details"}
            </Label>
            <Textarea
              id="project"
              placeholder={triggerType === "call" 
                ? "Brief description of your mechanical services needs..."
                : "Please describe your project, timeline, and any specific requirements..."
              }
              rows={4}
              className="border-border focus:border-accent resize-none"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-accent text-accent-foreground hover:opacity-90 font-semibold"
            >
              {triggerType === "call" ? "Schedule Call" : "Send Quote Request"}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="border-border hover:bg-muted"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}