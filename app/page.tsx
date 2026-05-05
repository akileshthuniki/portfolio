"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Download, Github, Linkedin, Mail, ExternalLink, Code } from "lucide-react"

const featuredProjects = [
  {
    name: "PreApply",
    description:
      "Terraform risk scoring that flags blast-radius issues before deployment.",
    details:
      "PreApply solves a common DevOps blind spot: risky infrastructure changes hidden inside large Terraform plans. It matters because teams can fail fast in CI/CD before production impact. The technically interesting part is deterministic scoring logic that combines data-loss, security, and cost signals without needing cloud-side APIs.",
    tags: ["Python", "Terraform", "CI/CD"],
    impact: "2K+ downloads in 37 countries",
    href: "https://github.com/akileshthuniki/PreApply",
  },
  {
    name: "SaaSInfraLab",
    description:
      "Reference architecture for multi-tenant SaaS workloads on AWS EKS.",
    details:
      "This project addresses the complexity of building secure multi-tenant platforms from scratch. It matters because teams can reuse battle-tested patterns for tenancy, networking, and release management. The technical depth comes from modular Terraform, GitOps-driven deployments, and schema-level tenant isolation design.",
    tags: ["AWS", "Kubernetes", "GitOps"],
    impact: "Production-ready multi-tenant template",
    href: "https://github.com/SaaSInfraLab/cloudnative-saas-eks",
  },
  {
    name: "Ollama Infra CLI",
    description:
      "Offline AI tooling for DevOps workflows in security-first environments.",
    details:
      "Ollama Infra CLI solves the challenge of using AI in restricted or air-gapped environments. It matters for regulated teams that cannot send infra data to external services. What makes it interesting is local-model integration, terminal-first workflow design, and prompt patterns tuned specifically for infrastructure troubleshooting.",
    tags: ["CLI", "LLM", "Automation"],
    impact: "Zero external API calls, fully local",
    href: "https://github.com/akileshthuniki/ollama-infra-cli",
  },
]

const experience = [
  {
    company: "National Financial Partners",
    role: "Senior DevOps Engineer",
    period: "2025 - Present",
    points: [
      "Built serverless AWS workloads that cut infrastructure overhead by 50%",
      "Implemented GitOps release workflows and reduced deployment time by 60%",
      "Implemented zero-trust controls across customer-facing services using IAM, WAF, and managed identity patterns",
      "Improved incident detection time from 30 minutes to 12 minutes with better telemetry and alerting hygiene",
      "Partnered with engineering and platform stakeholders to standardize release guardrails and reduce rollback risk",
    ],
  },
  {
    company: "Gentiva Health Service",
    role: "DevOps Engineer",
    period: "2024 - 2025",
    points: [
      "Created CI/CD pipelines with GitHub Actions and GitLab CI",
      "Scaled Kubernetes workloads with stronger observability and uptime",
      "Automated infrastructure provisioning with Terraform and Ansible to reduce environment setup time",
      "Supported compliance-sensitive healthcare workloads with reliability-focused delivery practices",
    ],
  },
  {
    company: "Unvired Inc.",
    role: "DevOps / Build and Release Engineer",
    period: "2018 - 2023",
    points: [
      "Automated release flow with Jenkins and reduced manual effort by 40%",
      "Standardized environment setup and lowered configuration drift",
      "Managed build and release pipelines for multiple product teams with reliable delivery cadence",
      "Improved deployment quality by replacing ad-hoc scripts with repeatable automation",
    ],
  },
]

const coreSkills = [
  "AWS (Lambda, EKS, IAM, S3, API Gateway)",
  "Kubernetes and Docker platforms",
  "Terraform and infrastructure automation",
  "GitHub Actions, GitLab CI, and GitOps",
  "Cloud security, IAM, and secret rotation",
  "Observability with Prometheus, Grafana, ELK",
]

const impactMetrics = [
  { value: "6+", label: "Years experience", highlight: true },
  { value: "35%", label: "Cloud cost reduction", highlight: true },
  { value: "10M+", label: "Daily events processed", highlight: true },
  { value: "150+", label: "Services secured", highlight: false },
  { value: "99.95%", label: "Service uptime delivered", highlight: false },
  { value: "60%", label: "Faster deployment cycles", highlight: false },
  { value: "50%", label: "Infrastructure overhead reduced", highlight: false },
]

