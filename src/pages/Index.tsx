
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServiceCards from "@/components/home/ServiceCards";
import AboutSection from "@/components/home/AboutSection";
import ObjectivesSection from "@/components/home/ObjectivesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceCards />
      <AboutSection />
      <ObjectivesSection />
    </Layout>
  );
};

export default Index;
