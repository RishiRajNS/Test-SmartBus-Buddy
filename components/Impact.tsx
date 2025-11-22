import React from 'react';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why It Matters</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">SmartBus Buddy isn't just an app; it's a step towards a more efficient, sustainable smart city.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-blue-50 border border-blue-100 text-center transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-bold text-blue-600 mb-2">20-40m</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Saved Daily</div>
            <p className="text-sm text-gray-600">Commuters save valuable time by minimizing wait times at stops.</p>
          </div>

          <div className="p-8 rounded-2xl bg-green-50 border border-green-100 text-center transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-bold text-green-600 mb-2">+35%</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Public Transport</div>
            <p className="text-sm text-gray-600">Reliability encourages more people to ditch cars for buses.</p>
          </div>

          <div className="p-8 rounded-2xl bg-purple-50 border border-purple-100 text-center transform hover:-translate-y-1 transition-transform">
            <div className="text-4xl font-bold text-purple-600 mb-2">Eco</div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Cleaner Cities</div>
            <p className="text-sm text-gray-600">Reduced congestion leads to lower carbon emissions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;