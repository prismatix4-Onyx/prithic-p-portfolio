export interface SkillItem {
  name: string;
  category: 'backend' | 'database' | 'apis' | 'cloud' | 'realtime';
  level: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  tagline: string;
  summary: string;
  tech: string[];
  attribution: string;
  attributionUrl: string;
  image: string;
  status: 'Production' | 'Live Beta' | 'Active Engine' | 'In Development';
  metrics: string[];
  architectureDetails: string[];
  keyChallenges: string;
}

export const PROFILE = {
  name: "Prithic P",
  title: "Co-Founder & Backend Lead @ PRISMATIX4",
  honor: "Google Student Ambassador",
  tagline: "Engineering Scalable Distributed Backends, High-Throughput APIs & Cloud Infrastructure.",
  bio: "Co-Founder & Backend Lead at PRISMATIX4 and Google Student Ambassador. Focused on architecting fault-tolerant microservices, resilient API gateways, robust database topologies, and high-concurrency event buses that power modern intelligent applications.",
  philosophy: "Reliability is not an afterthought; backend systems must be deterministic, secure, and built to scale under pressure.",
  links: {
    github: "https://github.com/Prithic",
    linkedin: "https://www.linkedin.com/in/prithic-p/",
    prismatix4: "https://prismatix4.vercel.app/",
    email: "teamprismatix4@gmail.com",
  },
  stats: [
    { label: "Backend Microservices", value: "8+" },
    { label: "API Query Latency", value: "< 18ms" },
    { label: "Database Transactions", value: "99.99%" },
    { label: "Peak Concurrency TPS", value: "2.5K+" },
  ]
};

export const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'backend', label: 'Distributed Backend & Microservices' },
  { id: 'database', label: 'Database & Data Modeling' },
  { id: 'apis', label: 'APIs & Security Architecture' },
  { id: 'cloud', label: 'Cloud & DevOps Infrastructure' },
  { id: 'realtime', label: 'Real-Time Event Streams' },
] as const;

