import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Datenschutz = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card rounded-3xl p-8 shadow-glow">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
            Datenschutzerklärung
          </h1>
          
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-medium mb-3">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Datenerfassung auf dieser Website</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Hosting und Content Delivery Networks (CDN)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
                und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-xl font-medium mb-3">Datenschutz</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzbestimmungen sowie 
                dieser Datenschutzerklärung.
              </p>
              
              <h3 className="text-xl font-medium mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mb-4">
                <p>
                Ehrenamtliche Initiative "Besigheim Hilft"<br />
                E-Mail: info@besigheim-hilft.de</p>
              </div>
              
              <h3 className="text-xl font-medium mb-3">Speicherdauer</h3>
              <p className="text-muted-foreground leading-relaxed">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
                berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
                werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
                Ihrer personenbezogenen Daten haben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>
              <h3 className="text-xl font-medium mb-3">Nachbarschaftshilfe-Plattform</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Welche Daten erfassen wir?</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Name und Kontaktdaten für die Vermittlung von Nachbarschaftshilfe</li>
                <li>Adressinformationen zur Zuordnung zu Ihrer Nachbarschaft</li>
                <li>Angaben zu angebotenen oder gesuchten Hilfeleistungen</li>
                <li>Bewertungen und Kommentare zur Qualitätssicherung</li>
              </ul>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Wofür nutzen wir diese Daten?</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Ausschließlich zur Vermittlung zwischen hilfesuchenden und hilfeleistenden Nachbarn</li>
                <li>Zur Gewährleistung der Sicherheit und Vertrauenswürdigkeit der Plattform</li>
                <li>Zur Kommunikation zwischen den Nutzern</li>
              </ul>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-primary font-medium">
                  <strong>Wichtig:</strong> Wir geben Ihre Daten niemals an Dritte weiter, außer dies ist für die 
                  Vermittlung der Nachbarschaftshilfe erforderlich. Wir erheben nur die Daten, die für den Zweck 
                  der Plattform unbedingt notwendig sind.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen</li>
                <li>Datenübertragbarkeit zu verlangen</li>
              </ul>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Kontakt bei Datenschutzfragen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:<br />
                <strong>E-Mail:</strong> info@besigheim-hilft.de
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default Datenschutz;
