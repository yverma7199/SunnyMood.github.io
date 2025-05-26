import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-summer-blue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {}
          <div>
            <h3 className="text-xl font-bold mb-4">SunnyMood</h3>
            <p className="text-sm">
              Bringing you the hottest summer styles to make your season unforgettable.
            </p>
          </div>
          {}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-center mb-4 hover:underline">Home</a></li>
              <li><a href="/products" className="text-sm text-center mb-4 hover:underline">Shop</a></li>
              <li><a href="/about" className="text-sm text-center mb-4 hover:underline">About Us</a></li>
              <li><a href="/contact" className="text-sm text-center mb-4 hover:underline">Contact</a></li>
            </ul>
          </div>
          {}
          <div className="md:col-span-1 w-full">
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 text-sm text-gray-800 w-full rounded-l" 
              />
              <button className="bg-summer-orange px-4 py-2 rounded-r text-sm font-medium">
                Join
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#"><FaInstagram size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="#"><FaFacebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-summer-teal mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} SunnyMood. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;