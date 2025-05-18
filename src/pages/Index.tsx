
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Search, Activity, Bell, AlertTriangle } from "lucide-react";
import SectionContainer from "@/components/SectionContainer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatCard from "@/components/StatCard";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-swb-gray">
      <Navbar />

      {/* Hero Section */}
      <SectionContainer 
        className="bg-gradient text-white min-h-[90vh] flex items-center pt-24 pb-16"
        id="hero"
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Revolutionizing Waste Management with Smart Technology
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              AI + Sensors = Clean Cities, Smarter Bins
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-swb-green hover:bg-opacity-90"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Free Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch It in Action
              </Button>
            </div>
          </div>
          <div className="relative h-full flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square rounded-full bg-white/20 flex items-center justify-center animate-bounce-slow">
              <div className="w-4/5 h-4/5 rounded-full bg-white/40 flex items-center justify-center">
                <div className="w-3/5 h-3/5 rounded-full bg-white flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Smart Waste Bin 3D Render" 
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Features Section */}
      <SectionContainer id="features" className="bg-white">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-swb-dark-gray mb-4">
            Smart Features, Smarter Waste Management
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered waste bin uses cutting-edge technology to make waste segregation effortless and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="Auto Waste Detection"
            description="Advanced sensors detect waste type as soon as it's placed near the bin opening."
            icon={Search}
            className="animate-fade-in"
            
          />
          <FeatureCard 
            title="ML-Based Classification"
            description="Machine learning algorithms identify and sort waste into dry, wet, metal, and plastic categories."
            icon={Activity}
            className="animate-fade-in"
          />
          <FeatureCard 
            title="LED Feedback System"
            description="Visual feedback helps users understand waste classification with intuitive color-coded signals."
            icon={Bell}
            className="animate-fade-in"
          />
          <FeatureCard 
            title="Real-Time Fill Level Alerts"
            description="Collection teams receive notifications when bins need emptying, optimizing collection routes."
            icon={AlertTriangle}
            className="animate-fade-in"
          />
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer id="benefits" className="bg-swb-gray">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-swb-dark-gray mb-4">
            Environmental & Economic Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Smart Waste Bin dramatically improves waste management efficiency while reducing environmental impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard 
            statValue="40%" 
            statLabel="Landfill Reduction" 
            className="animate-fade-in"
          />
          <StatCard 
            statValue="65%" 
            statLabel="Improved Recycling Rate" 
            className="animate-fade-in"
          />
          <StatCard 
            statValue="30%" 
            statLabel="Lower Collection Costs" 
            className="animate-fade-in"
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 animate-fade-in">
          <h3 className="text-2xl font-semibold text-swb-dark-gray mb-6 text-center">
            Perfect For Any Environment
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { title: "Campuses", icon: "🏫" },
              { title: "Cities", icon: "🏙️" },
              { title: "Apartments", icon: "🏢" },
              { title: "Offices", icon: "🖥️" },
            ].map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:border-swb-green transition-colors">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h4 className="font-medium">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Testimonials Section */}
      <SectionContainer id="testimonials" className="bg-white">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-swb-dark-gray mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Smart Waste Bin is already making an impact in communities around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Since implementing Smart Waste Bins across our campus, recycling rates have improved by 58% and students love the interactive experience."
            author="Dr. Emily Chen"
            role="Sustainability Director"
            organization="Green Valley University"
            className="animate-fade-in"
          />
          <TestimonialCard 
            quote="These bins have revolutionized our waste management system. Collection costs are down, and our city is visibly cleaner."
            author="Michael Rodriguez"
            role="Public Works Manager"
            organization="Oakridge City"
            className="animate-fade-in"
          />
          <TestimonialCard 
            quote="The data insights from Smart Waste Bin have been invaluable for our environmental impact reporting and sustainability goals."
            author="Sarah Johnson"
            role="Environmental Officer"
            organization="Tech Innovations Inc."
            className="animate-fade-in"
          />
        </div>
      </SectionContainer>

      {/* Demo Video Section */}
      <SectionContainer id="demo" className="bg-swb-gray">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-swb-dark-gray mb-4">
            See Smart Waste Bin in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch how our AI-powered waste segregation system works in real-time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden animate-fade-in">
          <div className="aspect-video relative">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Smart Waste Bin Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </SectionContainer>

      {/* Contact Section */}
      <SectionContainer id="contact" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-swb-dark-gray mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Interested in Smart Waste Bin for your campus, city, or office? Contact us to learn more or schedule a free demo.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-swb-light-green rounded-full flex items-center justify-center text-swb-green mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-swb-light-green rounded-full flex items-center justify-center text-swb-green mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@smartwastebin.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-swb-dark-gray mb-6">
              Request a Demo
            </h3>
            <ContactForm />
          </div>
        </div>
      </SectionContainer>

      {/* Footer */}
      <footer className="bg-swb-dark-gray text-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">SmartWasteBin</h3>
              <p className="text-gray-300">
                Revolutionizing waste management with AI-powered technology for a cleaner planet.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
                <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-swb-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-swb-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Smart Waste Bin. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors mr-6">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
