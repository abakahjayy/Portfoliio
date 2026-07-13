import { Box, Container, Heading, Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const websites = [
  {
    title: "SeedBridge",
    description: "AI-powered agricultural marketplace connecting farmers directly to buyers.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600",
    url: "https://seedbridge-blueprint.onrender.com"
  },
  {
    title: "GH-GPT",
    description: "AI chatbot platform running on a custom-built AI model.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600",
    url: "https://gh-gpt.onrender.com"
  },
  {
    title: "Instagram Clone",
    description: "Full-featured social media clone with feeds, posts, and profiles.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600",
    url: "https://react-products-hcld.onrender.com"
  },
  {
    title: "Universal Backend Service",
    description: "Fully integrated backend powering all of my applications, built for easy reuse.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
    url: "https://fullbackendd.onrender.com"
  },
  {
    title: "OpenLabs Backend",
    description: "Dedicated backend service powering a set of smaller experimental projects.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
    url: "https://openlabs-project-2.onrender.com"
  }
];

export function LiveWebsites() {
  return (
    <Box as="section" py={32} position="relative">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Live Websites
          </Heading>
          <Text color="textMuted" maxW="2xl" mx="auto" fontSize="lg">
            Real, production-deployed projects and services — click through to try them live.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {websites.map((site, idx) => (
            <motion.div
              key={site.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Box 
                borderRadius="xl" overflow="hidden" position="relative" role="group"
                bg="panel" border="1px solid" borderColor="borderBase"
              >
                <Box h="200px" overflow="hidden">
                  <Image 
                    src={site.image} alt={site.title} w="full" h="full" objectFit="cover"
                    transition="transform 0.5s ease" _groupHover={{ transform: "scale(1.05)" }}
                  />
                </Box>
                <Box p={6}>
                  <Heading as="h3" fontSize="xl" fontFamily="heading" fontWeight="700" mb={2} color="textBase">
                    {site.title}
                  </Heading>
                  <Text color="textMuted" fontSize="sm" mb={4} noOfLines={2}>
                    {site.description}
                  </Text>
                  <Box 
                    as="a" href={site.url} target="_blank"
                    display="inline-flex" alignItems="center" gap={2} fontSize="sm" fontWeight="600" color="brand.500"
                    _hover={{ color: "brand.400" }}
                  >
                    Visit Live Site <FiExternalLink />
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
