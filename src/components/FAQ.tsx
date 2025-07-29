import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I get started on the platform?",
      answer: "Simply click either 'Ask for Help' or 'Offer Help' to create your account. You'll verify your address to connect with your immediate neighborhood, then you can start helping or requesting assistance right away."
    },
    {
      question: "Is it safe to help strangers in my neighborhood?",
      answer: "Safety is our top priority. All users verify their address and identity. We have a community rating system, background checks for certain services, and guidelines for safe meetups. Always meet in public spaces when possible and trust your instincts."
    },
    {
      question: "What types of help can I request or offer?",
      answer: "Almost anything! Common requests include borrowing tools, pet sitting, ride sharing, home repairs, childcare, grocery shopping, meal sharing, and emergency assistance. If it's legal and neighborly, it's welcome on our platform."
    },
    {
      question: "Do I have to pay for help or charge for helping?",
      answer: "Most help is given freely as part of building community connections. However, for time-intensive services like babysitting or home repairs, neighbors can agree on fair compensation. Our platform supports both free favors and paid services."
    },
    {
      question: "How do I know if someone is trustworthy?",
      answer: "Check their profile for verification badges, read reviews from other neighbors, and see how long they've been active in the community. Start with small favors to build trust, and always communicate through our platform initially."
    },
    {
      question: "What if I can't help someone right now?",
      answer: "No worries! You can politely decline any request, and there's no obligation to help. Many neighbors prefer to offer help when they have time rather than responding to specific requests. The platform works best when everyone participates as they're able."
    },
    {
      question: "Can I use this for emergencies?",
      answer: "For life-threatening emergencies, always call 911 first. Our platform is great for urgent but non-emergency situations like needing a ride to the hospital, finding someone to watch kids during a crisis, or getting help after a minor accident."
    },
    {
      question: "How do I report inappropriate behavior?",
      answer: "Every profile and interaction has a report button. We take all reports seriously and investigate promptly. Inappropriate behavior can result in warnings, temporary suspension, or permanent removal from the platform depending on severity."
    },
    {
      question: "Is my personal information kept private?",
      answer: "Yes, we only share the minimum information needed for neighbors to help each other. Your exact address is never shown - only your general neighborhood. You control what personal details to include in your profile."
    },
    {
      question: "Can I help people outside my immediate neighborhood?",
      answer: "While the platform focuses on immediate neighbors for convenience and safety, you can expand your help radius in settings. Many users help within a few blocks of their home, and some join multiple neighborhood groups."
    }
  ];

  return (
    <div className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about helping and getting help from your neighbors.
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