const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    year: "2024",
    link: "https://www.credly.com/",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    year: "2023",
    link: "https://www.credly.com/",
  },
  {
    name: "Agile Software Development - University of Minnesota",
    year: "2023",
    link: "",
  },
  {
    name: "QA Automation Engineer - Capgemini",
    year: "2022",
    link: "",
  },
]

const techStackOverview = [
  {
    category: "Cloud Providers",
    items: ["AWS", "Azure", "Google Cloud Platform"],
  },
  {
    category: "Kubernetes and Containers",
    items: ["Kubernetes", "EKS", "Docker", "Helm", "OpenShift"],
  },
  {
    category: "IaC and Automation",
    items: ["Terraform", "Ansible", "CloudFormation", "Python", "Bash"],
  },
  {
    category: "CI/CD and GitOps",
    items: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "Flux"],
  },
  {
    category: "Observability and Security",
    items: ["Prometheus", "Grafana", "ELK", "CloudWatch", "Secrets Rotation"],
  },
]

const caseStudies = [
  {
    title: "PreApply - Terraform Risk Gate",
    problem:
      "Teams were applying infrastructure changes without a clear way to quantify blast radius or policy risk.",
    architecture:
      "CLI-first analyzer that parses Terraform plan output and runs deterministic multi-factor risk scoring before apply.",
    tools: "Python, Terraform plan JSON, CI/CD pipeline integration, optional local Ollama",
    outcome:
      "Safer deployments with earlier risk visibility and stronger release confidence in pull request workflows.",
    metrics:
      "2K+ downloads, used in 37 countries, and teams report substantially fewer risky infrastructure approvals",
  },
  {
    title: "SaaSInfraLab - Multi-Tenant Platform Blueprint",
    problem:
      "Engineering teams needed a reusable architecture for secure tenant isolation and repeatable SaaS delivery on Kubernetes.",
    architecture:
      "Modular Terraform foundations plus GitOps-driven app delivery on EKS with schema-per-tenant data isolation.",
    tools: "AWS EKS, Terraform modules, ArgoCD, Helm, PostgreSQL",
    outcome:
      "Reduced setup ambiguity and gave teams a practical path to ship multi-tenant infrastructure faster.",
    metrics:
      "5-repository modular ecosystem and architecture patterns that can reduce platform setup cycles by weeks",
  },
]

const deliverySteps = [
  {
    title: "Discover",
    detail: "Clarify business goals, constraints, and reliability targets.",
  },
  {
    title: "Design",
    detail: "Define cloud architecture, security boundaries, and release strategy.",
  },
  {
    title: "Deliver",
    detail: "Automate infrastructure, CI/CD, and observability with clear handoff.",
  },
]

