"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Microscope,
  FlaskConical,
  Dna,
  Award,
  TrendingUp,
  Users,
  Calendar,
  ArrowRight,
  Lightbulb,
  Target,
  Zap,
} from "lucide-react"
import Image from "next/image"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)

          let startTime: number
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            setCount(Math.floor(progress * end))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, isVisible])

  return (
    <div ref={counterRef} className="text-3xl md:text-4xl font-bold text-primary">
      {count}
      {suffix}
    </div>
  )
}

export function InnovationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: FlaskConical, value: 500, suffix: "+", label: "Active Research Projects" },
    { icon: Users, value: 2500, suffix: "+", label: "Research Scientists" },
    { icon: Award, value: 150, suffix: "+", label: "Patents Filed" },
    { icon: TrendingUp, value: 25, suffix: "%", label: "R&D Investment" },
  ]

  const innovations = [
    {
      icon: Dna,
      title: "Gene Therapy Breakthrough",
      description: "Revolutionary gene editing technology for treating inherited diseases",
      status: "Phase III",
      timeline: "2024",
      category: "Genetic Medicine",
    },
    {
      icon: Target,
      title: "Precision Oncology Platform",
      description: "AI-driven personalized cancer treatment selection system",
      status: "Clinical Trial",
      timeline: "2025",
      category: "Digital Health",
    },
    {
      icon: Lightbulb,
      title: "Neuroplasticity Enhancement",
      description: "Novel approach to treating neurodegenerative disorders",
      status: "Phase II",
      timeline: "2024",
      category: "Neuroscience",
    },
    {
      icon: Zap,
      title: "Rapid Vaccine Development",
      description: "Next-generation platform for accelerated vaccine production",
      status: "Pre-clinical",
      timeline: "2026",
      category: "Immunology",
    },
  ]

  const milestones = [
    {
      year: "2023",
      title: "FDA Breakthrough Designation",
      description: "Received breakthrough therapy designation for our novel Alzheimer's treatment",
    },
    {
      year: "2022",
      title: "AI Research Partnership",
      description: "Launched collaboration with leading tech companies for AI-driven drug discovery",
    },
    {
      year: "2021",
      title: "Global Research Expansion",
      description: "Opened new R&D centers in Singapore, Boston, and Cambridge",
    },
    {
      year: "2020",
      title: "COVID-19 Response",
      description: "Rapidly developed and deployed critical treatments during the pandemic",
    },
  ]

  return (
    <section id="innovation" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Innovation & <span className="text-primary">Research</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At the heart of PharmaCorp lies our commitment to scientific excellence and breakthrough innovation. We
            invest heavily in R&D to discover tomorrow's life-changing treatments.
          </p>
        </div>

        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Innovation Highlights */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Current Innovation Pipeline</h3>
            <div className="space-y-6">
              {innovations.map((innovation, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <innovation.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-foreground">{innovation.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {innovation.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{innovation.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-primary font-medium">{innovation.status}</span>
                          <span className="text-muted-foreground">Expected: {innovation.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Image & Milestones */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg mb-8">
              <Image
                src="/advanced-pharmaceutical-research-lab.jpg"
                alt="Advanced pharmaceutical research laboratory"
                width={600}
                height={400}
                className="object-cover w-full h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold mb-1">State-of-the-Art Facilities</h4>
                <p className="text-sm opacity-90">Advanced research laboratories worldwide</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">Recent Milestones</h3>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-primary font-bold">{milestone.year}</span>
                      <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 max-w-4xl mx-auto">
            <Microscope className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Research Mission</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              We're always looking for brilliant minds to join our research teams. Help us discover the next generation
              of life-saving treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Research Careers
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Publications
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
