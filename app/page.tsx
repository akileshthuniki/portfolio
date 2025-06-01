"use client"
import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Cloud,
  Server,
  GitBranch,
  Database,
  Monitor,
  Award,
  Calendar,
  TrendingUp,
  Zap,
  CheckCircle,
  Download,
  Users,
  Target,
  Briefcase,
  Menu,
  X,
  ArrowRight,
  Code,
  Globe,
  Activity,
  Container,
  Plane,
  Quote,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function DevOpsPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState({})
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [particles, setParticles] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    // Generate particles on client side only
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 4,
      animationDuration: 2 + Math.random() * 3,
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const skills = {
    "Cloud & Infrastructure": {
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        "AWS (EC2, S3, Lambda, API Gateway, Cognito, IAM, CloudWatch)",
        "Terraform",
        "Ansible",
        "CloudFormation",
      ],
      color:
        "bg-gradient-to-br from-sky-50 to-blue-100 text-blue-800 border-blue-200 hover:from-sky-100 hover:to-blue-200",
      // progress: 95,
    },
    "Containerization & Orchestration": {
      icon: <Container className="h-6 w-6" />,
      skills: ["Docker", "Kubernetes (EKS, ECS)"],
      color:
        "bg-gradient-to-br from-emerald-50 to-teal-100 text-teal-800 border-teal-200 hover:from-emerald-100 hover:to-teal-200",
      // progress: 92,
    },
    "CI/CD & GitOps": {
      icon: <GitBranch className="h-6 w-6" />,
      skills: ["GitHub Actions", "Flux", "GitLab CI", "ArgoCD", "Jenkins"],
      color:
        "bg-gradient-to-br from-violet-50 to-purple-100 text-purple-800 border-purple-200 hover:from-violet-100 hover:to-purple-200",
      // progress: 90,
    },
    "Monitoring & Observability": {
      icon: <Monitor className="h-6 w-6" />,
      skills: ["Prometheus", "Grafana", "AWS CloudWatch"],
      color:
        "bg-gradient-to-br from-amber-50 to-orange-100 text-orange-800 border-orange-200 hover:from-amber-100 hover:to-orange-200",
      // progress: 88,
    },
    "Databases & Storage": {
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MySQL", "DynamoDB"],
      color:
        "bg-gradient-to-br from-rose-50 to-pink-100 text-pink-800 border-pink-200 hover:from-rose-100 hover:to-pink-200",
      // progress: 85,
    },
    "Languages & Scripting": {
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "Bash", "TypeScript"],
      color:
        "bg-gradient-to-br from-cyan-50 to-indigo-100 text-indigo-800 border-indigo-200 hover:from-cyan-100 hover:to-indigo-200",
      // progress: 87,
    },
  }

  const achievements = [
    { metric: "35%", description: "AWS Cost Reduction", icon: <TrendingUp className="h-6 w-6" /> },
    { metric: "70%", description: "Deployment Efficiency", icon: <Zap className="h-6 w-6" /> },
    { metric: "99.99%", description: "System Uptime", icon: <CheckCircle className="h-6 w-6" /> },
    { metric: "5M+", description: "Daily Transactions", icon: <Target className="h-6 w-6" /> },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Engineering Manager",
      company: "J.P. Morgan",
      content:
        "Akilesh transformed our deployment pipeline, reducing failures by 75% and significantly improving our team's productivity. His expertise in cloud architecture is exceptional.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=SJ",
    },
    {
      name: "Sundaresan Sivaraman",
      role: "Project Manager",
      company: "Capgemini",
      content:
        "Working with Akilesh on our cloud migration was a game-changer. His deep understanding of AWS and automation saved us months of work and significant costs.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
    },
    {
      name: "Matthew Busi",
      role: "Founder & CEO",
      company: "ShadowRock",
      content:
        "Akilesh's ability to implement complex infrastructure solutions while maintaining security and compliance standards is remarkable. A true professional.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60&text=ER",
    },
  ]

  const techStack = [
    { name: "AWS", icon: <Cloud className="h-8 w-8" />, color: "text-orange-500" },
    { name: "Kubernetes", icon: <Server className="h-8 w-8" />, color: "text-blue-500" },
    { name: "Docker", icon: <Container className="h-8 w-8" />, color: "text-cyan-500" },
    { name: "Terraform", icon: <Globe className="h-8 w-8" />, color: "text-purple-500" },
    { name: "GitHub Actions", icon: <GitBranch className="h-8 w-8" />, color: "text-gray-700" },
    { name: "Prometheus", icon: <Activity className="h-8 w-8" />, color: "text-green-500" },
    { name: "Python", icon: <Code className="h-8 w-8" />, color: "text-yellow-500" },
    { name: "PostgreSQL", icon: <Database className="h-8 w-8" />, color: "text-blue-600" },
  ]

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2024" },
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
    { name: "Agile Software Development", issuer: "University of Minnesota", year: "2023" },
    { name: "QA Automation Engineer", issuer: "Capgemini", year: "2022" },
  ]

  const experience = [
    {
      company: "ShadowRock",
      role: "Cloud Architect",
      period: "Jan 2025 – Present",
      location: "Remote",
      logo: "/images/shadowrock.jpg",
      achievements: [
        "Architected serverless platform reducing infrastructure overhead by 50%",
        "Established GitOps practices decreasing deployment time by 60%",
        "Implemented zero-trust security achieving 100% compliance",
        "Optimized AWS resources delivering 35% cost reduction",
      ],
      technologies: ["AWS Lambda", "Terraform", "GitOps", "Kubernetes"],
    },
    {
      company: "J.P. Morgan",
      role: "DevOps Engineer",
      period: "May 2024 – Jan 2025",
      location: "New York, NY",
      logo: "/images/jpmorgan.png",
      achievements: [
        "Automated CI/CD pipelines improving deployment efficiency by 35%",
        "Developed Python automation reducing manual effort by 30%",
        "Integrated monitoring detecting issues 30% faster",
        "Built event-driven architectures boosting responsiveness by 40%",
      ],
      technologies: ["Python", "Kubernetes", "GitLab CI", "Splunk"],
    },
    {
      company: "Capgemini Technology Services",
      role: "DevOps Engineer",
      period: "Jun 2021 – Jul 2023",
      location: "Hyderabad, IN",
      logo: "/images/capgemini.png",
      achievements: [
        "Led DevOps transformation improving deployment reliability by 85%",
        "Migrated 200+ legacy applications with zero data loss",
        "Implemented message brokers handling 5M+ daily transactions",
        "Enhanced observability reducing MTTR by 65%",
      ],
      technologies: ["Docker", "Kubernetes", "Golang", "Kafka"],
    },
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Cloud Engineer",
      period: "Jul 2019 – Apr 2021",
      location: "Bangalore, IN",
      logo: "/images/tcs.png",
      achievements: [
        "Architected AWS networking infrastructure for 30+ critical applications achieving 99.9% uptime",
        "Automated cloud provisioning cutting deployment time from days to minutes",
        "Built scalable Jenkins CI/CD pipelines enabling 20+ daily deployments",
        "Optimized IAM roles reducing vulnerabilities by 85% ensuring SOC2/HIPAA compliance",
      ],
      technologies: ["AWS", "Terraform", "Jenkins", "Docker"],
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Enterprise Cloud Migration",
      description:
        "Led large-scale AWS migration for Fortune 500 client with zero downtime and comprehensive security implementation",
      detailedDescription: `This project involved migrating a Fortune 500 company's entire infrastructure from on-premises data centers to AWS cloud. The migration included 200+ applications, multiple databases, and critical business systems serving millions of users daily.

Key challenges included:
• Zero-downtime requirement for critical business operations
• Complex legacy system dependencies
• Strict compliance requirements (SOC2, HIPAA)
• Multi-region disaster recovery setup
• Cost optimization while maintaining performance

The solution involved a phased migration approach using AWS services like EC2, RDS, S3, CloudFront, and Lambda. We implemented Infrastructure as Code using Terraform and established comprehensive monitoring with CloudWatch and custom dashboards.`,
      metrics: ["99.99% Uptime", "30% Cost Reduction", "70% Threat Mitigation"],
      technologies: ["AWS", "Terraform", "Kubernetes", "Docker", "CloudWatch", "Lambda"],
      image: "/images/CloudMigration.png",
      githubUrl: "https://github.com/yourusername/cloud-migration-project",

      challenges: [
        "Legacy system compatibility issues",
        "Data migration without downtime",
        "Security compliance requirements",
        "Performance optimization",
      ],
      outcomes: [
        "Reduced infrastructure costs by 30%",
        "Improved system reliability to 99.99% uptime",
        "Enhanced security posture with 70% threat reduction",
        "Enabled auto-scaling capabilities",
      ],
    },
    {
      id: 2,
      title: "CI/CD Pipeline Modernization",
      description:
        "Built GitOps-driven pipeline automating deployments for 50+ microservices with comprehensive testing",
      detailedDescription: `Modernized the entire CI/CD infrastructure for a large-scale microservices architecture. The project involved replacing legacy Jenkins pipelines with a modern GitOps approach using Github Actions and Flux.

The new pipeline architecture included:
• Automated testing at multiple stages (unit, integration, e2e)
• Security scanning and vulnerability assessment
• Automated deployment to multiple environments
• Rollback capabilities and blue-green deployments
• Comprehensive monitoring and alerting

This transformation significantly improved deployment reliability and reduced the time from code commit to production deployment from hours to minutes.`,
      metrics: ["75% Fewer Failures", "60% Faster Deployments", "100% Automation"],
      technologies: ["Github Actions", "Flux", "Kubernetes", "Helm", "Docker", "Prometheus"],
      image: "/images/PipelineModernizationNew.png",
      githubUrl: "https://github.com/yourusername/cicd-modernization",
      challenges: [
        "Legacy pipeline dependencies",
        "Multiple environment configurations",
        "Testing automation complexity",
        "Zero-downtime deployment requirements",
      ],
      outcomes: [
        "Reduced deployment failures by 75%",
        "Accelerated deployment speed by 60%",
        "Achieved 100% deployment automation",
        "Improved developer productivity",
      ],
    },
    {
      id: 3,
      title: "Cost Optimization Platform",
      description:
        "Developed real-time monitoring and optimization platform reducing AWS spend significantly across multiple environments",
      detailedDescription: `Created a comprehensive cost optimization platform that provides real-time visibility into AWS spending patterns and automatically implements cost-saving measures.

The platform features:
• Real-time cost monitoring and alerting
• Automated resource rightsizing recommendations
• Unused resource identification and cleanup
• Reserved Instance optimization
• Multi-account cost allocation and reporting
• Custom dashboards for different stakeholders

The solution uses a combination of AWS Cost Explorer APIs, CloudWatch metrics, and custom Python scripts to analyze usage patterns and provide actionable insights for cost reduction.`,
      metrics: ["35% Cost Savings", "Real-time Monitoring", "Automated Scaling"],
      technologies: ["Python", "Grafana", "CloudWatch", "Lambda", "DynamoDB", "API Gateway"],
      image: "/images/CostOptimization.png",
      githubUrl: "https://github.com/yourusername/cost-optimization-platform",

      challenges: [
        "Complex multi-account AWS setup",
        "Real-time data processing requirements",
        "Integration with existing monitoring tools",
        "Automated decision-making algorithms",
      ],
      outcomes: [
        "Achieved 35% reduction in AWS costs",
        "Implemented real-time cost monitoring",
        "Automated resource optimization",
        "Improved cost visibility across teams",
      ],
    },
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

