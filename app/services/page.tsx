"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Activity,
  AlertTriangle,
  TrendingUp,
  FileText,
  Eye,
  DollarSign,
  CheckCircle,
  Zap,
  BarChart3,
  Shield,
} from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Monitoring & Analytics",
      icon: Activity,
      description: "Real-time monitoring and predictive analytics",
      features: [
        "Real-time energy monitoring",
        "Demand forecasting with AI",
        "Historical data analysis",
        "Custom dashboards",
      ],
    },
    {
      title: "Anomaly Detection & Prevention",
      icon: AlertTriangle,
      description: "Prevent issues before they happen",
      features: ["Sensor validation", "Predictive maintenance", "Alert system", "Equipment health monitoring"],
    },
    {
      title: "Market Intelligence",
      icon: TrendingUp,
      description: "Optimize energy procurement",
      features: [
        "Spot market integration",
        "Price predictions",
        "Procurement recommendations",
        "Market trend analysis",
      ],
    },
    {
      title: "Reporting & Compliance",
      icon: FileText,
      description: "Automated compliance and reporting",
      features: ["Automated reports", "Customizable templates", "Regulatory compliance tracking", "Audit trails"],
    },
    {
      title: "Optimization Services",
      icon: Zap,
      description: "Maximize efficiency and savings",
      features: ["Load balancing", "Peak shaving", "Renewable integration", "Cost optimization"],
    },
    {
      title: "Energy Status Overview",
      icon: Eye,
      description: "Holistic energy ecosystem visibility",
      features: ["Comprehensive dashboards", "Real-time KPIs", "Performance metrics", "Trend analysis"],
    },
  ]

  const benefits = [
    { icon: DollarSign, label: "Up to 20% Cost Reduction" },
    { icon: BarChart3, label: "Data-Driven Insights" },
    { icon: Shield, label: "Predictive Maintenance" },
    { icon: Zap, label: "Instant Alerts" },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Comprehensive Energy Management{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Powered by AI, Designed for Efficiency
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="glass p-6 text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="font-semibold">{benefit.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="glass p-8 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                    <service.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Commercial Buildings",
                  description:
                    "Optimize HVAC systems, lighting, and equipment scheduling to reduce operational costs while maintaining comfort.",
                },
                {
                  title: "Industrial Facilities",
                  description:
                    "Monitor production equipment energy consumption and identify optimization opportunities for maximum efficiency.",
                },
                {
                  title: "Data Centers",
                  description:
                    "Manage cooling systems and server loads with predictive analytics to minimize energy waste.",
                },
                {
                  title: "Renewable Integration",
                  description:
                    "Seamlessly integrate solar, wind, and other renewable sources with intelligent load balancing.",
                },
              ].map((useCase, index) => (
                <div key={index} className="glass p-8">
                  <h3 className="font-semibold text-lg mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your energy management?</h2>
            <p className="text-muted-foreground mb-8">
              Contact us today to learn how iMTED can help your organization achieve carbon neutrality.
            </p>
            <a
              href="mailto:asheka.arafa@imted-ai.com"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Request a Demo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
