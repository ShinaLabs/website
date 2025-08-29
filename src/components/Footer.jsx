import React from "react";
import Section from "./Section";
import { discordBlack, facebook, instagram, telegram, twitter } from "../assets";
import { ExternalLink, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

// const socials = [
//     {
//         title: "Discord",
//         iconUrl: discordBlack,
//         url: "https://discord.gg/zvdJzX6V",
//     },
//     {
//         title: "Twitter",
//         iconUrl: twitter,
//         url: "#",
//     },
//     {
//         title: "Instagram",
//         iconUrl: instagram,
//         url: "#",
//     },
//     {
//         title: "Telegram",
//         iconUrl: telegram,
//         url: "#",
//     },
//     {
//         title: "Facebook",
//         iconUrl: facebook,
//         url: "#",
//     },
// ];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">

  {/* <img
    src="/assets/companylogo.png"  
    alt="Shinalabs Logo"
    className="w-30 h-30 rounded" 
  /> */}

 
</div>

            </div>
            
            {/* <button className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 transition-colors px-6 py-3 rounded-lg border border-gray-600">
              <ExternalLink size={20} />
              <span className="font-medium">Visit site</span>
            </button> */}
          </div>

          {/* Other Pages Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Other Pages</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact-us" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Project
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Term of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Credits
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-blue-400">Social Media</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Our Support and Development team is available 24/7 to answer your queries
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61579064302773" 
                className="bg-blue-600 hover:bg-blue-700 transition-colors p-3 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/shinalabs1920" 
                className="bg-blue-400 hover:bg-blue-500 transition-colors p-3 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/shinalabs/" 
                className="bg-blue-700 hover:bg-blue-800 transition-colors p-3 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/?deoia=1" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all p-3 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center text-gray-400 text-sm">
            © 2024 Shinalabs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;