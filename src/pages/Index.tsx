
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
        <title>SoftTech Innovations | Website & SaaS Development</title>
        <meta name="description" content="SoftTech Innovations provides cutting-edge website and SaaS development services to help your business thrive in the digital landscape." />
        <meta name="keywords" content="web development, SaaS, mobile apps, UI/UX design, digital transformation" />
        <meta property="og:title" content="SoftTech Innovations | Website & SaaS Development" />
        <meta property="og:description" content="Transforming businesses through innovative digital solutions." />
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
