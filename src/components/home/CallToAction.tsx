
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Equipe especializada de desenvolvedores e designers",
  "Stack de tecnologia de ponta",
  "Gerenciamento de projeto dedicado",
  "Suporte e manutenção pós-lançamento",
  "Soluções escaláveis para empresas em crescimento"
];

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Pronto para Começar?
            </span>
            <h2 className="text-3xl font-bold">
              Vamos Transformar Sua Presença Digital Juntos
            </h2>
            <p className="text-lg text-muted-foreground">
              Faça parceria com a SoftTech Innovations e leve seu negócio para o próximo nível com nossas soluções digitais abrangentes.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="group">
                  Fale Conosco
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Saiba Mais
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden bg-white p-8 shadow-xl border border-border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Obtenha uma Consulta Gratuita</h3>
                <p className="text-muted-foreground">
                  Tem um projeto em mente? Vamos discutir como podemos ajudar.
                </p>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      Nome
                    </label>
                    <input
                      id="first-name"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="João"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Sobrenome
                    </label>
                    <input
                      id="last-name"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Silva"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="joao.silva@exemplo.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Empresa
                  </label>
                  <input
                    id="company"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Sua Empresa Ltda."
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Enviar
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Ao enviar este formulário, você concorda com nossa{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </form>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-lg z-0"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
