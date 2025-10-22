"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Zap, Target, Heart, Award } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Committed to carbon-neutral buildings through intelligent energy management",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Leveraging cutting-edge AI and machine learning for energy optimization",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Dedicated to reducing carbon footprint and environmental impact",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering reliable, efficient solutions that exceed expectations",
    },
  ]

  const team = [
    {
      name: "Asheka Arafa",
      title: "Co-founder and CEO",
      bio: "Visionary leader with expertise in energy management and sustainable technology. Asheka drives iMTED's strategic direction and customer success.",
      image: "/professional-woman-ceo.jpg",
    },
    {
      name: "Shahnewaz Shuva",
      title: "Co-founder and CTO",
      bio: "Technical innovator specializing in AI and machine learning. Shahnewaz leads the development of iMTED's intelligent platform.",
      image: "/professional-man-cto.jpg",
    },
    {
      name: "Sagar Shahriar",
      title: "Full Stack Developer",
      bio: "Experienced developer building scalable solutions. Sagar ensures iMTED's platform is robust, performant, and user-friendly.",
      image: "/professional-man-developer.jpg",
    },
  ]

  const milestones = [
    { year: "2023", event: "iMTED Founded" },
    { year: "2024", event: "AI Platform Launch" },
    { year: "2025", event: "Enterprise Expansion" },
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
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">iMTED</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Transforming energy management through intelligent AI solutions
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <div className="glass p-8 space-y-6 text-lg leading-relaxed">
              <p>
                iMTED was founded with a simple yet powerful vision: to make energy management simple, reliable, and
                efficient for organizations worldwide. Our founders recognized that buildings consume approximately 30%
                of global energy, yet most lack intelligent systems to optimize consumption.
              </p>
              <p>
                By combining advanced AI, machine learning, and real-time data analytics, we created a platform that
                transforms how organizations manage their energy. iMTED enables predictive maintenance, cost
                optimization, and seamless renewable energy integration.
              </p>
              <p>
                Today, iMTED is committed to helping organizations achieve carbon neutrality while reducing operational
                costs. We believe that sustainability and profitability go hand in hand.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-8">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations with intelligent energy management solutions that reduce costs, minimize
                  environmental impact, and drive sustainable growth through AI-powered optimization.
                </p>
              </div>
              <div className="glass p-8">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Carbon Neutral Buildings - A world where every building operates at peak efficiency, powered by
                  renewable energy, and managed by intelligent AI systems that benefit both organizations and the
                  planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="glass p-6 text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="glass p-8 text-center hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{member.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="glass p-6 flex items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary-foreground">{milestone.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{milestone.event}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { metric: "50+", label: "Buildings Optimized" },
                { metric: "10M+", label: "kWh Saved Annually" },
                { metric: "5K+", label: "Tons CO2 Reduced" },
              ].map((item, index) => (
                <div key={index} className="glass p-8 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">{item.metric}</p>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-4xl mx-auto glass p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us in Building a Sustainable Future</h2>
            <p className="text-muted-foreground mb-8">
              Partner with iMTED to transform your energy management and achieve carbon neutrality.
            </p>
            <a
              href="mailto:asheka.arafa@imted-ai.com"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
