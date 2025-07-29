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
      title: "Tools & Equipment",
      description: "Borrow or lend tools, equipment, and household items with trusted neighbors.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Dog className="w-8 h-8" />,
      title: "Pet Care",
      description: "Find reliable pet sitting, dog walking, and veterinary recommendations nearby.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transportation",
      description: "Share rides, borrow vehicles, or get help with car troubles from neighbors.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Food & Cooking",
      description: "Share meals, exchange recipes, or get help with grocery shopping.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Childcare",
      description: "Find trusted babysitters and form parent support groups in your area.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Home Repairs",
      description: "Get recommendations for contractors or help with small home maintenance tasks.",
      gradient: "bg-gradient-accent"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Save Time",
      description: "Get help quickly from neighbors who are just around the corner."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Stay Safe",
      description: "All members are verified and reviewed by the community."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Build Community",
      description: "Strengthen bonds with neighbors and create lasting friendships."
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            How We Help Each Other
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From everyday favors to emergency assistance, our platform connects neighbors 
            for countless ways to help and support each other.
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
            Why Choose Our Platform?
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