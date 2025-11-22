import React from 'react';
import { Clock, Users, Bell, BrainCircuit } from 'lucide-react';

const Solution: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Real-time ETA",
      desc: "Know exactly when your bus arrives with GPS-backed precision."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Crowd Estimation",
      desc: "See how full the bus is before it arrives. Grab a seat, not a handle."
    },
    {
      icon: <Bell className="w-8 h-8 text-yellow-600" />,
      title: "Delay Alerts",
      desc: "Instant notifications if your bus is stuck in traffic or rerouted."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-purple-600" />,
      title: "Smart Recommendations",
      desc: "AI suggests alternative routes or timings to optimize your commute."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Our Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Meet SmartBus Buddy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;