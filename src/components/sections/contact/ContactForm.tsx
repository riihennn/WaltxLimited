"use client";

import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageSquare, BarChart2, Code2 } from "lucide-react";

type EnquiryType = "general" | "project" | "partnership";

export function ContactForm() {
  const [activeTab, setActiveTab] = useState<EnquiryType>("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const getHeading = () => {
    switch(activeTab) {
      case "general": return "Got an Idea?\nExcited to work on it";
      case "project": return "Got Questions?\nWe're ready to help!";
      case "partnership": return "Lets\nGrow together!";
      default: return "";
    }
  };

  const tabs = [
    { id: "general", label: "General Enquiry", icon: MessageSquare },
    { id: "project", label: "Project Enquiry", icon: BarChart2 },
    { id: "partnership", label: "Partnership Enquiry", icon: Code2 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact-form" className="bg-[#292929] relative z-10 py-20 lg:py-32 text-[#F4F3EF] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-stretch relative">
          
          {/* Vertical Line for active tab indicator track (desktop) */}
          <div className="hidden lg:block absolute left-[30%] top-0 bottom-0 w-[1px] bg-[#F4F3EF]/10"></div>

          {/* Left: Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-12 relative z-10">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as EnquiryType)}
                  className={`text-left flex flex-col gap-6 relative transition-all duration-300 ${isActive ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
                >
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-colors ${isActive ? 'border-[#A69898]/30 text-[#A69898]' : 'border-[#F4F3EF]/10 text-[#F4F3EF]/50'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-light tracking-tight">{tab.label}</h3>
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="hidden lg:block absolute -right-[4.2rem] top-0 bottom-0 w-[3px] bg-[#A69898]" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Form Area */}
          <div className="lg:col-span-7 lg:col-start-6 lg:pl-8">
            <AnimatePresence mode="wait">
              <motion.h2 
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-[clamp(36px,4vw,60px)] font-medium tracking-tight whitespace-pre-line mb-16 lg:mb-24 leading-[1.05]"
              >
                {getHeading()}
              </motion.h2>
            </AnimatePresence>

            {isSubmitted ? (
               <div className="flex flex-col items-start gap-8 bg-[#F4F3EF]/5 p-10 lg:p-14 rounded-2xl border border-[#F4F3EF]/10">
                 <h3 className="text-3xl font-medium tracking-tight">
                   Request sent successfully.
                 </h3>
                 <p className="text-lg text-[#F4F3EF]/70 font-light max-w-md">
                   Thank you for reaching out. Our team will get back to you shortly.
                 </p>
                 <button 
                   onClick={() => setIsSubmitted(false)}
                   className="mt-4 px-8 py-4 bg-[#F4F3EF] text-[#181818] rounded-full font-semibold inline-flex items-center gap-3 hover:bg-white transition-colors"
                 >
                   Send another message
                 </button>
               </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10 lg:gap-14">
                <input 
                  type="text" 
                  placeholder="FIRST & LAST NAME"
                  required
                  className="w-full bg-transparent border-b border-[#F4F3EF]/20 pb-3 text-xs md:text-sm text-[#F4F3EF] uppercase tracking-widest outline-none focus:border-[#F4F3EF]/60 transition-colors placeholder:text-[#F4F3EF]/30"
                />

                <input 
                  type="email" 
                  placeholder="EMAIL"
                  required
                  className="w-full bg-transparent border-b border-[#F4F3EF]/20 pb-3 text-xs md:text-sm text-[#F4F3EF] uppercase tracking-widest outline-none focus:border-[#F4F3EF]/60 transition-colors placeholder:text-[#F4F3EF]/30"
                />

                <input 
                  type="tel" 
                  placeholder="PHONE NUMBER"
                  required
                  className="w-full bg-transparent border-b border-[#F4F3EF]/20 pb-3 text-xs md:text-sm text-[#F4F3EF] uppercase tracking-widest outline-none focus:border-[#F4F3EF]/60 transition-colors placeholder:text-[#F4F3EF]/30"
                />

                <input 
                  type="text" 
                  placeholder="ABOUT YOUR PROJECT"
                  className="w-full bg-transparent border-b border-[#F4F3EF]/20 pb-3 text-xs md:text-sm text-[#F4F3EF] uppercase tracking-widest outline-none focus:border-[#F4F3EF]/60 transition-colors placeholder:text-[#F4F3EF]/30"
                />

                <div className="flex justify-start mt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="self-start bg-white text-[#181818] rounded-full px-8 py-3.5 flex items-center gap-3 text-sm font-semibold hover:bg-gray-100 transition-colors group disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-[#181818]/30 border-t-[#181818] rounded-full animate-spin" />
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#181818]/30 group-hover:text-[#181818] transition-colors"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    )}
                    {isSubmitting ? "Sending..." : "Send message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
