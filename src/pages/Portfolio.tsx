
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import Chatbot from "@/components/chatbot/Chatbot";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Smartphone, Palette, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development", icon: <Code className="h-4 w-4" /> },
  { id: "mobile", label: "Mobile Apps", icon: <Smartphone className="h-4 w-4" /> },
  { id: "design", label: "UI/UX Design", icon: <Palette className="h-4 w-4" /> },
  { id: "saas", label: "SaaS", icon: <Globe className="h-4 w-4" /> }
];

const projects = [
  {
    id: 1,
    title: "FinTrack Dashboard",
    category: "web",
    tags: ["Web App", "Finance", "React"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description: "A comprehensive financial dashboard with real-time data visualization, account management, and budget tracking features.",
    client: "FinTrack Inc.",
    link: "#"
  },
  {
    id: 2,
    title: "Wellness App",
    category: "mobile",
    tags: ["Mobile", "Health", "React Native"],
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2032&q=80",
    description: "Cross-platform mobile application for fitness tracking, nutrition planning, and wellness monitoring with personalized insights.",
    client: "HealthFirst",
    link: "#"
  },
  {
    id: 3,
    title: "ShopEasy E-commerce",
    category: "web",
    tags: ["E-commerce", "Web App", "Vue.js"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description: "Full-featured e-commerce platform with inventory management, payment processing, and customer analytics dashboard.",
    client: "ShopEasy Inc.",
    link: "#"
  },
  {
    id: 4,
    title: "TravelPal App",
    category: "mobile",
    tags: ["Mobile", "Travel", "Flutter"],
    image: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80",
    description: "Travel companion app with itinerary planning, local recommendations, and offline maps for international travelers.",
    client: "TravelPal",
    link: "#"
  },
  {
    id: 5,
    title: "ProTask Management",
    category: "saas",
    tags: ["SaaS", "Productivity", "Angular"],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description: "Project management SaaS with task tracking, team collaboration, and automated workflows for businesses of all sizes.",
    client: "ProTask Systems",
    link: "#"
  },
  {
    id: 6,
    title: "EduLearn Platform",
    category: "web",
    tags: ["Education", "Web App", "React"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
    description: "Online learning platform with course management, interactive lessons, and student progress tracking for educational institutions.",
    client: "EduLearn",
    link: "#"
  },
  {
    id: 7,
    title: "FreshFoods UI Redesign",
    category: "design",
    tags: ["UI/UX", "Food Delivery", "Figma"],
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description: "Complete UI/UX redesign for a food delivery service, improving user flow and increasing conversion rates by 32%.",
    client: "FreshFoods",
    link: "#"
  },
  {
    id: 8,
    title: "SecurePass",
    category: "saas",
    tags: ["SaaS", "Security", "Node.js"],
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description: "Enterprise password management system with advanced encryption, access controls, and security compliance features.",
    client: "SecurePass Technologies",
    link: "#"
  },
  {
    id: 9,
    title: "Creative Agency Website",
    category: "design",
    tags: ["UI/UX", "Marketing", "Adobe XD"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    description: "Modern, interactive website design for a creative agency, featuring animated transitions and immersive portfolio showcases.",
    client: "Spark Creative",
    link: "#"
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

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

  const openProjectDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <Helmet>
        <title>Our Portfolio | SoftTech Innovations</title>
        <meta name="description" content="Explore our portfolio of successful web, mobile, and SaaS projects that showcase our expertise in digital solutions." />
        <meta name="keywords" content="portfolio, web development projects, mobile app portfolio, SaaS examples, UI/UX design" />
        <meta property="og:title" content="Our Portfolio | SoftTech Innovations" />
        <meta property="og:description" content="Explore our portfolio of successful web, mobile, and SaaS projects that showcase our expertise in digital solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softtech-innovations.com/portfolio" />
        <link rel="canonical" href="https://softtech-innovations.com/portfolio" />
      </Helmet>

      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-primary/5">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our recent projects and discover how we've helped our clients achieve their digital goals
              </p>
            </div>
          </Container>
        </section>

        {/* Portfolio Filter */}
        <section className="py-8 border-b border-border">
          <Container>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  {category.icon && <span>{category.icon}</span>}
                  {category.label}
                </Button>
              ))}
            </div>
          </Container>
        </section>

        {/* Portfolio Grid */}
        <section ref={sectionRef} className="py-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`group cursor-pointer rounded-xl overflow-hidden border border-border bg-card shadow-sm transition-all duration-500 ${
                    isInView ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openProjectDetails(project)}
                >
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                      <span className="text-white flex items-center gap-1 font-medium">
                        View Details <ExternalLink className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-sm text-primary font-medium">
                        {categories.find(c => c.id === project.category)?.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {project.client}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-xl font-medium mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-4">
                  There are no projects matching your current filter.
                </p>
                <Button onClick={() => setActiveCategory("all")}>
                  View All Projects
                </Button>
              </div>
            )}
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your digital goals with a tailored solution.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fade-in" onClick={closeProjectDetails}>
          <div 
            className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={closeProjectDetails} 
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6 flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {categories.find(c => c.id === selectedProject.category)?.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Client: {selectedProject.client}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                </div>
                
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Visit Project <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Project Overview</h4>
                <p className="text-muted-foreground">
                  {selectedProject.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-secondary rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Key Features</h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Responsive design optimized for all devices</li>
                  <li>Intuitive user interface for improved engagement</li>
                  <li>High-performance implementation for faster load times</li>
                  <li>Secure data handling and user authentication</li>
                  <li>Comprehensive analytics and reporting features</li>
                </ul>
              </div>
              
              <div className="border-t border-border pt-6 flex justify-between items-center">
                <Link to="/contact" className="text-primary font-medium hover:underline">
                  Interested in a similar project?
                </Link>
                <Button variant="outline" onClick={closeProjectDetails}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
      <Chatbot />
    </>
  );
}
