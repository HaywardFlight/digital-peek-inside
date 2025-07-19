import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">
              HF HANGARS
            </div>
            <div className="text-sm text-muted-foreground hidden sm:block">
              Private Aircraft Hangars
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/" 
              className="text-aviation-gold hover:text-aviation-white transition-colors"
            >
              Home
            </a>
            <a 
              href="/hangar-information" 
              className="text-aviation-gold hover:text-aviation-white transition-colors"
            >
              Hangar Information
            </a>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-accent" />
              <span className="font-medium">(925) 575-1172</span>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
