export default function Footer() {
  return (
    <footer className="bg-packers-green text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm mb-3 text-packers-gold font-semibold">
          Serving the Inland Empire
        </p>
        <p className="text-xs leading-relaxed opacity-90">
          San Bernardino • Riverside • Fontana • Rancho Cucamonga • Ontario • 
          Colton • Rialto • Highland • Redlands • Loma Linda • Grand Terrace • 
          Moreno Valley • Corona • Eastvale • Jurupa Valley • Norco • Chino • 
          Chino Hills • Upland • Montclair
        </p>
        <div className="mt-6 pt-4 border-t border-packers-light">
          <p className="text-xs opacity-75 mb-2">
            © 2024 Joey&apos;s Party Rentals. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-4 text-xs">
            <a href="/privacy" className="hover:text-packers-gold transition">
              Privacy Policy
            </a>
            <span className="opacity-50">|</span>
            <a href="/terms" className="hover:text-packers-gold transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}