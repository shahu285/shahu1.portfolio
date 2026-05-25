import { createFileRoute } from "@tanstack/react-router";
import { SiteMeshBackground } from "@/components/SiteMeshBackground";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  FileDown,
  Brain,
  Cpu,
  Workflow,
  Code2,
  Database,
  Sparkles,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const social = {
  github: "https://github.com/shahu285",
  linkedin: "https://www.linkedin.com/in/shahu-ugale/",
  email: "ishahu.2801@gmail.com",
} as const;

const competencies = [
  { icon: Brain, label: "LLM Architectures" },
  { icon: Workflow, label: "Agent Orchestration" },
  { icon: Cpu, label: "Inference & Fine-tuning" },
  { icon: Code2, label: "TypeScript / Python" },
  { icon: Database, label: "Vector & SQL Stores" },
  { icon: Sparkles, label: "RAG Pipelines" },
  { icon: Brain, label: "Multimodal Models" },
  { icon: Workflow, label: "LangGraph / DSPy" },
];

type Project = {
  title: string;
  description: string;
  tags: string[];
  span: "sm" | "md" | "lg";
  github?: string;
  live?: string;
  accent?: boolean;
};

const projects: Project[] = [
  {
    title: "MultiThesis",
    description:
      "An AI-powered research tool that deploys multiple specialized agents to search the web, summarize findings, verify facts, and produce structured research reports fully automated in real time.",
    tags: ["Langgraph","Langchain","Groq API","Tavily API","Streamlit","Python"],
    span: "lg",
    github: "https://github.com/shahu285/MultiThesis",
    live: "https://multi-agent1.streamlit.app/",
  },
  {
    title: "Clearance AI",
    description:
      "The application autonomously classifies uploaded files via generative AI to assign dynamic security clearances and enforces zero-trust boundary isolation inside a high-performance vector database.",
    tags: ["FastAPI", "QdrantDB", "TailwindCSS", "FastEmbed (ONNX)", "Gemini API", "Render"],
    span: "lg",
    github: "https://github.com/shahu285/clearance-ai-security-engine",
    live: "https://clearance-ai-security-engine.onrender.com/",
  },
  {
    title: "Contextual Query Engine",
    description: "An advanced Retrieval-Augmented Generation (RAG) pipeline utilizing semantic chunking to enforce zero-hallucination document QA that allows users to upload a PDF file and ask questions about its content. The chatbot responds only from the PDF to ensure accuracy and avoid hallucinations.",
    tags: ["Langchain", "Python", "ChromaDB", "Streamlit", "Gemini API"],
    span: "md",
    github: "https://github.com/shahu285/contextualqengine",
  },
  {
    title: "Avengers Unwrap",
    description: "Interactive Marvel Character Showcase is an interactive web app showcasing Marvel superheroes like Iron Man and Thor. Built with modern web tech and hosted on Vercel, it offers an engaging way to explore the Marvel universe. ",
    tags: ["HTML5", "CSS", "Vercel"],
    span: "sm",
    github: "https://github.com/shahu285/avengers_unwrap",
    live: "https://avengers-unwrap.vercel.app/",
  },
  {
    title: "Batman - Parallax",
    description:
      "Developed a parallax website on Batman’s Rogues Gallery without JavaScript, demonstrating creative front-end skills and proficiency with HTML and CSS. Successfully deployed the website on vercel",
    tags: ["HTML5", "CSS", "Vercel"],
    span: "md",
    github: "https://github.com/shahu285/parallexbatman",
    live: "https://parallexbatman.vercel.app/"
  }
];

type EducationEntry = {
  year: string;
  title: string;
  org: string;
  details?: string;
};

type CertificationEntry = {
  year: string;
  title: string;
  org: string;
  href: string;
};

const education: EducationEntry[] = [
  {
    year: "2023 – 2026",
    title: "Bachelor of Engineering (B.E.), Artificial Intelligence and Data Science",
    org: "D.Y. Patil College of Engineering (DYPCOE), Pune",
    details: "Grade: 8.57 CGPA"
  },
  {
    year: "2021 – 2023",
    title: "Diploma in Computer Engineering",
    org: "MET Institute of Technology, Nashik",
    details: "Grade: 89.14% (First Class with Distinction)",
  },
];

