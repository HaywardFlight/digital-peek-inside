import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-aviation-dark text-aviation-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HF HANGARS</h3>
            <p className="text-aviation-white/80 mb-6 leading-relaxed">
              Professional aircraft hangar services providing secure storage and maintenance for your valuable aircraft. We're committed to excellence in aviation services.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-aviation-white/80">
                <Phone className="h-4 w-4 text-accent" />
                <span>(925) 575-1172</span>
              </div>
              <div className="flex items-center space-x-2 text-aviation-white/80">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@hfhangars.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
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
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <span>Professional Aviation Facility<br />Secure Hangar Location</span>
              </div>
              <div>
                <p className="font-medium text-aviation-white mb-1">Business Hours:</p>
                <p>24/7 Aircraft Access</p>
                <p>Office: Mon-Fri 8AM-5PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-aviation-white/20 mt-8 pt-8 text-center">
          <p className="text-aviation-white/60">
            © 2024 HF Hangars. All rights reserved. Professional aircraft hangar services.
          </p>
        </div>
      </div>
    </footer>
  );
};