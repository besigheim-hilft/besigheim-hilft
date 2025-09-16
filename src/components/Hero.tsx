import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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
          Besigheims
          <span className="block bg-gradient-to-r from-white via-accent-glow to-secondary-glow bg-clip-text text-transparent">
            Helfende Hände
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Vernetze dich mit deinen Nachbarn, um Hilfe zu geben und zu erhalten. Von der Werkzeugausleihe bis zum Gassi gehen - 
          unsere Gemeinschaft macht den Alltag einfacher und verbindlicher.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/um-hilfe-bitten">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto min-w-48"
            >
              <HeartHandshake className="w-6 h-6 mr-2" />
              Um Hilfe bitten
            </Button>
          </Link>
          
          <Button 
            variant="hero-secondary" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto min-w-48"
          >
            <Users className="w-6 h-6 mr-2" />
            Hilfe anbieten
          </Button>
        </div>
        
   
      </div>
    </div>
  );
};

export default Hero;