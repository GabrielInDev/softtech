
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
    text: "Hi there! 👋 I'm the SoftTech virtual assistant. How can I help you today?",
    isBot: true,
    timestamp: new Date()
  }
];

const quickReplies = [
  "Tell me about your services",
  "How much does a website cost?",
  "Do you offer mobile app development?",
  "What's your process like?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Show chatbot after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInputValue("");

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    // Add user message (quick reply)
    const userMessage: Message = {
      id: messages.length + 1,
      text: reply,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);

    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (input: string): Message => {
    const lowerInput = input.toLowerCase();
    
    // Simple response logic
    let responseText = "I'm not sure how to help with that. Would you like to speak with a human? Please use our contact form to get in touch.";
    
    if (lowerInput.includes("service") || lowerInput.includes("offer")) {
      responseText = "We offer web development, mobile app development, UI/UX design, and SaaS solutions. Would you like to know more about any specific service?";
    } else if (lowerInput.includes("cost") || lowerInput.includes("price") || lowerInput.includes("how much")) {
      responseText = "Our pricing depends on your specific requirements. For a custom quote, please fill out our contact form and we'll get back to you within 24 hours.";
    } else if (lowerInput.includes("mobile") || lowerInput.includes("app")) {
      responseText = "Yes, we develop both native and cross-platform mobile applications for iOS and Android. Our team specializes in React Native, Flutter, and native development.";
    } else if (lowerInput.includes("process") || lowerInput.includes("how do you")) {
      responseText = "Our process typically includes discovery, planning, design, development, testing, and launch phases. We maintain clear communication throughout the project.";
    } else if (lowerInput.includes("contact") || lowerInput.includes("talk") || lowerInput.includes("human")) {
      responseText = "You can reach us through our contact form, by email at info@softtech-innovations.com, or by phone at +1 (555) 123-4567.";
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
      {/* Chat Window */}
      {isOpen && (
        <div
          className={cn(
            "bg-white rounded-lg shadow-lg border border-border mb-4 transition-all duration-300 overflow-hidden",
            isMinimized ? "w-auto h-auto" : "w-80 sm:w-96"
          )}
        >
          {!isMinimized ? (
            <>
              {/* Header */}
              <div className="bg-primary text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <h3 className="font-medium">SoftTech Assistant</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={minimizeChat}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Minimize chat"
                  >
                    <MinusCircle className="h-5 w-5" />
                  </button>
                  <button
                    onClick={closeChat}
                    className="text-white/80 hover:text-white transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Messages */}
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

              {/* Quick Replies */}
              {messages.length < 3 && (
                <div className="px-4 pb-2">
                  <p className="text-xs text-muted-foreground mb-2">Suggested questions:</p>
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
                    placeholder="Type your message..."
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
              <span className="font-medium">Chat with us</span>
            </div>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <Button
        onClick={toggleChat}
        className="rounded-full h-14 w-14 shadow-lg"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </div>
  );
}
