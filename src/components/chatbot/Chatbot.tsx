
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, X, MinusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Olá! 👋 Eu sou o assistente virtual da SoftTech. Como posso ajudar você hoje?",
    isBot: true,
    timestamp: new Date()
  }
];

const quickReplies = [
  "Fale sobre seus serviços",
  "Quanto custa um website?",
  "Vocês oferecem desenvolvimento de aplicativos?",
  "Como é o processo de trabalho de vocês?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-rolagem para o final quando as mensagens mudam
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Foco no input quando o chat abre
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Mostrar chatbot após um atraso
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Adicionar mensagem do usuário
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simular bot pensando
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    // Adicionar mensagem do usuário (resposta rápida)
    const userMessage: Message = {
      id: messages.length + 1,
      text: reply,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);

    // Simular bot pensando
    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (input: string): Message => {
    const lowerInput = input.toLowerCase();
    
    // Lógica de resposta simples
    let responseText = "Não tenho certeza de como ajudar com isso. Gostaria de falar com um humano? Por favor, use nosso formulário de contato para entrar em contato.";
    
    if (lowerInput.includes("serviço") || lowerInput.includes("oferecem")) {
      responseText = "Oferecemos desenvolvimento web, desenvolvimento de aplicativos móveis, design UI/UX e soluções SaaS. Gostaria de saber mais sobre algum serviço específico?";
    } else if (lowerInput.includes("custo") || lowerInput.includes("preço") || lowerInput.includes("quanto custa")) {
      responseText = "Nossos preços dependem dos seus requisitos específicos. Para um orçamento personalizado, preencha nosso formulário de contato e entraremos em contato em até 24 horas.";
    } else if (lowerInput.includes("móvel") || lowerInput.includes("aplicativo") || lowerInput.includes("app")) {
      responseText = "Sim, desenvolvemos aplicativos móveis nativos e multiplataforma para iOS e Android. Nossa equipe é especializada em React Native, Flutter e desenvolvimento nativo.";
    } else if (lowerInput.includes("processo") || lowerInput.includes("como vocês")) {
      responseText = "Nosso processo geralmente inclui as fases de descoberta, planejamento, design, desenvolvimento, testes e lançamento. Mantemos uma comunicação clara durante todo o projeto.";
    } else if (lowerInput.includes("contato") || lowerInput.includes("falar") || lowerInput.includes("humano")) {
      responseText = "Você pode nos contatar através do nosso formulário de contato, por e-mail em contato@softtech-innovations.com ou por telefone em +55 (11) 1234-5678.";
    }
    
    return {
      id: messages.length + 2,
      text: responseText,
      isBot: true,
      timestamp: new Date()
    };
  };

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const minimizeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(true);
  };

  const closeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Janela do Chat */}
      {isOpen && (
        <div
          className={cn(
            "bg-white rounded-lg shadow-lg border border-border mb-4 transition-all duration-300 overflow-hidden",
            isMinimized ? "w-auto h-auto" : "w-80 sm:w-96"
          )}
        >
          {!isMinimized ? (
            <>
              {/* Cabeçalho */}
              <div className="bg-primary text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <h3 className="font-medium">Assistente SoftTech</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={minimizeChat}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Minimizar chat"
                  >
                    <MinusCircle className="h-5 w-5" />
                  </button>
                  <button
                    onClick={closeChat}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Fechar chat"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Mensagens */}
              <div className="p-4 h-80 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      "mb-4 max-w-[85%] animate-fade-in",
                      message.isBot ? "ml-0" : "ml-auto"
                    )}
                  >
                    <div
                      className={cn(
                        "p-3 rounded-lg",
                        message.isBot
                          ? "bg-secondary text-foreground rounded-tl-none"
                          : "bg-primary text-white rounded-tr-none"
                      )}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Respostas Rápidas */}
              {messages.length < 3 && (
                <div className="px-4 pb-2">
                  <p className="text-xs text-muted-foreground mb-2">Perguntas sugeridas:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleQuickReply(reply)}
                        className="text-xs bg-secondary px-2 py-1 rounded-full hover:bg-secondary/80 transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <form onSubmit={handleSubmit} className="p-3 border-t">
                <div className="flex items-center gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 p-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  <Button type="submit" size="sm" className="aspect-square p-2">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div 
              className="p-3 bg-primary text-white flex items-center gap-2 cursor-pointer"
              onClick={() => setIsMinimized(false)}
            >
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium">Fale conosco</span>
            </div>
          )}
        </div>
      )}

      {/* Botão de Alternância */}
      <Button
        onClick={toggleChat}
        className="rounded-full h-14 w-14 shadow-lg"
        aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
}
