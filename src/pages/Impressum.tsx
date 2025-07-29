import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Impressum = () => {
  return (
   <div>
      <Header />
      <div className="min-h-screen bg-background py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-card rounded-3xl p-8 shadow-glow mb-8">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-hero bg-clip-text text-transparent">
              Impressum
            </h1>
          
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2">
                <p><strong>Verantwortlich für den Inhalt:</strong></p>
                <p>Ehrenamtliche Initiative "Besigheim Hilft"</p>
                <p>E-Mail: info@besigheim-hilft.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Haftung für Inhalte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Haftung für Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors 
                bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen 
                Gebrauch gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ehrenamtliche Initiative</h2>
              <p className="text-muted-foreground leading-relaxed">
                "Besigheim Hilft" ist eine ehrenamtliche Initiative von Bürgern für Bürger. Wir sind keine 
                gewerbliche Organisation und verfolgen keine kommerziellen Zwecke. Unser Ziel ist es, die 
                Nachbarschaftshilfe in Besigheim zu fördern und die Gemeinschaft zu stärken.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div></div>
  );
};

export default Impressum;