export default function NewSitePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    alert("Thank you for reaching out! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <header className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${scrolled ? "bg-[#05070b]/90 backdrop-blur-2xl shadow-2xl shadow-black/20" : "bg-[#05070b]/70 backdrop-blur-xl"}`}>
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <p className="text-sm font-semibold tracking-[0.18em] text-white/80 hover:text-white transition-colors cursor-pointer">
            AKILESH THUNIKI
          </p>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative transition hover:text-white group"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-cyan-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/Akilesh_Thuniki_DevOps Engineer_Resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs text-white/80 transition hover:bg-white/10 hover:border-white/30"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#05070b]/95 backdrop-blur-xl">
            <nav className="mx-auto max-w-6xl px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <Link
                  href="/Akilesh_Thuniki_DevOps Engineer_Resume.pdf"
                  download
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 w-fit"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-20 md:pb-28 md:pt-24">
          {/* Clean background with gradient blobs only */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
          </div>
          <div className="relative mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80">
                Senior DevOps Engineer | Cloud Infrastructure | Platform Reliability
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Senior DevOps Engineer with 6+ years building cloud infrastructure at fintech and healthcare scale.
              </h1>
              <p className="mt-6 max-w-2xl text-base text-white/70 md:text-lg">
                I design and automate AWS and Kubernetes systems that scale with confidence.
                Focused on clean architecture, secure delivery, and measurable impact.
              </p>
              <p className="mt-4 max-w-2xl text-sm text-white/60 md:text-base">
                Based in Salt Lake City, Utah. Open to remote, hybrid, or relocation opportunities. US work authorized.
              </p>
              <p className="mt-8 text-sm text-white/60">Open to full-time Senior DevOps and Platform Engineering opportunities.</p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/Akilesh_Thuniki_DevOps Engineer_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:border-white/30"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-4">
                <Link
                  href="https://github.com/akileshthuniki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white hover:border-white/30 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/akileshthuniki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white hover:border-white/30 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:Akilesh.cloudops@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all hover:bg-white/10 hover:text-white hover:border-white/30 hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="space-y-5 md:pt-10">
              <div className="relative mx-auto w-full max-w-sm">
                {/* Pulsing gradient glow - Option 1 */}
                <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-cyan-300/30 via-indigo-400/20 to-violet-400/25 blur-2xl animate-pulse" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  <Image
                    src="/images/akileshthuniki.jpg"
                    alt="Akilesh Thuniki portrait"
                    width={560}
                    height={720}
                    priority
                    className="h-auto w-full rounded-[1.5rem] object-cover transition duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Impact Metrics</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">Proven Results & Expertise</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {impactMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-all hover:border-cyan-400/30 hover:bg-white/[0.06] hover:-translate-y-1"
                >
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-indigo-300 transition-all">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-white/70 group-hover:text-white/80 transition-colors">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {deliverySteps.map((step) => (
              <article key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-300/80">{step.title}</p>
                <p className="mt-4 text-sm leading-6 text-white/75">{step.detail}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              I turn complex infrastructure into dependable systems.
            </h2>
            <p className="mt-5 max-w-3xl text-white/70">
              I&apos;m a Senior DevOps and Cloud Engineer with 6+ years of experience building reliable, scalable AWS infrastructure for modern distributed systems. I&apos;ve worked across fintech and healthcare environments, turning manual fragile processes into automated, production-ready systems.
            </p>
          </div>
        </section>

        <section id="work" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Selected Work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Built for real production environments</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-cyan-500/10"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{project.description}</p>
                <p className="mt-3 text-sm leading-6 text-white/65">{project.details}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/75 transition-colors hover:border-cyan-400/30 hover:bg-cyan-400/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.12em] text-white/45 group-hover:text-cyan-400/60 transition-colors">{project.impact}</p>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition-all group-hover:text-cyan-200 group-hover:gap-2"
                >
                  Open project
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Experience</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Built and operated infrastructure at scale
            </h2>
          </div>
          <div className="grid gap-4">
            {experience.map((job) => (
              <article
                key={job.company}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.company}</h3>
                    <p className="mt-1 text-sm text-white/70">{job.role}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.12em] text-white/45">{job.period}</p>
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-white/75 md:grid-cols-2">
                  {[...new Set(job.points)].map((point) => (
                    <li key={point}>- {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Technical Skills</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Core strengths across cloud and platform engineering
            </h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {coreSkills.map((skill) => (
                <div key={skill} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tech-stack" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Tech Stack Overview</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Platform capabilities by domain
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {techStackOverview.map((group) => (
                <article key={group.category} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="text-base font-semibold">{group.category}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Certifications</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Credentials and continuous learning
            </h2>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {certifications.map((cert) => (
                <article key={cert.name} className="group rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80 transition-all hover:border-white/25 hover:bg-white/[0.06] hover:-translate-y-0.5">
                  <p className="font-medium group-hover:text-cyan-300 transition-colors">{cert.name}</p>
                  <div className="mt-1 flex items-center justify-between text-xs text-white/60">
                    <span>Issued: {cert.year}</span>
                    <span>Certification</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Activity Section */}
        <section id="github" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">GitHub Activity</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Open Source Work
            </h2>
          </div>
          {/* Unified GitHub Stats Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column - Stats & Languages */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Github className="h-5 w-5 text-cyan-400" />
                    Statistics & Activity
                  </h3>
                  <img
                    src="https://github-readme-stats-sigma-five.vercel.app/api?username=akileshthuniki&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=3b82f6&icon_color=06b6d4&text_color=ffffff"
                    alt="GitHub Stats"
                    className="w-full rounded-xl"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://github-readme-stats.vercel.app/api?username=akileshthuniki&show_icons=true&theme=tokyonight&hide_border=true"
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-indigo-400" />
                    DevOps & Cloud Stack
                  </h3>
                  <img
                    src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=akileshthuniki&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=3b82f6&text_color=ffffff&hide=C,Makefile,CMake&langs_count=6"
                    alt="Top Languages - DevOps Stack"
                    className="w-full rounded-xl"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://github-readme-stats.vercel.app/api/top-langs/?username=akileshthuniki&layout=compact&theme=tokyonight&hide_border=true&hide=C,Makefile,CMake&langs_count=6"
                    }}
                  />
                </div>
              </div>

              {/* Right Column - Key Metrics */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-6">Key Contributions</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                        419+
                      </div>
                      <p className="mt-2 text-sm text-white/70">Contributions</p>
                      <p className="text-xs text-white/50">Last 12 months</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                        25+
                      </div>
                      <p className="mt-2 text-sm text-white/70">Repositories</p>
                      <p className="text-xs text-white/50">Public projects</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                        2K+
                      </div>
                      <p className="mt-2 text-sm text-white/70">Downloads</p>
                      <p className="text-xs text-white/50">PreApply tool</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                        37
                      </div>
                      <p className="mt-2 text-sm text-white/70">Countries</p>
                      <p className="text-xs text-white/50">Global reach</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-6">
                  <h4 className="text-base font-semibold mb-3">Featured Projects</h4>
                  <div className="space-y-2 text-sm text-white/70">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span><strong className="text-white/90">PreApply</strong> - Terraform risk analyzer (2K+ downloads)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span><strong className="text-white/90">SaaSInfraLab</strong> - Multi-tenant EKS architecture</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-400">▸</span>
                      <span><strong className="text-white/90">Ollama Infra CLI</strong> - Local AI for DevOps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="https://github.com/akileshthuniki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105"
            >
              <Github className="h-4 w-4" />
              View Full GitHub Profile
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <section id="case-studies" className="mx-auto w-full max-w-6xl px-6 py-20 md:py-24">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.18em] text-white/50">Case Studies</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Deep dives into architecture and outcomes
            </h2>
          </div>
          <div className="grid gap-5">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
                <h3 className="text-xl font-semibold">{study.title}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-cyan-300/80">Problem</p>
                    <p className="mt-2 text-sm text-white/75">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-cyan-300/80">Architecture</p>
                    <p className="mt-2 text-sm text-white/75">{study.architecture}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-cyan-300/80">Tools</p>
                    <p className="mt-2 text-sm text-white/75">{study.tools}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-cyan-300/80">Outcome and Metrics</p>
                    <p className="mt-2 text-sm text-white/75">
                      {study.outcome} {study.metrics}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 pb-28 pt-14">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 to-white/[0.03] p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Let&apos;s Connect</h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Open to discussing cloud architecture opportunities, DevOps transformations, and technical consulting projects.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:Akilesh.cloudops@gmail.com"
                  className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">Email</p>
                    <p className="text-sm">Akilesh.cloudops@gmail.com</p>
                  </div>
                </a>

                <Link
                  href="https://www.linkedin.com/in/akileshthuniki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">LinkedIn</p>
                    <p className="text-sm">linkedin.com/in/akileshthuniki</p>
                  </div>
                </Link>

                <Link
                  href="https://github.com/akileshthuniki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Github className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">GitHub</p>
                    <p className="text-sm">github.com/akileshthuniki</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <h3 className="text-xl font-semibold">Send a Message</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-white/70 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>Akilesh Thuniki - DevOps and Cloud Engineer</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-padding-top: 5rem;
        }

        /* Better focus states for accessibility */
        a:focus-visible,
        button:focus-visible,
        input:focus-visible,
        textarea:focus-visible {
          outline: 2px solid rgba(6, 182, 212, 0.6);
          outline-offset: 2px;
        }

        /* Optimize font rendering */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
}
