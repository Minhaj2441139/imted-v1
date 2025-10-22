"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeatureCard } from "@/components/feature-card"
import { ArrowRight, Activity, AlertTriangle, TrendingUp, FileText, Eye, DollarSign } from "lucide-react"
import Link from "next/link"
import { DashboardPreview } from "@/components/dashboard-preview"
import Image from "next/image"

export default function Home() {
  const features = [
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description:
        "AI-powered monitoring dashboard with predictive analytics for simplified energy planning and optimization.",
    },
    {
      icon: AlertTriangle,
      title: "Anomaly Detection",
      description:
        "Fast and reliable detection of sensor defects, leakage, and machine malfunctions to prevent surprises.",
    },
    {
      icon: TrendingUp,
      title: "Spot Market Access",
      description: "Easy access to renewable energy spot market with AI recommendations for optimal pricing.",
    },
    {
      icon: FileText,
      title: "Automatic Reports",
      description: "Customizable automated reporting system that saves time on documentation and compliance.",
    },
    {
      icon: Eye,
      title: "Energy Status Overview",
      description: "Comprehensive overview of your entire energy ecosystem with holistic visibility.",
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Up to 20% cost reduction through intelligent optimization and market insights.",
    },
  ]

  // Use public/ images via absolute paths instead of importing from ../public
  const team = [
    {
      name: "Asheka Arafa",
      title: "Co-founder and CEO",
      image: "/asheka_pic.jpeg",
    },
    {
      name: "Shahnewaz Shuva",
      title: "Co-founder and CTO",
      image: "/shuva_pic.jpeg",
    },
    {
      name: "Sagar Shahriar",
      title: "Full Stack Developer",
      image: "/sagar.jpeg",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Maximum efficiency with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                minimum effort
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              iMTED AI Energy Assistant - Simple, Reliable & Efficient
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Request Demo <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 glass font-semibold hover:bg-card/80 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Learn More <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to optimize your energy management and reduce costs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Software Glimpse Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">A glimpse of our software</h2>
            <DashboardPreview />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="glass p-8 text-center hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Our Vision</h2>
            <p className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Carbon Neutral Buildings
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to optimize your energy management?</h2>
            <p className="text-muted-foreground mb-8">For a Demo or any query contact:</p>
            <a
              href="mailto:asheka.arafa@imted-ai.com"
              className="text-primary font-semibold text-lg hover:underline mb-8 block"
            >
              asheka.arafa@imted-ai.com
            </a>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Request Demo Now
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
