'use client';

export default function QuoteWidget() {
  return (
    <section className="min-h-screen bg-gray-50 pt-8 pb-32 px-4">
      <div className="max-w-md mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-packers-green mb-3">
            Get Your Instant Quote
          </h1>
          <p className="text-gray-600">
            Select your items and see the price in real-time
          </p>
        </div>

        {/* Quote Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
          
          {/* Chairs Counter */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Chairs</h3>
                <p className="text-sm text-gray-500">$3 each</p>
              </div>
            </div>
            
            {/* Counter Buttons */}
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2">
              <button 
                className="w-14 h-14 bg-white rounded-lg shadow-md text-2xl font-bold text-packers-green hover:bg-gray-50 active:scale-95 transition"
              >
                −
              </button>
              
              <span className="text-3xl font-bold text-packers-green">
                0
              </span>
              
              <button 
                className="w-14 h-14 bg-packers-gold rounded-lg shadow-md text-2xl font-bold text-white hover:bg-yellow-400 active:scale-95 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Tables Counter */}
          <div className="border-b border-gray-200 pb-6">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Tables (seats 8)</h3>
                <p className="text-sm text-gray-500">$15 each</p>
              </div>
            </div>
            
            {/* Counter Buttons */}
            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2">
              <button 
                className="w-14 h-14 bg-white rounded-lg shadow-md text-2xl font-bold text-packers-green hover:bg-gray-50 active:scale-95 transition"
              >
                −
              </button>
              
              <span className="text-3xl font-bold text-packers-green">
                0
              </span>
              
              <button 
                className="w-14 h-14 bg-packers-gold rounded-lg shadow-md text-2xl font-bold text-white hover:bg-yellow-400 active:scale-95 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Event Date */}
          <div className="pb-6 border-b border-gray-200">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              📅 Event Date
            </label>
            <input 
              type="date"
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-packers-gold focus:outline-none text-lg"
            />
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              📍 Zip Code
            </label>
            <input 
              type="text"
              placeholder="92401"
              maxLength={5}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-packers-gold focus:outline-none text-lg"
            />
          </div>
        </div>

        {/* Service Areas Note */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Serving San Bernardino & surrounding areas
        </p>
      </div>
    </section>
  );
}