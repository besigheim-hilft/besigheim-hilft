import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-4">
            <HeartHandshake className="w-8 h-8 text-white" />
            <Users className="w-8 h-8 text-white" />
            <MapPin className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Neighborhood's
          <span className="block bg-gradient-to-r from-white via-accent-glow to-secondary-glow bg-clip-text text-transparent">
            Helping Hands
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Connect with your neighbors to give and receive help. From borrowing tools to walking dogs, 
          our community makes everyday life easier and more connected.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto min-w-48"
          >
            <HeartHandshake className="w-6 h-6 mr-2" />
            Ask for Help
          </Button>
          
          <Button 
            variant="hero-secondary" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto min-w-48"
          >
            <Users className="w-6 h-6 mr-2" />
            Offer Help
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-white">2,500+</div>
            <div>Neighbors Connected</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-white">5,000+</div>
            <div>Successful Helps</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-3xl font-bold text-white">50+</div>
            <div>Neighborhoods</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;