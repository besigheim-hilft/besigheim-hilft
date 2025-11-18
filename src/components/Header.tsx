import { HeartHandshake, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Besigheim Hilft</h1>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="/" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Startseite
            </a>
            <a 
              href="/impressum" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Impressum
            </a>
            <a 
              href="/datenschutz" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Datenschutz
            </a>
            <a 
              href="/nutzungsbedingungen" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Nutzungsbedingungen
            </a>
          </nav>

          {/* Mobile Back Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
