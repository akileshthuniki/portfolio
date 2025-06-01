"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Cloud,
  Database,
  Server,
  Shield,
  Zap,
  Globe,
  Container,
  GitBranch,
  Monitor,
  AlertTriangle,
  CheckCircle,
  Info,
  RotateCcw,
  Download,
  Share,
} from "lucide-react"

interface Component {
  id: string
  type: string
  name: string
  icon: string
  color: string
  x: number
  y: number
  connections: string[]
}

interface Connection {
  from: string
  to: string
}

const COMPONENT_TYPES = [
  {
    type: "compute",
    name: "EC2 Instance",
    icon: "Server",
    color: "bg-orange-100 border-orange-300 text-orange-800",
    description: "Virtual server in the cloud",
  },
  {
    type: "database",
    name: "RDS Database",
    icon: "Database",
    color: "bg-blue-100 border-blue-300 text-blue-800",
    description: "Managed relational database",
  },
  {
    type: "storage",
    name: "S3 Bucket",
    icon: "Cloud",
    color: "bg-green-100 border-green-300 text-green-800",
    description: "Object storage service",
  },
  {
    type: "loadbalancer",
    name: "Load Balancer",
    icon: "Globe",
    color: "bg-purple-100 border-purple-300 text-purple-800",
    description: "Distributes incoming traffic",
  },
  {
    type: "container",
    name: "EKS Cluster",
    icon: "Container",
    color: "bg-cyan-100 border-cyan-300 text-cyan-800",
    description: "Kubernetes container orchestration",
  },
  {
    type: "security",
    name: "Security Group",
    icon: "Shield",
    color: "bg-red-100 border-red-300 text-red-800",
    description: "Virtual firewall rules",
  },
  {
    type: "cicd",
    name: "CodePipeline",
    icon: "GitBranch",
    color: "bg-indigo-100 border-indigo-300 text-indigo-800",
    description: "Continuous integration/deployment",
  },
  {
    type: "monitoring",
    name: "CloudWatch",
    icon: "Monitor",
    color: "bg-yellow-100 border-yellow-300 text-yellow-800",
    description: "Monitoring and observability",
  },
]

