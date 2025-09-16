import { Button } from "@/components/ui/button";
import { UserCheck, MessageSquare, HandHeart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const steps = [
    // {
    //   icon: <UserCheck className="w-12 h-12" />,
    //   title: "Tritt deiner Nachbarschaft bei",
    //   description: "Melde dich an und verifiziere deine Adresse, um dich mit Nachbarn in deiner Gegend zu vernetzen. Erstelle ein Profil, das anderen hilft, dich kennenzulernen.",
    //   gradient: "bg-gradient-primary"
    // },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Bitte um Hilfe oder biete sie an",
      description: "Stelle eine Bitte um Hilfe ein oder schaue, was Nachbarn brauchen. Von der Werkzeugausleihe bis zum Haustiersitting - beginne mit kleinen Gefälligkeiten, um Vertrauen aufzubauen.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <HandHeart className="w-12 h-12" />,
      title: "Wir vernetzen dich",
      description: "Wir setzen uns mit dir in Verbindung und vermitteln zwischen Helfern und Hiflesuchenden.",
      gradient: "bg-gradient-accent"
    },
    // {
    //   icon: <Star className="w-12 h-12" />,
    //   title: "Bewerte & rezensiere",
    //   description: "Hinterlasse Bewertungen, um das Vertrauen in der Gemeinschaft zu stärken. Positive Interaktionen führen zu dauerhaften nachbarschaftlichen Beziehungen.",
    //   gradient: "bg-gradient-primary"
    // }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            So funktioniert's
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Der Einstieg ist einfach. Schließe dich tausenden von Nachbarn an, die sich bereits täglich gegenseitig helfen.
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
                  <div className={`${step.gradient} w-20 h-20 rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
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
          <div className="bg-gradient-hero rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Bereit zu helfen?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Tritt noch heute deiner Nachbarschaftsgemeinschaft bei und entdecke die Freude am Helfen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/um-hilfe-bitten">
                <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
                  Um Hilfe bitten
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
                Hilfe anbieten
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;