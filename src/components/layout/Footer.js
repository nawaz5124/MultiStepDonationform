// Footer.js
// This component contains the footer with contact and social links.

export default function Footer() {
  return (
    <footer className="bg-rose-50 border-t border-gray-300 py-6">
      <div className="container mx-auto text-center">
        {/* Logo and Description */}
        <div className="mb-4">
          <img
            src="/images/logo.png"
            alt="Camel Foundation"
            className="mx-auto w-20"
          />
          <p className="text-sm text-gray-600 mt-2">
            Registration no 1180968 Camel Foundation is a UK-based international NGO providing support in developmental work through holistic education and awareness raising.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center space-x-6 text-sm text-gray-600 mb-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/causes" className="hover:underline">
            Our Causes
          </a>
          <a href="/team" className="hover:underline">
            Our Team
          </a>
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Use
          </a>
        </nav>

        {/* Bottom Section */}
        <div className="text-sm text-gray-600 border-t border-gray-300 pt-4">
          <p>&copy; 2025 Camel Foundation. All rights reserved. Charity No: 1180968</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="/terms" className="hover:underline">
              Terms of Use
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy
            </a>
            <a href="/policy" className="hover:underline">
              Policy Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}