import { Box, Container, Flex, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { FiArrowRight, FiDownload, FiCode } from "react-icons/fi";
import { FaHandSparkles } from "react-icons/fa";

const titles = [
  "Full Stack Developer",
  "Backend Engineer",
  "AI Developer",
  "Web Designer",
  "API Architect",
  "Cloud Developer"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      as="section" 
      position="relative" 
      minH={{ base: "calc(100vh - 80px)", md: "100vh" }} 
      display="flex" 
      alignItems="center" 
      overflow="hidden"
      pt={{ base: 20, md: 0 }}
    >
      {/* Background Effects */}
      <Box 
        position="absolute" top="10%" left="-10%" w="50vw" h="50vw" 
        bgGradient="radial(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)" 
        filter="blur(80px)" zIndex={0} 
      />
      <Box 
        position="absolute" bottom="-10%" right="-10%" w="60vw" h="60vw" 
        bgGradient="radial(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)" 
        filter="blur(80px)" zIndex={0} 
      />
      
      {/* Grid Pattern Overlay */}
      <Box 
        position="absolute" inset={0} zIndex={0} opacity={0.3}
        backgroundImage="linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
        backgroundSize="50px 50px"
        maskImage="radial-gradient(ellipse at center, black 40%, transparent 80%)"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex direction={{ base: "column-reverse", lg: "row" }} align="center" justify="space-between" gap={12}>
          
          <Box flex={1} maxW="2xl" as={motion.div} style={{ y, opacity }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            >
              <Flex align="center" gap={3} mb={6} display="inline-flex" px={4} py={2} borderRadius="full" bg="panel" border="1px solid" borderColor="borderBase">
                <motion.div
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                  style={{ display: "inline-block", originX: 0.7, originY: 0.7 }}
                >
                  <FaHandSparkles color="#eab308" size={20} />
                </motion.div>
                <Text fontWeight="600" color="textBase" fontSize="sm" letterSpacing="wide" textTransform="uppercase">
                  Hello, I'm Abakah Joshua Blessed
                </Text>
              </Flex>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Heading 
                as="h1" fontSize={{ base: "5xl", md: "7xl" }} fontWeight="800" 
                lineHeight="1.1" fontFamily="heading" mb={4}
              >
                Building Powerful <br />
                <Box as="span" bgGradient="linear(to-r, brand.400, purple.500)" backgroundClip="text">
                  Digital Experiences
                </Box>
              </Heading>
            </motion.div>

            <Box h="40px" mb={8} overflow="hidden">
              <motion.div
                key={titleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              >
                <Text fontSize={{ base: "xl", md: "2xl" }} color="textMuted" fontWeight="500" fontFamily="mono">
                  &gt; {titles[titleIndex]}
                </Text>
              </motion.div>
            </Box>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Flex gap={4} flexWrap="wrap">
                <Box 
                  as="a" href="#order"
                  bg="brand.500" color="white" px={8} py={4} borderRadius="xl" fontWeight="600"
                  display="flex" alignItems="center" gap={2} transition="all 0.3s"
                  _hover={{ bg: "brand.600", transform: "translateY(-2px)", boxShadow: "0 10px 25px rgba(14, 165, 233, 0.4)" }}
                >
                  Hire Me <FiArrowRight />
                </Box>
                <Box 
                  as="a" href="#projects"
                  bg="panel" color="textBase" border="1px solid" borderColor="borderBase"
                  px={8} py={4} borderRadius="xl" fontWeight="600" display="flex" alignItems="center" gap={2}
                  transition="all 0.3s" _hover={{ bg: "glass.dark", transform: "translateY(-2px)" }}
                >
                  View My Work <FiCode />
                </Box>
                <Box 
                  as="button" onClick={() => alert("Resume upload pending")}
                  color="textMuted" px={6} py={4} borderRadius="xl" fontWeight="600"
                  display="flex" alignItems="center" gap={2} transition="all 0.3s"
                  _hover={{ color: "textBase" }}
                >
                  <FiDownload /> Resume
                </Box>
              </Flex>
            </motion.div>
          </Box>

          <Box flex={1} display="flex" justifyContent="center" position="relative" w="full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Box position="relative" w={{ base: "300px", md: "450px" }} h={{ base: "300px", md: "450px" }}>
                {/* Floating elements behind */}
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ position: "absolute", top: "10%", right: "10%", width: "80px", height: "80px", background: "linear-gradient(135deg, #0ea5e9, #3b82f6)", borderRadius: "20px", filter: "blur(20px)", opacity: 0.6 }}
                />
                <motion.div 
                  animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ position: "absolute", bottom: "10%", left: "10%", width: "100px", height: "100px", background: "linear-gradient(135deg, #8b5cf6, #d946ef)", borderRadius: "50%", filter: "blur(30px)", opacity: 0.5 }}
                />
                
                {/* Profile Image */}
<Box 
  w="full" 
  h="full" 
  bg="panel" 
  borderRadius="3xl" 
  border="1px solid" 
  borderColor="borderBase"
  backdropFilter="blur(20px)" 
  overflow="hidden" 
  position="relative"
  boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.5)"
>
  <Box
    as="img"
    src="/profpic.jpeg"
    alt="Abakah Joshua Blessed"
    w="full"
    h="full"
    objectFit="cover"
  />

  {/* Decorative corner accents */}
  <Box 
    position="absolute" 
    top={0} 
    left={0} 
    w="40px" 
    h="40px" 
    borderTop="2px solid" 
    borderLeft="2px solid" 
    borderColor="brand.500" 
    borderTopLeftRadius="3xl" 
    m={4} 
  />

  <Box 
    position="absolute" 
    bottom={0} 
    right={0} 
    w="40px" 
    h="40px" 
    borderBottom="2px solid" 
    borderRight="2px solid" 
    borderColor="purple.500" 
    borderBottomRightRadius="3xl" 
    m={4} 
  />
</Box>
              </Box>
            </motion.div>
          </Box>

        </Flex>
      </Container>
    </Box>
  );
}