export const SKILLS: SkillItem[] = [
  // Distributed Backend
  {
    name: "NestJS Microservices",
    category: "backend",
    level: "Architect",
    description: "Modular enterprise microservices, dependency injection, custom exception filters, and TCP/Redis microservice transports.",
    tags: ["NestJS", "Microservices", "TypeScript", "Dependency Injection"]
  },
  {
    name: "Node.js & Express Architecture",
    category: "backend",
    level: "Architect",
    description: "Asynchronous runtime event loops, multi-worker clustering, process managers, and memory leak profiling.",
    tags: ["Node.js", "Express", "Cluster", "Performance"]
  },
  {
    name: "Python Backend Services",
    category: "backend",
    level: "Advanced",
    description: "FastAPI endpoints, asynchronous computational workers, background task dispatching, and AI pipeline orchestration.",
    tags: ["FastAPI", "Python", "AsyncIO", "Workers"]
  },
  {
    name: "Service Resilience & Circuit Breakers",
    category: "backend",
    level: "Advanced",
    description: "Failover strategies, rate limiting, request retries with exponential backoff, and distributed tracing.",
    tags: ["Circuit Breaker", "Resilience", "High-Availability"]
  },

  // Database & Data Modeling
  {
    name: "PostgreSQL & Prisma ORM",
    category: "database",
    level: "Architect",
    description: "Relational database schema normalization, ACID compliance, zero-downtime migration strategies, and complex query indexing.",
    tags: ["PostgreSQL", "Prisma", "Relational Modeling", "SQL"]
  },
  {
    name: "Redis & In-Memory Caching",
    category: "database",
    level: "Advanced",
    description: "Sub-millisecond data caching, distributed locks, pub/sub channels, and session revocation stores.",
    tags: ["Redis", "Caching", "Pub/Sub", "Distributed Locks"]
  },
  {
    name: "Database Connection Pooling",
    category: "database",
    level: "Advanced",
    description: "Optimizing pgBouncer connections, dead-lock prevention, query execution plans, and explain-analyze tuning.",
    tags: ["pgBouncer", "Indexing", "Query Optimization"]
  },

  // APIs & Security
  {
    name: "RESTful API & OpenAPI Standards",
    category: "apis",
    level: "Architect",
    description: "REST API lifecycle design, OpenAPI / Swagger auto-generation, strict payload validation, and idempotency keys.",
    tags: ["REST", "OpenAPI", "Swagger", "Validation"]
  },
  {
    name: "Authentication & Authorization (JWT/OAuth)",
    category: "apis",
    level: "Advanced",
    description: "Stateless JSON Web Tokens with rotating refresh tokens, role-based access control (RBAC), and multi-tenant security.",
    tags: ["JWT", "OAuth 2.0", "RBAC", "Security"]
  },
  {
    name: "API Gateway & Reverse Proxy",
    category: "apis",
    level: "Advanced",
    description: "Nginx routing, SSL termination, CORS policies, helmet headers, and IP-based rate throttling.",
    tags: ["API Gateway", "Nginx", "Rate Limiting", "CORS"]
  },

  // Cloud & DevOps
  {
    name: "Docker & Containerization",
    category: "cloud",
    level: "Advanced",
    description: "Multi-stage Docker builds, image size minimization, reproducible environments, and Docker Compose orchestration.",
    tags: ["Docker", "Containers", "Docker Compose"]
  },
  {
    name: "CI/CD & Cloud Deployment",
    category: "cloud",
    level: "Advanced",
    description: "Automated test and build pipelines, GitHub Actions, Vercel/Netlify hosting, and automated rollback workflows.",
    tags: ["CI/CD", "GitHub Actions", "Vercel", "Netlify"]
  },
  {
    name: "Server Monitoring & Logging",
    category: "cloud",
    level: "Proficient",
    description: "Structured JSON logging, request correlation IDs, health check probes, and system uptime monitoring.",
    tags: ["Monitoring", "Healthchecks", "Logging", "DevOps"]
  },

  // Real-Time Event Streams
  {
    name: "Socket.IO & WebSockets Gateway",
    category: "realtime",
    level: "Architect",
    description: "Bi-directional event buses, room partitioning for multi-tenant applications, heartbeat tracking, and message delivery receipts.",
    tags: ["Socket.IO", "WebSockets", "Real-Time", "Event Gateway"]
  },
  {
    name: "Asynchronous Task Queues",
    category: "realtime",
    level: "Advanced",
    description: "Redis-backed BullMQ job scheduling, delayed task execution, priority processing, and dead-letter queues.",
    tags: ["BullMQ", "Job Queues", "Redis", "Async Tasks"]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "sara",
    title: "SARA — Autonomous Voice AI & Life OS",
    role: "Co-Founder & Backend Lead",
    tagline: "Proactive lockscreen voice agent & cross-platform Life OS.",
    summary: "SARA initiates native phone calls over the lockscreen at target times, engaging in real-time two-way voice check-ins and unifying finances, habits, and career tracking into a queryable Life OS.",
    tech: ["NestJS", "WebSockets", "Task Queues", "Redis", "PostgreSQL", "Prisma"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./sara_thumbnail.png",
    status: "In Development",
    metrics: ["< 18ms Gateway Dispatch", "Zero-Drop Session Recovery", "Encrypted State Persistence"],
    architectureDetails: [
      "Engineered the central NestJS real-time gateway coordinating between mobile clients and the autonomous voice reasoning engine.",
      "Designed asynchronous task dispatch queues using Redis to reliably schedule and trigger lockscreen phone calls at precise timestamps.",
      "Built resilient WebSocket session management supporting seamless reconnection during network transitions.",
      "Modeled relational schemas for user schedules, habits, and multi-domain financial records with Prisma ORM."
    ],
    keyChallenges: "Managing long-lived stateful WebSocket connections alongside high-frequency voice streaming chunks without creating memory leaks."
  },
  {
    id: "snap",
    title: "SNAP — Personal Care Network",
    role: "Co-Founder & Backend Lead",
    tagline: "Real-time care coordination, one-touch SOS, and P2P WebRTC consultations.",
    summary: "Cross-platform assistive ecosystem featuring dual-role caregiver/receiver dashboards, instantaneous WebSocket push notifications, and low-latency encrypted peer-to-peer WebRTC video calling.",
    tech: ["NestJS", "TypeScript", "WebRTC Signaling", "Socket.IO", "PostgreSQL", "Prisma"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./snap_thumbnail.jpg",
    status: "Production",
    metrics: ["Sub-50ms SOS Alert Dispatch", "STUN/TURN Relay Failover", "Strict ACID Relational Isolation"],
    architectureDetails: [
      "Architected the WebRTC signaling gateway on NestJS handling SDP handshake negotiation and ICE candidate exchanges.",
      "Configured STUN/TURN fallback relays ensuring uninterrupted emergency video calling across restrictive mobile firewalls.",
      "Designed a normalized PostgreSQL schema modeling care circles, medication schedules, and real-time distress signals.",
      "Implemented an instantaneous push notification dispatch engine with read-receipt confirmations for urgent medical SOS events."
    ],
    keyChallenges: "Guaranteeing sub-50ms latency for distress broadcasts while strictly preserving data integrity across concurrent caregiver nodes."
  },
  {
    id: "physense",
    title: "PhySense — Virtual Hardware Simulation Platform",
    role: "Co-Founder & Backend Lead",
    tagline: "Experience hardware before you touch it.",
    summary: "Browser-based virtual electronics laboratory allowing students to test microcontrollers (ESP32/Arduino), connect virtual sensors, and debug embedded logic before committing to physical circuits.",
    tech: ["Node.js", "Docker", "REST APIs", "Sandboxed Execution", "Telemetry"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./physense_thumbnail.jpg",
    status: "Active Engine",
    metrics: ["Sandboxed Compilation", "Sub-15ms Telemetry Ingestion", "Stateless Cloud Runners"],
    architectureDetails: [
      "Built sandboxed backend compilation workers to verify and compile C/C++ embedded code submitted by students.",
      "Engineered high-throughput telemetry streams logging virtual microcontroller pin states and sensor data.",
      "Implemented secure API endpoints for saving, sharing, and versioning community circuit schematic templates.",
      "Designed rate limiting and resource throttling to isolate compilation processes and ensure server security."
    ],
    keyChallenges: "Safely sandboxing untrusted C/C++ student code execution while keeping compilation turnaround under 1.5 seconds."
  },
  {
    id: "studentspace",
    title: "Student Space — Academic & Life Productivity Platform",
    role: "Co-Founder & Backend Lead",
    tagline: "One unified platform for every dimension of student life.",
    summary: "Centralized platform managing academic schedules, assignment milestones, and productivity metrics to eliminate cognitive fragmentation.",
    tech: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "REST APIs", "Redis"],
    attribution: "Engineered under PRISMATIX4",
    attributionUrl: "https://prismatix4.vercel.app/#projects",
    image: "./student_space_thumbnail.png",
    status: "In Development",
    metrics: ["Normalized Course Schemas", "Sub-12ms Cached Milestones", "JWT Stateless Auth"],
    architectureDetails: [
      "Designed and deployed the RESTful API microservices powering course timetables, exam milestones, and assignment progress.",
      "Normalized relational database schemas using Prisma ORM with foreign key cascades and composite indexes for fast lookups.",
      "Implemented a Redis caching layer to deliver student schedules instantly during high-traffic exam registration periods.",
      "Engineered secure JWT authentication workflows with refresh token rotation and session revocation."
    ],
    keyChallenges: "Structuring a normalized data model flexible enough to handle complex recurring academic timetables and grading schemes."
  }
];

export const PRISMATIX4_INFO = {
  name: "PRISMATIX4",
  role: "Co-Founder & Backend Lead",
  statement: "PRISMATIX4 is the collaborative technology collective uniting four specialized engineers across Systems, Backend, Frontend, and Machine Learning to build production-grade, human-centric software.",
  pillars: [
    { title: "Distributed Backend Core", lead: "Prithic P", desc: "High-concurrency microservices, data consistency, and cloud infrastructure." },
    { title: "Systems & Architecture", lead: "Sanjay S", desc: "Autonomous pipelines, real-time protocols, and foundational engineering." },
    { title: "Mobile & Interfaces", lead: "Vasundara Devi G", desc: "Fluid cross-platform experiences, design systems, and responsive ergonomics." },
    { title: "Machine Intelligence", lead: "Vivina S", desc: "Applied neural networks, voice interfaces, and predictive agentic workflows." }
  ],
  hubUrl: "https://prismatix4.vercel.app/"
};