import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowUpRight,
  Code, 
  Cpu, 
  Terminal,
  ChevronRight,
  Award,
  Zap,
  Layout,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'work', 'products', 'stack'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-white/20 selection:text-white">
      {/* Subtle Noise Texture for that 'Premium' feel */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-white/10' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-white tracking-tight text-lg flex items-center gap-2">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
            Shallum.dev
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Work', 'Products', 'Stack'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href="mailto:shallumisrael@gmail.com"
              className="bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors font-semibold"
            >
              Hire Me
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-2xl font-bold text-white">
            <button onClick={() => scrollTo('work')}>Work</button>
            <button onClick={() => scrollTo('products')}>Products</button>
            <button onClick={() => scrollTo('stack')}>Stack</button>
          </div>
        </div>
      )}

      <main className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Hero Section: The "Pitch" */}
        <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for Founding Engineer Roles
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-500">AI-native systems</span><br />
            that actually scale.
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
            Full-stack engineer specializing in 0-to-1 product development. 
            I bridge the gap between complex LLM architectures and production-grade user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollTo('work')}
              className="group px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              See My Track Record <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
            </button>
            <div className="flex gap-2">
              <a href="https://github.com/Shallum99" target="_blank" className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/shallum-israel" target="_blank" className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
        </section>

        {/* Stats / Value Props Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden mb-32">
           <div className="bg-[#050505] p-8 hover:bg-white/5 transition-colors">
              <Zap className="w-8 h-8 text-white mb-4" />
              <h3 className="text-white font-bold mb-2">High Velocity</h3>
              <p className="text-sm text-slate-400">Shipped full AI compliance platform reducing manual review by 75%.</p>
           </div>
           <div className="bg-[#050505] p-8 hover:bg-white/5 transition-colors">
              <Cpu className="w-8 h-8 text-white mb-4" />
              <h3 className="text-white font-bold mb-2">System Design</h3>
              <p className="text-sm text-slate-400">Migrated monoliths to microservices, cutting latency by 40%.</p>
           </div>
           <div className="bg-[#050505] p-8 hover:bg-white/5 transition-colors">
              <Layout className="w-8 h-8 text-white mb-4" />
              <h3 className="text-white font-bold mb-2">Product Focus</h3>
              <p className="text-sm text-slate-400">Founding engineer mindset. I build what users actually need.</p>
           </div>
        </section>

        {/* Experience: The "Changelog" Layout */}
        <section id="work" className="mb-32">
          <div className="flex items-baseline justify-between mb-12 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold text-white">Experience</h2>
            <span className="text-slate-500 font-mono text-sm">5+ Years</span>
          </div>

          <div className="space-y-0">
            {[
              {
                company: "Secure AI",
                role: "Full Stack Software Engineer",
                date: "Mar 2025 - Present",
                tech: "FastAPI, React, GCP, LangChain",
                points: [
                  "Built and shipped a full AI compliance platform (GDPR/HIPAA) for enterprise models.",
                  "Developed AI agents for risk scoring and PII/PHI detection using LangChain.",
                  "Reduced manual compliance review time by 75% through automation."
                ]
              },
              {
                company: "Getsupp",
                role: "Founding Software Engineer",
                date: "Oct 2021 - Jun 2023",
                tech: "Django, React, AWS, Typesense",
                points: [
                  "Architected core e-commerce systems, improving platform reliability by 40%.",
                  "Engineered search engine & pricing pipelines for scalable discovery.",
                  "Integrated OpenAI for content moderation & blog generation workflows."
                ]
              },
              {
                company: "Innovaccer",
                role: "Software Engineer",
                date: "Sep 2019 - Oct 2021",
                tech: "Python, Celery, Redis, Postgres",
                points: [
                  "Migrated Node.js monolith to FastAPI microservices, boosting scalability.",
                  "Redesigned Celery distributed architecture with task prioritization, achieving 99.99% system reliability.",
                  "Delivered sub-100ms critical healthcare APIs with real-time Redis monitoring and 99.9% uptime."
                ]
              }
            ].map((job, i) => (
              <div key={i} className="group relative grid md:grid-cols-[200px_1fr] gap-8 py-12 border-b border-dashed border-white/10 hover:bg-white/[0.02] transition-colors rounded-lg px-4 -mx-4">
                <div className="text-slate-500 font-mono text-sm pt-1">
                  {job.date}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{job.company}</h3>
                  <div className="text-slate-400 font-medium mb-4">{job.role}</div>
                  <ul className="space-y-3 mb-6">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="text-slate-300 leading-relaxed flex items-start gap-3 text-sm md:text-base">
                        <span className="mt-2 w-1.5 h-1.5 bg-slate-600 rounded-full shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.split(', ').map(t => (
                      <span key={t} className="px-2 py-1 rounded bg-white/5 border border-white/5 text-xs font-medium text-slate-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects: Product Cards */}
        <section id="products" className="mb-32">
           <div className="flex items-baseline justify-between mb-12 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold text-white">Shipped Products</h2>
            <span className="text-slate-500 font-mono text-sm">Selected Works</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Synderion",
                subtitle: "AI Enrollment Agent",
                desc: "Automated enrollment platform handling 200+ concurrent users. Features PgVector embeddings (94% relevance) and multi-agent workflows.",
                tags: ["FastAPI", "BrowserUse", "Postgres", "React"],
                award: "Hackathon Winner",
                github: "https://github.com/Shallum99/ai-enrollment-agent"
              },
              {
                title: "Panacea",
                subtitle: "AI Job Assistant",
                desc: "Intelligent tool analyzing resumes vs job descriptions. Generates tailored outreach using RAG pipelines and containerized architecture.",
                tags: ["RAG", "Typescript", "Next.js", "Postgres"],
                award: null,
                github: "https://github.com/Shallum99/Panacea-2.0"
              },
              {
                title: "Corgi",
                subtitle: "Insurance Claims AI",
                desc: "Vision-based claims processor reducing review time from 90m to 5m. Uses async pipelines for real-time analytics.",
                tags: ["LLM Vision", "Celery", "Streamlit"],
                award: null,
                github: "https://github.com/Shallum99/corgi-work-trial"
              }
            ].map((project, i) => (
              <div key={i} className="group relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <div className="text-sm text-slate-500">{project.subtitle}</div>
                  </div>
                  {project.award && (
                    <span className="bg-yellow-900/30 text-yellow-200 text-xs px-2 py-1 rounded border border-yellow-700/50 flex items-center gap-1">
                      <Award size={12} /> {project.award}
                    </span>
                  )}
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-16">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {project.tags.map(t => (
                      <span key={t} className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-blue-400 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack: Clean Grid */}
        <section id="stack" className="mb-32">
           <div className="flex items-baseline justify-between mb-12 border-b border-white/10 pb-6">
            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Python & Go", icon: Terminal },
              { label: "React & Next.js", icon: Code },
              { label: "FastAPI & Django", icon: Zap },
              { label: "PostgreSQL & Redis", icon: Layout },
              { label: "AWS & GCP", icon: Cpu },
              { label: "LangChain & LLMs", icon: Terminal },
              { label: "Docker & K8s", icon: Layout },
              { label: "System Design", icon: Code },
            ].map((item, i) => (
               <div key={i} className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02] text-slate-300 hover:bg-white/5 transition-colors">
                  <item.icon size={18} className="text-slate-500" />
                  <span className="text-sm font-medium">{item.label}</span>
               </div>
            ))}
          </div>
        </section>

        {/* CTA / Footer */}
        <section className="py-20 text-center border-t border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to scale your engineering?</h2>
          <p className="text-slate-400 mb-8">Currently open to discussing Founding Engineer or Senior Roles.</p>
          
          <div className="flex flex-col items-center gap-4">
            <a 
              href="mailto:shallumisrael@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-colors text-lg"
            >
              <Mail size={20} /> shallumisrael@gmail.com
            </a>
            <span className="text-slate-400 font-mono hover:text-white transition-colors cursor-default">
              (312) 545-0405
            </span>
          </div>
          
          <div className="mt-12 text-slate-600 text-sm font-mono">
            &copy; 2025 Shallum Israel Maryapanor. All rights reserved.
          </div>
        </section>

      </main>
      
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;