import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Accordion } from "@radix-ui/react-accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { FiChevronDown } from "react-icons/fi";
import React from "react";

const faqs = [
  { q: "What determines the final pricing of a project?", a: "Pricing is based on project complexity, number of pages, required features (like e-commerce, AI integrations, or custom backends), and the estimated timeline. The packages above serve as starting points." },
  { q: "How long does a typical project take?", a: "A standard business website takes 2-4 weeks. Complex web applications and custom software can take anywhere from 1-3 months depending on the scope and requirements." },
  { q: "Do you provide ongoing support and maintenance?", a: "Yes, every project includes a period of free support post-launch. I also offer monthly retainer packages for continuous maintenance, updates, and server management." },
  { q: "Do you offer domain registration and hosting?", a: "While I don't sell domains directly, I will guide you through purchasing one and handle the entire deployment process on premium cloud providers like AWS, Vercel, or Render." },
  { q: "What is your payment structure?", a: "Standard projects require a 50% deposit upfront to begin work, with the remaining 50% due upon project completion and before final deployment." }
];

export function FAQ() {
  return (
    <Box as="section" py={32} position="relative">
      <Container maxW="container.md">
        <Box textAlign="center" mb={16}>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Frequently Asked Questions
          </Heading>
          <Text color="textMuted" fontSize="lg">
            Common questions about my process, pricing, and services.
          </Text>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionPrimitive.Item 
                key={idx} 
                value={`item-${idx}`}
                className="border border-[var(--chakra-colors-borderBase)] bg-[var(--chakra-colors-panel)] mb-4 rounded-xl overflow-hidden"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-5 px-6 font-heading font-bold text-lg text-left transition-all hover:text-[var(--chakra-colors-brand-500)] [&[data-state=open]>svg]:rotate-180">
                    {faq.q}
                    <FiChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content className="overflow-hidden text-[var(--chakra-colors-textMuted)] text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <Box px={6} pb={5} pt={0} lineHeight="1.6">
                    {faq.a}
                  </Box>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </Box>
  );
}
