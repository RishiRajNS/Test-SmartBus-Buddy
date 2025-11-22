import React from 'react';

const Problem: React.FC = () => {
  const problems = [
    { icon: '⏳', title: 'Uncertain Waits', desc: 'No accurate arrival times lead to anxiety.' },
    { icon: '😫', title: 'Unpredictable Delays', desc: 'Traffic jams ruin your schedule without warning.' },
    { icon: '🥵', title: 'Overcrowding', desc: 'No idea if you will get a seat or be squeezed in.' },
    { icon: '📚', title: 'Wasted Time', desc: 'Missed classes and lost productivity at bus stops.' },
  ];

  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Daily Bus Struggle</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Public transport is great, but the uncertainty isn't. Millions of commuters face these challenges every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;