export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-2">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">My Shop</h3>
          <p className="text-sm text-gray-400">
            Your one-stop shop for amazing products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-white transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-white transition-colors duration-200">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-200">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Contact</h3>
          <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
          <p className="text-sm text-gray-400">Email: khbidyut31@gmail.com</p>
          <p className="text-sm text-gray-400">Phone: +880 1796 343 549</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-gray-700 mt-6 pt-3 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} My Shop. All rights reserved.
      </div>
    </footer>
  );
}
