import { Box, Container, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and technical requirements." },
  { num: "02", title: "Planning", desc: "Architecting the solution, selecting the right stack, and creating project timelines." },
  { num: "03", title: "Design", desc: "Creating wireframes, UI/UX designs, and visual prototypes for approval." },
  { num: "04", title: "Development", desc: "Writing clean, scalable code to bring the designs and functionality to life." },
  { num: "05", title: "Testing", desc: "Rigorous QA testing across devices to ensure bug-free performance." },
  { num: "06", title: "Deployment", desc: "Launching the project on production servers with CI/CD pipelines." },
  { num: "07", title: "Support", desc: "Ongoing maintenance, monitoring, and updates to ensure long-term success." }
];

export function Process() {
  return (
    <Box as="section" py={32} position="relative">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={20}>
          <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
            // Workflow
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Development Process
          </Heading>
          <Text color="textMuted" maxW="2xl" mx="auto" fontSize="lg">
            A structured approach ensuring every project is delivered on time, within budget, and to the highest standards.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Box position="relative" h="full" pt={6}>
                {/* Connector Line */}
                {idx !== steps.length - 1 && (
                  <Box 
                    display={{ base: "none", lg: "block" }} position="absolute" 
                    top={10} left="50%" w="100%" h="1px" bg="borderBase" zIndex={0}
                    _after={{ content: '""', position: "absolute", right: 0, top: "-3px", w: "6px", h: "6px", borderRadius: "full", bg: "brand.500" }}
                  />
                )}
                
                <Box 
                  p={6} bg="panel" borderRadius="xl" border="1px solid" borderColor="borderBase" 
                  position="relative" zIndex={1} h="full"
                  _hover={{ borderColor: "brand.500", transform: "translateY(-5px)" }} transition="all 0.3s"
                >
                  <Text 
                    position="absolute" top="-24px" left={6} 
                    fontSize="4xl" fontWeight="900" fontFamily="heading" color="background.dark"
                    textShadow="-1px -1px 0 var(--chakra-colors-brand-500), 1px -1px 0 var(--chakra-colors-brand-500), -1px 1px 0 var(--chakra-colors-brand-500), 1px 1px 0 var(--chakra-colors-brand-500)"
                  >
                    {step.num}
                  </Text>
                  <Heading as="h3" fontSize="xl" fontFamily="heading" fontWeight="700" mt={4} mb={3} color="textBase">
                    {step.title}
                  </Heading>
                  <Text color="textMuted" fontSize="sm" lineHeight="1.6">
                    {step.desc}
                  </Text>
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
