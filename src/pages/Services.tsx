
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import Chatbot from "@/components/chatbot/Chatbot";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Code, Smartphone, Palette, Database, BarChart, Lock, Server, Globe, LineChart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const primaryServices = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Development",
    description: "We create responsive, high-performance websites and web applications using modern frameworks and best practices.",
    features: [
      "Responsive design for all devices",
      "Performance optimization",
      "SEO-friendly structure",
      "Content management systems",
      "E-commerce solutions"
    ]
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Applications",
    description: "Our mobile app development services deliver intuitive, feature-rich applications for iOS and Android platforms.",
    features: [
      "Native iOS and Android apps",
      "Cross-platform development",
      "UI/UX design",
      "API integration",
      "App Store submission"
    ]
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "SaaS Development",
    description: "We build scalable, secure, and feature-rich software-as-a-service products tailored to your business needs.",
    features: [
      "Custom SaaS architecture",
      "Subscription management",
      "Multi-tenant databases",
      "API development",
      "Third-party integrations"
    ]
  }
];

const additionalServices = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to enhance user engagement and satisfaction."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Digital Transformation",
    description: "Strategic guidance and implementation to modernize your business processes."
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for efficient operations."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "SEO & Marketing",
    description: "Data-driven strategies to improve your online visibility and drive traffic."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Analytics & Reporting",
    description: "Comprehensive data analysis and reporting to guide business decisions."
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Cybersecurity",
    description: "Robust security measures to protect your digital assets and customer data."
  }
];

export default function Services() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | SoftTech Innovations</title>
        <meta name="description" content="Explore our comprehensive range of digital services including web development, mobile apps, SaaS solutions, and more." />
        <meta name="keywords" content="web development services, mobile app development, SaaS development, UI/UX design, digital transformation" />
        <meta property="og:title" content="Our Services | SoftTech Innovations" />
        <meta property="og:description" content="Explore our comprehensive range of digital services including web development, mobile apps, SaaS solutions, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softtech-innovations.com/services" />
        <link rel="canonical" href="https://softtech-innovations.com/services" />
      </Helmet>

      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-primary/5">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We offer a comprehensive range of digital solutions to help your business grow and succeed in the digital landscape.
              </p>
            </div>
          </Container>
        </section>

        {/* Primary Services */}
        <section className="py-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Core Expertise</h2>
              <p className="text-lg text-muted-foreground">
                Our team specializes in delivering exceptional results across these key service areas
              </p>
            </div>

            <div className="space-y-20">
              {primaryServices.map((service, index) => (
                <div 
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="space-y-6">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-lg text-muted-foreground">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 pt-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4">
                      <Link to="/contact">
                        <Button className="group">
                          Discuss Your Project
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border border-border bg-white p-4">
                      <img 
                        src={`https://images.unsplash.com/photo-${index === 0 
                          ? '1555952494-efd681c7e3f9'
                          : index === 1 
                            ? '1555774698-0b77e0d5fac6'
                            : '1555212697-194d2f271cec'
                        }?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80`}
                        alt={service.title}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    
                    {/* Decorative elements */}
                    <div className={`absolute -${index % 2 === 0 ? 'bottom' : 'top'}-6 -${index % 2 === 0 ? 'right' : 'left'}-6 w-48 h-48 bg-secondary rounded-lg z-0`}></div>
                    <div className={`absolute -${index % 2 === 0 ? 'top' : 'bottom'}-6 -${index % 2 === 0 ? 'left' : 'right'}-6 w-32 h-32 bg-primary/10 rounded-lg z-0`}></div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Additional Services */}
        <section ref={sectionRef} className="py-20 bg-secondary/50">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
              <p className="text-lg text-muted-foreground">
                Beyond our core offerings, we provide these specialized services to address all your digital needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div 
                  key={service.title}
                  className={`bg-white rounded-xl p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] ${
                    isInView ? 'animate-fade-in-up' : 'opacity-0'
                  }`} 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link 
                    to="/contact" 
                    className="text-primary font-medium inline-flex items-center hover:underline group"
                  >
                    Learn more 
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <Container>
            <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-xl p-10 border border-border">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need a complete digital transformation or assistance with a specific project, our team is ready to help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="group">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
      <Chatbot />
    </>
  );
}
