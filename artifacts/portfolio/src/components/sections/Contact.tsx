import { Box, Container, Heading, Text, SimpleGrid, Flex, Textarea } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 201) {
        toaster.create({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you shortly.",
          type: "success",
          duration: 5000,
        });
        reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      toaster.create({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        type: "error",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box as="section" id="contact" py={32} position="relative" overflow="hidden">
      <Box position="absolute" top="0" right="0" w="50vw" h="50vw" bg="brand.500" filter="blur(150px)" opacity={0.05} borderRadius="full" transform="translate(30%, -30%)" zIndex={0} />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex direction={{ base: "column", lg: "row" }} gap={16}>
          
          <Box flex={1}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
                // Get In Touch
              </Text>
              <Heading as="h2" fontSize={{ base: "4xl", md: "6xl" }} fontFamily="heading" fontWeight="800" mb={6}>
                Let's discuss your next project.
              </Heading>
              <Text color="textMuted" fontSize="lg" mb={10} lineHeight="1.8">
                Whether you have a question, a project inquiry, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </Text>

              <Box mb={8}>
                <Text color="textMuted" fontSize="sm" fontWeight="600" textTransform="uppercase" letterSpacing="wider" mb={2}>Email</Text>
                <Text as="a" href="mailto:abakahjoshua358@gmail.com" fontSize="xl" fontWeight="700" color="textBase" _hover={{ color: "brand.500" }} transition="color 0.2s">
                  abakahjoshua358@gmail.com
                </Text>
              </Box>

              <Box mb={8}>
                <Text color="textMuted" fontSize="sm" fontWeight="600" textTransform="uppercase" letterSpacing="wider" mb={2}>Phone</Text>
                <Text as="a" href="tel:+233532900914" fontSize="xl" fontWeight="700" color="textBase" display="block" _hover={{ color: "brand.500" }} transition="color 0.2s">
                  +233 53 290 0914
                </Text>
                <Text as="a" href="tel:+233257445431" fontSize="xl" fontWeight="700" color="textBase" display="block" mt={1} _hover={{ color: "brand.500" }} transition="color 0.2s">
                  +233 25 744 5431
                </Text>
              </Box>

              <Box>
                <Text color="textMuted" fontSize="sm" fontWeight="600" textTransform="uppercase" letterSpacing="wider" mb={2}>Location</Text>
                <Text fontSize="xl" fontWeight="700" color="textBase">
                  Accra, Ghana
                </Text>
              </Box>
            </motion.div>
          </Box>

          <Box flex={1} w="full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Box as="form" onSubmit={handleSubmit(onSubmit)} p={{ base: 6, md: 10 }} bg="panel" borderRadius="2xl" border="1px solid" borderColor="borderBase" boxShadow="0 25px 50px -12px rgba(0,0,0,0.2)">
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6} mb={6}>
                  <Box>
                    <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500" color="textBase">Full Name *</Box>
                    <Box as="input" {...register("fullName")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} color="textBase" outline="none" _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }} />
                    {errors.fullName && <Text color="red.500" fontSize="xs" mt={1}>{errors.fullName.message}</Text>}
                  </Box>
                  <Box>
                    <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500" color="textBase">Email *</Box>
                    <Box as="input" type="email" {...register("email")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} color="textBase" outline="none" _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }} />
                    {errors.email && <Text color="red.500" fontSize="xs" mt={1}>{errors.email.message}</Text>}
                  </Box>
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6} mb={6}>
                  <Box>
                    <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500" color="textBase">Phone Number</Box>
                    <Box as="input" {...register("phone")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} color="textBase" outline="none" _focus={{ borderColor: "brand.500" }} />
                  </Box>
                  <Box>
                    <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500" color="textBase">Subject *</Box>
                    <Box as="input" {...register("subject")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} color="textBase" outline="none" _focus={{ borderColor: "brand.500" }} />
                    {errors.subject && <Text color="red.500" fontSize="xs" mt={1}>{errors.subject.message}</Text>}
                  </Box>
                </SimpleGrid>

                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={6} mb={6}>
                  <Box>
                    <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500" color="textBase">Project Type</Box>
                    <Box as="input" {...register("projectType")} placeholder="e.g. Website" w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} color="textBase" outline="none" _focus={{ borderColor: "brand.500" }} />
                  </Box>
                  <Box>
                    <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500" color="textBase">Budget</Box>
                    <Box as="input" {...register("budget")} placeholder="e.g. $500 - $1000" w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} color="textBase" outline="none" _focus={{ borderColor: "brand.500" }} />
                  </Box>
                  <Box>
                    <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500" color="textBase">Timeline</Box>
                    <Box as="input" {...register("timeline")} placeholder="e.g. 2 weeks" w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} color="textBase" outline="none" _focus={{ borderColor: "brand.500" }} />
                  </Box>
                </SimpleGrid>

                <Box mb={6}>
                  <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500" color="textBase">Message *</Box>
                  <Textarea {...register("message")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} color="textBase" minH="150px" outline="none" _focus={{ borderColor: "brand.500", boxShadow: "0 0 0 1px var(--chakra-colors-brand-500)" }} />
                  {errors.message && <Text color="red.500" fontSize="xs" mt={1}>{errors.message.message}</Text>}
                </Box>

                <Box as="button" type="submit" disabled={isSubmitting} w="full" bg="brand.500" color="white" py={4} borderRadius="lg" fontWeight="700" fontSize="md" transition="all 0.2s" _hover={{ bg: "brand.600", transform: "translateY(-2px)" }} _disabled={{ opacity: 0.7, cursor: "not-allowed", transform: "none" }}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
