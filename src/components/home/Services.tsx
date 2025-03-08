
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Palette, Database, BarChart, Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Desenvolvimento Web",
    description: "Sites personalizados construídos com as tecnologias mais recentes para desempenho e experiência do usuário ideais."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Aplicativos Móveis",
    description: "Aplicativos móveis nativos e multiplataforma que proporcionam experiências perfeitas em todos os dispositivos."
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Design UI/UX",
    description: "Interfaces bonitas e intuitivas projetadas para melhorar o engajamento e a satisfação do usuário."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Desenvolvimento SaaS",
    description: "Soluções de software como serviço escaláveis adaptadas às necessidades do seu negócio."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Transformação Digital",
    description: "Orientação estratégica e implementação para modernizar seus processos de negócios."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Cibersegurança",
    description: "Soluções de segurança abrangentes para proteger seus ativos digitais e dados de clientes."
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
            Nossos Serviços
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Soluções Digitais Abrangentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços para ajudar sua empresa a ter sucesso no mundo digital
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
                Saiba mais 
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button>
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
