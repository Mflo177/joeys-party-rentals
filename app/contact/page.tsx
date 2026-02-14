import Footer from '../components/Footer';

export default function Contact() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-packers-green text-center">
            Contact Us
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-packers-green">Get in Touch</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center">
                <span className="text-3xl mr-4">📞</span>
                <div>
                  <p className="font-bold">Phone</p>
                  <a href="tel:+15551234567" className="text-packers-gold hover:underline">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-3xl mr-4">📧</span>
                <div>
                  <p className="font-bold">Email</p>
                  <a href="mailto:hello@joeysrentals.com" className="text-packers-gold hover:underline">
                    hello@joeysrentals.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-3xl mr-4">⏰</span>
                <div>
                  <p className="font-bold">Hours</p>
                  <p>Monday - Sunday: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-packers-green">Service Areas & Delivery</h2>
            
            {/* Free Delivery Zone */}
            <div className="mb-6 p-5 bg-green-50 border-2 border-green-200 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🚚</span>
                <h3 className="text-lg font-bold text-green-800">FREE Delivery & Setup</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                We provide complimentary delivery, setup, and next-day pickup within our primary service area:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>San Bernardino</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Riverside</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Fontana</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Rancho Cucamonga</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Ontario</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Colton</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Rialto</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Highland</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Redlands</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Loma Linda</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Grand Terrace</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-green-600">✓</span>
                  <span>Bloomington</span>
                </div>
              </div>
            </div>

            {/* Delivery Fee Zone */}
            <div className="mb-6 p-5 bg-yellow-50 border-2 border-yellow-200 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💵</span>
                <h3 className="text-lg font-bold text-yellow-800">Small Delivery Fee ($25-$50)</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                We can deliver to these areas with a small fee based on distance:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Moreno Valley</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Corona</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Eastvale</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Jurupa Valley</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Norco</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Chino</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Chino Hills</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Upland</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Montclair</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Yucaipa</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Victorville</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-600">•</span>
                  <span>Hesperia</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                Call or text us for an exact delivery quote for your location
              </p>
            </div>

            {/* Outside Service Area */}
            <div className="p-5 bg-gray-50 border-2 border-gray-200 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">ℹ️</span>
                <h3 className="text-lg font-bold text-gray-800">Why We Stay Local</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                We&apos;re a family-owned business focused on providing affordable, quality service to the Inland Empire. 
                By staying local, we avoid the high delivery fees that distant companies charge. This keeps our prices fair 
                and ensures we can respond quickly to your needs.
              </p>
              <p className="text-xs text-gray-500 mt-3">
                <strong>Outside our service area?</strong> We recommend searching for &quot;party rentals&quot; + your city name 
                to find a local provider near you.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-packers-green">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-gray-900 mb-2">How far in advance should I book?</p>
                <p className="text-gray-700">We recommend booking at least 48 hours in advance, but same-day delivery is often available. Call us to check!</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">What&apos;s included in the rental?</p>
                <p className="text-gray-700">All rentals include delivery, setup, and next-day pickup. We handle everything!</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">Do you require a deposit?</p>
                <p className="text-gray-700">Yes, we require a 50% deposit to reserve your date. The remaining balance is due on delivery.</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-2">What&apos;s your cancellation policy?</p>
                <p className="text-gray-700">Full refund if cancelled 48+ hours before your event. Within 48 hours, deposit is non-refundable.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="/"
              className="inline-block bg-packers-gold text-packers-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
            >
              Get Instant Quote →
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}