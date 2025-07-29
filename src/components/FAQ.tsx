import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Wie fange ich auf der Plattform an?",
      answer: "Klicke einfach auf 'Um Hilfe bitten' oder 'Hilfe anbieten', um dein Konto zu erstellen. Du verifizierst deine Adresse, um dich mit deiner direkten Nachbarschaft zu vernetzen, dann kannst du sofort anfangen zu helfen oder um Unterstützung zu bitten."
    },
    {
      question: "Ist es sicher, Fremden in meiner Nachbarschaft zu helfen?",
      answer: "Sicherheit ist unsere oberste Priorität. Alle Nutzer verifizieren ihre Adresse und Identität. Wir haben ein Gemeinschaftsbewertungssystem, Hintergrundprüfungen für bestimmte Services und Richtlinien für sichere Treffen. Trefft euch möglichst an öffentlichen Orten und vertraut auf euer Bauchgefühl."
    },
    {
      question: "Welche Art von Hilfe kann ich anfragen oder anbieten?",
      answer: "Fast alles! Häufige Anfragen umfassen Werkzeugausleihe, Haustiersitting, Fahrgemeinschaften, Hausreparaturen, Kinderbetreuung, Einkaufen, gemeinsame Mahlzeiten und Nothilfe. Wenn es legal und nachbarschaftlich ist, ist es auf unserer Plattform willkommen."
    },
    {
      question: "Muss ich für Hilfe bezahlen oder für das Helfen Geld verlangen?",
      answer: "Die meiste Hilfe wird kostenlos als Teil des Aufbaus von Gemeinschaftsverbindungen geleistet. Für zeitaufwändige Services wie Babysitting oder Hausreparaturen können Nachbarn jedoch eine faire Entschädigung vereinbaren. Unsere Plattform unterstützt sowohl kostenlose Gefälligkeiten als auch bezahlte Services."
    },
    {
      question: "Woher weiß ich, ob jemand vertrauenswürdig ist?",
      answer: "Überprüfe ihr Profil auf Verifizierungsabzeichen, lies Bewertungen von anderen Nachbarn und schaue, wie lange sie schon in der Gemeinschaft aktiv sind. Beginne mit kleinen Gefälligkeiten, um Vertrauen aufzubauen, und kommuniziere anfangs immer über unsere Plattform."
    },
    {
      question: "Was ist, wenn ich gerade nicht helfen kann?",
      answer: "Kein Problem! Du kannst jede Anfrage höflich ablehnen, und es gibt keine Verpflichtung zu helfen. Viele Nachbarn bieten lieber Hilfe an, wenn sie Zeit haben, anstatt auf spezifische Anfragen zu antworten. Die Plattform funktioniert am besten, wenn jeder nach seinen Möglichkeiten teilnimmt."
    },
    {
      question: "Kann ich das für Notfälle nutzen?",
      answer: "Bei lebensbedrohlichen Notfällen rufe immer zuerst den Notruf 112. Unsere Plattform ist großartig für dringende, aber nicht lebensbedrohliche Situationen wie einen Fahrdienst ins Krankenhaus, jemanden zu finden, der in einer Krise auf die Kinder aufpasst, oder Hilfe nach einem kleinen Unfall zu bekommen."
    },
    {
      question: "Wie melde ich unangemessenes Verhalten?",
      answer: "Jedes Profil und jede Interaktion hat einen Melden-Button. Wir nehmen alle Meldungen ernst und untersuchen sie umgehend. Unangemessenes Verhalten kann je nach Schwere zu Verwarnungen, vorübergehender Sperrung oder dauerhaftem Ausschluss von der Plattform führen."
    },
    {
      question: "Werden meine persönlichen Daten privat gehalten?",
      answer: "Ja, wir teilen nur die minimal notwendigen Informationen, damit sich Nachbarn gegenseitig helfen können. Deine genaue Adresse wird nie angezeigt - nur deine allgemeine Nachbarschaft. Du kontrollierst, welche persönlichen Details du in deinem Profil angibst."
    },
    {
      question: "Kann ich Menschen außerhalb meiner direkten Nachbarschaft helfen?",
      answer: "Während sich die Plattform auf direkte Nachbarn für Bequemlichkeit und Sicherheit konzentriert, kannst du deinen Hilfe-Radius in den Einstellungen erweitern. Viele Nutzer helfen in einem Umkreis von wenigen Häuserblocks um ihr Zuhause, und manche treten mehreren Nachbarschaftsgruppen bei."
    }
  ];

  return (
    <div className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-muted-foreground">
            Alles, was du über das Helfen und Hilfe bekommen von deinen Nachbarn wissen musst.
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8 shadow-glow">
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