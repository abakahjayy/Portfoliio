import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const servicesList = [
  "Business Website", "Portfolio Website", "School Project", "Restaurant Website", 
  "Church Website", "Company Website", "Real Estate Website", "Hospital Website", 
  "Inventory System", "POS System", "E-commerce Store", "Learning Management System", 
  "SaaS Development", "AI Chatbot", "Backend Development", "Custom API", "Automation"
];

export function Services() {
  return (
    <Box as="section" id="services" py={32} bg="brand.900" position="relative" overflow="hidden">
      {/* Background patterns */}
      <Box 
        position="absolute" inset={0} opacity={0.1}
        backgroundImage="radial-gradient(circle at 2px 2px, white 1px, transparent 0)"
        backgroundSize="40px 40px"
      />
      <Box position="absolute" top="0" right="0" w="50vw" h="50vw" bg="brand.500" filter="blur(150px)" opacity={0.3} borderRadius="full" transform="translate(30%, -30%)" />
      <Box position="absolute" bottom="0" left="0" w="40vw" h="40vw" bg="purple.600" filter="blur(150px)" opacity={0.3} borderRadius="full" transform="translate(-30%, 30%)" />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Box textAlign="center" mb={16}>
          <Text color="brand.300" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
            // What I Offer
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} color="white" fontFamily="heading" fontWeight="800" mb={4}>
            Custom Software Services
          </Heading>
          <Text color="brand.100" maxW="2xl" mx="auto" fontSize="lg" opacity={0.8}>
            End-to-end development services tailored to your specific business needs.
          </Text>
        </Box>

        <Flex flexWrap="wrap" justify="center" gap={4} maxW="5xl" mx="auto">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (idx % 10) * 0.05 }}
            >
              <Box 
                px={6} py={3} bg="rgba(255,255,255,0.05)" border="1px solid" borderColor="rgba(255,255,255,0.1)"
                borderRadius="full" color="white" fontWeight="500" fontSize="md"
                backdropFilter="blur(10px)" transition="all 0.3s" cursor="default"
                _hover={{ bg: "brand.500", borderColor: "brand.400", transform: "translateY(-3px)", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              >
                {service}
              </Box>
            </motion.div>
          ))}
        </Flex>

        <Box textAlign="center" mt={20}>
          <Box 
            as="a" href="#order"
            display="inline-block" bg="white" color="brand.900" px={10} py={4} 
            borderRadius="xl" fontWeight="700" fontSize="lg" transition="all 0.3s"
            _hover={{ transform: "scale(1.05)", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
          >
            Start Your Project
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
