import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to secure premium hangar space for your aircraft? Contact our team today for personalized service and competitive rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-lg border shadow-sm">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Call Us</h3>
                      <a 
                        href="tel:+19255751172" 
                        className="text-accent hover:text-accent/80 transition-colors text-lg"
                      >
                        (925) 575-1172
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Email Us</h3>
                      <a 
                        href="mailto:hfhangars@gmail.com" 
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        hfhangars@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Visit Us</h3>
                      <address className="text-muted-foreground not-italic">
                        20995 Skywest Dr<br />
                        Hayward, CA 94541
                      </address>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Working Hours</h3>
                      <p className="text-muted-foreground">Mon – Fri: 10am – 5pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  <a href="tel:+19255751172">Call Now</a>
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://static.wixstatic.com/media/c03c85e57c6e403e89439cecbc76fc72.jpg/v1/fill/w_800,h_600,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c03c85e57c6e403e89439cecbc76fc72.jpg"
                  alt="Professional aircraft jet engine"
                  className="w-full h-auto"
                />
          </div>

          {/* Map Section */}
          <div className="bg-card p-8 rounded-lg border shadow-sm">
            <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">Find Us</h2>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7869087453!2d-122.09876!3d37.6647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f93c3c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2s20995%20Skywest%20Dr%2C%20Hayward%2C%20CA%2094541!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HF Hangars Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
