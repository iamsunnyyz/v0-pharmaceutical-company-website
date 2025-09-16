"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our team directly",
    contact: "+1 (555) 123-4567",
    availability: "Mon-Fri, 8AM-6PM EST",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed assistance via email",
    contact: "contact@pharmalife.com",
    availability: "24/7 Response within 24 hours",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant support for urgent inquiries",
    contact: "Available on website",
    availability: "Mon-Fri, 9AM-5PM EST",
  },
]

const offices = [
  {
    region: "North America Headquarters",
    address: "1234 Innovation Drive, Boston, MA 02101, USA",
    phone: "+1 (555) 123-4567",
    email: "americas@pharmalife.com",
  },
  {
    region: "Europe Headquarters",
    address: "Bahnhofstrasse 45, 8001 Zurich, Switzerland",
    phone: "+41 44 123 4567",
    email: "europe@pharmalife.com",
  },
  {
    region: "Asia Pacific Headquarters",
    address: "Marina Bay Financial Centre, Singapore 018989",
    phone: "+65 6123 4567",
    email: "apac@pharmalife.com",
  },
]

const inquiryTypes = [
  "General Information",
  "Partnership Opportunities",
  "Media & Press",
  "Investor Relations",
  "Career Inquiries",
  "Patient Support",
  "Healthcare Provider",
  "Regulatory Affairs",
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-emerald-600 border-emerald-200">
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Get in Touch with
            <span className="text-emerald-600"> Our Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Whether you're a healthcare provider, researcher, patient, or potential partner, we're here to help. Reach
            out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type *</label>
                    <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the{" "}
                      <a href="#" className="text-emerald-600 hover:text-emerald-700 underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to the processing of my personal data.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods & Office Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Methods</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={method.title} className="border border-gray-100 bg-white/80">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-emerald-100 rounded-lg flex-shrink-0">
                          <method.icon className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                          <p className="text-sm font-medium text-emerald-600 mb-1">{method.contact}</p>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{method.availability}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Global Offices</h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={office.region} className="border border-gray-100 bg-white/80">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-emerald-100 rounded-lg flex-shrink-0">
                          <Building className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">{office.region}</h4>
                          <div className="space-y-1 text-xs text-gray-600">
                            <div className="flex items-start gap-2">
                              <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                              <span>{office.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-3 h-3 flex-shrink-0" />
                              <span>{office.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="w-3 h-3 flex-shrink-0" />
                              <span>{office.email}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
            <CardContent className="p-8 text-center">
              <div className="p-3 bg-red-100 rounded-xl w-fit mx-auto mb-4">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Medical Emergency or Adverse Event</h3>
              <p className="text-gray-600 mb-4">
                If you are experiencing a medical emergency or need to report an adverse event related to our products,
                please contact us immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Emergency Hotline: +1 (555) 911-HELP
                </button>
                <button className="border border-red-200 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                  Report Adverse Event
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
