"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Search,
  Bot,
  Send,
  Clock,
  ExternalLink,
  Sparkles,
  Cloud,
  GitBranch,
  Container,
  DollarSign,
  ChevronRight,
  Star,
  Eye,
} from "lucide-react"

interface Article {
  id: string
  title: string
  summary: string
  tags: string[]
  readTime: number
  views: number
  rating: number
  category: string
  url: string
  isAuthor: boolean
  publishedDate: string
}

interface ChatMessage {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  relatedArticles?: Article[]
}

const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Infrastructure as Code Best Practices with Terraform",
    summary:
      "Comprehensive guide to implementing IaC using Terraform, covering state management, modules, and enterprise patterns.",
    tags: ["Terraform", "IaC", "AWS", "DevOps"],
    readTime: 12,
    views: 2847,
    rating: 4.8,
    category: "Infrastructure",
    url: "https://medium.com/@akilesh/terraform-best-practices",
    isAuthor: true,
    publishedDate: "2024-01-15",
  },
  {
    id: "2",
    title: "GitOps with ArgoCD: Complete Implementation Guide",
    summary: "Step-by-step implementation of GitOps workflows using ArgoCD for Kubernetes deployments.",
    tags: ["GitOps", "ArgoCD", "Kubernetes", "CI/CD"],
    readTime: 15,
    views: 3241,
    rating: 4.9,
    category: "GitOps",
    url: "https://dev.to/akilesh/gitops-argocd-guide",
    isAuthor: true,
    publishedDate: "2024-01-08",
  },
  {
    id: "3",
    title: "AWS Cost Optimization: Advanced Strategies",
    summary:
      "Deep dive into AWS cost optimization techniques including Reserved Instances, Spot Instances, and automated scaling.",
    tags: ["AWS", "Cost Optimization", "FinOps", "Cloud"],
    readTime: 14,
    views: 2634,
    rating: 4.8,
    category: "Cost Management",
    url: "https://aws.amazon.com/blogs/cost-management/",
    isAuthor: true,
    publishedDate: "2024-02-05",
  },
  {
    id: "4",
    title: "Kubernetes Security: Zero-Trust Architecture",
    summary: "Implementing zero-trust security principles in Kubernetes clusters with network policies and RBAC.",
    tags: ["Kubernetes", "Security", "Zero-Trust", "RBAC"],
    readTime: 18,
    views: 1923,
    rating: 4.7,
    category: "Security",
    url: "https://kubernetes.io/docs/concepts/security/",
    isAuthor: false,
    publishedDate: "2024-01-22",
  },
]

