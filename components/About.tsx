import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Target, Globe, ShieldCheck, Users } from 'lucide-react';
import { SectionId } from '../types';

const STATS = [
  { value: '412+', label: 'Projects Completed' },
  { value: '200+', label: 'Satisfied Clients' },
  { value: '100+', label: 'Skilled Experts' },
  { value: '10+', label: 'Years of Excellence' },
];

const OFFICES = [
  { city: 'Dhaka', country: 'Bangladesh', role: 'Engineering Hub' },
  { city: 'Singapore', country: 'Singapore', role: 'APAC Ops' },
  { city: 'Kuala Lumpur', country: 'Malaysia', role: 'APAC Partner' },
  { city: 'London', country: 'United Kingdom', role: 'Europe HQ' },
];

const CORE_VALUES = [
  'ISO 27001 Certified Security',
  'GDPR-Compliant Practices',
  '24/7 Maintenance & Support',
  'Dedicated Agile Teams',
  'Global Delivery Standards',
  'Top-tier Cybersecurity',
];

export const About: React.FC = () => {
  // Separate visibility states for granular control
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isValuesVisible, setIsValuesVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isOfficesVisible, setIsOfficesVisible] = useState(false);

  // Refs for each section part
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const officesRef = useRef<HTMLDivElement>(null);

  // Helper hook for intersection observer
  useEffect(() => {
    const observeElement = (ref: React.RefObject<HTMLElement>, setState: React.Dispatch<React.SetStateAction<boolean>>, threshold = 0.2) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setState(true);
            observer.disconnect();
          }
        },
        { threshold }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    };

    const heroObs = observeElement(heroRef, setIsHeroVisible, 0.1);
    const missionObs = observeElement(missionRef, setIsMissionVisible, 0.2);
    const valuesObs = observeElement(valuesRef, setIsValuesVisible, 0.2);
    const statsObs = observeElement(statsRef, setIsStatsVisible, 0.4);
    const officesObs = observeElement(officesRef, setIsOfficesVisible, 0.15);

    return () => {
      heroObs.disconnect();
      missionObs.disconnect();
      valuesObs.disconnect();
      statsObs.disconnect();
      officesObs.disconnect();
    };
  }, []);

  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          
          {/* Hero Image Section */}
          <div ref={heroRef} className={`flex-1 w-full relative transition-all duration-1000 ease-out ${isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
             <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                  alt="OITS Dhaka engineering team collaborating" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="text-3xl font-bold">10+</p>
                    <p className="text-sm opacity-80">Years of Excellence</p>
                  </div>
                </div>
             </div>
             {/* Floater */}
             <div className="absolute -bottom-8 -right-8 w-48 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hidden md:block z-10 transition-transform duration-500 hover:scale-105">
               <p className="text-slate-500 dark:text-slate-400 text-xs uppercase font-semibold mb-2">Projects Completed</p>
               <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">412+</p>
             </div>
          </div>

          <div className="flex-1 space-y-12">
            {/* Mission & Vision Subsection */}
            <div ref={missionRef} className={`space-y-6 transition-all duration-1000 ease-out ${isMissionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                   <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                   <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">About OITS</h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                  Global Tech Solutions.<br />Enterprise-Ready.
                </h3>
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                OITS is your international software engineering partner, delivering secure, scalable solutions across software development, cloud, data, cybersecurity, and blockchain. Our ISO 27001 and GDPR-compliant practices ensure trust at every level.
              </p>

              {/* Mission Block */}
              <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/40">
                <p className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">Our Mission</p>
                <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                  Delivering secure, high-quality, and scalable software that drives growth, enhances operations, and supports digital transformation—guided by global standards and local expertise.
                </p>
              </div>
            </div>

            {/* Core Values Subsection */}
            <div ref={valuesRef} className={`transition-all duration-1000 ease-out ${isValuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
               <div className="flex items-center gap-2 mb-6">
                   <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                   <h4 className="text-lg font-bold text-slate-900 dark:text-white">Core Standards</h4>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CORE_VALUES.map((item, idx) => (
                    <div 
                      key={item} 
                      className={`flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-blue-100 dark:hover:border-blue-900/50 transition-all duration-500`} 
                      style={{ transitionDelay: isValuesVisible ? `${idx * 80}ms` : '0ms' }}
                    >
                      <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0" />
                      <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{item}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Stats Subsection */}
            <div ref={statsRef} className={`pt-4 transition-all duration-1000 ease-out ${isStatsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
               <div className="h-px w-full bg-slate-200 dark:bg-slate-800 mb-8"></div>
               <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                 {STATS.map((stat, idx) => (
                   <div key={stat.label} style={{ transitionDelay: isStatsVisible ? `${idx * 100}ms` : '0ms' }}>
                     <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                     <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-tight">{stat.label}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* Global Offices Section */}
        <div ref={officesRef}>
          <div className={`text-center mb-12 transition-all duration-1000 ease-out ${isOfficesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Global Presence</h2>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Engineering hub in Dhaka.<br />Commercial reach worldwide.</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
              With our development hub in Dhaka and commercial teams in Singapore, Malaysia, the United Kingdom, and Europe, we provide local engagement supported by global standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICES.map((office, index) => (
              <div 
                key={office.city}
                className={`group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 ease-out transform border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 p-6 ${isOfficesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: isOfficesVisible ? `${index * 150}ms` : '0ms' }}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">{office.role}</p>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">{office.city}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{office.country}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};