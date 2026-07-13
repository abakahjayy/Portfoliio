import { Box, Container, Heading, Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const websites = [
  {
    title: "Apex Finance Co.",
    description: "Corporate website for a financial advisory firm with custom calculators.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    url: "#"
  },
  {
    title: "Luxe Real Estate",
    description: "Premium property listing platform with interactive maps and 3D tours.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    url: "#"
  },
  {
    title: "Savor Restaurant",
    description: "Dynamic restaurant site featuring online reservations and digital menus.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
    url: "#"
  },
  {
    title: "EduTech Academy",
    description: "Online learning platform for K-12 students with course progression tracking.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=600",
    url: "#"
  },
  {
    title: "MedCare Clinic",
    description: "Healthcare facility website with patient portal and appointment booking.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600",
    url: "#"
  },
  {
    title: "StyleDrop E-Commerce",
    description: "Modern fashion storefront built with Next.js and headless Shopify.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
    url: "#"
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
            Production-ready business websites built for clients across various industries.
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
                    Visit Site (Placeholder) <FiExternalLink />
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
