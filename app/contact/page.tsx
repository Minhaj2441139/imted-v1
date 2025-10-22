"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, MessageSquare } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is iMTED?",
      answer:
        "iMTED is an AI-powered energy management platform that helps organizations optimize energy consumption, reduce costs, and achieve carbon neutrality through intelligent monitoring, anomaly detection, and predictive analytics.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Implementation typically takes 2-4 weeks depending on your facility size and complexity. Our team works closely with you to ensure a smooth transition and minimal disruption to operations.",
    },
    {
      question: "What kind of ROI can we expect?",
      answer:
        "Most organizations see a 15-20% reduction in energy costs within the first year. Additional savings come from predictive maintenance, optimized procurement, and renewable energy integration.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use enterprise-grade security with end-to-end encryption, regular security audits, and compliance with GDPR, HIPAA, and other regulatory standards. Your data is your property.",
    },
    {
      question: "Do you offer support?",
      answer:
        "We provide 24/7 technical support, regular training sessions, and a dedicated account manager for enterprise clients. Our support team is always ready to help.",
    },
    {
      question: "Can iMTED integrate with existing systems?",
      answer:
        "Yes, iMTED integrates with most building management systems, IoT devices, and energy monitoring platforms. Our API is flexible and well-documented for custom integrations.",
    },
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
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass p-8 text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a href="mailto:asheka.arafa@imted-ai.com" className="text-primary hover:underline break-all">
                  asheka.arafa@imted-ai.com
                </a>
              </div>
              <div className="glass p-8 text-center">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Response Time</h3>
                <p className="text-muted-foreground">Usually within 24 hours</p>
              </div>
              <div className="glass p-8 text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Availability</h3>
                <p className="text-muted-foreground">Monday - Friday, 9 AM - 6 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Send us a Message</h2>
            <div className="glass p-8 md:p-12">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/80 transition-colors"
                  >
                    <h3 className="font-semibold text-left">{faq.question}</h3>
                    <span
                      className={`text-primary transition-transform duration-300 ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 border-t border-border bg-card/40">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Request CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to see iMTED in action?</h2>
            <p className="text-muted-foreground mb-8">
              Schedule a personalized demo with our team to explore how iMTED can transform your energy management.
            </p>
            <a
              href="#contact-form"
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
