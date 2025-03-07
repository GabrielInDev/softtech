
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Palette, Database, BarChart, Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Custom websites built with the latest technologies for optimal performance and user experience."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that provide seamless experiences across all devices."
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to enhance user engagement and satisfaction."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "SaaS Development",
    description: "Scalable software-as-a-service solutions tailored to your business requirements."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Digital Transformation",
    description: "Strategic guidance and implementation to modernize your business processes."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and customer data."
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
    <section ref={sectionRef} className="py-20 bg-secondary/50">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a full range of services to help your business succeed in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                to="/services" 
                className="text-primary font-medium inline-flex items-center hover:underline group"
              >
                Learn more 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button>
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
