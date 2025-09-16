"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Globe, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
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

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Every decision we make is guided by our commitment to improving patient outcomes and quality of life.",
    },
    {
      icon: Shield,
      title: "Safety & Quality",
      description:
        "We maintain the highest standards of safety and quality in all our research, development, and manufacturing processes.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our reach extends across continents, bringing life-saving treatments to communities worldwide.",
    },
    {
      icon: Users,
      title: "Collaborative Innovation",
      description:
        "We partner with leading institutions, researchers, and healthcare providers to accelerate medical breakthroughs.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">PharmaCorp</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 25 years, PharmaCorp has been at the forefront of pharmaceutical innovation, developing
            breakthrough treatments that transform lives and advance global health.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission & Vision</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">Mission</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To discover, develop, and deliver innovative pharmaceutical solutions that address unmet medical needs
                  and improve the health and well-being of people around the world.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-2">Vision</h4>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most trusted pharmaceutical company, recognized for our scientific excellence,
                  ethical practices, and unwavering commitment to patient care.
                </p>
              </div>
            </div>
            <div className="pt-4">
              <h4 className="text-xl font-semibold text-foreground mb-3">Our Heritage</h4>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1998, PharmaCorp began as a small research company with a big vision. Today, we're a global
                leader in pharmaceutical innovation, with operations spanning 50+ countries and a diverse portfolio of
                life-changing treatments.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/pharmaceutical-research-team-collaboration.jpg"
                alt="PharmaCorp research team collaboration"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
