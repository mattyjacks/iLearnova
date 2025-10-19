'use client';

import { GraduationCap, BookOpen, Building2, Users } from 'lucide-react';

interface UserTypeSelectorProps {
  currentType: 'student' | 'teacher' | 'school' | 'parent';
  onTypeChange: (type: 'student' | 'teacher' | 'school' | 'parent') => void;
}

export default function UserTypeSelector({ currentType, onTypeChange }: UserTypeSelectorProps) {
  const userTypes = [
    {
      type: 'student' as const,
      label: 'Student',
      icon: GraduationCap,
      description: 'Take courses and track your progress',
      color: 'bg-blue-500'
    },
    {
      type: 'teacher' as const,
      label: 'Teacher',
      icon: BookOpen,
      description: 'Manage classes and monitor student performance',
      color: 'bg-green-500'
    },
    {
      type: 'school' as const,
      label: 'School',
      icon: Building2,
      description: 'View analytics and oversee multiple classes',
      color: 'bg-purple-500'
    },
    {
      type: 'parent' as const,
      label: 'Parent',
      icon: Users,
      description: 'Monitor your child\'s learning progress',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Your View</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {userTypes.map((userType) => {
          const Icon = userType.icon;
          const isActive = currentType === userType.type;
          
          return (
            <button
              key={userType.type}
              onClick={() => onTypeChange(userType.type)}
              className={`relative p-6 rounded-lg border-2 transition-all duration-200 text-left ${
                isActive
                  ? 'border-indigo-500 bg-indigo-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-indigo-300 hover:shadow-sm'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg ${userType.color} flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {userType.label}
              </h3>
              <p className="text-sm text-gray-600">
                {userType.description}
              </p>
              {isActive && (
                <div className="absolute top-4 right-4">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
