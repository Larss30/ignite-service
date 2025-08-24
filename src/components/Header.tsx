import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ContactDialog from "./ContactDialog";
import igniteLogo from "@/assets/ignite-logo.png";

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-primary">
            <img src={igniteLogo} alt="Ignite Service Logo" className="h-10 w-auto" />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-primary hover:text-accent transition-colors font-medium">
            Home
          </a>
          <a href="#about" className="text-primary hover:text-accent transition-colors font-medium">
            About
          </a>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-primary hover:text-accent transition-colors font-medium">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
              <DropdownMenuItem className="hover:bg-accent/10">
                <a href="#services" className="w-full">Plumbing & Heating</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-accent/10">
                <a href="#services" className="w-full">Gas Works</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-accent/10">
                <a href="#services" className="w-full">Electrical</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-accent/10">
                <a href="#services" className="w-full">HVAC / AC</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-accent/10">
                <a href="#services" className="w-full">Welding & Pipe Fabrication</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-accent/10">
                <a href="#services" className="w-full">Facilities Maintenance</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="#contact" className="text-primary hover:text-accent transition-colors font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center text-primary font-semibold">
            <Phone className="h-4 w-4 mr-2 text-accent" />
            <span className="text-sm">023 9200 9890</span>
          </div>
          <ContactDialog triggerType="quote">
            <Button variant="accent" size="sm">
              Get Quote
            </Button>
          </ContactDialog>
        </div>
      </div>
    </header>
  );
}