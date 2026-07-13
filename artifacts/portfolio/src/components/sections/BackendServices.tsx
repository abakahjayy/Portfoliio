import { Box, Container, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiServer, FiCpu, FiCheckCircle, FiExternalLink, FiFileText } from "react-icons/fi";

const platforms = [
  {
    icon: FiServer,
    title: "Multi-Purpose Backend API",
    description: "A robust, scalable backend architecture ready to power modern web and mobile applications.",
    features: [
      "Authentication & JWT",
      "Payments Integration",
      "Email & Notifications",
      "File Upload System",
      "Database Optimization",
      "API Documentation",
      "Role Management",
      "Analytics Dashboard"
    ]
  },
  {
    icon: FiCpu,
    title: "AI Backend Platform",
    description: "Enterprise-grade AI integration platform supporting multiple LLMs and advanced conversation handling.",
    features: [
      "OpenRouter & OpenAI",
      "Response Streaming",
      "Chat Memory Management",
      "Conversation History",
      "Image Generation",
      "Authentication",
      "Admin Dashboard",
      "Rate Limiting"
    ]
  }
];

export function BackendServices() {
  return (
    <Box as="section" py={32} position="relative">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
            // Infrastructure
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Backend Services
          </Heading>
          <Text color="textMuted" maxW="2xl" mx="auto" fontSize="lg">
            High-performance, secure backend systems designed to handle millions of requests and complex operations.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {platforms.map((platform, idx) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <Box 
                p={10} bg="panel" borderRadius="2xl" border="1px solid" borderColor="borderBase"
                position="relative" overflow="hidden" h="full" display="flex" flexDirection="column"
                transition="all 0.3s" _hover={{ borderColor: "brand.500", boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              >
                {/* Background Glow */}
                <Box position="absolute" top="-50px" right="-50px" w="150px" h="150px" bg="brand.500" filter="blur(80px)" opacity={0.2} borderRadius="full" />
                
                <Flex align="center" gap={4} mb={6}>
                  <Box p={4} bg="glass.dark" borderRadius="xl" color="brand.500">
                    <platform.icon size={32} />
                  </Box>
                  <Heading as="h3" fontSize="2xl" fontFamily="heading" fontWeight="700">
                    {platform.title}
                  </Heading>
                </Flex>

                <Text color="textMuted" fontSize="lg" mb={8} lineHeight="1.6">
                  {platform.description}
                </Text>

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} mb={10} flex={1}>
                  {platform.features.map(feature => (
                    <Flex key={feature} align="center" gap={3}>
                      <FiCheckCircle color="var(--chakra-colors-brand-500)" size={16} />
                      <Text color="textBase" fontWeight="500" fontSize="sm">{feature}</Text>
                    </Flex>
                  ))}
                </SimpleGrid>

                <Flex gap={4}>
                  <Box 
                    as="a" href="#"
                    bg="brand.500" color="white" px={6} py={3} borderRadius="lg" fontWeight="600"
                    display="inline-flex" alignItems="center" gap={2} fontSize="sm"
                    _hover={{ bg: "brand.600" }} transition="all 0.2s"
                  >
                    Live Demo <FiExternalLink />
                  </Box>
                  <Box 
                    as="a" href="#"
                    bg="background.dark" color="textBase" border="1px solid" borderColor="borderBase"
                    px={6} py={3} borderRadius="lg" fontWeight="600"
                    display="inline-flex" alignItems="center" gap={2} fontSize="sm"
                    _hover={{ bg: "glass.dark" }} transition="all 0.2s"
                  >
                    Documentation <FiFileText />
                  </Box>
                </Flex>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
