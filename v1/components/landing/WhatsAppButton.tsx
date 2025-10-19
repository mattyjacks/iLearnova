"use client";

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumbers = [
    { number: "+2349050119078", display: "+234 905 011 9078", label: "Main Line" },
    { number: "+2347061500944", display: "+234 706 150 0944", label: "Support Line" }
  ];

  return (
    <>
      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-8 z-50 flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 group"
        aria-label="Message on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="font-semibold hidden sm:inline">Message on WhatsApp</span>
          </>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed bottom-40 right-8 z-50 bg-white rounded-2xl shadow-2xl p-4 w-72 animate-fade-in">
          <div className="mb-3">
            <h3 className="font-bold text-gray-900 text-lg mb-1">Chat with us on WhatsApp</h3>
            <p className="text-sm text-gray-600">Choose a number to start chatting</p>
          </div>
          
          <div className="space-y-2">
            {phoneNumbers.map((phone, index) => (
              <a
                key={index}
                href={`https://api.whatsapp.com/send?phone=${phone.number.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition-colors duration-200 border border-gray-200 hover:border-green-500"
              >
                <div className="bg-green-500 p-2 rounded-full">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-sm">{phone.label}</div>
                  <div className="text-xs text-gray-600">{phone.display}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
