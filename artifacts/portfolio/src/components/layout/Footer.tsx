import { Box, Container, Flex, Text, Stack, SimpleGrid } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "X (Twitter)" },
  { icon: FaInstagram, href: "https://instagram.com/abakah_jay", label: "Instagram" },
  { icon: FaTiktok, href: "https://tiktok.com/@abakah_jay", label: "TikTok" },
  { icon: FaSnapchatGhost, href: "https://snapchat.com/add/abakah_jay", label: "Snapchat" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <Box as="footer" bg="bg" borderTop="1px solid" borderColor="borderBase" pt={20} pb={10} position="relative" overflow="hidden">
      {/* Decorative Glow */}
      <Box 
        position="absolute" top="-100px" left="50%" transform="translateX(-50%)" 
        w="80%" h="200px" bgGradient="radial(circle, brand.500 0%, transparent 70%)" 
        filter="blur(100px)" opacity={0.1} pointerEvents="none" 
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={12} mb={16}>
          <Stack spacing={6}>
            <Text fontFamily="heading" fontSize="2xl" fontWeight="800" color="textBase">
              Joshua.<Box as="span" color="brand.500">Dev</Box>
            </Text>
            <Text color="textMuted" maxW="sm" lineHeight="relaxed">
              Building Powerful Digital Experiences for Businesses. Clean Code. Smart Solutions. Beautiful Experiences.
            </Text>
            <Flex gap={3} flexWrap="wrap">
              {socialLinks.map((social) => (
                <Box
                  as={motion.a}
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  w="10" h="10" borderRadius="full" bg="panel"
                  border="1px solid" borderColor="borderBase"
                  display="flex" alignItems="center" justifyContent="center"
                  color="textMuted"
                  whileHover={{ y: -3, color: "#fff", bg: "#0ea5e9", borderColor: "#0ea5e9" }}
                  transition={{ duration: 0.2 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </Box>
              ))}
            </Flex>
          </Stack>

          <Stack spacing={6}>
            <Text fontFamily="heading" fontSize="lg" fontWeight="700">Quick Links</Text>
            <Stack spacing={3}>
              {["Projects", "Services", "About Me", "Contact", "GitHub"].map((link) => (
                <Text 
                  key={link} as="a" href={`#${link.toLowerCase().replace(" ", "-")}`} 
                  color="textMuted" _hover={{ color: "brand.500", paddingLeft: 2 }} 
                  transition="all 0.2s" display="inline-block"
                >
                  {link}
                </Text>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={6}>
            <Text fontFamily="heading" fontSize="lg" fontWeight="700">Newsletter</Text>
            <Text color="textMuted">Subscribe to receive my latest articles and updates.</Text>
            <Flex>
              <Box 
                as="input" placeholder="Your email address" 
                bg="panel" border="1px solid" borderColor="borderBase"
                borderRadius="lg" borderRightRadius={0} px={4} py={3}
                flex={1} color="textBase" outline="none"
                _focus={{ borderColor: "brand.500" }}
              />
              <Box 
                as="button" bg="brand.500" color="white" 
                px={6} py={3} borderRadius="lg" borderLeftRadius={0}
                fontWeight="600" _hover={{ bg: "brand.600" }} transition="all 0.2s"
              >
                Subscribe
              </Box>
            </Flex>
          </Stack>
        </SimpleGrid>

        <Flex 
          direction={{ base: "column", md: "row" }} 
          justify="space-between" align="center" 
          pt={8} borderTop="1px solid" borderColor="borderBase"
        >
          <Text color="textMuted" fontSize="sm" mb={{ base: 4, md: 0 }}>
            © 2026 Joshua.Dev. All rights reserved.
          </Text>
          <Text color="textMuted" fontSize="sm">
            Built with ❤️ by Abakah Joshua Blessed
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
