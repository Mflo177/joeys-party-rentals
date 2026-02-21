'use client';

import { useQuoteStore } from '@/store/quote';
import { useEffect } from 'react';
import Image from 'next/image';

const CITIES = [
  'San Bernardino',
  'Riverside',
  'Fontana',
  'Rancho Cucamonga',
  'Ontario',
  'Colton',
  'Rialto',
  'Highland',
  'Redlands',
  'Other',
];

interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  enableQuickAdd?: boolean;
}

interface QuoteWidgetProps {
  title?: string;
  subtitle?: string;
  serviceAreasText?: string;
  initialItems: Item[];
}

export default function QuoteWidget({ 
  title = 'Get Your Instant Quote',
  subtitle = 'Select your items and see the price in real-time',
  serviceAreasText = 'San Bernardino • Riverside • Fontana • Colton • Rialto • Highland • Redlands • Loma Linda • Bloomington • Muscoy',
  initialItems 
}: QuoteWidgetProps) {
  const { items, date, city, updateItem, setDate, setCity, setItems } = useQuoteStore();

  // Set items from Sanity ONLY if store is empty (first load)
  useEffect(() => {
    if (initialItems.length > 0 && items.length === 0) {
      setItems(initialItems);
    }
  }, [initialItems, setItems, items.length]);

  return (
    <section className="min-h-screen bg-gray-50 pt-8 pb-32 px-4">
      <div className="max-w-md mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-packers-green mb-3">
            {title}
          </h1>
          <p className="text-gray-600">
            {subtitle}
          </p>
        </div>

        {/* Quote Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
          
          {/* Dynamic Item Counters */}
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No items available. Add items in Sanity Studio.</p>
              <a href="/studio" className="text-packers-gold underline mt-2 block">
                Go to Studio →
              </a>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="border-b-2 border-gray-300 pb-6 last:border-0">
                
                {/* Item Header with Image */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price} each</p>
                  </div>

                  {/* Item Image (if exists) */}
                  {item.image ? (
                    <div className="ml-4 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                        unoptimized
                      />
                    </div>
                  ) : null}
                </div>

                {/* Quick Add Buttons (if enabled in Sanity) */}
                {item.enableQuickAdd && (
                  <div className="flex gap-2 mb-3">
                    <button
                      onClick={() => updateItem(item.id, item.quantity - 8)}
                      className="flex-1 bg-gray-400 text-white py-2 px-3 rounded-lg text-sm font-bold hover:bg-gray-500 active:scale-95 transition disabled:opacity-30"
                      disabled={item.quantity < 8}
                    >
                      −8
                    </button>
                    <button
                      onClick={() => updateItem(item.id, item.quantity + 8)}
                      className="flex-1 bg-packers-light text-white py-2 px-3 rounded-lg text-sm font-bold hover:bg-packers-forest active:scale-95 transition"
                    >
                      +8
                    </button>
                  </div>
                )}
                
                {/* Counter Buttons */}
                <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2">
                  <button 
                    onClick={() => updateItem(item.id, item.quantity - 1)}
                    className="w-14 h-14 bg-white rounded-lg shadow-md text-2xl font-bold text-packers-green hover:bg-gray-50 active:scale-95 transition disabled:opacity-30"
                    disabled={item.quantity === 0}
                  >
                    −
                  </button>
                  
                  <span className="text-3xl font-bold text-packers-green min-w-[60px] text-center">
                    {item.quantity}
                  </span>
                  
                  <button 
                    onClick={() => updateItem(item.id, item.quantity + 1)}
                    className="w-14 h-14 bg-packers-gold rounded-lg shadow-md text-2xl font-bold text-white hover:bg-yellow-400 active:scale-95 transition"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal for this item */}
                {item.quantity > 0 && (
                  <p className="text-right text-sm text-gray-600 mt-2">
                    Subtotal: <span className="font-bold text-packers-green">
                      ${item.quantity * item.price}
                    </span>
                  </p>
                )}
              </div>
            ))
          )}

          {/* Event Date */}
          <div className="pb-6 border-b-2 border-gray-300">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              📅 Event Date {!date && <span className="text-red-500">*</span>}
            </label>
            <input 
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              min={new Date().toISOString().split('T')[0]}
              className={`w-full p-4 border-2 rounded-xl focus:border-packers-gold focus:outline-none text-lg ${
                !date ? 'border-red-300 bg-red-50' : 'border-gray-200'
              }`}
            />
            {!date && (
              <p className="text-xs text-red-500 mt-1">Required field</p>
            )}
          </div>

          {/* City Dropdown */}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">
              📍 Event Location {!city && <span className="text-red-500">*</span>}
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className={`w-full p-4 border-2 rounded-xl focus:border-packers-gold focus:outline-none text-lg bg-white ${
                !city ? 'border-red-300 bg-red-50' : 'border-gray-200'
              }`}
            >
              <option value="">Select a city...</option>
              {CITIES.map((cityName) => (
                <option key={cityName} value={cityName}>
                  {cityName}
                </option>
              ))}
            </select>
            {!city && (
              <p className="text-xs text-red-500 mt-1">Required field</p>
            )}
          </div>
        </div>

        {/* Service Areas Note */}
        <div className="mt-8 text-center px-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">
            📍 Proudly Serving
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {serviceAreasText}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            + Surrounding Inland Empire communities
          </p>
        </div>
      </div>
    </section>
  );
}