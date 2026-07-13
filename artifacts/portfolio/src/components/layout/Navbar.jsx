import { useState, useEffect } from "react";
import { Box, Flex, Container, Text, IconButton, Stack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileNavOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transition="all 0.3s ease-in-out"
      bg={scrolled ? "panel" : "transparent"}
      backdropFilter={scrolled ? "blur(12px)" : "none"}
      borderBottom={scrolled ? "1px solid" : "none"}
      borderColor="borderBase"
    >
      <Container maxW="container.xl">
        <Flex h="80px" align="center" justify="space-between">
          <Text
            as="a"
            href="#"
            fontFamily="heading"
            fontSize="2xl"
            fontWeight="800"
            color="textBase"
            letterSpacing="tight"
            _hover={{ textDecoration: "none" }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            Joshua.<Box as="span" color="brand.500">Dev</Box>
          </Text>

          {/* Desktop Nav */}
          <Flex display={{ base: "none", md: "flex" }} align="center" gap={8}>
            {navLinks.map((link) => (
              <Box
                as="a"
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                fontSize="sm"
                fontWeight="500"
                color="textMuted"
                position="relative"
                transition="color 0.2s"
                _hover={{
                  color: "textBase",
                  _after: { width: "100%" }
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: "-4px",
                  left: "0",
                  bg: "brand.500",
                  transition: "width 0.3s ease"
                }}
              >
                {link.name}
              </Box>
            ))}
            
            <Box
              as="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              w="10"
              h="10"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="glass.dark"
              _hover={{ bg: "borderBase" }}
              transition="all 0.2s"
              color="textBase"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </Box>

            <Box
              as="button"
              onClick={() => scrollTo("#order")}
              bg="brand.500"
              color="white"
              px={5}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="600"
              transition="all 0.2s"
              _hover={{ bg: "brand.600", transform: "translateY(-1px)", boxShadow: "0 4px 12px rgba(14, 165, 233, 0.3)" }}
            >
              Hire Me
            </Box>
          </Flex>

          {/* Mobile Nav Toggle */}
          <Flex display={{ base: "flex", md: "none" }} align="center" gap={4}>
            <Box
              as="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              w="10"
              h="10"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bg="glass.dark"
              color="textBase"
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </Box>
            <Box
              as="button"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              color="textBase"
              p={2}
            >
              {mobileNavOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </Box>
          </Flex>
        </Flex>
      </Container>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileNavOpen && (
          <Box
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            overflow="hidden"
            bg="panel"
            backdropFilter="blur(16px)"
            borderBottom="1px solid"
            borderColor="borderBase"
            display={{ base: "block", md: "none" }}
          >
            <Stack spacing={0} p={4}>
              {navLinks.map((link) => (
                <Box
                  as="a"
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  py={4}
                  fontSize="lg"
                  fontWeight="500"
                  color="textBase"
                  borderBottom="1px solid"
                  borderColor="borderBase"
                >
                  {link.name}
                </Box>
              ))}
              <Box pt={6} pb={2}>
                <Box
                  as="button"
                  onClick={() => scrollTo("#order")}
                  w="full"
                  bg="brand.500"
                  color="white"
                  py={3}
                  borderRadius="lg"
                  fontSize="md"
                  fontWeight="600"
                >
                  Hire Me
                </Box>
              </Box>
            </Stack>
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