export default function ArchitecturePlayground() {
  const [components, setComponents] = useState<Component[]>([])
  const [connections, setConnections] = useState<Connection[]>([])
  const [draggedComponent, setDraggedComponent] = useState<string | null>(null)
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)
  const [recommendations, setRecommendations] = useState<string[]>([])
  const canvasRef = useRef<HTMLDivElement>(null)

  const addComponent = useCallback(
    (type: any, x: number, y: number) => {
      const newComponent: Component = {
        id: `${type.type}-${Date.now()}`,
        type: type.type,
        name: type.name,
        icon: type.icon,
        color: type.color,
        x,
        y,
        connections: [],
      }
      setComponents((prev) => [...prev, newComponent])
      generateRecommendations([...components, newComponent])
    },
    [components],
  )

  const generateRecommendations = (currentComponents: Component[]) => {
    const recs: string[] = []
    const types = currentComponents.map((c) => c.type)

    if (types.includes("compute") && !types.includes("security")) {
      recs.push("Consider adding Security Groups to protect your EC2 instances")
    }
    if (types.includes("database") && !types.includes("security")) {
      recs.push("Add Security Groups to secure database access")
    }
    if (types.includes("compute") && !types.includes("monitoring")) {
      recs.push("Add CloudWatch for monitoring your infrastructure")
    }
    if (types.includes("compute") && types.length > 1 && !types.includes("loadbalancer")) {
      recs.push("Consider adding a Load Balancer for high availability")
    }
    if (types.includes("container") && !types.includes("cicd")) {
      recs.push("Add CI/CD pipeline for automated container deployments")
    }
    if (currentComponents.length > 3 && !types.includes("monitoring")) {
      recs.push("Complex architectures benefit from comprehensive monitoring")
    }

    setRecommendations(recs)
  }

  const handleDragStart = (e: React.DragEvent, componentType: any) => {
    setDraggedComponent(JSON.stringify(componentType))
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    if (!draggedComponent || !canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const componentType = JSON.parse(draggedComponent)
    addComponent(componentType, x, y)
    setDraggedComponent(null)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const clearCanvas = () => {
    setComponents([])
    setConnections([])
    setRecommendations([])
    setSelectedComponent(null)
  }

  const getSecurityScore = () => {
    const securityComponents = components.filter((c) => c.type === "security").length
    const totalComponents = components.length
    if (totalComponents === 0) return 0
    return Math.min(100, (securityComponents / Math.ceil(totalComponents / 2)) * 100)
  }

  const getScalabilityScore = () => {
    const scalableComponents = components.filter((c) =>
      ["loadbalancer", "container", "storage"].includes(c.type),
    ).length
    const totalComponents = components.length
    if (totalComponents === 0) return 0
    return Math.min(100, (scalableComponents / Math.ceil(totalComponents / 3)) * 100)
  }

  const getMonitoringScore = () => {
    const monitoringComponents = components.filter((c) => c.type === "monitoring").length
    const totalComponents = components.length
    if (totalComponents === 0) return 0
    return monitoringComponents > 0 ? 100 : 0
  }

  const renderIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6" }

    switch (iconName) {
      case "Server":
        return <Server {...iconProps} />
      case "Database":
        return <Database {...iconProps} />
      case "Cloud":
        return <Cloud {...iconProps} />
      case "Globe":
        return <Globe {...iconProps} />
      case "Container":
        return <Container {...iconProps} />
      case "Shield":
        return <Shield {...iconProps} />
      case "GitBranch":
        return <GitBranch {...iconProps} />
      case "Monitor":
        return <Monitor {...iconProps} />
      default:
        return <Server {...iconProps} />
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-bold text-slate-900">Architecture Playground</h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Drag and drop AWS components to build your cloud architecture. Get real-time recommendations and best
          practices.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Component Palette */}
        <div className="lg:col-span-1">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Components
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {COMPONENT_TYPES.map((component) => (
                <div
                  key={component.type}
                  draggable
                  onDragStart={(e) => handleDragStart(e, component)}
                  className={`p-3 rounded-lg border-2 border-dashed cursor-move hover:shadow-md transition-all duration-200 ${component.color}`}
                >
                  <div className="flex items-center gap-3">
                    {renderIcon(component.icon)}
                    <div>
                      <div className="font-medium text-sm">{component.name}</div>
                      <div className="text-xs opacity-75">{component.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Canvas */}
        <div className="lg:col-span-2">
          <Card className="h-[600px]">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle>Architecture Canvas</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={clearCanvas}>
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Clear
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div
                ref={canvasRef}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="relative w-full h-[500px] bg-slate-50 border-2 border-dashed border-slate-200 overflow-hidden"
              >
                {components.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <div className="text-center">
                      <Cloud className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">Drag components here to start building</p>
                      <p className="text-sm">Create your cloud architecture visually</p>
                    </div>
                  </div>
                )}

                {/* Render Components */}
                {components.map((component) => (
                  <div
                    key={component.id}
                    className={`absolute p-3 rounded-lg border-2 cursor-pointer hover:shadow-lg transition-all duration-200 ${component.color} ${
                      selectedComponent === component.id ? "ring-2 ring-blue-500" : ""
                    }`}
                    style={{ left: component.x, top: component.y }}
                    onClick={() => setSelectedComponent(component.id)}
                  >
                    <div className="flex items-center gap-2">
                      {renderIcon(component.icon)}
                      <span className="font-medium text-sm">{component.name}</span>
                    </div>
                  </div>
                ))}

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Panel */}
        <div className="lg:col-span-1 space-y-6">
          {/* Architecture Scores */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Architecture Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Security</span>
                    <span>{getSecurityScore()}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getSecurityScore()}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Scalability</span>
                    <span>{getScalabilityScore()}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getScalabilityScore()}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monitoring</span>
                    <span>{getMonitoringScore()}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getMonitoringScore()}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="text-sm text-slate-600">
                  <strong>Components:</strong> {components.length}
                </div>
                <div className="text-sm text-slate-600">
                  <strong>Estimated Cost:</strong> ${(components.length * 50).toFixed(2)}/month
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recommendations.length === 0 ? (
                <p className="text-sm text-slate-500">Add components to get recommendations</p>
              ) : (
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-slate-700">{rec}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Badge variant="secondary" className="w-full justify-start">
                  ✓ Multi-AZ Deployment
                </Badge>
                <Badge variant="secondary" className="w-full justify-start">
                  ✓ Auto Scaling Groups
                </Badge>
                <Badge variant="secondary" className="w-full justify-start">
                  ✓ Security Groups
                </Badge>
                <Badge variant="secondary" className="w-full justify-start">
                  ✓ Monitoring & Logging
                </Badge>
                <Badge variant="secondary" className="w-full justify-start">
                  ✓ Backup Strategy
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
