import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import IndustriesSection from "../components/IndustriesSection";
import InsightsSection from "../components/InsightsSection";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import StayWithUsModal from "../components/StayWithUsModal";

export const metadata = {
  title: "Home",
  description:
    "Virat Software Solutions delivers custom web, mobile, SaaS, AI, and automation solutions for growth-focused businesses.",
};

export default function Home() {
  return (
    <>
      <Header />
      <StayWithUsModal />
      <main>
        <HeroSection />
        <ServicesSection />
        <IndustriesSection />
        <ProcessSection />
        <InsightsSection />
      </main>
      <Footer />
    </>
  );
}
