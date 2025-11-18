import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Was ist Besigheim Hilft?",
      answer: "Besigheim Hilft ist eine ehrenamtliche Initiative für unbürokratische Nachbarschaftshilfe in Besigheim. Wir bringen Menschen zusammen, die Unterstützung im Alltag brauchen, mit Freiwilligen, die gerne helfen möchten."
    },
    {
      question: "Welche Art von Hilfe wird angeboten?",
      answer: "Wir helfen bei alltäglichen Dingen wie Einkäufen, Begleitung bei Spaziergängen, Fahrten zu Arztterminen und kleinen praktischen Hilfen im Alltag. Wichtig: Wir übernehmen keine pflegerischen oder medizinischen Tätigkeiten."
    },
    {
      question: "Ist Besigheim Hilft ein Verein?",
      answer: "Nein, wir sind kein eingetragener Verein. Alle Leistungen finden auf freiwilliger und privater Basis statt. Das bedeutet für dich: Du bist nicht verpflichtet, Aufträge anzunehmen, und solltest dich zuverlässig und gewissenhaft darum kümmern."
    },
    {
      question: "Gibt es eine Versicherung?",
      answer: "Es besteht keine Versicherung über eine Organisation. Du trägst selbst das Risiko und die Verantwortung. Prüfe daher am besten, ob deine Haftpflichtversicherung den Zweck abdeckt. Alternativen wie Haftpflichtversicherung über Organisationen werden nicht bereitgestellt."
    },
    {
      question: "Ist die Hilfe kostenlos?",
      answer: "Ja! Die Nachbarschaftshilfe erfolgt ausschließlich ehrenamtlich und ist daher immer kostenlos. Als Helfer darfst du kein Geld annehmen (außer einem Beitrag zum verfahrenen Sprit), damit das Projekt nicht in ein falsches Licht gerät."
    },
    {
      question: "Ist Besigheim Hilft eine Alternative zu professionellen Diensten?",
      answer: "Nein, ausdrücklich nicht! Wir sind keine Alternative oder Konkurrenz zu bestehenden Angeboten wie Diakonie, Pflegediensten oder anderen sozialen Einrichtungen. Wir ergänzen diese dort, wo unkomplizierte Nachbarschaftshilfe gefragt ist."
    },
    {
      question: "Welche Art von Hilfe wird NICHT angeboten?",
      answer: "Die Nachbarschaftshilfe ist nicht für alle Arten von Tätigkeiten gedacht. Pflegerische Aufgaben oder Geld verdienen gehören nicht dazu. Für solche Leistungen gibt es spezielle Dienste, die über die Pflegekasse abgerechnet werden können. Wenn du jemanden regelmäßig auf nicht-pflegerischer Weise unterstützen möchtest, ist das selbstverständlich dir überlassen."
    },
    {
      question: "Kann ich das für Notfälle nutzen?",
      answer: "Bei Notfällen wähle immer den Notruf 112. Unsere Nachbarschaftshilfe ist für alltägliche Unterstützung gedacht, nicht für medizinische oder lebensbedrohliche Notfälle."
    },
    {
      question: "Wie funktioniert die Vermittlung?",
      answer: "Wir möchten beiden Seiten helfen: Wir stellen Kontakt und Möglichkeiten zur Verfügung, um Menschen zu verbinden, die gerade Unterstützung brauchen – und leisten damit einen wichtigen Beitrag zum Miteinander in der Stadt."
    },
    {
      question: "Was ist euer Ziel?",
      answer: "Wir möchten Menschen in unserer Stadt wieder enger zusammenbringen – hilfesuchende Bürgerinnen und Bürger mit Freiwilligen, die ihre Unterstützung anbieten möchten. Dabei legen wir großen Wert auf Transparenz und Zusammenarbeit."
    }
  ];

  return (
    <div className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary py-1">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-muted-foreground">
            Alles, was du über das Helfen und Hilfe bekommen von deinen Nachbarn wissen musst.
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8 shadow-glow mb-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;