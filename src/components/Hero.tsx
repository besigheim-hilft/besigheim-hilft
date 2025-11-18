import { Button } from "@/components/ui/button";
import { HeartHandshake, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-primary overflow-hidden">
      {/* Content - positioned at top */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20 pb-8">

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Besigheims
          <span className="block text-secondary">
            Helfende Hände
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Unbürokratische Nachbarschaftshilfe in Besigheim. Menschen aus unserer Stadt unterstützen einander im Alltag – 
          gegenseitig, im kleinen Rahmen und mit Herz.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://forms.gle/S86EaxT5rFxKb1rd6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
            variant="white"
              size="lg"
              className="text-lg px-8 py-6 h-auto min-w-48 border-2 border-white shadow-lg"
            >
              <HeartHandshake className="w-6 h-6 mr-2" />
              Um Hilfe bitten
            </Button>
          </a>

          <a
            href="https://forms.gle/SbspFAWt9ruB74pK8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="white"
              size="lg"
              className="text-lg px-8 py-6 h-auto min-w-48 border-2 border-white shadow-lg"
            >
              <Users className="w-6 h-6 mr-2" />
              Hilfe anbieten
            </Button>
          </a>
        </div>
      </div>
      
      {/* Background Image - positioned at bottom */}
      <div className="relative z-0 w-full mt-auto">
        <img 
          src="/helping-hands.png" 
          alt="Helping Hands" 
          className="w-full h-auto object-cover object-bottom"
        />
      </div>
    </div>
  );
};

export default Hero;