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
      icon: <Utensils className="w-8 h-8" />,
      title: "Einkäufe erledigen",
      description: "Nachbarn helfen beim Einkaufen – schnell, unkompliziert und direkt aus der Nachbarschaft.",
      bgColor: "bg-primary"
    },
    {
      icon: <Dog className="w-8 h-8" />,
      title: "Begleitung bei Spaziergängen", 
      description: "Gemeinsam unterwegs sein, frische Luft schnappen und die Nachbarschaft erkunden.",
      bgColor: "bg-secondary"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Fahrten zu Arztterminen",
      description: "Zuverlässige Unterstützung bei Arztbesuchen und wichtigen Terminen.",
      bgColor: "bg-accent"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Kleine praktische Hilfen",
      description: "Alltagshilfen im Haushalt – von kleinen Handgriffen bis zu nützlichen Ratschlägen.",
      bgColor: "bg-primary"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Freiwillig & ehrenamtlich",
      description: "Alle Helfer engagieren sich freiwillig – aus Überzeugung und mit vollem Herzen.",
      bgColor: "bg-secondary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Keine Haftpflichtversicherung", 
      description: "Jeder trägt selbst das Risiko. Versicherungen über Organisationen werden nicht übernommen.",
      bgColor: "bg-accent"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Keine Alternative zu Profis",
      description: "Wir ersetzen keine professionellen Dienste wie Diakonie oder Pflegedienste – wir ergänzen sie dort, wo unkomplizierte Nachbarschaftshilfe gefragt ist."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Keine medizinischen Tätigkeiten",
      description: "Wir übernehmen keine pflegerischen oder medizinischen Aufgaben. Dafür gibt es die entsprechenden Fachkräfte."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Freiwillig & unentgeltlich",
      description: "Alle Hilfe erfolgt ausschließlich ehrenamtlich und sollte daher nicht entgeltlich oder regelmäßig sein."
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary py-1">
            Was wir tun
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir verstehen uns als Nachbarschaftshilfe – unbürokratisch, gegenseitig und im kleinen Rahmen. 
            Menschen aus Besigheim unterstützen einander im Alltag.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Was wir nicht tun
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Wichtig zu wissen ist, dass wir kein eingetragener Verein sind und alle Leistungen auf freiwilliger und privater Basis stattfinden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-primary w-24 h-24 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
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