import { Box, Container, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiTerminal, FiLayout, FiCpu, FiGlobe } from "react-icons/fi";

const stats = [
  { label: "Years Experience", value: "3+", icon: FiTerminal },
  { label: "Projects Completed", value: "45+", icon: FiLayout },
  { label: "Happy Clients", value: "20+", icon: FiGlobe },
  { label: "Technologies", value: "15+", icon: FiCpu },
];

export function About() {
  return (
    <Box as="section" id="about" py={32} position="relative">
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", lg: "row" }} gap={16} align="center">
          
          <Box flex={1} w="full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
                // About Me
              </Text>
              <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={6}>
                Engineering Solutions <br />
                <Box as="span" color="textMuted">That Matter.</Box>
              </Heading>
              
              <Text fontSize={{ base: "md", md: "lg" }} color="textMuted" lineHeight="1.8" mb={6}>
                I am Abakah Joshua Blessed, a passionate Full Stack Software Engineer from Ghana who enjoys transforming ideas into scalable digital products. My expertise includes building high-performance web applications, backend APIs, AI-powered systems, business websites, SaaS platforms, and custom software solutions.
              </Text>
              
              <Text fontSize={{ base: "md", md: "lg" }} color="textMuted" lineHeight="1.8" mb={10}>
                I love solving real-world problems through technology while creating elegant user experiences and efficient backend architectures. I continually learn new technologies to stay ahead in modern software development.
              </Text>

              <Box 
                p={6} bg="panel" border="1px solid" borderColor="borderBase" 
                borderRadius="2xl" position="relative" overflow="hidden"
              >
                <Box position="absolute" left={0} top={0} bottom={0} w="4px" bg="brand.500" />
                <Text fontStyle="italic" color="textBase" fontSize="lg" fontWeight="500">
                  "Clean Code. Smart Solutions. Beautiful Experiences."
                </Text>
              </Box>
            </motion.div>
          </Box>

          <Box flex={1} w="full">
            <SimpleGrid columns={2} spacing={6}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Box 
                    p={8} bg="panel" border="1px solid" borderColor="borderBase"
                    borderRadius="2xl" transition="all 0.3s"
                    _hover={{ transform: "translateY(-5px)", borderColor: "brand.500", bg: "glass.dark" }}
                    position="relative" overflow="hidden" group
                  >
                    <Box 
                      position="absolute" top="-20px" right="-20px" 
                      opacity={0.05} transform="scale(3)" transition="all 0.3s"
                      _groupHover={{ transform: "scale(3.5)", opacity: 0.1, color: "var(--chakra-colors-brand-500)" }}
                    >
                      <stat.icon size={100} />
                    </Box>
                    <Flex align="center" gap={4} mb={4}>
                      <Box p={3} bg="glass.dark" borderRadius="xl" color="brand.500">
                        <stat.icon size={24} />
                      </Box>
                    </Flex>
                    <Heading fontSize="4xl" fontWeight="800" fontFamily="heading" mb={2}>
                      {stat.value}
                    </Heading>
                    <Text color="textMuted" fontWeight="500">{stat.label}</Text>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>

        </Flex>
      </Container>
    </Box>
  );
}
