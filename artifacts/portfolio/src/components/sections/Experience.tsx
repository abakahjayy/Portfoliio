import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    company: "TechNexus Solutions (Placeholder)",
    period: "2023 - Present",
    description: "Architected and developed enterprise web applications using React, Node.js, and PostgreSQL. Integrated AI capabilities using OpenAI API and LangChain, improving internal workflow efficiency by 40%.",
    tech: ["React", "Node.js", "PostgreSQL", "OpenAI", "AWS"]
  },
  {
    role: "Backend API Developer",
    company: "CloudData Systems (Placeholder)",
    period: "2021 - 2023",
    description: "Designed and implemented scalable RESTful and GraphQL APIs serving 50k+ daily users. Optimized database queries and implemented Redis caching to reduce response times by 60%.",
    tech: ["NestJS", "GraphQL", "MongoDB", "Redis", "Docker"]
  },
  {
    role: "Frontend Web Developer",
    company: "Creative Digital Agency (Placeholder)",
    period: "2019 - 2021",
    description: "Built pixel-perfect, responsive client websites and e-commerce platforms. Implemented complex UI animations and ensured cross-browser compatibility and accessibility.",
    tech: ["JavaScript", "React", "TailwindCSS", "Figma", "Vercel"]
  }
];

export function Experience() {
  return (
    <Box as="section" id="experience" py={32} position="relative">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={20}>
          <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
            // My Journey
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Work Experience
          </Heading>
        </Box>

        <Box position="relative" maxW="4xl" mx="auto">
          {/* Timeline Line */}
          <Box position="absolute" left={{ base: "15px", md: "50%" }} top={0} bottom={0} w="2px" bg="borderBase" transform={{ md: "translateX(-50%)" }} />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <Box key={idx} position="relative" mb={16} _last={{ mb: 0 }}>
                <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ md: "center" }}>
                  
                  {/* Timeline Node */}
                  <Box 
                    position="absolute" left={{ base: "15px", md: "50%" }} top={{ base: "0", md: "50%" }}
                    transform={{ base: "translateX(-50%)", md: "translate(-50%, -50%)" }}
                    w={8} h={8} borderRadius="full" bg="background.dark" border="2px solid" borderColor="brand.500"
                    zIndex={2} display="flex" alignItems="center" justifyContent="center" color="brand.500"
                  >
                    <FiBriefcase size={12} />
                  </Box>

                  {/* Content Container */}
                  <Box 
                    w={{ base: "calc(100% - 40px)", md: "45%" }} 
                    ml={{ base: "40px", md: isEven ? "0" : "auto" }}
                    mr={{ md: isEven ? "auto" : "0" }}
                    textAlign={{ md: isEven ? "right" : "left" }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Box 
                        p={8} bg="panel" borderRadius="2xl" border="1px solid" borderColor="borderBase"
                        position="relative" _hover={{ borderColor: "brand.500", bg: "glass.dark" }} transition="all 0.3s"
                      >
                        <Heading as="h3" fontSize="2xl" fontFamily="heading" fontWeight="700" color="textBase" mb={2}>
                          {exp.role}
                        </Heading>
                        <Text color="brand.500" fontWeight="600" mb={4} fontSize="lg">
                          {exp.company}
                        </Text>
                        
                        <Flex align="center" gap={2} color="textMuted" fontSize="sm" mb={4} justify={{ md: isEven ? "flex-end" : "flex-start" }}>
                          <FiCalendar /> {exp.period}
                        </Flex>
                        
                        <Text color="textMuted" mb={6} lineHeight="1.6" textAlign="left">
                          {exp.description}
                        </Text>
                        
                        <Flex flexWrap="wrap" gap={2} justify={{ md: isEven ? "flex-end" : "flex-start" }}>
                          {exp.tech.map(tech => (
                            <Box key={tech} px={3} py={1} bg="background.dark" borderRadius="full" fontSize="xs" fontWeight="600" color="textMuted" border="1px solid" borderColor="borderBase">
                              {tech}
                            </Box>
                          ))}
                        </Flex>
                      </Box>
                    </motion.div>
                  </Box>

                </Flex>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
