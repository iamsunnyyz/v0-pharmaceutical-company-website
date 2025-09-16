"use client"

import { motion } from "framer-motion"
import { Globe, MapPin, Users, Building, Award, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const globalStats = [
  { number: "50+", label: "Countries", icon: Globe },
  { number: "25,000+", label: "Employees", icon: Users },
  { number: "15", label: "Manufacturing Sites", icon: Building },
  { number: "100M+", label: "Patients Served", icon: Award },
]

const regions = [
  {
    name: "North America",
    headquarters: "New York, USA",
    employees: "8,500+",
    facilities: "5 Manufacturing, 3 R&D",
    keyMarkets: ["United States", "Canada", "Mexico"],
    growth: "+12%",
  },
  {
    name: "Europe",
    headquarters: "Zurich, Switzerland",
    employees: "7,200+",
    facilities: "4 Manufacturing, 2 R&D",
    keyMarkets: ["Germany", "France", "UK", "Switzerland"],
    growth: "+8%",
  },
  {
    name: "Asia Pacific",
    headquarters: "Singapore",
    employees: "6,800+",
    facilities: "3 Manufacturing, 4 R&D",
    keyMarkets: ["Japan", "China", "India", "Australia"],
    growth: "+18%",
  },
  {
    name: "Latin America",
    headquarters: "São Paulo, Brazil",
    employees: "2,500+",
    facilities: "3 Manufacturing, 1 R&D",
    keyMarkets: ["Brazil", "Argentina", "Colombia", "Chile"],
    growth: "+15%",
  },
]

const milestones = [
  { year: "1985", event: "Founded in Switzerland", location: "Zurich" },
  { year: "1992", event: "First international expansion", location: "United States" },
  { year: "2001", event: "Asia Pacific operations launched", location: "Singapore" },
  { year: "2008", event: "Latin America headquarters established", location: "Brazil" },
  { year: "2015", event: "Global R&D network completed", location: "Worldwide" },
  { year: "2023", event: "50th country market entry", location: "Vietnam" },
]

export function GlobalPresenceSection() {
  return (
    <section id="global-presence" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
            <Globe className="w-4 h-4 mr-2" />
            Global Presence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Serving Patients
            <span className="text-emerald-600"> Around the World</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            With operations spanning six continents, we bring life-changing medicines and healthcare solutions to
            communities worldwide, adapting to local needs while maintaining global standards of excellence.
          </p>
        </motion.div>

        {/* Global Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {globalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="p-3 bg-emerald-100 rounded-xl w-fit mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Regional Operations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Regional Operations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h4>
                        <div className="flex items-center gap-2 text-gray-600 mb-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{region.headquarters}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold">{region.growth}</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Employees</span>
                        <span className="font-semibold text-gray-900">{region.employees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Facilities</span>
                        <span className="font-semibold text-gray-900">{region.facilities}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h5 className="font-semibold text-gray-900 mb-3">Key Markets</h5>
                      <div className="flex flex-wrap gap-2">
                        {region.keyMarkets.map((market) => (
                          <Badge key={market} variant="secondary" className="text-xs">
                            {market}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Global Expansion Journey</h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="border border-emerald-100 bg-white/80">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-2">
                          <Badge className="bg-emerald-600 text-white">{milestone.year}</Badge>
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <MapPin className="w-3 h-3" />
                            <span>{milestone.location}</span>
                          </div>
                        </div>
                        <h4 className="font-semibold text-gray-900">{milestone.event}</h4>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-emerald-600 rounded-full border-2 border-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
