import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              HF HANGARS
            </a>
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
            <a 
              href="/contact-us" 
              className="text-aviation-gold hover:text-aviation-white transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Contact Info */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-accent" />
              <span className="font-medium">(925) 575-1172</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  <a 
                    href="/" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Home
                  </a>
                  <a 
                    href="/hangar-information" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Hangar Information
                  </a>
                  <a 
                    href="/contact-us" 
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Contact Us
                  </a>
                  <div className="flex items-center space-x-2 text-sm pt-4 border-t border-border">
                    <Phone className="h-4 w-4 text-accent" />
                    <span className="font-medium">(925) 575-1172</span>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
