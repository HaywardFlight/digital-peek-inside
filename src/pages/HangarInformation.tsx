import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HangarInformation() {
  return (
    <div className="min-h-screen bg-aviation-dark">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-aviation-white mb-4">
            Hangar Information
          </h1>
          <p className="text-xl text-aviation-white/80 max-w-3xl mx-auto">
            Secure aircraft storage with comprehensive services at Hayward Executive Airport
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* The Hangar Section */}
          <Card className="bg-aviation-white/5 border-aviation-white/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-aviation-white mb-6">The Hangar</h2>
              <div className="space-y-4 text-aviation-white/90 leading-relaxed">
                <p>
                  Our hangar offers secure and convenient parking for various aircraft, including single and twin engine models, as well as jets. Located in Hayward, California, our facility provides a safe and reliable space for aircraft owners to store their planes. We prioritize the security and safety of your aircraft and have implemented comprehensive measures to the hangar and its surroundings.
                </p>
                <p>
                  Our hangar is open 24 hours a day, 7 days a week, ensuring that we are always available to meet your needs. However, to provide you with the best service possible, we request a 24-hour notice via phone or email before your flight. This allows us ample time to prepare and ensure everything is ready for you.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What We Offer Section */}
          <Card className="bg-aviation-white/5 border-aviation-white/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-aviation-white mb-6">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-aviation-gold rounded-full"></div>
                    <span className="text-aviation-white/90">Lounge space</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-aviation-gold rounded-full"></div>
                    <span className="text-aviation-white/90">Complimentary wifi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-aviation-gold rounded-full"></div>
                    <span className="text-aviation-white/90">Fire sprinklers, fire alarms and fire extinguisher in each unit</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-aviation-gold rounded-full"></div>
                    <span className="text-aviation-white/90">Safe and secure storage for every aircraft</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-aviation-gold rounded-full"></div>
                    <span className="text-aviation-white/90">Three-phase power available for everyone</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-aviation-gold rounded-full"></div>
                    <span className="text-aviation-white/90">Restrooms available for tenants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-aviation-gold rounded-full"></div>
                    <span className="text-aviation-white/90">24-hour access via secure gate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-aviation-gold rounded-full"></div>
                    <span className="text-aviation-white/90">Ample private parking in the driveway</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Included Services Section */}
          <Card className="bg-aviation-white/5 border-aviation-white/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-aviation-white mb-8">Included Services</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Towing Service */}
                <div className="space-y-4">
                  <div className="bg-aviation-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-aviation-gold mb-3">Towing</h3>
                    <p className="text-aviation-white/90 leading-relaxed">
                      We want you to know that when you choose our hangars, you're getting top-notch towing services for your aircraft. Our skilled team will expertly pull your aircraft out for an exciting day of flying and ensure it's returned safely to the hangar afterward. We will handle every detail, so you can focus on enjoying your time in the air.
                    </p>
                  </div>
                </div>

                {/* Getting Ready Service */}
                <div className="space-y-4">
                  <div className="bg-aviation-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-aviation-gold mb-3">Getting Ready</h3>
                    <p className="text-aviation-white/90 leading-relaxed">
                      We know that preparing for a flight can be a hassle, especially when it comes to managing your gear. That's why we provide lockers specifically designed for your pre-flight items, such as oil or air pumps. Store your equipment conveniently and access it whenever you need it.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Notice */}
          <Card className="bg-aviation-gold/10 border-aviation-gold/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-aviation-gold mb-4">24-Hour Notice Required</h3>
              <p className="text-aviation-white/90 text-lg">
                Please provide 24-hour notice via phone or email before your flight to ensure everything is ready for you.
              </p>
              <div className="mt-6 space-y-2">
                <p className="text-aviation-white/80">Phone: (925) 575-1172</p>
                <p className="text-aviation-white/80">Available 24/7</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}