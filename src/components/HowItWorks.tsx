import { Button } from "@/components/ui/button";
import { UserCheck, MessageSquare, HandHeart, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserCheck className="w-12 h-12" />,
      title: "Join Your Neighborhood",
      description: "Sign up and verify your address to connect with neighbors in your area. Create a profile that helps others get to know you.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Ask or Offer Help",
      description: "Post a request for help or browse what neighbors need. From borrowing tools to pet sitting, start with small favors to build trust.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <HandHeart className="w-12 h-12" />,
      title: "Connect & Help",
      description: "Coordinate through our secure messaging system. Meet safely, complete the favor, and strengthen your community connections.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Rate & Review",
      description: "Leave reviews to help build trust in the community. Positive interactions lead to lasting neighborly relationships.",
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started is simple. Join thousands of neighbors already helping each other every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center group relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 transform translate-x-4 -translate-y-1/2 z-0"></div>
              )}
              
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
              Ready to Start Helping?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Join your neighborhood community today and discover the joy of helping others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
                Ask for Help
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
                Offer Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;