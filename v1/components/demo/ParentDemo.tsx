'use client';

import { useState } from 'react';
import { parents, students as initialStudents, getCourseById, getStudentById, randomizeAllStudents, calculateOverallProgress } from '@/lib/demo';
import { Users, Shuffle, TrendingUp, Award, AlertCircle, CheckCircle } from 'lucide-react';

export default function ParentDemo() {
  const [selectedParent, setSelectedParent] = useState(parents[0]);
  const [students, setStudents] = useState(initialStudents);

  const handleRandomize = () => {
    const randomizedStudents = randomizeAllStudents();
    setStudents(randomizedStudents);
  };

  const children = selectedParent.children
    .map(childId => getStudentById(childId, students))
    .filter(Boolean);

  return (
    <div className="space-y-6">
      {/* Parent Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Parent Dashboard</h2>
          <button
            onClick={handleRandomize}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            <Shuffle className="w-4 h-4" />
            Randomize Progress
          </button>
        </div>

        {/* Parent Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Parent Account
          </label>
          <select
            value={selectedParent.id}
            onChange={(e) => {
              const parent = parents.find(p => p.id === e.target.value);
              if (parent) setSelectedParent(parent);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            {parents.map(parent => (
              <option key={parent.id} value={parent.id}>
                {parent.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-5xl">{selectedParent.avatar}</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{selectedParent.name}</h3>
            <p className="text-gray-600">{selectedParent.email}</p>
            <p className="text-sm text-gray-500 mt-1">
              {children.length} {children.length === 1 ? 'child' : 'children'} enrolled
            </p>
          </div>
        </div>
      </div>

      {/* Children Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-orange-600" />
          My Children
        </h3>
        <div className="space-y-6">
          {children.map(child => {
            if (!child) return null;
            
            const overallProgress = calculateOverallProgress(child);
            const needsAttention = overallProgress.averageScore < 70 && overallProgress.answeredQuestions > 5;
            const excelling = overallProgress.averageScore >= 90 && overallProgress.answeredQuestions > 10;

            return (
              <div key={child.id} className="border-2 border-gray-200 rounded-xl p-6">
                {/* Child Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{child.avatar}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{child.name}</h4>
                      <p className="text-gray-600">{child.grade}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {excelling && (
                      <div className="flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        <Award className="w-4 h-4" />
                        Excelling
                      </div>
                    )}
                    {needsAttention && (
                      <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                        <AlertCircle className="w-4 h-4" />
                        Needs Support
                      </div>
                    )}
                  </div>
                </div>

                {/* Overall Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-xs text-blue-600 font-medium mb-1">Enrolled Courses</div>
                    <div className="text-2xl font-bold text-blue-900">{child.enrolledCourses.length}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-xs text-green-600 font-medium mb-1">Questions Answered</div>
                    <div className="text-2xl font-bold text-green-900">{overallProgress.answeredQuestions}</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-xs text-purple-600 font-medium mb-1">Correct Answers</div>
                    <div className="text-2xl font-bold text-purple-900">{overallProgress.correctAnswers}</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="text-xs text-orange-600 font-medium mb-1">Average Score</div>
                    <div className="text-2xl font-bold text-orange-900">{overallProgress.averageScore}%</div>
                  </div>
                </div>

                {/* Course Progress */}
                <div className="space-y-3">
                  <h5 className="font-medium text-gray-900 text-sm">Course Progress</h5>
                  {child.enrolledCourses.map(courseId => {
                    const course = getCourseById(courseId);
                    const progress = child.progress.find(p => p.courseId === courseId);
                    
                    if (!course) return null;

                    const totalQuestions = course.questions.length;
                    const answeredQuestions = progress?.questionsAnswered || 0;
                    const correctAnswers = progress?.correctAnswers || 0;
                    const completionRate = (answeredQuestions / totalQuestions) * 100;
                    const accuracy = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;
                    const isComplete = answeredQuestions === totalQuestions;
                    const lowPerformance = accuracy < 70 && answeredQuestions > 3;

                    return (
                      <div key={courseId} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h6 className="font-semibold text-gray-900">{course.title}</h6>
                              {isComplete && (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              )}
                              {lowPerformance && (
                                <AlertCircle className="w-4 h-4 text-yellow-600" />
                              )}
                            </div>
                            <p className="text-xs text-gray-600">{course.subject}</p>
                          </div>
                          {progress && (
                            <div className="text-xs text-gray-500">
                              Last active: {new Date(progress.lastAccessed).toLocaleDateString()}
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Progress</div>
                            <div className="text-sm font-semibold text-gray-900">
                              {answeredQuestions}/{totalQuestions}
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                              <div
                                className="bg-indigo-600 h-1.5 rounded-full"
                                style={{ width: `${completionRate}%` }}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Accuracy</div>
                            <div className={`text-sm font-semibold ${
                              accuracy >= 90 ? 'text-green-600' :
                              accuracy >= 70 ? 'text-blue-600' :
                              'text-yellow-600'
                            }`}>
                              {accuracy}%
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Completion</div>
                            <div className="text-sm font-semibold text-purple-600">
                              {Math.round(completionRate)}%
                            </div>
                          </div>
                        </div>

                        {lowPerformance && (
                          <div className="mt-2 text-xs text-yellow-700 bg-yellow-50 rounded p-2">
                            💡 Consider reviewing this material together
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Insights & Recommendations */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-orange-600" />
          Insights & Recommendations
        </h3>
        <div className="space-y-3">
          {children.map(child => {
            if (!child) return null;
            
            const insights = [];
            const overallProgress = calculateOverallProgress(child);

            // Check for high performers
            if (overallProgress.averageScore >= 90 && overallProgress.answeredQuestions > 10) {
              insights.push({
                type: 'success',
                message: `${child.name} is excelling! Consider enrolling them in more advanced courses.`
              });
            }

            // Check for low performance
            if (overallProgress.averageScore < 70 && overallProgress.answeredQuestions > 5) {
              insights.push({
                type: 'warning',
                message: `${child.name} may need additional support. Consider reviewing material together.`
              });
            }

            // Check for inactive students
            const recentActivity = child.progress.some(p => {
              const daysSinceActivity = (Date.now() - new Date(p.lastAccessed).getTime()) / (1000 * 60 * 60 * 24);
              return daysSinceActivity <= 3;
            });

            if (!recentActivity && child.progress.length > 0) {
              insights.push({
                type: 'info',
                message: `${child.name} hasn't been active recently. Encourage them to continue learning.`
              });
            }

            // Check for completed courses
            const completedCourses = child.progress.filter(p => {
              const course = getCourseById(p.courseId);
              return course && p.questionsAnswered === course.questions.length;
            });

            if (completedCourses.length > 0) {
              insights.push({
                type: 'success',
                message: `${child.name} has completed ${completedCourses.length} course${completedCourses.length > 1 ? 's' : ''}! 🎉`
              });
            }

            return insights.map((insight, index) => (
              <div
                key={`${child.id}-${index}`}
                className={`p-4 rounded-lg border ${
                  insight.type === 'success' ? 'bg-green-50 border-green-200' :
                  insight.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-blue-50 border-blue-200'
                }`}
              >
                <p className={`text-sm ${
                  insight.type === 'success' ? 'text-green-800' :
                  insight.type === 'warning' ? 'text-yellow-800' :
                  'text-blue-800'
                }`}>
                  {insight.message}
                </p>
              </div>
            ));
          })}
        </div>
      </div>
    </div>
  );
}
