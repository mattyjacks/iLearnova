"use client";

import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ILEARNOVA</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering education through innovative technology and dedicated support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/features" className="text-gray-300 hover:text-yellow-400 transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-yellow-400 transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="text-gray-300 hover:text-yellow-400 transition-colors">Help Center</Link></li>
              <li><Link href="/documentation" className="text-gray-300 hover:text-yellow-400 transition-colors">Documentation</Link></li>
              <li><Link href="/tutorials" className="text-gray-300 hover:text-yellow-400 transition-colors">Tutorials</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-yellow-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@ilearnova.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Education St, Learning City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} iLearnova. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
