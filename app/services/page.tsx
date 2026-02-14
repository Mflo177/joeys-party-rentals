import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-packers-green text-center">
            Our Services
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-packers-green">Tables & Chairs</h2>
            <div className="space-y-3 text-gray-700">
              <p>• Round tables (seats 8): <span className="font-bold">$15 each</span></p>
              <p>• Rectangle tables (seats 6-8): <span className="font-bold">$12 each</span></p>
              <p>• Folding chairs: <span className="font-bold">$3 each</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-packers-green">Bounce Houses</h2>
            <div className="space-y-3 text-gray-700">
              <p>• Standard bounce house: <span className="font-bold">$150</span></p>
              <p>• Combo bounce house (slide + bounce): <span className="font-bold">$200</span></p>
              <p>• Water slide: <span className="font-bold">$250</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-packers-green">Tents & Canopies</h2>
            <div className="space-y-3 text-gray-700">
              <p>• 10x10 pop-up tent: <span className="font-bold">$75</span></p>
              <p>• 20x20 frame tent: <span className="font-bold">$150</span></p>
              <p>• 30x40 pole tent: <span className="font-bold">$350</span></p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-packers-green">Additional Items</h2>
            <div className="space-y-3 text-gray-700">
              <p>• Table linens: <span className="font-bold">$8 each</span></p>
              <p>• Chair covers: <span className="font-bold">$2 each</span></p>
              <p>• Outdoor heaters: <span className="font-bold">$50 each</span></p>
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