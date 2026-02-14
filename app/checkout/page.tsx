'use client';

import { useState, useEffect } from 'react';
import { useQuoteStore } from '../../store/quote';
import { useRouter } from 'next/navigation';

export default function Checkout() {
  const router = useRouter();
  const { items, date, city, total } = useQuoteStore();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if missing required fields
  useEffect(() => {
    if (total === 0 || !date || !city) {
      router.push('/');
    }
  }, [total, date, city, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Phase 2 - Send to owner via email/SMS
    console.log('Booking submitted:', { name, phone, address, items, date, city, total });

    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Redirect to success page
    router.push('/success');
  };

  // Show loading state while checking/redirecting
  if (total === 0 || !date || !city) {
    return null;
  }

  const selectedItems = items.filter(item => item.quantity > 0);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-packers-green mb-2">
            Almost There!
          </h1>
          <p className="text-gray-600">
            Enter your details and we&apos;ll confirm your booking
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
          
          <div className="space-y-3 mb-4">
            {selectedItems.map((item) => (
              <div key={item.id} className="flex justify-between text-gray-700">
                <span>{item.quantity}x {item.name}</span>
                <span className="font-semibold">${item.quantity * item.price}</span>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-gray-200 pt-3 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-packers-gold">${total}</span>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
            <p className="text-sm text-gray-600">
              📅 Event Date: <span className="font-semibold">{new Date(date).toLocaleDateString()}</span>
            </p>
            <p className="text-sm text-gray-600">
              📍 Location: <span className="font-semibold">{city}</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Your Information</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Full Name {!name && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={`w-full p-4 border-2 rounded-xl focus:border-packers-gold focus:outline-none text-lg ${
                  !name ? 'border-red-300 bg-red-50' : 'border-gray-200'
                }`}
                placeholder="John Doe"
              />
              {!name && (
                <p className="text-xs text-red-500 mt-1">Required field</p>
              )}
            </div>

         {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Phone Number {!phone && <span className="text-red-500">*</span>}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  // Allow only numbers, spaces, parentheses, hyphens, plus
                  const cleaned = e.target.value.replace(/[^0-9\s\(\)\-\+]/g, '');
                  setPhone(cleaned);
                }}
                required
                minLength={10}
                className={`w-full p-4 border-2 rounded-xl focus:border-packers-gold focus:outline-none text-lg ${
                  !phone || phone.replace(/\D/g, '').length < 10 ? 'border-red-300 bg-red-50' : 'border-gray-200'
                }`}
                placeholder="(555) 123-4567"
              />
              {!phone && (
                <p className="text-xs text-red-500 mt-1">Required field</p>
              )}
              {phone && phone.replace(/\D/g, '').length < 10 && (
                <p className="text-xs text-red-500 mt-1">Phone must be at least 10 digits</p>
              )}
            </div>

       {/* Address */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Delivery Address {!address && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                minLength={10}
                className={`w-full p-4 border-2 rounded-xl focus:border-packers-gold focus:outline-none text-lg ${
                  !address || address.length < 10 ? 'border-red-300 bg-red-50' : 'border-gray-200'
                }`}
                placeholder="123 Main St, San Bernardino, CA 92401"
              />
              {!address && (
                <p className="text-xs text-red-500 mt-1">Required field</p>
              )}
              {address && address.length < 10 && (
                <p className="text-xs text-red-500 mt-1">Please enter a complete address</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !name || !phone || !address}
              className="w-full bg-packers-gold text-packers-green py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-yellow-400 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Confirm Booking Request →'}
            </button>
          </form>

         <p className="text-xs text-gray-500 text-center mt-4">
            By submitting, you agree to our{' '}
            <a href="/terms" className="underline hover:text-packers-green" target="_blank">
              Terms of Service
            </a>
            {' '}and{' '}
            <a href="/privacy" className="underline hover:text-packers-green" target="_blank">
              Privacy Policy
            </a>
            , and to be contacted about your rental request.
          </p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.push('/')}
          className="w-full mt-4 text-gray-600 hover:text-packers-green font-semibold"
        >
          ← Back to Quote
        </button>
      </div>
    </div>
  );
}