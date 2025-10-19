"use client";

import { Check, Sparkles } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "9.99",
      period: "month",
      description: "Perfect for individual students",
      features: [
        "Access to 100+ courses",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "Assignment submission",
        "1 GB storage"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Pro",
      price: "29.99",
      period: "month",
      description: "Ideal for teachers and small schools",
      features: [
        "Everything in Basic",
        "Unlimited courses",
        "Advanced analytics",
        "Priority support",
        "Live virtual classes",
        "10 GB storage",
        "Custom branding",
        "Grade book"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large institutions",
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "24/7 phone support",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "On-premise option",
        "Advanced security"
      ],
      popular: false,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-gray-300">
          Choose the plan that fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-8 backdrop-blur-lg border-2 transition-all duration-300 hover:scale-105 ${
              plan.popular
                ? 'bg-white/20 border-yellow-400 shadow-2xl shadow-yellow-500/50'
                : 'bg-white/10 border-white/20 hover:border-white/40'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Most Popular</span>
                </div>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {plan.description}
              </p>
              <div className="flex items-baseline justify-center">
                {plan.price !== "Custom" && (
                  <span className="text-4xl font-black text-white">$</span>
                )}
                <span className="text-5xl md:text-6xl font-black text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                )}
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-4 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 ${
                plan.popular
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg hover:shadow-yellow-500/50'
                  : 'bg-white/20 hover:bg-white/30 border border-white/30'
              }`}
            >
              {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-300 text-lg">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </div>
  );
}
