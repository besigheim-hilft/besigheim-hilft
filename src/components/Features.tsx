import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  Dog, 
  Car, 
  Utensils, 
  Baby, 
  Lightbulb,
  Clock,
  Shield,
  Heart
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Werkzeuge & Ausrüstung",
      description: "Leihe oder verleihe Werkzeuge, Geräte und Haushaltsgegenstände mit vertrauensvollen Nachbarn.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Dog className="w-8 h-8" />,
      title: "Haustierpflege",
      description: "Finde zuverlässiges Haustiersitting, Gassi-Service und Tierarztempfehlungen in der Nähe.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transport",
      description: "Teile Fahrten, leihe Fahrzeuge oder bekomme Hilfe bei Autopannen von Nachbarn.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Essen & Kochen",
      description: "Teile Mahlzeiten, tausche Rezepte oder bekomme Hilfe beim Einkaufen.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Kinderbetreuung",
      description: "Finde vertrauensvolle Babysitter und bilde Eltern-Unterstützungsgruppen in deiner Gegend.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Hausreparaturen",
      description: "Bekomme Empfehlungen für Handwerker oder Hilfe bei kleinen Wartungsarbeiten im Haushalt.",
      gradient: "bg-gradient-accent"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Zeit sparen",
      description: "Bekomme schnell Hilfe von Nachbarn, die gleich um die Ecke wohnen."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Sicher bleiben",
      description: "Alle Mitglieder sind verifiziert und werden von der Gemeinschaft bewertet."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Gemeinschaft aufbauen",
      description: "Stärke die Bindungen zu deinen Nachbarn und knüpfe dauerhafte Freundschaften."
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Wie wir uns gegenseitig helfen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von alltäglichen Gefälligkeiten bis hin zur Nothilfe - unsere Plattform verbindet Nachbarn 
            auf unzählige Weise, um sich gegenseitig zu helfen und zu unterstützen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className={`${feature.gradient} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Warum unsere Plattform wählen?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-primary w-24 h-24 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;