import { useState, useEffect } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          as={motion.div}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          position="fixed"
          bottom="8"
          right="8"
          zIndex={999}
        >
          <Box
            as="button"
            onClick={scrollToTop}
            w="12"
            h="12"
            borderRadius="full"
            bg="panel"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="borderBase"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="textBase"
            boxShadow="0 4px 20px rgba(0,0,0,0.15)"
            _hover={{ bg: "brand.500", color: "white", borderColor: "brand.500", transform: "translateY(-3px)" }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            cursor="pointer"
          >
            <FaArrowUp />
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
}