export default function DevOpsKnowledgeHub() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "👋 Hi! I'm your DevOps AI assistant. Ask me about cloud computing, infrastructure, CI/CD, or any DevOps topic!",
      timestamp: new Date(),
    },
  ])
  const [currentMessage, setCurrentMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const categories = [
    { name: "All", count: ARTICLES.length },
    { name: "Infrastructure", count: ARTICLES.filter((a) => a.category === "Infrastructure").length },
    { name: "Security", count: ARTICLES.filter((a) => a.category === "Security").length },
    { name: "GitOps", count: ARTICLES.filter((a) => a.category === "GitOps").length },
  ]

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatMessages])

  const generateAIResponse = (userMessage: string): { content: string; relatedArticles?: Article[] } => {
    const message = userMessage.toLowerCase()
    let response = ""
    let relatedArticles: Article[] = []

    if (message.includes("terraform") || message.includes("infrastructure as code") || message.includes("iac")) {
      response =
        "Terraform is excellent for Infrastructure as Code! Key best practices include using modules, remote state storage, and proper state locking. Check out my detailed guide below!"
      relatedArticles = ARTICLES.filter((a) => a.tags.includes("Terraform") || a.tags.includes("IaC"))
    } else if (message.includes("kubernetes") || message.includes("k8s")) {
      response =
        "Kubernetes is powerful for container orchestration! Focus on security (RBAC, network policies), monitoring, and proper resource management. Here are some relevant resources:"
      relatedArticles = ARTICLES.filter((a) => a.tags.includes("Kubernetes"))
    } else if (message.includes("aws") || message.includes("cloud")) {
      response =
        "AWS offers comprehensive cloud services! For cost optimization, consider Reserved Instances, Spot Instances, and automated scaling. Here's my guide on AWS cost optimization:"
      relatedArticles = ARTICLES.filter((a) => a.tags.includes("AWS"))
    } else if (message.includes("gitops")) {
      response =
        "GitOps uses Git as the single source of truth for declarative infrastructure! ArgoCD is a popular tool for implementing GitOps workflows. Check out my implementation guide:"
      relatedArticles = ARTICLES.filter((a) => a.tags.includes("GitOps"))
    } else {
      response =
        "Great question! I can help with DevOps, cloud computing, Kubernetes, CI/CD, monitoring, and security topics. What specific area would you like to explore?"
      relatedArticles = ARTICLES.slice(0, 2) // Show top articles
    }

    return { content: response, relatedArticles: relatedArticles.length > 0 ? relatedArticles : undefined }
  }

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content: currentMessage,
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, userMessage])
    setCurrentMessage("")
    setIsTyping(true)

    setTimeout(() => {
      const aiResponse = generateAIResponse(currentMessage)
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: aiResponse.content,
        timestamp: new Date(),
        relatedArticles: aiResponse.relatedArticles,
      }

      setChatMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleArticleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-bold text-slate-900">DevOps Knowledge Hub</h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore curated articles and get instant answers from our AI assistant on DevOps, cloud computing, and
          infrastructure topics.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Articles Section */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search articles or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className="flex items-center gap-2"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-1">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="space-y-4">
            {filteredArticles.map((article) => (
              <Card
                key={article.id}
                className="hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => handleArticleClick(article.url)}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {article.title}
                          </h4>
                          {article.isAuthor && (
                            <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Author</Badge>
                          )}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{article.summary}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-4" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime} min
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {article.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          {article.rating}
                        </div>
                      </div>
                      <span>{new Date(article.publishedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-8">
              <BookOpen className="h-8 w-8 text-slate-300 mx-auto mb-2" />
              <p className="text-slate-500">No articles found. Try adjusting your search.</p>
            </div>
          )}
        </div>

        {/* AI Assistant Chat */}
        <div className="lg:col-span-2">
          <Card className="h-[500px] flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="h-5 w-5 text-blue-600" />
                AI Assistant
                <Sparkles className="h-4 w-4 text-yellow-500" />
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] space-y-2`}>
                      <div
                        className={`p-3 rounded-lg text-sm ${
                          message.type === "user" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-900"
                        }`}
                      >
                        <p className="leading-relaxed">{message.content}</p>
                      </div>

                      {message.relatedArticles && message.relatedArticles.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-xs text-slate-500 font-medium">Related Articles:</p>
                          {message.relatedArticles.map((article) => (
                            <div
                              key={article.id}
                              className="p-2 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                              onClick={() => handleArticleClick(article.url)}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-medium text-slate-900 truncate">{article.title}</p>
                                  <p className="text-xs text-slate-500">
                                    {article.readTime} min • {article.views} views
                                  </p>
                                </div>
                                <ChevronRight className="h-3 w-3 text-slate-400 flex-shrink-0" />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about DevOps, AWS, Kubernetes..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!currentMessage.trim() || isTyping} size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Topics */}
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Quick Topics</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Terraform", icon: <Cloud className="h-4 w-4" /> },
                { name: "Kubernetes", icon: <Container className="h-4 w-4" /> },
                { name: "AWS Costs", icon: <DollarSign className="h-4 w-4" /> },
                { name: "GitOps", icon: <GitBranch className="h-4 w-4" /> },
              ].map((topic) => (
                <Button
                  key={topic.name}
                  variant="outline"
                  size="sm"
                  className="h-auto p-2 flex items-center gap-2 text-xs"
                  onClick={() => setCurrentMessage(`Tell me about ${topic.name}`)}
                >
                  {topic.icon}
                  {topic.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
