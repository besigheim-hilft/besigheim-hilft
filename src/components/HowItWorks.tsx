import { Button } from "@/components/ui/button";
import { UserCheck, MessageSquare, HandHeart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Bitte um Hilfe oder biete sie an",
      description: "Fülle einfach das Formular aus und teile uns mit, wobei du Unterstützung brauchst oder wie du helfen möchtest.",
      bgColor: "bg-secondary"
    },
    {
      icon: <HandHeart className="w-12 h-12" />,
      title: "Wir vernetzen dich",
      description: "Wir setzen uns mit dir in Verbindung und bringen Hilfesuchende und Freiwillige aus Besigheim zusammen.",
      bgColor: "bg-accent"
    },
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            So funktioniert's
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unkompliziert und direkt – so verbinden wir Hilfesuchende mit Freiwilligen aus Besigheim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group relative">
              {/* Connection line for desktop */}
              {/* {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 transform translate-x-4 -translate-y-1/2 z-0"></div>
              )} */}
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className={`${step.bgColor} w-20 h-20 rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    {step.icon}
                  </div>
                </div>
                
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold text-lg">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-primary rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Unser Ziel
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Wir möchten Menschen in unserer Stadt wieder enger zusammenbringen – hilfesuchende Bürgerinnen und Bürger mit Freiwilligen, die ihre Unterstützung anbieten möchten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a 
                href="https://forms.gle/SbspFAWt9ruB74pK8" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
                  Hilfe anbieten
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;