const certifications: CertificationEntry[] = [
  {
    title: "Agentic AI with LangChain and LangGraph",
    org: "IBM",
    year: "Oct 2025",
    href: "https://www.coursera.org/account/accomplishments/verify/G4PVSDOI51OO",
  },
  {
    title: "Introduction to Model Context Protocol",
    org: "Anthropic",
    year: "Aug 2025",
    href: "https://verify.skilljar.com/c/98m7n6e3cwwa",
  },
  {
    title: "Build Your Generative AI Productivity Skills with Microsoft and LinkedIn",
    org: "Microsoft",
    year: "Jun 2024",
    href: "https://www.linkedin.com/learning/certificates/1516c6418a1062e63baa668f322c8be502c6f58d0e4e03df48ddc7f110524ff9",
  },
  {
    title: "Introduction to Operating Systems",
    org: "NPTEL · IIT Madras",
    year: "Sep 2022",
    href: "https://archive.nptel.ac.in/content/noc/NOC22/SEM2/Ecertificates/106/noc22-cs78/Course/NPTEL22CS78S2313076109029709.jpg",
  },
];

function EducationTimelineItem({ entry }: { entry: EducationEntry }) {
  return (
    <li className="grid grid-cols-12 gap-4 py-6 px-6 items-center bg-slate-950/40 backdrop-blur-[2px] border-l-2 border-primary/20 hover:border-primary/50 transition-all rounded-r-xl">
      <span className="col-span-12 sm:col-span-2 font-mono text-xs text-muted-foreground">
        {entry.year}
      </span>
      <div className="col-span-12 sm:col-span-10">
        <h3 className="text-base sm:text-lg font-medium text-white tracking-tight text-balance">
          {entry.title}
        </h3>
        <p className="mt-1 text-sm text-zinc-400 italic">{entry.org}</p>
        {entry.details && (
          <p className="mt-1 text-sm text-zinc-200">{entry.details}</p>
        )}
      </div>
    </li>
  );
}

