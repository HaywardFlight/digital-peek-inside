import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Shield, Wrench, Clock, MapPin, Phone, Menu, Award, Mail, MapPin} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import heroImage from "@/assets/hero-hangar.jpg";

const services = [
  {
    icon: Shield,
    title: "Secure Aircraft Storage",
    description: "State-of-the-art hangar facilities with advanced security systems to protect your valuable aircraft investment.",
    features: ["24/7 Security Monitoring", "Climate Controlled Environment", "Fire Suppression Systems"]
  },
  {
    icon: Wrench,
    title: "Professional Maintenance",
    description: "Expert maintenance services by certified technicians to keep your aircraft in peak condition.",
    features: ["Certified A&P Mechanics", "Scheduled Maintenance", "Emergency Repairs"]
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Round-the-clock access to your aircraft with convenient scheduling and flexible arrangements.",
    features: ["Flexible Access Hours", "Easy Scheduling", "Restrooms Available"]
  }
];


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
                onClick={() => window.location.href = '/hangar-information'}
              >
                View Hangar Information
              </Button>
              <Button 
                size="lg" 
                variant="aviation-outline" 
                className="text-lg px-8 py-6"
                onClick={() => window.location.href = '/contact-us'}
              >
                Contact Us Today
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
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            We'll Take Care of Your Aircraft
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional hangar services designed to protect, maintain, and provide convenient access to your aircraft with the highest standards of security and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 bg-gradient-card border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-hero rounded-2xl p-8 sm:p-12 text-center shadow-aviation">
          <h3 className="text-3xl sm:text-4xl font-bold text-aviation-white mb-4">
            Interested in Renting Hangar Space?
          </h3>
          <p className="text-aviation-white/90 mb-8 text-lg max-w-2xl mx-auto">
            Contact us today to learn more about our competitive rates and available hangar spaces. We're here to help protect your aircraft investment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2 text-aviation-white">
              <Phone className="h-5 w-5" />
              <span className="text-lg font-medium">(925) 575-1172</span>
            </div>
            <div className="flex items-center space-x-2 text-aviation-white/80">
              <MapPin className="h-5 w-5" />
              <span>Professional Aviation Services</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-aviation-white text-primary hover:bg-aviation-white/90 shadow-lg"
              onClick={() => window.location.href = '/hangar-information'}
            >
              Get Hangar Information
            </Button>
            <Button 
              size="lg" 
              variant="aviation-outline" 
              className="border-aviation-white/30 text-aviation-white hover:bg-aviation-white/10"
              onClick={() => window.location.href = '/contact-us'}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-aviation-dark text-aviation-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HF HANGARS</h3>
            <p className="text-aviation-white/80 mb-6 leading-relaxed">
              Professional aircraft hangar services providing secure storage and maintenance for your valuable aircraft. We're committed to excellence in aviation services.
            </p>
          </div>

          {/* Services */}
        <div className="lg:ml-6">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-aviation-white/80">
              <li>• Aircraft Storage</li>
              <li>• Hangar Rentals</li>
              <li>• Maintenance Services</li>
              <li>• 24/7 Access</li>
              <li>• Security Monitoring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-4 text-aviation-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>(925) 575-1172</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>hfhangars@gmail.com</span>
              </div>
              <div>
                <p className="font-medium text-aviation-white mb-1">Business Hours:</p>
                <p>24/7 Aircraft Access</p>
                <p>Office: Mon-Fri 10AM-5PM</p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Location</h4>
            <div className="text-aviation-white/80 mb-4">
              <p>20995 Skywest Dr, Hayward, CA 94541</p>
            </div>
            <div className="rounded-lg overflow-hidden border border-aviation-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8473892384754!2d-122.1226706842514!3d37.663449379796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9b7c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s20995%20Skywest%20Dr%2C%20Hayward%2C%20CA%2094541!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HF Hangars Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-aviation-white/20 mt-8 pt-8 text-center">
          <p className="text-aviation-white/60">
            © 2025 HF Hangars. All rights reserved. Located at Hayward Executive Airport.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Index;
