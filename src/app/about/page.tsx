"use client"

import { Navbar } from "@/src/components/navbar"
import { Footer } from "@/src/components/footer"
import { ThreeBackground } from "@/src/components/three-background"
import { AnimatedIcon } from "@/src/components/animated-icon"
import { Cpu, Users, Award, Lightbulb, Target, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg text-white py-20 md:py-28">
        <ThreeBackground type="particles" />
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-6" variants={fadeIn}>
              Pioneering workforce solutions for the semiconductor industry
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-mint-blue">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2025, Nanocore Systems was born out of a shared realization among a group of industry veterans:
                the semiconductor sector was growing fast, but talent acquisition was lagging behind.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Long hiring cycles that delayed project timelines</li>
                <li>A shortage of specialized, job-ready professionals</li>
                <li>The constant trade-off between flexibility and compliance</li>
                <li>A disconnect between workforce planning and evolving technical needs</li>
              </ul>
              <p className="text-gray-600 mb-4">
                These experiences gave rise to a powerful idea—what if we could create a workforce solution that understands
                the pulse of the semiconductor industry and acts as a seamless extension of engineering teams?
              </p>
              <p className="text-gray-600 mb-4 font-semibold italic">
                That idea became Nanocore Systems.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we’re more than just a staffing company. We’re a strategic partner in building the semiconductor
                workforce of tomorrow. From contract and full-time hiring to assessments, skilling, and verification—we bring
                <span className="font-semibold text-nanocoreBlue"> Speed, Skill, and Scalability </span>
                to every engagement.
              </p>
              <p className="text-gray-600 mb-4">
                Our professionals work under your guidance, but remain on our payroll—giving you flexibility without the
                compliance or onboarding delays.
              </p>
              <p className="text-gray-700 font-bold">
                Our mission is simple:{" "}
                <span className="text-nanocoreBlue">
                  Bridge the gap between opportunity and talent—faster, smarter, and better.
                </span>
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-100 rounded-lg p-8 relative z-10 shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-nanocoreBlue mb-2">100+</h3>
                    <p className="text-gray-600">Skilled Professionals</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-nanocoreBlue mb-2">50+</h3>
                    <p className="text-gray-600">Client Companies</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-nanocoreBlue mb-2">95%</h3>
                    <p className="text-gray-600">Client Retention</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-nanocoreBlue opacity-10 rounded-lg transform translate-x-4 translate-y-4" />
            </motion.div>


          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4  text-gradient-mint-blue">Our Core Values</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              The principles that guide everything we do at Nanocore Systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Award className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering exceptional quality in every aspect of our service, from candidate
                selection to client support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Lightbulb className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new ideas and technologies to continuously improve our processes and the value we provide to
                clients and candidates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm card-hover">
              <div className="mb-6">
                <AnimatedIcon>
                  <Target className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Precision</h3>
              <p className="text-gray-600">
                We focus on getting the details right, ensuring perfect matches between professional skills and project
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 gradient-bg text-white relative overflow-hidden">
        <ThreeBackground type="particles" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-200">
              How we deliver exceptional staffing solutions for the semiconductor industry
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center card-hover">
              <div className="mb-6 mx-auto">
                <AnimatedIcon bgClassName="bg-white/20">
                  <Users className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Understand</h3>
              <p className="text-gray-200">
                We take time to deeply understand your project requirements and company culture.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center card-hover">
              <div className="mb-6 mx-auto">
                <AnimatedIcon bgClassName="bg-white/20">
                  <Target className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Match</h3>
              <p className="text-gray-200">
                We precisely match technical skills and experience to your specific project needs.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center card-hover">
              <div className="mb-6 mx-auto">
                <AnimatedIcon bgClassName="bg-white/20">
                  <Cpu className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Deploy</h3>
              <p className="text-gray-200">
                We handle all employment logistics so professionals can integrate seamlessly into your team.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center card-hover">
              <div className="mb-6 mx-auto">
                <AnimatedIcon bgClassName="bg-white/20">
                  <TrendingUp className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p className="text-gray-200">
                We provide ongoing management and support to ensure long-term success.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center card-hover">
              <div className="mb-6 mx-auto">
                <AnimatedIcon bgClassName="bg-white/20">
                  <Award className="h-8 w-8 text-white" />
                </AnimatedIcon>
              </div>
              <h3 className="text-xl font-bold mb-3">Train & Develop</h3>
              <p className="text-gray-200">
                We offer tailored training and development programs to equip your team with the latest skills in semiconductor technologies, ensuring that your workforce remains competitive and future-ready.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
