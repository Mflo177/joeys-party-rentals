'use client';

import { useQuoteStore } from '@/store/quote';
import { motion } from 'framer-motion';

export default function StickyBar() {
  const { total } = useQuoteStore();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-packers-green shadow-2xl z-50">
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Total Section */}
          <div>
            <p className="text-white text-sm mb-1">Estimated Total</p>
            <motion.p 
              key={total}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className="text-packers-gold text-3xl font-bold"
            >
              ${total}
            </motion.p>
          </div>

          {/* Book Now Button */}
          <button 
            className="bg-packers-gold text-packers-green px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-yellow-400 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={total === 0}
          >
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
}