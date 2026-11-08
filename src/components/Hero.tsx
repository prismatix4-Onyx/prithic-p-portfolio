import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Activity, 
  ShieldCheck,
  RefreshCw,
  Globe
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gateway' | 'database' | 'queues'>('gateway');
  const [tps, setTps] = useState(2480);
  const [queryLatency, setQueryLatency] = useState(12);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toTimeString().split(' ')[0] + ' UTC+05:30');
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerBenchmark = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setQueryLatency(Math.floor(Math.random() * 6) + 8);
      setTps(Math.floor(Math.random() * 600) + 2600);
      setIsSimulating(false);
    }, 450);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-cyber/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Engineering & Ambassador Badges */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-mono font-semibold text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>// CO-FOUNDER & BACKEND LEAD</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-cyber/10 border border-cyan-cyber/30 text-xs font-mono font-semibold text-cyan-300">
                <Globe size={13} className="text-cyan-400" />
                <span>GOOGLE STUDENT AMBASSADOR</span>
              </div>
            </div>

            {/* Main Punchy Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-sans tracking-tight text-white leading-[1.08] mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-400 glow-sky-text">{PROFILE.name}</span>
            </h1>

            {/* Tagline */}
            <h2 className="text-xl sm:text-2xl font-semibold font-sans text-slate-300 mb-6 leading-snug">
              {PROFILE.tagline}
            </h2>

            {/* Bio Paragraph */}
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl font-sans mb-8">
              {PROFILE.bio}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-8 pt-4 border-t border-sky-500/15">
              {PROFILE.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl font-bold font-mono text-white tracking-tight flex items-center gap-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-slate-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm text-[#040810] bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 transition-all shadow-lg shadow-sky-500/25 group"
              >
                <span>Explore Distributed Systems</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sans font-medium text-sm text-slate-200 bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500/20 hover:border-sky-400 transition-all"
              >
                <span>Initiate Dispatch</span>
              </a>

              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Live Backend Telemetry Console (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-2xl p-6 border border-sky-500/30 shadow-2xl relative overflow-hidden">
              
              {/* Terminal Window Chrome */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-sky-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-sky-400/90 font-medium">
                    prismatix4.backend.mesh
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                  <Activity size={12} className="text-sky-400 animate-pulse" />
                  <span>{currentTime || 'RUNNING'}</span>
                </div>
              </div>

              {/* Console Tabs */}
              <div className="flex items-center gap-2 mb-5 bg-[#070E1A] p-1 rounded-lg border border-sky-500/20">
                <button
                  onClick={() => setActiveTab('gateway')}
                  className={`flex-1 py-1.5 text-xs font-mono rounded-md transition-all ${
                    activeTab === 'gateway'
                      ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  API Gateway
                </button>
                <button
                  onClick={() => setActiveTab('database')}
                  className={`flex-1 py-1.5 text-xs font-mono rounded-md transition-all ${
                    activeTab === 'database'
                      ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  PostgreSQL Pool
                </button>
                <button
                  onClick={() => setActiveTab('queues')}
                  className={`flex-1 py-1.5 text-xs font-mono rounded-md transition-all ${
                    activeTab === 'queues'
                      ? 'bg-sky-500/20 text-sky-300 font-semibold border border-sky-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Task Queues
                </button>
              </div>

              {/* Tab 1: API Gateway */}
              {activeTab === 'gateway' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Throughput:</span>
                    <span className="text-sky-300 font-bold">{tps.toLocaleString()} req/s</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">P99 Query Latency:</span>
                    <span className="text-emerald-400 font-bold">{queryLatency} ms (nominal)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Microservice Nodes:</span>
                    <span className="text-sky-300 font-bold">6 NestJS Instances</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Ingress Reverse Proxy:</span>
                    <span className="text-cyan-300 font-bold">Nginx + HTTP/2 SSL</span>
                  </div>
                </div>
              )}

              {/* Tab 2: PostgreSQL Pool */}
              {activeTab === 'database' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Primary Database:</span>
                    <span className="text-sky-300 font-bold">PostgreSQL 16 (ACID)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Connection Pooler:</span>
                    <span className="text-emerald-400 font-bold">pgBouncer (96 active)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">ORM Integration:</span>
                    <span className="text-sky-300 font-bold">Prisma with Typed Models</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Cache Hit Ratio:</span>
                    <span className="text-cyan-300 font-bold">99.4% in Redis</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Task Queues */}
              {activeTab === 'queues' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Queue Engine:</span>
                    <span className="text-sky-300 font-bold">BullMQ on Redis 7</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Delayed Jobs (SARA):</span>
                    <span className="text-emerald-400 font-bold">Active Timer Triggers</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">SOS Distress Dispatch:</span>
                    <span className="text-cyan-300 font-bold">&lt; 50ms Priority 1</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Dead-Letter Status:</span>
                    <span className="text-emerald-400 font-bold">0 Failed Retries</span>
                  </div>
                </div>
              )}

              {/* Benchmark Trigger Button */}
              <div className="mt-5 pt-4 border-t border-sky-500/20 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Cluster Nominal
                </span>
                <button
                  onClick={triggerBenchmark}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-sky-300 bg-sky-500/15 border border-sky-500/30 hover:bg-sky-500/25 transition-all"
                >
                  <RefreshCw size={12} className={isSimulating ? 'animate-spin' : ''} />
                  <span>{isSimulating ? 'Running Benchmark...' : 'Simulate Load Spike'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};