import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Loader } from "@/components/ui/Loader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Sections
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { LiveWebsites } from "@/components/sections/LiveWebsites";
import { OpenSource } from "@/components/sections/OpenSource";
import { BackendServices } from "@/components/sections/BackendServices";
import { Services } from "@/components/sections/Services";
import { WhyChooseMe } from "@/components/sections/WhyChooseMe";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Order } from "@/components/sections/Order";

export function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate premium loading experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box position="relative">
      <ScrollProgress />
      <Navbar />
      
      <Box as="main" pt="80px">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <LiveWebsites />
        <OpenSource />
        <BackendServices />
        <Services />
        <WhyChooseMe />
        <Testimonials />
        <Process />
        <Pricing />
        <FAQ />
        <Blog />
        <Order />
        <Contact />
      </Box>

      <Footer />
      <BackToTop />
    </Box>
  );
}
