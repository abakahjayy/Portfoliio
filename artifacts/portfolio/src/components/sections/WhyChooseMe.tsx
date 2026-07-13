import { Box, Container, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiZap, FiCode, FiLayout, FiSearch, FiSmartphone, FiDollarSign, FiShield, FiTrendingUp, FiSettings, FiClock } from "react-icons/fi";

const reasons = [
  { title: "Fast Delivery", icon: FiZap, desc: "Rapid prototyping and agile development ensuring quick time-to-market." },
  { title: "Clean Code", icon: FiCode, desc: "Maintainable, well-documented codebase following industry best practices." },
  { title: "Modern Design", icon: FiLayout, desc: "Sleek, intuitive user interfaces that engage and convert visitors." },
  { title: "SEO Optimized", icon: FiSearch, desc: "Built with search engines in mind to maximize organic visibility." },
  { title: "Responsive", icon: FiSmartphone, desc: "Flawless performance across all devices, screen sizes, and browsers." },
  { title: "Affordable", icon: FiDollarSign, desc: "Premium quality development at competitive, transparent pricing." },
  { title: "Reliable", icon: FiClock, desc: "Consistent communication and strict adherence to project deadlines." },
  { title: "Secure", icon: FiShield, desc: "Implementation of robust security protocols to protect user data." },
  { title: "Scalable", icon: FiTrendingUp, desc: "Architectures designed to grow seamlessly alongside your business." },
  { title: "Maintenance", icon: FiSettings, desc: "Ongoing support and updates post-launch to keep systems running." }
];

export function WhyChooseMe() {
  return (
    <Box as="section" py={32} position="relative">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
            // Value Proposition
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Why Choose Me
          </Heading>
          <Text color="textMuted" maxW="2xl" mx="auto" fontSize="lg">
            I don't just write code; I build solutions that drive business growth and deliver exceptional user experiences.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={6}>
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Box 
                p={6} bg="panel" borderRadius="xl" border="1px solid" borderColor="borderBase"
                h="full" transition="all 0.3s" _hover={{ bg: "glass.dark", borderColor: "brand.500", transform: "translateY(-5px)" }}
                textAlign="center"
              >
                <Flex justify="center" mb={4}>
                  <Box p={3} bg="background.dark" borderRadius="full" color="brand.500" border="1px solid" borderColor="borderBase">
                    <reason.icon size={24} />
                  </Box>
                </Flex>
                <Heading as="h3" fontSize="lg" fontFamily="heading" fontWeight="700" mb={2} color="textBase">
                  {reason.title}
                </Heading>
                <Text color="textMuted" fontSize="sm" lineHeight="1.6">
                  {reason.desc}
                </Text>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
