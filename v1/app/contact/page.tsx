import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import BackToTop from "@/components/landing/BackToTop";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact Us - iLearnova | Get in Touch",
  description: "Contact iLearnova for inquiries, support, or more information. Call us, email us, or message us on WhatsApp.",
  keywords: ["contact", "support", "iLearnova contact", "customer service"],
};

export default function ContactPage() {
  const phoneNumbers = [
    { number: "+2349050119078", display: "+234 905 011 9078" },
    { number: "+2347061500944", display: "+234 706 150 0944" }
  ];

  const emails = [
    "dimatechitconsultancy@gmail.com",
    "ilearnova@gmail.com"
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/ilearnova",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter/X",
      url: "https://www.x.com/iilearnova",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "hover:bg-black"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ilearnova",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "hover:bg-pink-600"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@ilearnova",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: "hover:bg-red-600"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/dimatech-it-consultancy-and-general-services/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:bg-blue-700"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative min-h-[40vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 pb-16">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}
          />
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Address */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Address</h3>
            <p className="text-gray-600 leading-relaxed">
              162, AGBODU QUARTERS,<br />
              ITELE IJEBU,<br />
              Nigeria
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
            <div className="space-y-3">
              {phoneNumbers.map((phone, index) => (
                <div key={index}>
                  <a 
                    href={`tel:${phone.number}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors block"
                  >
                    {phone.display}
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${phone.number.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 text-sm mt-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
            <div className="space-y-2">
              {emails.map((email, index) => (
                <a 
                  key={index}
                  href={`mailto:${email}`}
                  className="text-gray-600 hover:text-orange-600 transition-colors block break-all"
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* WhatsApp CTA Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prefer WhatsApp?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Chat with us directly for instant support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`https://api.whatsapp.com/send?phone=${phone.number.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp {index + 1}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Follow Us
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay connected with us on social media
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center w-14 h-14 rounded-full bg-gray-800 text-white ${social.color} transition-all duration-300 transform hover:scale-110 shadow-lg`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
