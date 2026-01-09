'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  
  const categories = ["All", "Web Development", "Mobile Apps", "UI/UX Design", "Full Stack"]
  
  const projects = [
    {
      id: 1,
      title: "EcoTrack Pro",
      category: "Full Stack",
      type: "Full Stack Web App",
      description: "A sustainability tracking platform that helps businesses monitor their environmental impact.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
      features: ["Real-time Analytics", "Dashboard", "PDF Reporting"],
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "HealthSync Mobile",
      category: "Mobile Apps",
      type: "Mobile Application",
      description: "Healthcare appointment scheduling app with video consultation and health tracking.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React Native", "Firebase", "Redux", "Stripe"],
      features: ["Video Consultations", "E-Prescriptions", "Health Tracking"],
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "DesignHub 3.0",
      category: "UI/UX Design",
      type: "UI/UX Design System",
      description: "Comprehensive design system and component library for enterprise applications.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Figma", "Storybook", "React", "SASS"],
      features: ["200+ Components", "Dark Mode", "WCAG 2.1 AA"],
      color: "bg-purple-500"
    },
    {
      id: 4,
      title: "ShopNex AI",
      category: "Web Development",
      type: "E-commerce Platform",
      description: "AI-powered e-commerce platform with personalized recommendations.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Next.js", "Python", "PostgreSQL", "Redis"],
      features: ["AI Recommendations", "Live Chat", "Analytics Dashboard"],
      color: "bg-orange-500"
    },
    {
      id: 5,
      title: "FinTrack Pro",
      category: "Web Development",
      type: "Financial Dashboard",
      description: "Real-time financial dashboard for investment tracking and portfolio management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "D3.js", "Express.js", "WebSocket"],
      features: ["Real-time Updates", "Data Visualization", "Multi-account"],
      color: "bg-teal-500"
    },
    {
      id: 6,
      title: "LearnSphere",
      category: "Web Development",
      type: "EdTech Platform",
      description: "Interactive learning platform with video courses and quizzes.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      technologies: ["Vue.js", "Nuxt.js", "GraphQL", "AWS"],
      features: ["Video Streaming", "Interactive Quizzes", "Progress Tracking"],
      color: "bg-indigo-500"
    }
  ]

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out some of our recent projects that showcase our skills 
              and dedication to quality.
            </p>
          </div>

          {/* Category Filters - Now clickable */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 transform scale-105' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
                {activeFilter === category && (
                  <span className="ml-2">✓</span>
                )}
              </button>
            ))}
          </div>

          {/* Active Filter Display */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'} 
              {activeFilter !== "All" && ` in ${activeFilter}`}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 left-4 ${project.color} w-12 h-12 rounded-xl flex items-center justify-center text-white`}>
                      <span className="font-bold">{project.title.charAt(0)}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-500">{project.type}</span>
                      <div className="flex gap-2">
                        <Link href={`/projects/${project.id}`}>
                          <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                            Live Demo
                          </button>
                        </Link>
                        <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors">
                          GitHub
                        </button>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No projects found</h3>
              <p className="text-gray-600">We don't have any projects in the "{activeFilter}" category yet.</p>
              <button 
                onClick={() => setActiveFilter("All")}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Show All Projects
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block">
                <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                  Get in Touch
                </button>
              </Link>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}