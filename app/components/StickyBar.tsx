'use client';

export default function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-packers-green shadow-2xl z-50">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Total Section */}
          <div>
            <p className="text-white text-sm mb-1">Estimated Total</p>
            <p className="text-packers-gold text-3xl font-bold">
              $0
            </p>
          </div>

          {/* Book Now Button */}
          <button className="bg-packers-gold text-packers-green px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-yellow-400 active:scale-95 transition">
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
}