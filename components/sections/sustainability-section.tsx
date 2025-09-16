"use client"

import { motion } from "framer-motion"
import { Leaf, Recycle, Heart, Globe, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const sustainabilityInitiatives = [
  {
    icon: Leaf,
    title: "Carbon Neutral Operations",
    description: "Committed to achieving net-zero carbon emissions across all facilities by 2030",
    progress: 78,
    badge: "2030 Goal",
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "Implementing sustainable packaging and waste reduction programs",
    progress: 65,
    badge: "Active",
  },
  {
    icon: Heart,
    title: "Patient Access Programs",
    description: "Ensuring affordable access to life-saving medications globally",
    progress: 92,
    badge: "Ongoing",
  },
  {
    icon: Globe,
    title: "Global Health Initiatives",
    description: "Supporting healthcare infrastructure in underserved communities",
    progress: 84,
    badge: "Expanding",
  },
]

const achievements = [
  { number: "50%", label: "Reduction in Water Usage", year: "Since 2020" },
  { number: "100%", label: "Renewable Energy", year: "By 2025" },
  { number: "25M+", label: "Patients Reached", year: "Annually" },
  { number: "15", label: "Sustainability Awards", year: "Last 3 Years" },
]

export function SustainabilitySection() {
  return (
    <section id="sustainability" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
            <Leaf className="w-4 h-4 mr-2" />
            Sustainability & Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Building a Healthier,
            <span className="text-emerald-600"> Sustainable Future</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Our commitment to environmental stewardship and social responsibility drives every aspect of our operations,
            ensuring we create value for patients, communities, and the planet.
          </p>
        </motion.div>

        {/* Sustainability Initiatives */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sustainabilityInitiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-100 rounded-xl">
                        <initiative.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {initiative.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{initiative.description}</p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-emerald-600">{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${initiative.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Sustainability Achievements</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Measurable progress toward our environmental and social impact goals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{achievement.number}</div>
                <div className="text-gray-900 font-medium mb-1">{achievement.label}</div>
                <div className="text-sm text-gray-500">{achievement.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
            <Award className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Sustainability Journey</h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Partner with us in creating innovative solutions that benefit both human health and environmental
              wellbeing for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                View Sustainability Report
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn About Our Initiatives
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
