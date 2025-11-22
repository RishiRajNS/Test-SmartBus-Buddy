import React from 'react';
import { ArrowRight, Clock, Users, Navigation } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide">
              🚀 AI-Powered Smart City Solution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Smarter buses. <br />
              <span className="text-blue-600">Shorter waits.</span> <br />
              Stress-free travel.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Stop guessing when your bus will arrive. SmartBus Buddy is your AI copilot that predicts arrivals, analyzes crowd levels, and helps you commute smarter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
              >
                View Live Demo
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:text-blue-600 transition-all duration-200"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Mobile Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white flex flex-col">
                
                {/* App Header */}
                <div className="bg-blue-600 p-6 pt-10 text-white shadow-md z-10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-lg">Home → College</span>
                    <Navigation className="h-5 w-5" />
                  </div>
                  <div className="text-3xl font-bold mb-1">12:45 PM</div>
                  <div className="text-blue-100 text-sm">Next bus in 4 mins</div>
                </div>

                {/* App Content */}
                <div className="p-4 space-y-4 bg-gray-50 flex-1 overflow-hidden">
                  {/* Card 1 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-100 transform hover:scale-105 transition-transform cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded font-bold text-sm">Bus 402</div>
                      <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-medium">Recommended</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center"><Clock className="w-4 h-4 mr-1"/> 4 min</div>
                      <div className="flex items-center text-green-600"><Users className="w-4 h-4 mr-1"/> Low Crowd</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 opacity-80">
                    <div className="flex justify-between items-start mb-2">
                      <div className="bg-gray-700 text-white px-2 py-1 rounded font-bold text-sm">Bus 118</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center"><Clock className="w-4 h-4 mr-1"/> 12 min</div>
                      <div className="flex items-center text-yellow-600"><Users className="w-4 h-4 mr-1"/> Med Crowd</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '55%' }}></div>
                    </div>
                  </div>

                   {/* Map Area Mockup */}
                   <div className="bg-blue-50 rounded-xl h-32 w-full flex items-center justify-center border border-blue-100 border-dashed">
                      <span className="text-blue-400 text-sm">Live Map View</span>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -z-10 bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;