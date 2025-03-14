
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "Painel Financeiro",
    category: "Aplicação Web",
    description: "Painel financeiro moderno com visualização de dados em tempo real e recursos de gerenciamento de contas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    link: "/portfolio"
  },
  {
    title: "App de Saúde & Bem-estar",
    category: "Aplicativo Móvel",
    description: "Aplicativo móvel multiplataforma para rastreamento de atividades físicas, planejamento nutricional e monitoramento de bem-estar.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2032&q=80",
    link: "/portfolio"
  },
  {
    title: "Plataforma de E-commerce",
    category: "Desenvolvimento Web",
    description: "Solução de e-commerce completa com gerenciamento de estoque, processamento de pagamentos e análises.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    link: "/portfolio"
  }
];

export default function FeaturedProjects() {
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
    <section ref={sectionRef} className="py-20">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nosso Portfólio
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore nossos trabalhos recentes e veja como ajudamos nossos clientes a alcançar seus objetivos digitais
            </p>
          </div>
          <Link to="/portfolio" className="mt-4 md:mt-0">
            <Button variant="outline">
              Ver Todos os Projetos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group rounded-xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-500 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <Link 
                    to={project.link}
                    className="text-white flex items-center gap-1 font-medium"
                  >
                    Ver Projeto <ExternalLink className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-medium mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
