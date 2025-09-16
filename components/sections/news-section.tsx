"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowRight, ExternalLink, TrendingUp, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const newsArticles = [
  {
    category: "Research Breakthrough",
    title: "Revolutionary Gene Therapy Shows 95% Success Rate in Phase III Trials",
    excerpt:
      "Our latest gene therapy treatment for rare genetic disorders demonstrates unprecedented efficacy in clinical trials, offering hope to thousands of patients worldwide.",
    date: "2024-01-15",
    readTime: "4 min read",
    image: "/gene-therapy-research-laboratory.jpg",
    featured: true,
  },
  {
    category: "Partnership",
    title: "Strategic Alliance with Leading Research Universities",
    excerpt:
      "New collaboration aims to accelerate drug discovery through AI-powered research platforms and shared expertise in molecular biology.",
    date: "2024-01-10",
    readTime: "3 min read",
    image: "/university-research-partnership.jpg",
    featured: false,
  },
  {
    category: "Sustainability",
    title: "Carbon Neutral Manufacturing Milestone Achieved",
    excerpt:
      "All European manufacturing facilities now operate with 100% renewable energy, marking a significant step toward our 2030 sustainability goals.",
    date: "2024-01-08",
    readTime: "2 min read",
    image: "/sustainable-pharmaceutical-manufacturing.jpg",
    featured: false,
  },
  {
    category: "Innovation",
    title: "AI-Powered Drug Discovery Platform Launches",
    excerpt:
      "New artificial intelligence platform reduces drug discovery timeline from years to months, revolutionizing pharmaceutical research methodology.",
    date: "2024-01-05",
    readTime: "5 min read",
    image: "/ai-drug-discovery-technology.jpg",
    featured: false,
  },
]

const pressReleases = [
  {
    title: "Q4 2023 Financial Results Exceed Expectations",
    date: "2024-01-20",
    type: "Financial",
  },
  {
    title: "FDA Approves New Treatment for Alzheimer's Disease",
    date: "2024-01-18",
    type: "Regulatory",
  },
  {
    title: "Expansion into Southeast Asian Markets",
    date: "2024-01-12",
    type: "Business",
  },
]

const categoryIcons = {
  "Research Breakthrough": TrendingUp,
  Partnership: Users,
  Sustainability: Award,
  Innovation: ExternalLink,
}

export function NewsSection() {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
            <Calendar className="w-4 h-4 mr-2" />
            Latest News & Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Stay Informed About Our
            <span className="text-emerald-600"> Latest Developments</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Discover the latest breakthroughs, partnerships, and innovations that are shaping the future of healthcare
            and pharmaceutical research.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {newsArticles
              .filter((article) => article.featured)
              .map((article) => {
                const IconComponent = categoryIcons[article.category as keyof typeof categoryIcons]
                return (
                  <Card
                    key={article.title}
                    className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-br from-emerald-50 to-teal-50"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-emerald-600 text-white">
                          <IconComponent className="w-3 h-3 mr-1" />
                          {article.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-balance">{article.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>
                            {new Date(article.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <button className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Articles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Articles</h3>
              <div className="space-y-4">
                {newsArticles
                  .filter((article) => !article.featured)
                  .map((article, index) => {
                    const IconComponent = categoryIcons[article.category as keyof typeof categoryIcons]
                    return (
                      <Card
                        key={article.title}
                        className="hover:shadow-md transition-shadow duration-300 border border-gray-100"
                      >
                        <CardContent className="p-4">
                          <div className="flex gap-4">
                            <img
                              src={article.image || "/placeholder.svg"}
                              alt={article.title}
                              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <Badge variant="secondary" className="mb-2 text-xs">
                                <IconComponent className="w-3 h-3 mr-1" />
                                {article.category}
                              </Badge>
                              <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                                {article.title}
                              </h4>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>
                                  {new Date(article.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </span>
                                <span>•</span>
                                <span>{article.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
              </div>
            </motion.div>

            {/* Press Releases */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Press Releases</h3>
              <Card className="border border-gray-100">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {pressReleases.map((release, index) => (
                      <div
                        key={release.title}
                        className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm leading-tight">{release.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Badge variant="outline" className="text-xs">
                              {release.type}
                            </Badge>
                            <span>
                              {new Date(release.date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-6 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors">
                    View All Press Releases
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 border-0 text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Our Latest News</h3>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about breakthrough research, new partnerships, and
                industry developments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
