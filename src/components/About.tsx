import React from 'react';
import { Shield, Zap, Database, Terminal, Compass, Globe } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const About: React.FC = () => {
  const tenets = [
    {
      icon: Database,
      title: "ACID Isolation & Data Integrity",
      description:
        "High concurrency means nothing if data corrupts under load. I design strictly typed PostgreSQL schemas, enforce ACID transactions with Prisma ORM, and eliminate race conditions with distributed locks.",
      accent: "text-sky-400 border-sky-500/30 bg-sky-500/10",
    },
    {
      icon: Zap,
      title: "Deterministic Sub-20ms API Responses",
      description:
        "APIs must respond predictably. Through strategic Redis caching, pgBouncer connection pooling, and optimized query plans, our microservices sustain high throughput with minimal tail latency.",
      accent: "text-cyan-cyber border-cyan-cyber/30 bg-cyan-cyber/10",
    },
    {
      icon: Shield,
      title: "Zero-Trust Security & Guard Architecture",
      description:
        "Every endpoint is shielded: rotating JWT refresh sessions, role-based access guards in NestJS, rate throttling per tenant, and strict input schema validation via DTOs.",
      accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/25 text-xs font-mono text-sky-400 mb-3">
            <Compass size={13} />
            <span>// 01. ARCHITECTURE & LEADERSHIP PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Building Resilient Foundations for High-Scale Applications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-transparent mt-3 rounded-full" />
        </div>

        {/* Narrative & Ambassador Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Biography Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 text-slate-300 font-sans leading-relaxed border border-sky-500/20">
              <h3 className="text-xl font-bold text-white font-sans flex items-center gap-2.5">
                <Terminal size={18} className="text-sky-400" />
                <span>Backend Philosophy & Vision</span>
              </h3>
              
              <p>
                As Co-Founder and Backend Lead of <strong className="text-white">PRISMATIX4</strong>, I specialize in the unseen infrastructure that makes applications dependable: high-concurrency microservices, persistent relational databases, and low-latency API gateways.
              </p>
              
              <p>
                Whether orchestrating the real-time event router for <strong className="text-white">SNAP's</strong> emergency WebRTC consultations, scheduling autonomous lockscreen calling queues for <strong className="text-white">SARA</strong>, or engineering scalable data models for <strong className="text-white">Student Space</strong>, my focus remains rooted in zero-compromise system uptime.
              </p>

              <div className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/25 mt-4">
                <p className="text-xs font-mono text-sky-300 italic">
                  "{PROFILE.philosophy}"
                </p>
              </div>
            </div>

            {/* Google Student Ambassador Highlight Banner */}
            <div className="glass-panel rounded-2xl p-6 border border-cyan-cyber/30 bg-cyan-cyber/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-cyber/15 border border-cyan-cyber/30 flex items-center justify-center text-cyan-300 shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base font-sans">
                    Google Student Ambassador
                  </h4>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    Representing student developer communities, fostering developer ecosystems, and advocating for Google Cloud & developer toolchains.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-cyber/20 text-cyan-300 border border-cyan-cyber/40 shrink-0">
                ACTIVE AMBASSADOR
              </span>
            </div>
          </div>

          {/* 3 Engineering Tenets (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {tenets.map((tenet, idx) => {
              const Icon = tenet.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-sky-500/35 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl border ${tenet.accent}`}>
                      <Icon size={18} />
                    </div>
                    <h4 className="text-base font-bold text-white font-sans">
                      {tenet.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {tenet.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};