function CertificationTimelineItem({ entry }: { entry: CertificationEntry }) {
  return (
    <li className="group grid grid-cols-12 gap-4 py-6 px-6 items-center bg-slate-950/40 backdrop-blur-[2px] border-l-2 border-primary/20 hover:border-primary/50 transition-all rounded-r-xl">
      <span className="col-span-12 sm:col-span-2 font-mono text-xs text-muted-foreground">
        {entry.year}
      </span>
      <div className="col-span-12 sm:col-span-10 md:col-span-7">
        <div className="flex gap-3">
          <CheckCircle2 className="size-4 text-primary opacity-70 shrink-0 mt-1" />
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-medium text-white tracking-tight text-balance">
              {entry.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-200">{entry.org}</p>
          </div>
        </div>
      </div>
      <a
        href={entry.href}
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-12 md:col-span-3 inline-flex justify-center md:justify-end items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="link-underline">Verify certificate</span>
        <ArrowUpRight className="size-3.5" />
      </a>
    </li>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 bg-[#040814]/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm tracking-tight text-foreground">
          shahu<span className="text-primary">.</span>ugale
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#work" className="link-underline hover:text-foreground transition-colors">Work</a>
          <a href="#stack" className="link-underline hover:text-foreground transition-colors">Stack</a>
          <a href="#credentials" className="link-underline hover:text-foreground transition-colors">Credentials</a>
          <a href="#contact" className="link-underline hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground hover:border-primary/60 hover:bg-primary/5 transition-all"
        >
          Available for work
          <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_2px_var(--primary)]" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-24 lg:pt-32 lg:pb-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-4 pb-16 lg:pt-6 lg:pb-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="reveal font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8 flex items-center justify-center gap-2">
            <span className="text-primary">●</span> AI Engineer · Pune / Remote
          </p>
          <h1 className="reveal reveal-delay-1 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.15] text-white">
            Architecting Intelligent Systems for a Complex World.
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-base sm:text-lg text-zinc-200 leading-relaxed">
            I design and engineer LLM-powered products from retrieval architectures to
            autonomous agents with a focus on reliability, latency, and human-grade quality.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-all hover:scale-[1.01]"
            >
              View Work
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-white/5 transition-all hover:scale-[1.01]"
            >
              Download Résumé
              <FileDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  const items = [...competencies, ...competencies];
  return (
    <section id="stack" className="pt-20 pb-24 lg:pt-24 border-t border-transparent relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-10 flex items-end justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">02 — Stack</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Core competencies</h2>
        </div>
        <p className="hidden md:block max-w-sm text-sm text-zinc-200">
          A condensed toolkit refined across research, infrastructure, and product engineering.
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 w-max animate-marquee">
          {items.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-full border border-border bg-card/75 backdrop-blur-sm px-5 py-3 text-sm text-foreground"
            >
              <c.icon className="size-4 text-muted-foreground" />
              {c.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="py-24 border-t border-transparent relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">03 — Selected Work</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Built, shipped, measured.</h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            All projects <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative flex flex-col justify-between rounded-2xl border border-border bg-card/75 backdrop-blur-sm p-6 lg:p-7 min-h-[280px] overflow-hidden transition-all duration-300 hover:border-primary/40 hover:-translate-y-0.5 ${p.accent ? "bg-gradient-to-br from-card/80 to-primary/5" : ""}`}
            >
              {p.accent && (
                <div className="absolute -top-24 -right-24 size-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
              )}
              <div className="relative">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold tracking-tight text-balance pr-2 text-white">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    {p.github && (
                      <a href={p.github} className="p-1.5 rounded-md hover:bg-secondary hover:text-foreground transition-colors" aria-label="GitHub">
                        <Github className="size-4" />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} className="p-1.5 rounded-md hover:bg-secondary hover:text-foreground transition-colors" aria-label="Live demo">
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm text-zinc-200 leading-relaxed max-w-xl">
                  {p.description}
                </p>
              </div>
              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section id="credentials" className="py-24 border-t border-transparent relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-8 mb-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">04 — Credentials</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-balance text-white">
              Certifications & education.
            </h2>
          </div>
          <p className="col-span-12 lg:col-span-7 lg:pt-10 text-sm text-zinc-200 max-w-lg lg:justify-self-end">
            Formal education and professional certifications — separated for clarity, united as the foundation behind every project.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Education
            </p>
            <ul className="space-y-4">
              {education.map((entry) => (
                <EducationTimelineItem key={`${entry.year}-${entry.title}`} entry={entry} />
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Certifications
            </p>
            <ul className="space-y-4">
              {certifications.map((entry) => (
                <CertificationTimelineItem key={`${entry.year}-${entry.title}`} entry={entry} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative z-10 py-28 border-t border-border/60 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">05 — Contact</p>
        <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.15] text-white">
          Let's build
          <br />
          something{" "}
          <span className="text-zinc-400">together.</span>
        </h2>

        <div className="mt-14 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-6">
            <a
              href={`mailto:${social.email}`}
              className="group inline-flex items-center gap-2 text-base sm:text-lg font-medium text-zinc-200 hover:text-white transition-colors"
            >
              <span className="link-underline">{social.email}</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="col-span-12 md:col-span-6 flex md:justify-end gap-3">
            {[
              { icon: Github, label: "GitHub", href: social.github },
              { icon: Linkedin, label: "LinkedIn", href: social.linkedin },
              { icon: Mail, label: "Email", href: `mailto:${social.email}` },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                {...(s.label !== "Email" && { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-flex items-center justify-center size-12 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-primary/5 transition-all"
              >
                <s.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <span>© {new Date().getFullYear()} Shahu Ugale. All rights reserved.</span>
          <span>Designed & engineered in PUNE.</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen text-foreground antialiased">
      <SiteMeshBackground />
      <div className="site-micro-grid" aria-hidden />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Stack />
        <Work />
        <Credentials />
      </main>
      <Footer />
    </div>
  );
}
