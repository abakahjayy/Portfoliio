import { Box, Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import { Link } from "wouter";

export function NotFound() {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="bg" position="relative" overflow="hidden">
      {/* Decorative Background */}
      <Box 
        position="absolute" top="20%" left="30%" w="40vw" h="40vw" 
        bgGradient="radial(circle, rgba(2, 132, 199, 0.15) 0%, transparent 70%)"
        filter="blur(60px)" zIndex={0}
      />
      
      <Container maxW="container.md" zIndex={1} textAlign="center">
        <Heading 
          fontSize={{ base: "8xl", md: "9xl" }} 
          fontWeight="800" 
          bgGradient="linear(to-r, brand.400, purple.500)"
          backgroundClip="text"
          fontFamily="heading"
          mb={4}
        >
          404
        </Heading>
        <Heading as="h2" fontSize="2xl" mb={4} fontFamily="heading">
          Lost in Cyberspace
        </Heading>
        <Text color="textMuted" fontSize="lg" mb={8} maxW="md" mx="auto">
          The page you are looking for doesn't exist or has been moved to another dimension.
        </Text>
        <Link href="/">
          <Button 
            size="lg" 
            bg="brand.500" 
            color="white" 
            _hover={{ bg: "brand.600", transform: "translateY(-2px)" }}
            transition="all 0.2s"
            borderRadius="full"
            px={8}
          >
            Return to Reality
          </Button>
        </Link>
      </Container>
    </Flex>
  );
}
