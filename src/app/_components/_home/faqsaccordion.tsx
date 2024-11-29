import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import BlurFade from "@/components/ui/blur-fade";
  
  function FaqAccordion() {
    return (
      <article className="mx-auto w-[60%] text-primary">
        <Accordion type="single" collapsible className="w-full space-y-3">
          <BlurFade delay={0.5} inView>
            <AccordionItem
              className="rounded-2xl border bg-white px-3 py-1"
              value="item-1"
            >
              <AccordionTrigger className="text-lg">
                What is Miraj AI Email Management System?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Miraj is an AI-powered email management system designed to automate tasks like email sorting, contact management, and inbox organization. It helps businesses save time and improve productivity.
              </AccordionContent>
            </AccordionItem>
          </BlurFade>
  
          <BlurFade delay={0.6} inView>
            <AccordionItem
              className="rounded-2xl border bg-white px-3 py-1"
              value="item-2"
            >
              <AccordionTrigger className="text-lg">
                How does Miraj improve email organization?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Miraj uses advanced AI algorithms to automatically categorize emails, flagging important messages, sorting spam, and organizing threads, so you never miss a critical email again.
              </AccordionContent>
            </AccordionItem>
          </BlurFade>
  
          <BlurFade delay={0.7} inView>
            <AccordionItem
              className="rounded-2xl border bg-white px-3 py-1"
              value="item-3"
            >
              <AccordionTrigger className="text-lg">
                Is Miraj customizable to fit my specific business needs?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes! Miraj offers customizable settings and features that can be tailored to your business's workflow. You can adjust notification preferences, categorization rules, and other settings to meet your unique needs.
              </AccordionContent>
            </AccordionItem>
          </BlurFade>
  
          <BlurFade delay={0.8} inView>
            <AccordionItem
              className="rounded-2xl border bg-white px-3 py-1"
              value="item-4"
            >
              <AccordionTrigger className="text-lg">
                Is Miraj secure and compliant with privacy regulations?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Absolutely. Miraj adheres to the highest security standards, ensuring your email data is safe and private. We are also compliant with major data privacy regulations such as GDPR and CCPA.
              </AccordionContent>
            </AccordionItem>
          </BlurFade>
  
          <BlurFade delay={0.9} inView>
            <AccordionItem
              className="rounded-2xl border bg-white px-3 py-1"
              value="item-5"
            >
              <AccordionTrigger className="text-lg">
                Can I integrate Miraj with other tools I use?
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                Yes, Miraj can be integrated with a wide range of third-party tools such as CRMs, project management systems, and marketing platforms to streamline your workflow even further.
              </AccordionContent>
            </AccordionItem>
          </BlurFade>
        </Accordion>
      </article>
    );
  }
  
  export default FaqAccordion;
  