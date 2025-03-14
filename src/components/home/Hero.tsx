
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Acionar animação após montagem do componente
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Elementos de Fundo */}
      <div className="absolute top-0 inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Soluções Inovadoras para o Amanhã
            </span>
            <h1 className="font-bold leading-tight">
              Transforme sua Empresa com <span className="text-primary">Excelência Digital</span>
            </h1>
            <p className="text-lg text-muted-foreground md:pr-12">
              A SoftTech Innovations oferece websites e soluções SaaS de ponta que ajudam as empresas a prosperar no cenário digital.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="group">
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link to="/portfolio">
                <Button variant="outline" size="lg">
                  Ver Nosso Trabalho
                </Button>
              </Link>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-fade-in animate-delay-300' : 'opacity-0'}`}>
            <div className="relative">
              {/* Imagem principal */}
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
                  alt="Espaço de trabalho moderno com código na tela" 
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary rounded-lg shadow-lg z-0"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg shadow-lg z-0"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
