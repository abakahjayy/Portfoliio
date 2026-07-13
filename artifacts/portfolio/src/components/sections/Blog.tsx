import { Box, Container, Heading, Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiArrowRight, FiClock } from "react-icons/fi";

const articles = [
  {
    title: "Building Scalable APIs with NestJS and PostgreSQL",
    excerpt: "Learn how to architecture enterprise-ready backend systems capable of handling high traffic with proper abstraction.",
    date: "Oct 12, 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    category: "Backend Development"
  },
  {
    title: "Integrating LLMs into React Applications",
    excerpt: "A practical guide to adding OpenAI and OpenRouter capabilities to your frontend seamlessly and securely.",
    date: "Sep 28, 2025",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    category: "AI & Frontend"
  },
  {
    title: "Modern UI Trends: Glassmorphism and Motion",
    excerpt: "How to apply premium design aesthetics to web applications without sacrificing performance or accessibility.",
    date: "Aug 15, 2025",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800",
    category: "Design & UX"
  }
];

export function Blog() {
  return (
    <Box as="section" py={32} bg="glass.dark" borderTop="1px solid" borderBottom="1px solid" borderColor="borderBase">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="flex-end" mb={12} flexWrap="wrap" gap={4}>
          <Box>
            <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
              // Insights
            </Text>
            <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800">
              Latest Articles
            </Heading>
          </Box>
          <Box 
            as="a" href="#" 
            display="inline-flex" alignItems="center" gap={2} 
            color="textBase" fontWeight="600" _hover={{ color: "brand.500" }} transition="color 0.2s"
          >
            View All Posts <FiArrowRight />
          </Box>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {articles.map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Box 
                as="article" bg="panel" borderRadius="2xl" border="1px solid" borderColor="borderBase" 
                overflow="hidden" role="group" cursor="pointer"
                _hover={{ borderColor: "brand.500", transform: "translateY(-5px)" }} transition="all 0.3s"
              >
                <Box h="200px" overflow="hidden" position="relative">
                  <Image 
                    src={article.image} alt={article.title} w="full" h="full" objectFit="cover"
                    transition="transform 0.5s ease" _groupHover={{ transform: "scale(1.05)" }}
                  />
                  <Box position="absolute" top={4} left={4} bg="brand.500" color="white" px={3} py={1} borderRadius="full" fontSize="xs" fontWeight="700">
                    {article.category}
                  </Box>
                </Box>
                <Box p={6}>
                  <Flex align="center" gap={2} color="textMuted" fontSize="sm" mb={3}>
                    <FiClock /> {article.date}
                  </Flex>
                  <Heading as="h3" fontSize="xl" fontFamily="heading" fontWeight="700" mb={3} color="textBase" _groupHover={{ color: "brand.500" }} transition="color 0.2s">
                    {article.title}
                  </Heading>
                  <Text color="textMuted" fontSize="sm" lineHeight="1.6" mb={4}>
                    {article.excerpt}
                  </Text>
                  <Box display="inline-flex" alignItems="center" gap={2} fontSize="sm" fontWeight="600" color="brand.500">
                    Read Article <FiArrowRight />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
