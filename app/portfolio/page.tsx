import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out some of our recent projects that showcase our skills 
              and dedication to quality.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600">Projects coming soon!</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}