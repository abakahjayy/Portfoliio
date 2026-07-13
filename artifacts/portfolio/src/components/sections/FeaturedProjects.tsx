import { Box, Container, Heading, Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "SeedBridge",
    description: "AI-powered Farmer-to-Buyer Marketplace facilitating direct agricultural trade and price prediction.",
    tech: ["React", "Node.js", "MongoDB", "Express", "AI"],
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0a221f?auto=format&fit=crop&q=80&w=800",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI Chatbot Platform",
    description: "Modern AI chatbot platform supporting OpenRouter and multiple LLM providers with streaming capabilities.",
    tech: ["Next.js", "TypeScript", "LangChain", "OpenRouter"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Smart Water Monitoring System",
    description: "IoT-powered water level monitoring and overflow prevention system with real-time dashboard analytics.",
    tech: ["React", "IoT", "Firebase", "Node.js"],
    image: "https://images.unsplash.com/photo-1541888002660-f65561a7a1ee?auto=format&fit=crop&q=80&w=800",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Air Quality Analysis Dashboard",
    description: "Python-powered environmental analytics dashboard providing interactive charts and insights.",
    tech: ["Python", "Django", "Chart.js", "Pandas"],
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80&w=800",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Business Management ERP",
    description: "Full-stack ERP and business management platform streamlining operations, inventory, and HR.",
    tech: ["React", "NestJS", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function FeaturedProjects() {
  return (
    <Box as="section" id="projects" py={32} bg="glass.dark" borderTop="1px solid" borderBottom="1px solid" borderColor="borderBase">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
            // Portfolio
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Featured Projects
          </Heading>
          <Text color="textMuted" maxW="2xl" mx="auto" fontSize="lg">
            A selection of my best technical work, highlighting architecture, design, and problem-solving.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Box 
                bg="panel" borderRadius="2xl" border="1px solid" borderColor="borderBase" 
                overflow="hidden" position="relative" role="group" h="full" display="flex" flexDirection="column"
              >
                <Box h="250px" overflow="hidden" position="relative">
                  <Image 
                    src={project.image} alt={project.title} w="full" h="full" objectFit="cover"
                    transition="transform 0.5s ease" _groupHover={{ transform: "scale(1.05)" }}
                  />
                  <Box 
                    position="absolute" inset={0} bg="rgba(0,0,0,0.5)" opacity={0} 
                    transition="opacity 0.3s ease" _groupHover={{ opacity: 1 }}
                    display="flex" alignItems="center" justifyContent="center" gap={4}
                  >
                    <Box 
                      as="a" href={project.liveUrl} target="_blank"
                      bg="brand.500" color="white" w={12} h={12} borderRadius="full" 
                      display="flex" alignItems="center" justifyContent="center"
                      transform="translateY(20px)" opacity={0} transition="all 0.3s ease" _groupHover={{ transform: "translateY(0)", opacity: 1 }}
                      _hover={{ bg: "brand.600" }} title="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </Box>
                    <Box 
                      as="a" href={project.githubUrl} target="_blank"
                      bg="background.dark" color="white" w={12} h={12} borderRadius="full" 
                      display="flex" alignItems="center" justifyContent="center" border="1px solid" borderColor="borderBase"
                      transform="translateY(20px)" opacity={0} transition="all 0.3s ease 0.1s" _groupHover={{ transform: "translateY(0)", opacity: 1 }}
                      _hover={{ bg: "gray.800" }} title="Source Code"
                    >
                      <FiGithub size={20} />
                    </Box>
                  </Box>
                </Box>
                <Box p={8} flex={1} display="flex" flexDirection="column">
                  <Heading as="h3" fontSize="2xl" fontFamily="heading" fontWeight="700" mb={3} color="textBase" _groupHover={{ color: "brand.500" }} transition="color 0.2s">
                    {project.title}
                  </Heading>
                  <Text color="textMuted" mb={6} flex={1}>
                    {project.description}
                  </Text>
                  <Flex flexWrap="wrap" gap={2}>
                    {project.tech.map(tech => (
                      <Box key={tech} px={3} py={1} bg="glass.dark" color="brand.500" borderRadius="md" fontSize="xs" fontWeight="600" border="1px solid" borderColor="borderBase">
                        {tech}
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
