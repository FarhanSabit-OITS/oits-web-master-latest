import React, { useEffect, useRef, useState } from 'react';
import { Search, Layers, Code, ShieldCheck, Rocket, ChevronRight, Calendar } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';
import { SectionId } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
};

export const Process: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} id={SectionId.PROCESS} className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">Our Workflow</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">How we bring your vision to life.</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
            A structured, agile development lifecycle designed for speed, transparency, and high-quality outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 dark:bg-slate-800 -translate-y-12 z-0"></div>

          {PROCESS_STEPS.map((step, index) => (
            <div 
              key={step.id} 
              className={`relative z-10 flex flex-col items-center text-center transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 relative group">
                 <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-xl shadow-blue-500/5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    {iconMap[step.icon]}
                 </div>
                 <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 dark:bg-blue-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white dark:border-slate-900">
                    {step.number}
                 </div>
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px] font-medium">
                {step.description}
              </p>

              {index < PROCESS_STEPS.length - 1 && (
                <div className="md:hidden flex justify-center py-6 text-slate-300">
                  <ChevronRight className="rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 md:p-12 rounded-[4rem] bg-blue-600 text-white shadow-2xl shadow-blue-500/30 overflow-hidden relative group transition-colors duration-300">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[marquee_3s_linear_infinite] pointer-events-none" />
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full relative z-10">
             <div className="flex flex-col gap-1">
               <h4 className="text-3xl md:text-3xl font-black mb-3 tracking-tight">Need a Discussion on Project Requirements?</h4>
               <p className="text-blue-100 text-sm font-medium">Schedule a Session with Experts</p>
             </div>
             <div className="flex flex-col gap-3">
               <ul className="space-y-1">
                 {["May 28 - 10:00 AM", "May 28 - 02:00 PM", "May 29 - 11:00 AM", "Jun 01 - 10:00 AM"].map((time, idx) => (
                    <li key={idx} className="text-[10px] bg-blue-700/40 px-3 py-1.5 rounded-lg font-bold">{time}</li>
                 ))}
               </ul>
               <button 
                 onClick={() => {
                   const contactElement = document.getElementById(SectionId.CONTACT) || document.getElementById('contact');
                   if (contactElement) {
                     contactElement.scrollIntoView({ behavior: 'smooth' });
                   }
                 }}
                 className="px-6 py-2 bg-white text-blue-600 rounded-lg font-black text-[10px] hover:bg-blue-50 transition active:scale-95 w-full flex items-center justify-center gap-2"
               >
                 <Calendar size={12} />
                 SCHEDULE
               </button>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};
