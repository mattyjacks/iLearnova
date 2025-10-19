'use client';

import { useState } from 'react';
import Link from 'next/link';
import { DemoState } from '@/lib/demo';
import UserTypeSelector from '@/components/demo/UserTypeSelector';
import StudentDemo from '@/components/demo/StudentDemo';
import TeacherDemo from '@/components/demo/TeacherDemo';
import SchoolDemo from '@/components/demo/SchoolDemo';
import ParentDemo from '@/components/demo/ParentDemo';

export default function DemoPage() {
  const [demoState, setDemoState] = useState<DemoState>({
    userType: 'student'
  });

  const renderDemoView = () => {
    switch (demoState.userType) {
      case 'student':
        return <StudentDemo />;
      case 'teacher':
        return <TeacherDemo />;
      case 'school':
        return <SchoolDemo />;
      case 'parent':
        return <ParentDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                iLearnova <span className="text-indigo-600">Interactive Demo</span>
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Experience the platform from different perspectives
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* User Type Selector */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UserTypeSelector
          currentType={demoState.userType}
          onTypeChange={(type) => setDemoState({ ...demoState, userType: type })}
        />
      </div>

      {/* Demo View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {renderDemoView()}
      </div>
    </div>
  );
}
