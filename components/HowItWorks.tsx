import React from 'react';
import { ArrowRight, Radio, Cpu, Smartphone } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
        
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center max-w-xs relative z-10">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Radio className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Live Data</h3>
            <p className="text-gray-600">Buses send real-time GPS and passenger count data to our cloud.</p>
          </div>

          {/* Arrow 1 */}
          <div className="hidden md:block absolute left-[25%] top-10 text-gray-300">
             <ArrowRight className="w-12 h-12" />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center max-w-xs relative z-10">
            <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Cpu className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. AI Processing</h3>
            <p className="text-gray-600">Our AI analyzes traffic patterns and historical data to predict accurate ETAs.</p>
          </div>

          {/* Arrow 2 */}
          <div className="hidden md:block absolute right-[25%] top-10 text-gray-300">
             <ArrowRight className="w-12 h-12" />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center max-w-xs relative z-10">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
              <Smartphone className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Your Copilot</h3>
            <p className="text-gray-600">You get instant alerts and smart recommendations on your phone.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;