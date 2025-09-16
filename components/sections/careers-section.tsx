"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, Award, TrendingUp, Heart, Globe, ArrowRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive healthcare coverage, mental health support, and wellness programs",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Professional development opportunities, mentorship programs, and leadership training",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "International assignments, cross-cultural collaboration, and global mobility programs",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Performance-based bonuses, stock options, and comprehensive recognition programs",
  },
]

const openPositions = [
  {
    title: "Senior Research Scientist - Oncology",
    department: "Research & Development",
    location: "Boston, MA",
    type: "Full-time",
    level: "Senior",
    posted: "2 days ago",
  },
  {
    title: "Clinical Trial Manager",
    department: "Clinical Operations",
    location: "Zurich, Switzerland",
    type: "Full-time",
    level: "Mid-level",
    posted: "1 week ago",
  },
  {
    title: "Regulatory Affairs Specialist",
    department: "Regulatory",
    location: "Singapore",
    type: "Full-time",
    level: "Mid-level",
    posted: "3 days ago",
  },
  {
    title: "Data Scientist - AI/ML",
    department: "Digital Innovation",
    location: "San Francisco, CA",
    type: "Full-time",
    level: "Senior",
    posted: "5 days ago",
  },
  {
    title: "Manufacturing Engineer",
    department: "Operations",
    location: "Dublin, Ireland",
    type: "Full-time",
    level: "Mid-level",
    posted: "1 week ago",
  },
]

const companyValues = [
  {
    title: "Innovation First",
    description: "We encourage creative thinking and breakthrough solutions",
  },
  {
    title: "Patient-Centric",
    description: "Every decision we make puts patients at the center",
  },
  {
    title: "Collaborative Spirit",
    description: "We believe the best results come from working together",
  },
  {
    title: "Ethical Leadership",
    description: "We maintain the highest standards of integrity and transparency",
  },
]

const stats = [
  { number: "4.8/5", label: "Employee Satisfaction", icon: Star },
  { number: "92%", label: "Retention Rate", icon: Users },
  { number: "50+", label: "Nationalities", icon: Globe },
  { number: "40hrs", label: "Learning Per Year", icon: TrendingUp },
]

export function CareersSection() {
  return (
    <section id="careers" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
            <Briefcase className="w-4 h-4 mr-2" />
            Careers & Opportunities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Join Our Mission to
            <span className="text-emerald-600"> Transform Healthcare</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Be part of a global team dedicated to discovering, developing, and delivering life-changing medicines.
            Together, we're shaping the future of healthcare and making a meaningful impact on millions of lives
            worldwide.
          </p>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-emerald-50 to-teal-50">
                <CardContent className="p-0">
                  <div className="p-3 bg-emerald-100 rounded-xl w-fit mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Work With Us</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-emerald-100 rounded-xl flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="space-y-4">
              {companyValues.map((value, index) => (
                <Card key={value.title} className="border border-gray-100">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Open Positions</h3>
            <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors flex items-center gap-2">
              View All Jobs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{position.title}</h4>
                          <Badge variant="secondary" className="text-xs">
                            {position.level}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                          <span>{position.department}</span>
                          <span>•</span>
                          <span>{position.location}</span>
                          <span>•</span>
                          <span>{position.type}</span>
                        </div>
                        <div className="text-xs text-gray-500">Posted {position.posted}</div>
                      </div>
                      <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </CardContent>
                </Card>
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
        >
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 border-0 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <Users className="w-12 h-12 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Join thousands of passionate professionals who are dedicated to improving lives through innovative
                healthcare solutions. Your career in life sciences starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                  Explore All Opportunities
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn About Our Culture
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
