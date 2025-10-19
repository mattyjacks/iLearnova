'use client';

import { useState } from 'react';
import { teachers, students as initialStudents, getCourseById, randomizeAllStudents } from '@/lib/demo';
import { Users, BookOpen, TrendingUp, Shuffle, Award } from 'lucide-react';

export default function TeacherDemo() {
  const [selectedTeacher] = useState(teachers[0]);
  const [students, setStudents] = useState(initialStudents);
  const [selectedCourseId, setSelectedCourseId] = useState(selectedTeacher.coursesTaught[0]);

  const handleRandomize = () => {
    const randomizedStudents = randomizeAllStudents();
    setStudents(randomizedStudents);
  };

  const selectedCourse = getCourseById(selectedCourseId);
  const enrolledStudents = students.filter(s => s.enrolledCourses.includes(selectedCourseId));

  return (
    <div className="space-y-6">
      {/* Teacher Info */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h2>
          <button
            onClick={handleRandomize}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Shuffle className="w-4 h-4" />
            Randomize Student Data
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="text-5xl">{selectedTeacher.avatar}</div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{selectedTeacher.name}</h3>
            <p className="text-gray-600">{selectedTeacher.subject} Teacher</p>
            <p className="text-sm text-gray-500">{selectedTeacher.email}</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">Courses Teaching</span>
            </div>
            <div className="text-2xl font-bold text-blue-900">{selectedTeacher.coursesTaught.length}</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Total Students</span>
            </div>
            <div className="text-2xl font-bold text-green-900">{selectedTeacher.studentsCount}</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Active Enrollment</span>
            </div>
            <div className="text-2xl font-bold text-purple-900">{enrolledStudents.length}</div>
          </div>
        </div>
      </div>

      {/* Course Selection */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Course to Monitor</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedTeacher.coursesTaught.map(courseId => {
            const course = getCourseById(courseId);
            if (!course) return null;

            const courseStudents = students.filter(s => s.enrolledCourses.includes(courseId));
            const isSelected = courseId === selectedCourseId;

            return (
              <button
                key={courseId}
                onClick={() => setSelectedCourseId(courseId)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  isSelected
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <h4 className="font-semibold text-gray-900 mb-1">{course.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{course.subject}</p>
                <div className="text-sm font-medium text-green-600">
                  {courseStudents.length} students enrolled
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Student Performance */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Student Performance - {selectedCourse?.title}
        </h3>
        
        {enrolledStudents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No students enrolled in this course
          </div>
        ) : (
          <div className="space-y-3">
            {enrolledStudents.map(student => {
              const progress = student.progress.find(p => p.courseId === selectedCourseId);
              const totalQuestions = selectedCourse?.questions.length || 0;
              const answeredQuestions = progress?.questionsAnswered || 0;
              const correctAnswers = progress?.correctAnswers || 0;
              const completionRate = totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;
              const accuracy = answeredQuestions > 0 ? Math.round((correctAnswers / answeredQuestions) * 100) : 0;

              return (
                <div key={student.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{student.avatar}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{student.name}</h4>
                        <p className="text-sm text-gray-600">{student.grade}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {completionRate === 100 && (
                        <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                          <Award className="w-3 h-3" />
                          Completed
                        </div>
                      )}
                      {accuracy >= 90 && answeredQuestions > 5 && (
                        <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                          Top Performer
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Completion</div>
                      <div className="text-lg font-semibold text-indigo-600">
                        {Math.round(completionRate)}%
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className="bg-indigo-600 h-1.5 rounded-full"
                          style={{ width: `${completionRate}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Questions Answered</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {answeredQuestions}/{totalQuestions}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Correct Answers</div>
                      <div className="text-lg font-semibold text-green-600">
                        {correctAnswers}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-600 mb-1">Accuracy</div>
                      <div className="text-lg font-semibold text-purple-600">
                        {accuracy}%
                      </div>
                    </div>
                  </div>

                  {progress && (
                    <div className="mt-2 text-xs text-gray-500">
                      Last active: {new Date(progress.lastAccessed).toLocaleDateString()}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Class Analytics */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Class Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(() => {
            const totalStudents = enrolledStudents.length;
            const completedStudents = enrolledStudents.filter(s => {
              const progress = s.progress.find(p => p.courseId === selectedCourseId);
              return progress && progress.questionsAnswered === selectedCourse?.questions.length;
            }).length;
            
            const avgCompletion = enrolledStudents.reduce((sum, s) => {
              const progress = s.progress.find(p => p.courseId === selectedCourseId);
              const completion = progress ? (progress.questionsAnswered / (selectedCourse?.questions.length || 1)) * 100 : 0;
              return sum + completion;
            }, 0) / (totalStudents || 1);

            const avgAccuracy = enrolledStudents.reduce((sum, s) => {
              const progress = s.progress.find(p => p.courseId === selectedCourseId);
              const accuracy = progress && progress.questionsAnswered > 0 
                ? (progress.correctAnswers / progress.questionsAnswered) * 100 
                : 0;
              return sum + accuracy;
            }, 0) / (totalStudents || 1);

            return (
              <>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                  <div className="text-sm font-medium text-blue-600 mb-2">Students Completed</div>
                  <div className="text-3xl font-bold text-blue-900 mb-1">
                    {completedStudents}/{totalStudents}
                  </div>
                  <div className="text-sm text-blue-700">
                    {totalStudents > 0 ? Math.round((completedStudents / totalStudents) * 100) : 0}% completion rate
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                  <div className="text-sm font-medium text-green-600 mb-2">Average Completion</div>
                  <div className="text-3xl font-bold text-green-900 mb-1">
                    {Math.round(avgCompletion)}%
                  </div>
                  <div className="text-sm text-green-700">
                    Class progress
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                  <div className="text-sm font-medium text-purple-600 mb-2">Average Accuracy</div>
                  <div className="text-3xl font-bold text-purple-900 mb-1">
                    {Math.round(avgAccuracy)}%
                  </div>
                  <div className="text-sm text-purple-700">
                    Class performance
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
