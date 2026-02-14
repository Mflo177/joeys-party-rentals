'use client';

import { useQuoteStore } from '@/store/quote';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function StickyBar() {
  const { total, date, city } = useQuoteStore();
  const [showError, setShowError] = useState(false);
  const canProceed = total > 0 && date && city;

  const handleClick = () => {
    if (!canProceed) {
      setShowError(true);
      // Auto-hide after 3 seconds
      setTimeout(() => setShowError(false), 3000);
    }
  };

  // Determine error message
  const getErrorMessage = () => {
    if (total === 0) return "Please add items to your quote";
    if (!date) return "Please select an event date";
    if (!city) return "Please select your event location";
    return "";
  };

  return (
    <>
      {/* Error Toast */}
      <AnimatePresence>
        {showError && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-24 left-4 right-4 z-50"
          >
            <div className="max-w-md mx-auto bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <p className="font-semibold">{getErrorMessage()}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Bar */}
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
            {canProceed ? (
              <Link 
                href="/checkout"
                className="bg-packers-gold text-packers-green px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-yellow-400 active:scale-95 transition inline-block"
              >
                Book Now →
              </Link>
            ) : (
              <motion.button 
                onClick={handleClick}
                animate={showError ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
                className="bg-packers-gold text-packers-green px-8 py-4 rounded-xl font-bold text-lg shadow-lg opacity-50"
              >
                Book Now →
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}