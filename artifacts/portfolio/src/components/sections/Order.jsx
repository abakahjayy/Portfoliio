import { Box, Container, Heading, Text, SimpleGrid, Flex, Textarea } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const orderSchema = z.object({
  businessName: z.string().optional(),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  websitePages: z.string().optional(),
  featuresNeeded: z.string().optional(),
  budget: z.string().optional(),
  deadline: z.string().optional(),
  referenceWebsite: z.string().optional(),
  projectDescription: z.string().min(10, "Please provide a brief description"),
  preferredContactMethod: z.string().optional(),
  agreeToBeContacted: z.boolean().refine(val => val === true, "You must agree to be contacted")
});

export function Order() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(orderSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 201) {
        toaster.create({
          title: "Order Received!",
          description: "Thank you for choosing Joshua.Dev. I will review your requirements and get back to you shortly.",
          type: "success",
          duration: 5000,
        });
        reset();
      } else {
        throw new Error("Failed to send order");
      }
    } catch (err) {
      toaster.create({
        title: "Error",
        description: "Something went wrong. Please try again later or use the contact form.",
        type: "error",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box as="section" id="order" py={32} bg="glass.dark" borderTop="1px solid" borderBottom="1px solid" borderColor="borderBase">
      <Container maxW="container.lg">
        <Box textAlign="center" mb={16}>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Let's Build Your Dream Website
          </Heading>
          <Text color="textMuted" fontSize="lg" maxW="2xl" mx="auto">
            Fill out the form below with details about your project, and I'll provide a comprehensive proposal and timeline.
          </Text>
        </Box>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <Box as="form" onSubmit={handleSubmit(onSubmit)} p={{ base: 6, md: 12 }} bg="panel" borderRadius="2xl" border="1px solid" borderColor="borderBase">
            
            <Heading as="h3" fontSize="xl" fontFamily="heading" fontWeight="700" mb={6} color="brand.500">1. Basic Information</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={10}>
              <Box>
                <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Your Name *</Box>
                <Box as="input" {...register("name")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} />
                {errors.name && <Text color="red.500" fontSize="xs" mt={1}>{errors.name.message}</Text>}
              </Box>
              <Box>
                <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Business/Company Name</Box>
                <Box as="input" {...register("businessName")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} />
              </Box>
              <Box>
                <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Email Address *</Box>
                <Box as="input" type="email" {...register("email")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} />
                {errors.email && <Text color="red.500" fontSize="xs" mt={1}>{errors.email.message}</Text>}
              </Box>
              <Box>
                <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Phone Number</Box>
                <Box as="input" {...register("phone")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} />
              </Box>
            </SimpleGrid>

            <Heading as="h3" fontSize="xl" fontFamily="heading" fontWeight="700" mb={6} color="brand.500">2. Project Details</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6}>
              <Box>
                <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Project Type *</Box>
                <Box as="select" {...register("projectType")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} color="textBase">
                  <option value="">Select a type...</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Business Website">Business Website</option>
                  <option value="E-commerce">E-commerce / Store</option>
                  <option value="Web Application">Custom Web Application / SaaS</option>
                  <option value="API Development">API / Backend Development</option>
                </Box>
                {errors.projectType && <Text color="red.500" fontSize="xs" mt={1}>{errors.projectType.message}</Text>}
              </Box>
              <Box>
                <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Estimated Pages (if applicable)</Box>
                <Box as="input" {...register("websitePages")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} />
              </Box>
              <Box>
                <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Estimated Budget</Box>
                <Box as="select" {...register("budget")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} color="textBase">
                  <option value="">Select budget range...</option>
                  <option value="< $1,000">Less than $1,000</option>
                  <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                  <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </Box>
              </Box>
              <Box>
                <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Desired Deadline</Box>
                <Box as="input" {...register("deadline")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} />
              </Box>
              <Box>
                <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Preferred Contact Method</Box>
                <Box as="select" {...register("preferredContactMethod")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} color="textBase">
                  <option value="">Select a method...</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="WhatsApp">WhatsApp</option>
                </Box>
              </Box>
            </SimpleGrid>

            <Box mb={6}>
              <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Reference Websites (URLs you like)</Box>
              <Box as="input" {...register("referenceWebsite")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} />
            </Box>

            <Box mb={6}>
              <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Specific Features Needed (e.g. Booking, Payments, AI)</Box>
              <Box as="input" {...register("featuresNeeded")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} outline="none" _focus={{ borderColor: "brand.500" }} />
            </Box>

            <Box mb={10}>
              <Box as="label" display="block" mb={2} fontSize="sm" fontWeight="500">Project Description *</Box>
              <Textarea {...register("projectDescription")} w="full" bg="background.dark" border="1px solid" borderColor="borderBase" borderRadius="lg" px={4} py={3} minH="150px" outline="none" _focus={{ borderColor: "brand.500" }} placeholder="Tell me about your business goals and what you want to achieve with this project." />
              {errors.projectDescription && <Text color="red.500" fontSize="xs" mt={1}>{errors.projectDescription.message}</Text>}
            </Box>

            <Box mb={8}>
              <Flex align="flex-start" gap={3}>
                <Box mt={1}>
                  <input type="checkbox" {...register("agreeToBeContacted")} style={{ width: "16px", height: "16px", accentColor: "var(--chakra-colors-brand-500)" }} />
                </Box>
                <Text fontSize="sm" color="textMuted">
                  I agree to be contacted regarding this project request. My information will not be shared with third parties.
                </Text>
              </Flex>
              {errors.agreeToBeContacted && <Text color="red.500" fontSize="xs" mt={1}>{errors.agreeToBeContacted.message}</Text>}
            </Box>

            <Box as="button" type="submit" disabled={isSubmitting} w="full" bg="brand.500" color="white" py={4} borderRadius="lg" fontWeight="800" fontSize="lg" transition="all 0.2s" _hover={{ bg: "brand.600", transform: "translateY(-2px)", boxShadow: "0 10px 20px rgba(14, 165, 233, 0.3)" }} _disabled={{ opacity: 0.7, cursor: "not-allowed", transform: "none" }}>
              {isSubmitting ? "Submitting Request..." : "Submit Project Request"}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
