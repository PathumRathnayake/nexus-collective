import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaCode, FaServer, FaMobileAlt, FaPalette } from 'react-icons/fa'

export default function About() {
  const teamMembers = [
    {
      name: "Pathum Rathnayake",
      role: "Frontend Developer",
      icon: <FaCode className="w-8 h-8 text-blue-600" />,
      description: "Crafting beautiful and responsive user interfaces with modern frameworks like React and Next.js."
    },
    {
      name: "Avishka Bandara",
      role: "Backend Developer",
      icon: <FaServer className="w-8 h-8 text-green-600" />,
      description: "Building robust server architectures and APIs that power our applications seamlessly."
    },
    {
      name: "Sineth Bandara",
      role: "Mobile App Developer",
      icon: <FaMobileAlt className="w-8 h-8 text-purple-600" />,
      description: "Creating native and cross-platform mobile experiences for iOS and Android."
    },
    {
      name: "Pramod Heenagama",
      role: "UI/UX Designer",
      icon: <FaPalette className="w-8 h-8 text-yellow-600" />,
      description: "Designing intuitive user experiences and visually appealing interfaces that users love."
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Our Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate developers behind Nexus Collective.
            </p>
          </div>

          {/* Team Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                    {member.role}
                  </span>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Our Story Section */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Nexus Collective was founded by a group of passionate developers who shared a common vision: 
                to create exceptional digital experiences that make a difference. Each member brings unique 
                expertise to the table, allowing us to deliver comprehensive solutions for our clients.
              </p>
              <p className="text-lg text-gray-700">
                From frontend to backend, mobile to design, our team works collaboratively to ensure every 
                project meets the highest standards of quality and innovation. We believe in the power of 
                technology to transform businesses and create meaningful connections with users.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Pushing boundaries with cutting-edge technologies and creative solutions.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
                <p className="text-gray-600">Delivering excellence in every line of code and every design pixel.</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">Working together to achieve more than the sum of our individual parts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}