// Alternative method using sendForm
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace 'YOUR_CORRECT_SERVICE_ID' with the actual Service ID from EmailJS dashboard
      const serviceId = "service_tnhowwm"  // ← UPDATE THIS
      const templateId = "template_5mnshma"        // This should be correct
      const publicKey = "602Fadb9xKa1vOrNl"        // This should be correct
      
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
      }

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      console.log("Success:", result)
      
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      })
      
      alert("Message sent successfully! I'll get back to you soon.")

    } catch (error) {
      console.error("EmailJS Error:", error)
      alert("Failed to send message. Please try again or contact me directly.")
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Navigation */}
      <header
        className={`fixed top-0 z-40 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 shadow-2xl shadow-slate-900/5"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 text-white font-bold text-sm shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  AT
                </div>
              </div>
              <span className="font-bold text-slate-900 text-lg tracking-tight">Akilesh Thuniki</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
                >
                  {item.label}
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-slate-700 to-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/Akilesh_Thuniki_DevOps Engineer_Resume.pdf" download>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-xl">
              <nav className="container py-4 space-y-2">
                {[
                  { href: "#about", label: "About" },
                  { href: "#experience", label: "Experience" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#testimonials", label: "Testimonials" },
                  { href: "#contact", label: "Contact" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex gap-2 px-4 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section with Blue-themed Background */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Enhanced Blue-themed Background */}
          <div className="absolute inset-0">
            {/* Main gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>

            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 opacity-30">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
              >
                <defs>
                  <pattern
                    id="blue-grid"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(30)"
                  >
                    <rect width="100%" height="100%" fill="none" />
                    <path d="M 0,30 60,30" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
                    <path d="M 30,0 30,60" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />
                    <circle cx="30" cy="30" r="2" fill="rgba(59, 130, 246, 0.15)" />
                  </pattern>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                    <stop offset="50%" stopColor="rgba(99, 102, 241, 0.05)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#blue-grid)" />
                <rect width="100%" height="100%" fill="url(#blueGradient)" />
              </svg>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-blue-300/40 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-indigo-200/40 to-indigo-300/40 rounded-lg rotate-45 blur-lg animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-br from-sky-200/40 to-sky-300/40 rounded-full blur-lg animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>

            {/* Large gradient orbs */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/60 to-indigo-200/60 rounded-full opacity-70 animate-pulse"></div>
            <div
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-100/60 to-purple-200/60 rounded-full opacity-70 animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>

            {/* Subtle animated particles */}
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.animationDelay}s`,
                  animationDuration: `${particle.animationDuration}s`,
                }}
              />
            ))}

            {/* Professional accent lines */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/50 to-transparent"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-200/50 to-transparent"></div>

            {/* Corner accent elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-100/30 to-transparent"></div>
          </div>

          <div className="container relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col items-start gap-8 animate-fade-in-up">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">Salt Lake City, USA</span>
                </div>
                <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0 shadow-lg">
                  Available for Hire
                </Badge>
                <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-lg flex items-center gap-1">
                  <Plane className="h-3 w-3" />
                  <span>Open to Relocation</span>
                </Badge>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 lg:text-6xl xl:text-7xl max-w-4xl">
                  DevOps Engineer &{" "}
                  <span className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                    Cloud Architect
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  AWS Certified DevOps Engineer with 5+ years of experience architecting resilient, scalable cloud systems. I specialize in automating infrastructure, streamlining deployments, and cutting cloud costs all with enterprise-grade reliability.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/AWS_Certified.pdf" download>
                <Badge
                  variant="secondary"
                  className="bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200 transition-colors"
                >
                  AWS Certified
                </Badge>
                </Link>
                <Badge
                  variant="secondary"
                  className="bg-violet-100 text-violet-800 border-violet-200 hover:bg-violet-200 transition-colors"
                >
                  5+ Years Experience
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200 transition-colors"
                >
                  Enterprise Scale
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Get in Touch
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Link href="/Akilesh_Thuniki_DevOps Engineer_Resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex gap-3">
                  <Link href="https://www.linkedin.com/in/akileshthuniki/" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300 transform hover:scale-110"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="h-6 w-px bg-slate-300"></div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+1 (385) 461-8890</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative mx-auto w-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="\images\akileshthuniki.jpg"
                    width={500}
                    height={600}
                    alt="Akilesh Thuniki"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <section className="py-12 bg-white border-y border-slate-100">
          <div className="container">
            <div className="flex items-center justify-center mb-8">
              <h3 className="text-lg font-semibold text-slate-600">Trusted Technologies</h3>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex gap-12 justify-center flex-wrap">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 min-w-[100px] group hover:scale-110 transition-transform duration-300 flex-shrink-0"
                  >
                    <div className={`${tech.color} group-hover:scale-125 transition-transform duration-300`}>
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-slate-600">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Animated Key Achievements */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4 text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                      {achievement.icon}
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {achievement.metric}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{achievement.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white transition-all duration-1000 ${
            isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container">
            <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
              <div className="space-y-8 animate-fade-in-left">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">About Me</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    I'm a cloud-native engineer passionate about solving infrastructure problems with clean, scalable automation. 
                    With over 5 years of experience in DevOps and cloud architecture, I’ve delivered resilient systems that enable zero-downtime deployments, 
                    drive cost efficiency, and scale effortlessly.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Whether it's provisioning with Terraform, orchestrating containers with Kubernetes, or enforcing security through DevSecOps.
                    I bring a thoughtful, strategic mindset to every layer of the stack.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: <Users className="h-6 w-6" />, label: "Experience", value: "5+ Years" },
                    { icon: <Award className="h-6 w-6" />, label: "Certifications", value: "AWS Certified" },
                    { icon: <Briefcase className="h-6 w-6" />, label: "Specialization", value: "Cloud Architecture" },
                    { icon: <Target className="h-6 w-6" />, label: "Focus", value: "Enterprise Scale" },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2 group">
                      <div className="flex items-center gap-3 text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                        {item.icon}
                        <span className="font-semibold">{item.label}</span>
                      </div>
                      <div className="text-slate-600 font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8 animate-fade-in-right">
                {/* Education */}
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-slate-900">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <Award className="h-5 w-5 text-emerald-700" />
                      </div>
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="font-semibold text-slate-900">Master of Science in Information Systems</div>
                      <div className="text-sm text-slate-600">University of Utah • Aug 2024</div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold text-slate-900">
                        Bachelor of Technology in Mechanical Engineering
                      </div>
                      <div className="text-sm text-slate-600">JNTU Hyderabad • Jun 2019</div>
                    </div>
                  </CardContent>
                </Card>

                {/* Certifications */}
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-slate-900">
                      <div className="p-2 bg-violet-100 rounded-lg">
                        <Award className="h-5 w-5 text-violet-700" />
                      </div>
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between group">
                        <div>
                          <div className="font-medium text-slate-900 group-hover:text-slate-700 transition-colors duration-300">
                            {cert.name}
                          </div>
                          <div className="text-sm text-slate-600">{cert.issuer}</div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-300"
                        >
                          {cert.year}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className={`py-20 md:py-32 bg-white transition-all duration-1000 ${
            isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container">
            <div className="mx-auto max-w-6xl space-y-12">
              <div className="text-center space-y-6 animate-fade-in-up">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Professional Experience
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  5+ years of hands-on experience in cloud architecture, DevOps automation, and enterprise
                  transformations at leading technology companies.
                </p>
              </div>

              <div className="space-y-12">
                {experience.map((job, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex items-start gap-6">
                          <div className="relative">
                            <Image
                              src={job.logo || "/placeholder.svg"}
                              width={60}
                              height={60}
                              alt={`${job.company} logo`}
                              className="rounded-xl border shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="space-y-3">
                            <h3 className="text-2xl font-bold text-slate-900">{job.company}</h3>
                            <p className="text-lg font-semibold text-slate-700">{job.role}</p>
                            <div className="flex items-center gap-6 text-sm text-slate-600">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {job.period}
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start gap-3 group">
                            <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:text-emerald-600 transition-colors duration-300" />
                            <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className={`py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white transition-all duration-1000 ${
            isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container">
            <div className="mx-auto max-w-6xl space-y-12">
              <div className="text-center space-y-6 animate-fade-in-up">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Technical Expertise</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Comprehensive expertise across cloud platforms, DevOps tools, and modern infrastructure technologies
                  with hands-on experience in enterprise environments.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(skills).map(([category, data], index) => (
                  <Card
                    key={index}
                    className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up ${data.color}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center justify-between text-lg">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-white/50 rounded-lg">{data.icon}</div>
                          {category}
                        </div>
                        {/* <span className="text-sm font-bold">{data.progress}%</span> */}
                      </CardTitle>
                      {/* <div className="w-full bg-white/50 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="h-2.5 rounded-full transition-all duration-1000 ease-out relative"
                          style={{
                            width: isVisible.skills ? `${data.progress}%` : "0%",
                            background: "linear-gradient(90deg, rgba(15,23,42,0.8) 0%, rgba(51,65,85,0.9) 100%)",
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
                        </div>
                      </div> */}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {data.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center gap-3 group p-2 rounded-lg hover:bg-white/50 transition-colors duration-300"
                          >
                            <CheckCircle className="h-4 w-4 text-emerald-500 group-hover:text-emerald-600 transition-colors duration-300" />
                            <span className="text-sm font-medium group-hover:text-slate-900 transition-colors duration-300">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`py-20 md:py-32 bg-white transition-all duration-1000 ${
            isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container">
            <div className="mx-auto max-w-6xl space-y-12">
              <div className="text-center space-y-6 animate-fade-in-up">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Featured Projects</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Enterprise-scale projects demonstrating cloud architecture expertise and measurable business impact
                  across various industries.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up overflow-hidden group"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        width={400}
                        height={200}
                        alt={project.title}
                        className="aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-6">{project.description}</p>

                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge
                              variant="secondary"
                              className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-300"
                            >
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>

                        <div className="space-y-3">
                          {project.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center gap-3 group">
                              <TrendingUp className="h-4 w-4 text-emerald-500 group-hover:text-emerald-600 transition-colors duration-300" />
                              <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                                {metric}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Button
                          variant="outline"
                          className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300"
                          onClick={() => setSelectedProject(project)}
                        >
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Project Detail Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <div className="relative w-full max-w-3xl max-h-[70vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white border-b border-slate-200">
                  <h2 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="p-6 space-y-8">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      width={800}
                      height={300}
                      alt={selectedProject.title}
                      className="w-full aspect-video object-cover"
                    />
                  </div>

                  {/* Project Overview */}
                  {/* <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900">Duration</h4>
                      <p className="text-slate-600">{selectedProject.duration}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900">Team Size</h4>
                      <p className="text-slate-600">{selectedProject.teamSize}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900">My Role</h4>
                      <p className="text-slate-600">{selectedProject.role}</p>
                    </div>
                  </div> */}

                  {/* Detailed Description */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Project Overview</h3>
                    <div className="prose prose-slate max-w-none">
                      {selectedProject.detailedDescription.split("\n").map((paragraph, index) => (
                        <p key={index} className="text-slate-600 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Challenges */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Key Challenges</h3>
                    <div className="grid gap-3">
                      {selectedProject.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Outcomes */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Key Outcomes</h3>
                    <div className="grid gap-3">
                      {selectedProject.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">Project Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedProject.metrics.map((metric, index) => (
                        <Card key={index} className="text-center border-slate-200">
                          <CardContent className="p-4">
                            <div className="text-l font-bold text-slate-900 mb-1">{metric}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Link */}
                  <div className="flex justify-center pt-6 border-t border-slate-200">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Link href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 mr-2" />
                        View on GitHub
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Simple Testimonials Section */}
        <section
          id="testimonials"
          className={`py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white transition-all duration-1000 ${
            isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="container">
            <div className="mx-auto max-w-4xl space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">What Colleagues Say</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Testimonials from team members, managers, and clients I've worked with throughout my career.
                </p>
              </div>

              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <Quote className="h-12 w-12 text-slate-300" />
                    <blockquote className="text-xl md:text-2xl font-medium text-slate-700 leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    <div className="text-center">
                      <div className="font-semibold text-slate-900">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-slate-600">
                        {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Simple dots indicator */}
              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-slate-700 w-8" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="container relative">
            <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
              <div className="space-y-8 animate-fade-in-left">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Let's Build Something Amazing</h2>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Open to discussing cloud architecture opportunities, DevOps transformations, and technical
                    consulting projects. Let's connect and explore how I can help drive your infrastructure goals.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-slate-300">Akilesh.thuniki@aogjob.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-slate-300">+1 (385) 461-8890</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-slate-300">Salt Lake City, USA</div>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <a
                      href="mailto:akilesh.thuniki@aogjob.com?subject=Hello%20Akilesh&body=Hi%20Akilesh,%0D%0A%0D%0AI%20would%20like%20to%20discuss..."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                      >
                        <Mail className="h-5 w-5" />
                      </Button>
                    </a>
                    <Link href="https://www.linkedin.com/in/akileshthuniki/" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <Card className="border-0 shadow-2xl animate-fade-in-right">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                          className="flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-slate-700">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="flex h-11 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Job opportunity, consultation, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className="flex min-h-[120px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}

                      className="w-full bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Message
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-slate-700 to-slate-900 text-white font-bold text-sm">
                  AT
                </div>
                <span className="font-bold text-slate-900">Akilesh Thuniki</span>
              </div>
              <p className="text-sm text-slate-600">
                DevOps Engineer & Cloud Architect specializing in enterprise-scale infrastructure transformations.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Experience", "Skills", "Projects", "Testimonials", "Contact"].map((link) => (
                  <Link
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm text-slate-600 hover:text-slate-900 transition-colors duration-300"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900">Connect</h4>
              <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/akileshthuniki/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-600 hover:text-slate-900 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-600 hover:text-slate-900 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Akilesh Thuniki. All rights reserved. Built with Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  )
}
