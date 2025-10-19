"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is iLearnova?",
      answer: "iLearnova is a comprehensive learning management platform that connects students, teachers, and parents. It provides tools for online classes, assignment management, attendance tracking, and real-time progress monitoring."
    },
    {
      question: "How much does iLearnova cost?",
      answer: "We offer flexible pricing plans for individuals, schools, and institutions. Our basic plan starts at $9.99/month for individual users, with discounted rates for schools and bulk licenses. Contact us for custom enterprise pricing."
    },
    {
      question: "Can I try iLearnova before purchasing?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can explore the platform and see if it's the right fit for your needs."
    },
    {
      question: "Is iLearnova suitable for all age groups?",
      answer: "Absolutely! iLearnova is designed to accommodate learners of all ages, from elementary school to higher education and professional development. Our interface adapts to different learning levels and subjects."
    },
    {
      question: "What devices can I use to access iLearnova?",
      answer: "iLearnova is fully cloud-based and accessible from any device with an internet connection - desktops, laptops, tablets, and smartphones. We also offer native mobile apps for iOS and Android."
    },
    {
      question: "How secure is my data on iLearnova?",
      answer: "Security is our top priority. We use bank-level encryption, regular security audits, and comply with GDPR, FERPA, and other data protection regulations. Your data is stored on secure servers with automatic backups."
    },
    {
      question: "Can iLearnova integrate with other tools?",
      answer: "Yes! We offer integrations with popular tools like Google Classroom, Microsoft Teams, Zoom, and many more. Our API also allows custom integrations with your existing systems."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support via email, live chat, and phone. We also offer extensive documentation, video tutorials, and regular training webinars for new users."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about iLearnova
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-purple-300 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
