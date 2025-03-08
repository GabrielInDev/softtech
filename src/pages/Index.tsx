
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CallToAction from "@/components/home/CallToAction";
import Chatbot from "@/components/chatbot/Chatbot";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SoftTech Innovations | Desenvolvimento de Websites & SaaS</title>
        <meta name="description" content="A SoftTech Innovations oferece serviços de desenvolvimento de websites e SaaS de ponta para ajudar sua empresa a prosperar no cenário digital." />
        <meta name="keywords" content="desenvolvimento web, SaaS, aplicativos móveis, design UI/UX, transformação digital" />
        <meta property="og:title" content="SoftTech Innovations | Desenvolvimento de Websites & SaaS" />
        <meta property="og:description" content="Transformando empresas através de soluções digitais inovadoras." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softtech-innovations.com" />
        <link rel="canonical" href="https://softtech-innovations.com" />
      </Helmet>

      <Header />
      
      <main>
        <Hero />
        <Services />
        <FeaturedProjects />
        <CallToAction />
      </main>
      
      <Footer />
      <Chatbot />
    </>
  );
};

export default Index;
