import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        {/* Logo */}

        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            Travel Articles
          </h2>

          <p className="text-gray-300 mt-5 leading-7">
            Discover beautiful destinations,
            inspiring travel stories,
            and unforgettable adventures
            around the world.
          </p>
        </div>

        {/* Quick Links */}

        <div>
          <h3 className="font-bold text-xl mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Home</li>
            <li>Features</li>
            <li>Articles</li>
            <li>About</li>
          </ul>
        </div>

        {/* Contact */}

        <div>
          <h3 className="font-bold text-xl mb-5">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>support@travelarticles.com</li>
            <li>+62 812-3456-7890</li>
            <li>Padang, Indonesia</li>
          </ul>
        </div>

        {/* Social */}

        <div>
          <h3 className="font-bold text-xl mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">

            <FaFacebook className="hover:text-blue-400 cursor-pointer transition" />

            <FaInstagram className="hover:text-pink-400 cursor-pointer transition" />

            <FaGithub className="hover:text-gray-400 cursor-pointer transition" />

          </div>

        </div>

      </div>

      <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-400">
        © 2026 Travel Articles. All Rights Reserved.
      </div>
    </footer>
  );
}