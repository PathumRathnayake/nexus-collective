'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          We Build <span className="text-yellow-300">Digital</span>
          <br />Experiences
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          We are Nexus Collective - a passionate team of developers crafting fast, 
          modern, and user-friendly web applications that drive results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/portfolio">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              View Our Work
            </button>
          </Link>
          <Link href="/about">
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition duration-300">
              Meet The Team
            </button>
          </Link>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">20+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">4</div>
            <div className="text-gray-300">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}