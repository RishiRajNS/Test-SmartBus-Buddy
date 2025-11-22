import React, { useState } from 'react';
import { Search, MapPin, Clock, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Bus, CrowdLevel } from '../types';
import { getBusAdvice } from '../services/geminiService';

const Demo: React.FC = () => {
  const [destination, setDestination] = useState('College');
  const [results, setResults] = useState<Bus[]>([]);
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const mockBuses: Record<string, Bus[]> = {
    'College': [
      { id: '1', routeNumber: '402', destination: 'City College', etaMinutes: 4, crowdLevel: CrowdLevel.LOW, hasAC: true, seatsAvailable: 12 },
      { id: '2', routeNumber: '118', destination: 'City College', etaMinutes: 12, crowdLevel: CrowdLevel.MEDIUM, hasAC: false, seatsAvailable: 5 },
      { id: '3', routeNumber: '22X', destination: 'City College (Express)', etaMinutes: 15, crowdLevel: CrowdLevel.HIGH, hasAC: true, seatsAvailable: 0 },
    ],
    'Office': [
      { id: '4', routeNumber: '500', destination: 'Tech Park', etaMinutes: 2, crowdLevel: CrowdLevel.HIGH, hasAC: true, seatsAvailable: 2 },
      { id: '5', routeNumber: '505', destination: 'Tech Park', etaMinutes: 9, crowdLevel: CrowdLevel.LOW, hasAC: true, seatsAvailable: 20 },
    ],
    'Market': [
      { id: '6', routeNumber: '10A', destination: 'Central Market', etaMinutes: 6, crowdLevel: CrowdLevel.MEDIUM, hasAC: false, seatsAvailable: 8 },
      { id: '7', routeNumber: '12', destination: 'Central Market', etaMinutes: 18, crowdLevel: CrowdLevel.LOW, hasAC: false, seatsAvailable: 15 },
    ]
  };

  const handleFindBus = () => {
    setLoading(true);
    setResults([]);
    setAiResponse('');
    setTimeout(() => {
      setResults(mockBuses[destination]);
      setLoading(false);
    }, 800);
  };

  const handleAskAI = async () => {
    if (!aiQuery) return;
    setAiLoading(true);
    const response = await getBusAdvice(aiQuery, results.length > 0 ? results : mockBuses[destination]);
    setAiResponse(response);
    setAiLoading(false);
  };

  const getCrowdColor = (level: CrowdLevel) => {
    switch (level) {
      case CrowdLevel.LOW: return 'text-green-600 bg-green-100';
      case CrowdLevel.MEDIUM: return 'text-yellow-600 bg-yellow-100';
      case CrowdLevel.HIGH: return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="demo" className="py-24 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Try the Prototype</h2>
          <p className="text-gray-600 mt-2">Simulate a live commute scenario.</p>
        </div>

        {/* Interactive Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="p-6 md:p-8 bg-blue-600">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1 w-full">
                <label className="block text-blue-100 text-sm font-medium mb-2">Where are you going?</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-300 outline-none appearance-none cursor-pointer"
                  >
                    <option value="College">City College Campus</option>
                    <option value="Office">Tech Park (Office)</option>
                    <option value="Market">Central Market</option>
                  </select>
                </div>
              </div>
              <button 
                onClick={handleFindBus}
                disabled={loading}
                className="w-full md:w-auto px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? 'Scanning...' : 'Find Best Bus'}
              </button>
            </div>
          </div>

          {/* Results Area */}
          <div className="p-6 md:p-8 min-h-[300px] bg-gray-50">
            {results.length === 0 && !loading && (
              <div className="text-center text-gray-500 py-12">
                <Search className="w-12 h-12 mx-auto mb-3 opacity-20" />
                <p>Select a destination and click Find Best Bus</p>
              </div>
            )}

            {loading && (
              <div className="space-y-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="h-20 bg-gray-200 rounded-xl animate-pulse"></div>
                 ))}
              </div>
            )}

            {results.length > 0 && !loading && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-gray-800 text-lg">Live Recommendations</h3>
                  <span className="text-xs text-gray-500">Updated just now</span>
                </div>

                {results.map((bus, idx) => (
                  <div 
                    key={bus.id} 
                    className={`relative bg-white p-5 rounded-xl shadow-sm border-l-4 transition-all hover:shadow-md ${idx === 0 ? 'border-l-green-500 ring-1 ring-green-100' : 'border-l-gray-300'}`}
                  >
                    {idx === 0 && (
                      <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-bold">
                        Best Option
                      </span>
                    )}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                         <div className="bg-gray-800 text-white px-3 py-1 rounded-md font-bold text-lg">
                           {bus.routeNumber}
                         </div>
                         <div className="text-sm text-gray-600 font-medium">{bus.destination}</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mt-2">
                      <div className="bg-blue-50 rounded-lg p-2 text-center">
                        <div className="text-xs text-blue-600 uppercase font-bold mb-1">ETA</div>
                        <div className="font-bold text-gray-900 flex items-center justify-center gap-1">
                          <Clock className="w-3 h-3" /> {bus.etaMinutes} min
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-1">Crowd</div>
                        <div className={`font-bold text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1 ${getCrowdColor(bus.crowdLevel)}`}>
                          <Users className="w-3 h-3" /> {bus.crowdLevel}
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <div className="text-xs text-gray-500 uppercase font-bold mb-1">Status</div>
                        <div className="font-bold text-gray-900 text-sm">
                          {bus.etaMinutes < 5 ? 'On Time' : 'Delayed'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* AI Copilot Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                   <div className="flex items-center gap-2 mb-3">
                     <Sparkles className="w-5 h-5 text-purple-600" />
                     <h4 className="font-bold text-gray-800">Ask SmartBus AI</h4>
                   </div>
                   <div className="flex gap-2">
                     <input 
                        type="text" 
                        placeholder="e.g., I have a heavy bag, which bus is best?"
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-200 outline-none"
                        value={aiQuery}
                        onChange={(e) => setAiQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
                     />
                     <button 
                       onClick={handleAskAI}
                       disabled={aiLoading || !aiQuery}
                       className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 disabled:opacity-50"
                     >
                       {aiLoading ? '...' : <ArrowRight className="w-4 h-4" />}
                     </button>
                   </div>
                   {aiResponse && (
                     <div className="mt-3 p-3 bg-purple-50 text-purple-900 text-sm rounded-lg border border-purple-100">
                       <strong>AI Buddy:</strong> {aiResponse}
                     </div>
                   )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;