import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-aviation-dark text-aviation-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <span>20995 Skywest Dr<br />Hayward, CA 94541</span>
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
            © 2025 HF Hangars. All rights reserved. Professional aircraft hangar services.
          </p>
        </div>
      </div>
    </footer>
  );
};
