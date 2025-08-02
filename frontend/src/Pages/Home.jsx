import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Robot from '../assets/Robot.png';
import Robo from '../assets/Robo.png';
import LastRobo from '../assets/LastRobo.png';
import Typewriter from 'typewriter-effect';
import "../../src/index.css";

function Home() {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Hero Section with Glassmorphism */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 glass-section md:mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          {/* Image Div */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-1">
            <img
              src={LastRobo}
              alt="Digital AI interface with glowing code patterns and neural networks"
              onError={(e) => (e.target.src = '/assets/fallback-ai.jpg')}
              className="w-full max-w-xs sm:max-w-sm animate-updown transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Heading and Button Div */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-white">
              <span className='text-purple-500'>Code Smarter</span> with AI-Powered Precision
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-blue-300 mb-6 leading-relaxed">
              <Typewriter
                options={{
                  strings: ['Debug Code.', 'Code Converter.', 'Summarizer.', 'Optimize Workflow.'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
            <Link
              to={authStatus ? '/review-code' : '/signup'}
              className="inline-block bg-emerald-500 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-md shadow-white"
            >
              {authStatus ? 'Explore' : 'Get Started'}
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-800 glass-section md:mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-300">Our Mission: Empowering Developers</h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Codify harnesses state-of-the-art AI to revolutionize how you code and communicate. Our tools analyze your code for errors and optimizations, summarize lengthy texts with contextual accuracy, and convert code between languages like Python, JavaScript, and C++ with precision. Designed for developers, writers, and innovators, Codify is your partner in creating efficient, high-quality work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-700 p-4 sm:p-6 rounded-xl glass-card hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=300&auto=format&fit=crop"
                alt="AI highlighting code errors on a futuristic interface"
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 aspect-[3/2]"
                onError={(e) => (e.target.src = '/assets/fallback-code.jpg')}
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-200">Intelligent Code Review</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Our AI dives deep into your codebase, catching bugs, suggesting optimizations, and ensuring adherence to best practices in real time.
              </p>
            </div>
            <div className="bg-gray-700 p-4 sm:p-6 rounded-xl glass-card hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/18069695/pexels-photo-18069695.png"
                alt="AI summarizing a document into concise bullet points"
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 aspect-[3/2]"
                onError={(e) => (e.target.src = '/assets/fallback-summary.jpg')}
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-200">Smart Text Summarization</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Instantly condense articles, docs, or reports into clear, actionable summaries, preserving key insights with AI precision.
              </p>
            </div>
            <div className="bg-gray-700 p-4 sm:p-6 rounded-xl glass-card hover:scale-105 transition-transform duration-300">
              <img
                src="https://media.istockphoto.com/id/2164746643/photo/artificial-intelligence-idea-ai-light-bulb-idea-concept.jpg?b=1&s=612x612&w=0&k=20&c=u76poggPI6qRKK6n0a08_C4NDYMvbMSaI7shcQBV0dA="
                alt="AI converting Python code to JavaScript on a digital screen"
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 aspect-[3/2]"
                onError={(e) => (e.target.src = '/assets/fallback-conversion.jpg')}
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-200">Seamless Code Conversion</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Transform code between languages with accuracy, supporting Python, JavaScript, Java, C++, and more for effortless portability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-900 glass-section">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-300">Explore Our Features</h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the powerful tools that make Codify the ultimate companion for developers and creators.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl glass-card hover:bg-gray-700 transition-colors duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-200">Real-Time Debugging</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Instantly identify and fix errors with AI-driven insights, reducing debugging time by up to 50%.
              </p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl glass-card hover:bg-gray-700 transition-colors duration-300">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-200">Contextual Summaries</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Get concise, accurate summaries of any text, tailored to your needs, in seconds.
              </p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl glass-card hover:bg-gray-700 transition-colors duration-300">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-200">Multi-Language Support</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Convert code across 10+ languages with precision, ensuring compatibility and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-800 glass-section">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-300">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-gray-700 p-4 sm:p-6 rounded-xl glass-card">
              <h3 className="text-3xl font-bold text-emerald-500">100K+</h3>
              <p className="text-gray-300 text-sm sm:text-base">Active Users</p>
            </div>
            <div className="bg-gray-700 p-4 sm:p-6 rounded-xl glass-card">
              <h3 className="text-3xl font-bold text-emerald-500">1M+</h3>
              <p className="text-gray-300 text-sm sm:text-base">Code Reviews</p>
            </div>
            <div className="bg-gray-700 p-4 sm:p-6 rounded-xl glass-card">
              <h3 className="text-3xl font-bold text-emerald-500">500K+</h3>
              <p className="text-gray-300 text-sm sm:text-base">Summaries Generated</p>
            </div>
            <div className="bg-gray-700 p-4 sm:p-6 rounded-xl glass-card">
              <h3 className="text-3xl font-bold text-emerald-500">50+</h3>
              <p className="text-gray-300 text-sm sm:text-base">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-300">Trusted by Developers Worldwide</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl glass-card hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=80&auto=format&fit=crop"
                alt="Profile picture of developer Emma Wilson"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4"
                onError={(e) => (e.target.src = '/assets/fallback-avatar1.jpg')}
              />
              <p className="text-gray-200 italic mb-4 text-sm sm:text-base">
                "Codify’s code review tool is like having a senior developer by my side. It caught edge cases I overlooked and boosted my confidence."
              </p>
              <p className="text-blue-300 font-semibold text-sm sm:text-base">Emma Wilson, Software Engineer</p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl glass-card hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=80&auto=format&fit=crop"
                alt="Profile picture of developer Liam Patel"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4"
                onError={(e) => (e.target.src = '/assets/fallback-avatar2.jpg')}
              />
              <p className="text-gray-200 italic mb-4 text-sm sm:text-base">
                "The summarization feature turned hours of reading into minutes. It’s a must-have for research-heavy projects."
              </p>
              <p className="text-blue-300 font-semibold text-sm sm:text-base">Liam Patel, Data Scientist</p>
            </div>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-xl glass-card hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=80&auto=format&fit=crop"
                alt="Profile picture of developer Sophia Chen"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4"
                onError={(e) => (e.target.src = '/assets/fallback-avatar3.jpg')}
              />
              <p className="text-gray-200 italic mb-4 text-sm sm:text-base">
                "Converting my Python scripts to JavaScript was seamless with Codify. It saved me days of manual work."
              </p>
              <p className="text-blue-300 font-semibold text-sm sm:text-base">Sophia Chen, Full-Stack Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Codify Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 glass-section">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-300">Why Codify Stands Out</h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Codify isn’t just another coding tool—it’s a revolution in developer productivity. Our AI, trained on vast datasets of code and text, understands context like never before. Whether you’re debugging a complex algorithm, summarizing a 50-page report, or porting code to a new language, Codify delivers results with speed and precision. Join a community of innovators who trust Codify to transform their workflow.
          </p>
          <div className="flex justify-center mb-8">
            <img
              src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
              alt="Developer using Codify’s AI tools on a futuristic dashboard"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl h-auto rounded-xl shadow-2xl animate-updown"
              onError={(e) => (e.target.src = '/assets/fallback-workflow.jpg')}
            />
          </div>
          <Link
            to={authStatus ? '/review-code' : '/signup'}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            Transform Your Workflow
          </Link>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-r from-blue-900 to-purple-900 glass-section">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Elevate Your Coding Game?</h2>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Join thousands of developers who are coding smarter, faster, and better with Codify. Start your journey today!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;