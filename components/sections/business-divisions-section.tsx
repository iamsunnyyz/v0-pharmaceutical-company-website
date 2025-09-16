"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Microscope, Heart, Brain, Pill, Stethoscope, Activity, ArrowRight } from "lucide-react"
import Image from "next/image"

export function BusinessDivisionsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)
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

  const divisions = [
    {
      icon: Heart,
      title: "Cardiovascular",
      description:
        "Leading treatments for heart disease, hypertension, and vascular conditions affecting millions worldwide.",
      image: "/cardiovascular-medicine-research.jpg",
      stats: "15+ Products",
      focus: ["Heart Disease", "Hypertension", "Stroke Prevention"],
    },
    {
      icon: Brain,
      title: "Neuroscience",
      description: "Breakthrough therapies for neurological disorders, mental health, and cognitive conditions.",
      image: "/neuroscience-brain-research.jpg",
      stats: "12+ Products",
      focus: ["Alzheimer's", "Depression", "Epilepsy"],
    },
    {
      icon: Microscope,
      title: "Oncology",
      description: "Innovative cancer treatments and immunotherapies that offer hope to patients and families.",
      image: "/oncology-cancer-research.jpg",
      stats: "20+ Products",
      focus: ["Immunotherapy", "Targeted Therapy", "Precision Medicine"],
    },
    {
      icon: Pill,
      title: "Rare Diseases",
      description:
        "Specialized treatments for rare and orphan diseases, bringing hope to underserved patient populations.",
      image: "/rare-disease-research.jpg",
      stats: "8+ Products",
      focus: ["Genetic Disorders", "Metabolic Diseases", "Autoimmune"],
    },
    {
      icon: Stethoscope,
      title: "Primary Care",
      description:
        "Essential medications for common conditions, supporting healthcare providers and patients globally.",
      image: "/primary-care-medicine.jpg",
      stats: "25+ Products",
      focus: ["Diabetes", "Respiratory", "Infectious Disease"],
    },
    {
      icon: Activity,
      title: "Vaccines & Prevention",
      description:
        "Preventive healthcare solutions including vaccines and diagnostic tools for global health protection.",
      image: "/vaccine-development-lab.jpg",
      stats: "10+ Products",
      focus: ["Infectious Disease", "Pandemic Preparedness", "Global Health"],
    },
  ]

  return (
    <section id="business" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Business Divisions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We focus on therapeutic areas where we can make the greatest impact, leveraging our expertise to develop
            innovative treatments across diverse medical specialties.
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={division.image || "/placeholder.svg"}
                  alt={`${division.title} research`}
                  width={400}
                  height={200}
                  className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                    <division.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-foreground">{division.stats}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {division.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{division.description}</p>

                {/* Focus Areas */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Focus Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {division.focus.map((area, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Partnering for Better Health Outcomes</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our diverse portfolio spans critical therapeutic areas, ensuring we can address the most pressing
              healthcare challenges facing patients and providers worldwide.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Explore Our Pipeline
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
