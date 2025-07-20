import { Button } from "@/components/ui/button";
import { Shield, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-hangar.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional aircraft hangar facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-aviation-dark/90 via-aviation-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-aviation-white mb-6 leading-tight">
              A HANGAR THAT
              <span className="block text-accent">YOU CAN TRUST</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-aviation-white/90 mb-8 max-w-2xl leading-relaxed">
              Professional aircraft storage and maintenance services with uncompromising security and care for your valuable aircraft.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center space-x-2 text-aviation-white/80">
                <Shield className="h-5 w-5 text-accent" />
                <span className="font-medium">Secure Storage</span>
              </div>
              <div className="flex items-center space-x-2 text-aviation-white/80">
                <Award className="h-5 w-5 text-accent" />
                <span className="font-medium">Professional Service</span>
              </div>
              <div className="flex items-center space-x-2 text-aviation-white/80">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-medium">24/7 Access</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-aviation-white shadow-aviation text-lg px-8 py-6"
              >
                <a href="/hangar-information">View Hangar Information</a>
              </Button>
              <Button 
                size="lg" 
                variant="aviation-outline" 
                className="text-lg px-8 py-6"
              >
                <a href="/contact-us">Contact Us Today</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-aviation-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-aviation-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};
