'use client';

import { Course, StudentProgress } from '@/lib/demo';
import { BookOpen, Clock, User, TrendingUp } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  progress?: StudentProgress;
  onStartQuiz: () => void;
}

export default function CourseCard({ course, progress, onStartQuiz }: CourseCardProps) {
  const totalQuestions = course.questions.length;
  const answeredQuestions = progress?.questionsAnswered || 0;
  const correctAnswers = progress?.correctAnswers || 0;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;
  const accuracy = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm font-medium opacity-90">{course.subject}</div>
            <h3 className="text-xl font-bold mt-1">{course.title}</h3>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-semibold">
            {course.level}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>

        {/* Course Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <BookOpen className="w-4 h-4" />
            <span>{totalQuestions} questions</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="font-medium text-gray-700">Progress</span>
            <span className="text-gray-600">{answeredQuestions}/{totalQuestions}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        {answeredQuestions > 0 && (
          <div className="flex gap-2 mb-4">
            <div className="flex-1 bg-green-50 rounded-lg p-3">
              <div className="flex items-center gap-1 text-green-600 text-xs font-medium mb-1">
                <TrendingUp className="w-3 h-3" />
                Accuracy
              </div>
              <div className="text-lg font-bold text-green-900">{accuracy}%</div>
            </div>
            <div className="flex-1 bg-blue-50 rounded-lg p-3">
              <div className="text-blue-600 text-xs font-medium mb-1">Completed</div>
              <div className="text-lg font-bold text-blue-900">{Math.round(progressPercentage)}%</div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <button
          onClick={onStartQuiz}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          {answeredQuestions === 0 ? 'Start Course' : answeredQuestions === totalQuestions ? 'Review Questions' : 'Continue Learning'}
        </button>
      </div>
    </div>
  );
}
