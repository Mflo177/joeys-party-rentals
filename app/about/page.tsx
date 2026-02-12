export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-packers-green text-center">
          About Joey's Party Rentals
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-packers-green">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Family-owned and operated right here in San Bernardino.             Being locally based means faster delivery, lower costs, and personalized service. We know the area, we know the venues, and we're just a phone call away.

          </p>
    
          <p className="text-gray-700 leading-relaxed">
            What started as helping friends and neighbors with backyard parties has grown into San Bernardino's trusted name for party rentals. We've proudly served over 100 events across San Bernardino and surrounding areas.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-packers-green">Why Choose Us?</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <span className="text-packers-gold text-2xl mr-3">✓</span>
              <div>
                <p className="font-bold">Free Delivery & Setup</p>
                <p>Within 20 miles of Austin</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-packers-gold text-2xl mr-3">✓</span>
              <div>
                <p className="font-bold">Commercial-Grade Equipment</p>
                <p>Clean, well-maintained, and reliable</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-packers-gold text-2xl mr-3">✓</span>
              <div>
                <p className="font-bold">Flexible Scheduling</p>
                <p>Same-day delivery available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-packers-green">Customer Reviews</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-packers-gold pl-4">
              <p className="text-xl mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 italic mb-2">
                "Perfect for our wedding reception! Setup was flawless and the equipment was spotless."
              </p>
              <p className="text-gray-600">- Jessica M., Austin</p>
            </div>
            <div className="border-l-4 border-packers-gold pl-4">
              <p className="text-xl mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 italic mb-2">
                "Affordable, on-time, and professional. Highly recommend!"
              </p>
              <p className="text-gray-600">- Mike R., Round Rock</p>
            </div>
            <div className="border-l-4 border-packers-gold pl-4">
              <p className="text-xl mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 italic mb-2">
                "Saved our corporate event last minute. Joey's team is amazing!"
              </p>
              <p className="text-gray-600">- Sarah T., Cedar Park</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}