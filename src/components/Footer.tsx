import { HeartHandshake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo und Beschreibung */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-primary w-10 h-10 rounded-full flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Besigheim Hilft</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 max-w-md">
              Eine ehrenamtliche Initiative zur Förderung der Nachbarschaftshilfe in Besigheim. 
              Gemeinsam machen wir unsere Stadt zu einem noch lebenswerteren Ort.
            </p>
            <div className="flex space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">100% ehrenamtlich</strong><br />
                  Von Bürgern für Bürger
                </p>
              </div>
            </div>
          </div>

          {/* Rechtliche Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/impressum" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Impressum
                </a>
              </li>
              <li>
                <a 
                  href="/datenschutz" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </a>
              </li>
              <li>
                <a 
                  href="/nutzungsbedingungen" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Nutzungsbedingungen
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontakt</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong className="text-foreground">E-Mail:</strong><br />
                <a 
                  href="mailto:info@besigheim-hilft.de" 
                  className="hover:text-primary transition-colors"
                >
                  info@besigheim-hilft.de
                </a>
              </p>
           
            </div>
          </div>
        </div>

        {/* Unterer Bereich */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Besigheim Hilft - Eine ehrenamtliche Initiative
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
              ✓ DSGVO-konform
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
              ✓ Gemeinnützig
            </div>
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">
              ✓ Ehrenamtlich
            </div>
          </div>
        </div>

        {/* Hinweis für Notfälle */}
        <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 text-sm text-center">
            <strong>Bei Notfällen:</strong> Wählen Sie immer zuerst den Notruf 112 oder 110
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
