import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function Loader() {
  return (
    <Flex
      position="fixed"
      inset={0}
      align="center"
      justify="center"
      bg="background.dark"
      zIndex={9999}
      flexDirection="column"
    >
      <Box position="relative" w="80px" h="80px">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.1)",
            borderTopColor: "#0ea5e9", // brand.400
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{
            position: "absolute",
            inset: "10px",
            borderRadius: "50%",
            border: "2px solid rgba(255,255,255,0.1)",
            borderRightColor: "#8b5cf6", // purple.500
          }}
        />
        <Flex position="absolute" inset={0} align="center" justify="center">
          <Text fontFamily="heading" fontWeight="bold" fontSize="xl" color="white">
            J.D
          </Text>
        </Flex>
      </Box>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Text mt={6} color="gray.400" fontFamily="mono" fontSize="sm" letterSpacing="widest">
          INITIALIZING...
        </Text>
      </motion.div>
    </Flex>
  );
}
