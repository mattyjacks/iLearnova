'use client';

import { Student, getCourseById } from '@/lib/demo';
import { TrendingUp, Award, Clock } from 'lucide-react';

interface ProgressDashboardProps {
  student: Student;
}

export default function ProgressDashboard({ student }: ProgressDashboardProps) {
  return (
    <div className="space-y-6">
      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-600" />
          Recent Activity
        </h3>
        <div className="space-y-3">
          {student.progress
            .sort((a, b) => new Date(b.lastAccessed).getTime() - new Date(a.lastAccessed).getTime())
            .slice(0, 5)
            .map(progress => {
              const course = getCourseById(progress.courseId);
              if (!course) return null;

              const progressPercentage = (progress.questionsAnswered / course.questions.length) * 100;
              const accuracy = progress.questionsAnswered > 0 
                ? Math.round((progress.correctAnswers / progress.questionsAnswered) * 100)
                : 0;

              return (
                <div key={progress.courseId} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{course.title}</h4>
                      <p className="text-sm text-gray-600">{course.subject}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(progress.lastAccessed).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-3">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Progress</div>
                      <div className="text-sm font-semibold text-gray-900">
                        {progress.questionsAnswered}/{course.questions.length}
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className="bg-indigo-600 h-1.5 rounded-full"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Correct</div>
                      <div className="text-sm font-semibold text-green-600">
                        {progress.correctAnswers}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Accuracy</div>
                      <div className="text-sm font-semibold text-purple-600">
                        {accuracy}%
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Course Performance */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          Course Performance
        </h3>
        <div className="space-y-4">
          {student.enrolledCourses.map(courseId => {
            const course = getCourseById(courseId);
            const progress = student.progress.find(p => p.courseId === courseId);
            
            if (!course) return null;

            const questionsAnswered = progress?.questionsAnswered || 0;
            const correctAnswers = progress?.correctAnswers || 0;
            const totalQuestions = course.questions.length;
            const completionRate = (questionsAnswered / totalQuestions) * 100;
            const accuracy = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0;

            return (
              <div key={courseId} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{course.title}</h4>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="text-gray-600">Completion: </span>
                      <span className="font-semibold text-indigo-600">{Math.round(completionRate)}%</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-600">Accuracy: </span>
                      <span className="font-semibold text-green-600">{accuracy}%</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${completionRate}%` }}
                  />
                </div>
                <div className="mt-1 text-xs text-gray-600">
                  {questionsAnswered} of {totalQuestions} questions completed
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-600" />
          Achievements
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {student.progress.some(p => p.questionsAnswered >= getCourseById(p.courseId)!.questions.length) && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-sm font-semibold text-yellow-900">Course Completed</div>
            </div>
          )}
          {student.progress.some(p => p.questionsAnswered > 0 && (p.correctAnswers / p.questionsAnswered) === 1) && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💯</div>
              <div className="text-sm font-semibold text-green-900">Perfect Score</div>
            </div>
          )}
          {student.enrolledCourses.length >= 3 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-sm font-semibold text-blue-900">Multi-Course Learner</div>
            </div>
          )}
          {student.progress.reduce((sum, p) => sum + p.questionsAnswered, 0) >= 50 && (
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-sm font-semibold text-purple-900">50+ Questions</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
