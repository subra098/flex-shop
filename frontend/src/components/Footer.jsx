import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin,
  Clock
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">FlexPrints</h1>
                <p className="text-sm text-gray-400">Premium Printing Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading flex printing shop providing high-quality digital printing, 
              banners, signage, and vehicle wraps across India since 2015.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-gray-600 hover:bg-blue-600 hover:border-blue-600">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-gray-600 hover:bg-pink-600 hover:border-pink-600">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-gray-600 hover:bg-blue-400 hover:border-blue-400">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-gray-600 hover:bg-blue-700 hover:border-blue-700">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/services", label: "Services" },
                { path: "/portfolio", label: "Portfolio" },
                { path: "/about", label: "About Us" },
                { path: "/blog", label: "Blog" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Flex Banners",
                "Digital Signage",
                "Vehicle Wraps",
                "Window Graphics",
                "Exhibition Displays",
                "Wall Murals",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Print Street, Business District<br />
                    New Delhi - 110001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@flexprints.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Mon - Sat: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get updates on new services and special offers
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 FlexPrints. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;