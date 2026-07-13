import { Box, Container, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { 
  SiJavascript, SiTypescript, SiPython, SiCplusplus, 
  SiReact, SiNextdotjs, SiTailwindcss, SiHtml5, SiFramer,
  SiNodedotjs, SiExpress, SiNestjs, SiGraphql,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiRedis,
  SiDocker, SiRender, SiVercel, SiRailway,
  SiHuggingface, SiLangchain,
  SiGit, SiGithub, SiPostman, SiFigma
} from "react-icons/si";
import { FaAws, FaJava, FaCss3Alt } from "react-icons/fa";
import { RiOpenaiLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "SQL", icon: null, color: "#4479A1" }, // Using generic styling for SQL
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Shadcn", icon: null, color: "#ffffff" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "REST API", icon: null, color: "#0096D6" },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
      { name: "Railway", icon: SiRailway, color: "#0B0D0E" },
    ]
  },
  {
    title: "AI Development",
    skills: [
      { name: "OpenAI", icon: RiOpenaiLine, color: "#412991" },
      { name: "LangChain", icon: SiLangchain, color: "#121212" },
      { name: "HuggingFace", icon: SiHuggingface, color: "#FFD21E" },
      { name: "OpenRouter", icon: null, color: "#ffffff" },
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ]
  }
];

export function Skills() {
  return (
    <Box as="section" id="skills" py={32} bg="glass.dark" borderTop="1px solid" borderBottom="1px solid" borderColor="borderBase">
      <Container maxW="container.xl">
        <Box textAlign="center" mb={16}>
          <Text color="brand.500" fontWeight="700" fontFamily="mono" mb={3} textTransform="uppercase" letterSpacing="widest" fontSize="sm">
            // My Arsenal
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }} fontFamily="heading" fontWeight="800" mb={4}>
            Technical Skills
          </Heading>
          <Text color="textMuted" maxW="2xl" mx="auto" fontSize="lg">
            Technologies and tools I use to bring ideas to life.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={8}>
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Box p={8} bg="panel" borderRadius="2xl" border="1px solid" borderColor="borderBase" h="full" transition="all 0.3s" _hover={{ borderColor: "brand.500" }}>
                <Heading as="h3" fontSize="xl" fontFamily="heading" fontWeight="700" mb={6} color="textBase">
                  {category.title}
                </Heading>
                <Flex flexWrap="wrap" gap={3}>
                  {category.skills.map((skill) => (
                    <Box
                      key={skill.name}
                      display="inline-flex"
                      alignItems="center"
                      gap={2}
                      px={3} py={2}
                      bg="background.dark"
                      border="1px solid" borderColor="borderBase"
                      borderRadius="lg"
                      fontSize="sm" fontWeight="500" color="textMuted"
                      transition="all 0.2s"
                      _hover={{ color: "textBase", bg: "glass.dark", borderColor: "brand.500", transform: "translateY(-2px)" }}
                    >
                      {skill.icon ? <skill.icon color={skill.color === "#000000" || skill.color === "#121212" || skill.color === "#181717" ? "var(--chakra-colors-textBase)" : skill.color} /> : <Box w={2} h={2} borderRadius="full" bg={skill.color || "brand.500"} />}
                      {skill.name}
                    </Box>
                  ))}
                </Flex>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
