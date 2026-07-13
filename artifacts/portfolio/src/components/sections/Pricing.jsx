import { Box, Container, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    description: "Perfect for personal brands and small businesses starting out.",
    price: "$999",
    features: [
      "Up to 5 Pages",
      "Responsive Mobile Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "1 Month Free Support",
      "Standard Delivery (14 days)"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses needing advanced functionality.",
    price: "$2,499",
    features: [
      "Up to 15 Pages",
      "Custom UI/UX Design",
      "CMS Integration (Blog/Admin)",
      "Advanced SEO Optimization",
      "E-commerce / Booking System",
      "3 Months Free Support",
      "Priority Delivery (21 days)"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "Complex web applications and custom software solutions.",
    price: "Custom",
    features: [
      "Unlimited Pages / Complex Architecture",
      "Full Stack Custom App (React/Node)",
      "Database & API Development",
      "AI & 3rd Party Integrations",
      "High-performance & Secure",
      "6 Months Dedicated Support",
      "Agile Development Process"
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <Box as="section" py={32} bg="glass.dark" borderTop="1px solid" borderBottom="1px solid" borderColor="borderBase">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
            // Investment
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Transparent Pricing
          </Heading>
          <Text color="textMuted" maxW="2xl" mx="auto" fontSize="lg">
            Premium development services tailored to your project scope and budget.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} maxW="6xl" mx="auto" alignItems="center">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Box 
                p={8} bg={plan.popular ? "brand.900" : "panel"} 
                borderRadius="2xl" border="1px solid" 
                borderColor={plan.popular ? "brand.500" : "borderBase"}
                position="relative" transform={plan.popular ? { lg: "scale(1.05)" } : "none"}
                zIndex={plan.popular ? 2 : 1}
                boxShadow={plan.popular ? "0 20px 40px rgba(0,0,0,0.3)" : "none"}
              >
                {plan.popular && (
                  <Box 
                    position="absolute" top={0} left="50%" transform="translate(-50%, -50%)"
                    bg="brand.500" color="white" px={4} py={1} borderRadius="full"
                    fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="wider"
                  >
                    Most Popular
                  </Box>
                )}

                <Heading as="h3" fontSize="2xl" fontFamily="heading" fontWeight="700" color={plan.popular ? "white" : "textBase"} mb={2}>
                  {plan.name}
                </Heading>
                <Text color={plan.popular ? "brand.100" : "textMuted"} fontSize="sm" mb={6} h="40px">
                  {plan.description}
                </Text>

                <Box mb={8}>
                  <Text fontSize="5xl" fontWeight="900" fontFamily="heading" color={plan.popular ? "white" : "textBase"} lineHeight="1">
                    {plan.price}
                  </Text>
                  {plan.price !== "Custom" && <Text color={plan.popular ? "brand.200" : "textMuted"} fontSize="sm">starting at</Text>}
                </Box>

                <Flex direction="column" gap={4} mb={8}>
                  {plan.features.map(feature => (
                    <Flex key={feature} align="flex-start" gap={3}>
                      <Box mt={1} color={plan.popular ? "brand.300" : "brand.500"}>
                        <FiCheck size={16} />
                      </Box>
                      <Text color={plan.popular ? "white" : "textBase"} fontSize="sm" fontWeight="500">
                        {feature}
                      </Text>
                    </Flex>
                  ))}
                </Flex>

                <Box 
                  as="a" href="#order" w="full" textAlign="center" display="block"
                  bg={plan.popular ? "brand.500" : "background.dark"} 
                  color={plan.popular ? "white" : "textBase"} 
                  border={plan.popular ? "none" : "1px solid"} borderColor="borderBase"
                  py={3} borderRadius="lg" fontWeight="700"
                  _hover={{ bg: plan.popular ? "brand.600" : "borderBase" }} transition="all 0.2s"
                >
                  Choose {plan.name}
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
