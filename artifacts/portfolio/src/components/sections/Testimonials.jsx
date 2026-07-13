import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael Osei",
    company: "TechHub Africa",
    quote: "Joshua delivered an outstanding SaaS platform for us ahead of schedule. His understanding of full-stack architecture and attention to detail in the UI made all the difference. Highly recommended for any serious web application project."
  },
  {
    name: "Sarah Mensah",
    company: "Luxe Retail",
    quote: "Working with Abakah was a game-changer for our e-commerce business. The custom Shopify headless build he created is blazing fast and our conversion rates have increased by 40%. The codebase is exceptionally clean."
  },
  {
    name: "David K.",
    company: "EduTech Solutions",
    quote: "We needed a complex learning management system with AI integration. Joshua not only built it flawlessly but also suggested improvements that saved us thousands in server costs. A truly premium developer."
  },
  {
    name: "Emmanuel Appiah",
    company: "Apex Finance",
    quote: "The API backend Joshua designed for our fintech app handles thousands of transactions seamlessly. His security implementation and API documentation are top-tier. He's an architect who knows how to scale."
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Box as="section" py={32} bg="glass.dark" borderTop="1px solid" borderBottom="1px solid" borderColor="borderBase" position="relative">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
            // Client Feedback
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Testimonials
          </Heading>
        </Box>

        <Box position="relative" maxW="4xl" mx="auto">
          <Box overflow="hidden" ref={emblaRef}>
            <Flex>
              {testimonials.map((testimonial, index) => (
                <Box key={index} flex="0 0 100%" minW="0" px={{ base: 4, md: 10 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Box 
                      bg="panel" p={{ base: 8, md: 12 }} borderRadius="2xl" border="1px solid" borderColor="borderBase"
                      position="relative" textAlign="center"
                    >
                      <Box color="brand.500" opacity={0.2} position="absolute" top={8} left={8}>
                        <FaQuoteLeft size={60} />
                      </Box>
                      
                      <Text fontSize={{ base: "lg", md: "2xl" }} color="textBase" fontWeight="500" fontStyle="italic" mb={8} position="relative" zIndex={1} lineHeight="1.6">
                        "{testimonial.quote}"
                      </Text>
                      
                      <Box>
                        <Heading as="h4" fontSize="xl" fontFamily="heading" fontWeight="700" color="textBase" mb={1}>
                          {testimonial.name}
                        </Heading>
                        <Text color="brand.500" fontWeight="600" fontSize="sm">{testimonial.company}</Text>
                      </Box>
                    </Box>
                  </motion.div>
                </Box>
              ))}
            </Flex>
          </Box>

          <Flex justify="center" gap={4} mt={8}>
            <Box 
              as="button" onClick={scrollPrev}
              w={12} h={12} borderRadius="full" bg="panel" border="1px solid" borderColor="borderBase"
              display="flex" alignItems="center" justifyContent="center" color="textBase"
              _hover={{ bg: "brand.500", color: "white", borderColor: "brand.500" }} transition="all 0.2s"
            >
              <FiChevronLeft size={24} />
            </Box>
            <Box 
              as="button" onClick={scrollNext}
              w={12} h={12} borderRadius="full" bg="panel" border="1px solid" borderColor="borderBase"
              display="flex" alignItems="center" justifyContent="center" color="textBase"
              _hover={{ bg: "brand.500", color: "white", borderColor: "brand.500" }} transition="all 0.2s"
            >
              <FiChevronRight size={24} />
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
