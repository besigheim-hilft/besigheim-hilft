import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Nutzungsbedingungen = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-card rounded-3xl p-8 shadow-glow">
          <h1 className="text-4xl font-bold mb-8 text-primary">
            Nutzungsbedingungen
          </h1>
          
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich</h2>
              <p className="text-muted-foreground leading-relaxed">
                Diese Nutzungsbedingungen gelten für die Nutzung der Plattform "Besigheim Hilft", einer ehrenamtlichen 
                Initiative zur Förderung der Nachbarschaftshilfe in Besigheim. Mit der Nutzung unserer Plattform 
                erklären Sie sich mit diesen Bedingungen einverstanden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Zweck der Plattform</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Besigheim Hilft" ist eine kostenlose Plattform, die Nachbarn dabei unterstützt, sich gegenseitig zu helfen. 
                Unser Ziel ist es, die Gemeinschaft zu stärken und alltägliche Unterstützung zu ermöglichen.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-primary">
                  <strong>Wichtig:</strong> Wir sind eine ehrenamtliche Initiative ohne kommerzielle Absichten. 
                  Die Plattform dient ausschließlich der Nachbarschaftshilfe.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Nutzerverhalten</h2>
              <h3 className="text-xl font-medium mb-3">Respektvoller Umgang</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Behandeln Sie alle Nutzer mit Respekt und Höflichkeit</li>
                <li>Verwenden Sie keine beleidigenden, diskriminierenden oder unangemessenen Inhalte</li>
                <li>Respektieren Sie die Privatsphäre anderer Nutzer</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-3">Verbotene Aktivitäten</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Kommerzielle Nutzung oder Werbung ohne Genehmigung</li>
                <li>Spam oder wiederholte unerwünschte Nachrichten</li>
                <li>Falsche oder irreführende Informationen</li>
                <li>Verletzung geltender Gesetze</li>
                <li>Missbrauch der Plattform für andere als nachbarschaftliche Zwecke</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Sicherheit und Verantwortung</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <h3 className="text-lg font-medium text-yellow-800 mb-2">Wichtige Sicherheitshinweise</h3>
                <ul className="list-disc pl-6 space-y-1 text-yellow-700">
                  <li>Treffen Sie sich bei ersten Kontakten an öffentlichen Orten</li>
                  <li>Vertrauen Sie auf Ihr Bauchgefühl</li>
                  <li>Geben Sie keine sensiblen persönlichen Daten preis</li>
                  <li>Bei Notfällen wählen Sie immer den Notruf 112</li>
                </ul>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Jeder Nutzer ist selbst verantwortlich für seine Sicherheit und die Überprüfung der 
                Vertrauenswürdigkeit anderer Nutzer. Wir empfehlen, mit kleinen Gefälligkeiten zu beginnen 
                und Vertrauen schrittweise aufzubauen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Haftungsausschluss</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Als ehrenamtliche Initiative stellen wir die Plattform ohne Gewähr zur Verfügung. Wir übernehmen 
                keine Haftung für:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Die Qualität oder Zuverlässigkeit der angebotenen Hilfe</li>
                <li>Schäden, die bei der Durchführung von Hilfeleistungen entstehen</li>
                <li>Das Verhalten einzelner Nutzer</li>
                <li>Technische Probleme oder Ausfälle der Plattform</li>
              </ul>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Empfehlung:</strong> Schließen Sie für größere Hilfeleistungen (z.B. Handwerksarbeiten) 
                  eine entsprechende Versicherung ab oder informieren Sie sich über bestehende Versicherungsschutz.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Bewertungen und Feedback</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bewertungen sollen ehrlich und konstruktiv sein. Sie helfen dabei, Vertrauen in der Gemeinschaft 
                aufzubauen. Beleidigende oder unfaire Bewertungen können entfernt werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Datenschutz</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ihre Daten werden ausschließlich für die Vermittlung von Nachbarschaftshilfe verwendet. 
                Detaillierte Informationen finden Sie in unserer Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Änderungen der Nutzungsbedingungen</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wir behalten uns vor, diese Nutzungsbedingungen bei Bedarf anzupassen. Nutzer werden über 
                wesentliche Änderungen informiert.
              </p>
            </section>

            <section className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bei Fragen zu diesen Nutzungsbedingungen oder bei Problemen mit anderen Nutzern wenden Sie sich 
                bitte an uns:<br />
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

export default Nutzungsbedingungen;
