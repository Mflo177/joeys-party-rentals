export default function Contact() {
  return (
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
          <h2 className="text-2xl font-bold mb-6 text-packers-green">Service Areas</h2>
          <p className="text-gray-700 mb-4 font-bold">FREE Delivery & Setup:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-700 mb-6">
            <p>• San Bernardino</p>
            <p>• Muscoy</p>
            <p>• Hghland</p>
            <p>• Rialto</p>
            <p>• Fontana</p>
            <p>• Colton</p>
          </div>
          <p className="text-gray-600 text-sm">
            + 20 miles surrounding areas (delivery fee may apply)
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-packers-green">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <p className="font-bold text-gray-900 mb-2">How far in advance should I book?</p>
              <p className="text-gray-700">We recommend booking at least 48 hours in advance, but same-day delivery is often available. Call us to check!</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">What's included in the rental?</p>
              <p className="text-gray-700">All rentals include delivery, setup, and next-day pickup. We handle everything!</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">Do you require a deposit?</p>
              <p className="text-gray-700">Yes, we require a 50% deposit to reserve your date. The remaining balance is due on delivery.</p>
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-2">What's your cancellation policy?</p>
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
  );
}