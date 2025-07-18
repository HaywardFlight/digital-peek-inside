import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Shield, Wrench, Clock, MapPin, Phone } from "lucide-react";

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
    features: ["Flexible Access Hours", "Easy Scheduling", "Key Card Access"]
  }
];

export const Services = () => {
  return (
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
            >
              Get Hangar Information
            </Button>
            <Button 
              size="lg" 
              variant="aviation-outline" 
              className="border-aviation-white/30 text-aviation-white hover:bg-aviation-white/10"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
