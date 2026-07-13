import { Box, Container, Heading, Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "SeedBridge",
    description: "AI-powered Farmer-to-Buyer agricultural marketplace facilitating direct trade, price prediction, and supply chain visibility for farmers and buyers.",
    tech: ["React", "Node.js", "MongoDB", "Express", "AI"],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://seedbridge-blueprint.onrender.com",
    githubUrl: "#"
  },
  {
    title: "GH-GPT",
    description: "AI chatbot platform powered by a custom-built AI model, delivering conversational responses without relying on third-party LLM APIs.",
    tech: ["React", "Node.js", "Custom AI Model", "Express"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://gh-gpt.onrender.com",
    githubUrl: "#"
  },
  {
    title: "Instagram Clone",
    description: "Full-featured social media clone replicating core Instagram functionality — feeds, posts, likes, and profiles — built end-to-end with React.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://react-products-hcld.onrender.com",
    githubUrl: "#"
  },
  {
    title: "Universal Backend Service",
    description: "A fully integrated backend service designed for easy reuse across all of my applications — centralizing auth, data, and API logic in one place.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://fullbackendd.onrender.com",
    githubUrl: "#"
  },
  {
    title: "OpenLabs Backend",
    description: "A lightweight, dedicated backend service built to power a set of smaller experimental projects and prototypes.",
    tech: ["Node.js", "Express", "REST API"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    liveUrl: "https://openlabs-project-2.onrender.com",
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
