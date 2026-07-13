import { Box, Container, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitPullRequest, FiUsers } from "react-icons/fi";

const stats = [
  { label: "Repositories", value: "84", icon: FiGithub },
  { label: "Stars Earned", value: "320+", icon: FiStar },
  { label: "Contributions", value: "1,200+", icon: FiGitPullRequest },
  { label: "Followers", value: "150", icon: FiUsers },
];

export function OpenSource() {
  return (
    <Box as="section" py={32} bg="glass.dark" borderTop="1px solid" borderBottom="1px solid" borderColor="borderBase" position="relative" overflow="hidden">
      {/* Decorative background grid */}
      <Box 
        position="absolute" inset={0} zIndex={0} opacity={0.1}
        backgroundImage="linear-gradient(var(--chakra-colors-brand-500) 1px, transparent 1px), linear-gradient(90deg, var(--chakra-colors-brand-500) 1px, transparent 1px)"
        backgroundSize="40px 40px"
        maskImage="linear-gradient(to bottom, transparent, black, transparent)"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex direction={{ base: "column", lg: "row" }} align="center" justify="space-between" gap={12}>
          
          <Box flex={1} maxW="2xl">
            <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
              // Open Source
            </Text>
            <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={6}>
              Giving Back to the <br />Community.
            </Heading>
            <Text color="textMuted" fontSize="lg" mb={8} lineHeight="1.8">
              I believe in the power of open source. A significant portion of my time is dedicated to building tools, libraries, and resources that help other developers build better software faster.
            </Text>
            
            <Box 
              as="a" href="#" target="_blank"
              display="inline-flex" alignItems="center" gap={2}
              bg="white" color="black" px={8} py={4} borderRadius="xl" fontWeight="700"
              transition="all 0.3s" _hover={{ transform: "translateY(-2px)", boxShadow: "0 10px 20px rgba(255,255,255,0.2)" }}
            >
              <FiGithub size={20} /> Visit GitHub (@placeholder)
            </Box>
          </Box>

          <Box flex={1} w="full">
            <SimpleGrid columns={2} spacing={6} mb={6}>
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Box p={6} bg="panel" borderRadius="xl" border="1px solid" borderColor="borderBase">
                    <Flex align="center" justify="space-between" mb={4}>
                      <Box p={3} bg="glass.dark" color="textMuted" borderRadius="lg">
                        <stat.icon size={20} />
                      </Box>
                    </Flex>
                    <Heading fontSize="3xl" fontFamily="heading" fontWeight="800" mb={1}>{stat.value}</Heading>
                    <Text color="textMuted" fontSize="sm" fontWeight="500">{stat.label}</Text>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>

            {/* Simulated Contribution Graph */}
            <Box p={6} bg="panel" borderRadius="xl" border="1px solid" borderColor="borderBase">
              <Text fontSize="sm" fontWeight="600" mb={4} color="textMuted">1,200 contributions in the last year</Text>
              <Flex gap={1} flexWrap="wrap" opacity={0.8}>
                {Array.from({ length: 110 }).map((_, i) => {
                  const intensity = Math.random();
                  let bg = "glass.dark";
                  if (intensity > 0.9) bg = "brand.400";
                  else if (intensity > 0.7) bg = "brand.600";
                  else if (intensity > 0.5) bg = "brand.800";
                  else if (intensity > 0.3) bg = "brand.900";
                  
                  return <Box key={i} w={3} h={3} borderRadius="sm" bg={bg} />;
                })}
              </Flex>
            </Box>
          </Box>

        </Flex>
      </Container>
    </Box>
  );
}
