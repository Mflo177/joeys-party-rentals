import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-packers-green text-center">
            About Joey&apos;s Party Rentals
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-packers-green">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Family-owned and operated right here in San Bernardino. We&apos;re not a big corporation with warehouses across the state—we&apos;re your local neighbors who understand the community.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Being locally based means faster delivery, lower costs, and personalized service. We know the area, we know the venues, and we&apos;re just a phone call away.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you rent from Joey&apos;s, you&apos;re supporting a local family business and avoiding the hefty delivery fees charged by out-of-area companies. We keep our prices affordable because we don&apos;t have to drive hours to reach you.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-packers-green">Why Choose Us?</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="text-packers-gold text-2xl mr-3">✓</span>
                <div>
                  <p className="font-bold">Locally Based in San Bernardino</p>
                  <p>No costly long-distance delivery fees</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-packers-gold text-2xl mr-3">✓</span>
                <div>
                  <p className="font-bold">Family Owned & Operated</p>
                  <p>Personal service, not a corporate call center</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-packers-gold text-2xl mr-3">✓</span>
                <div>
                  <p className="font-bold">Free Delivery & Setup</p>
                  <p>Within San Bernardino and surrounding areas</p>
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
                  <p>Same-day delivery often available</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-packers-gold text-2xl mr-3">✓</span>
                <div>
                  <p className="font-bold">Licensed & Insured</p>
                  <p>Your peace of mind is our priority</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}