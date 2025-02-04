import { motion } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "I specialize in handling insurance claims, and financial planning to help you achieve your goals.",
    },
    {
      question: "Do you charge for consultations?",
      answer:
        "Initial consultations are free, allowing us to discuss your case and how I can assist you.",
    },
    {
      question: "What is your experience in handling insurance claims?",
      answer:
        "I have over 30 years of experience working as a claims specialist with State Farm Insurance, resolving countless claims effectively.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply fill out the contact form above, and I’ll get in touch to discuss your requirements and next steps.",
    },
    {
      question: "Can you provide customized financial planning?",
      answer:
        "Yes, I offer tailored financial planning services to help you secure your financial future.",
    },
  ];

  return (
    <section className="py-16 px-5 sm:px-10 bg-white" id="faq">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible>
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              {/* Animated Trigger */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <AccordionTrigger className="text-lg font-semibold">
                  {item.question}
                </AccordionTrigger>
              </motion.div>

              {/* Animated Content */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </motion.div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
