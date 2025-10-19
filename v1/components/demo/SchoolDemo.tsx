'use client';

import { useState } from 'react';
import { schools, students as initialStudents, teachers, allCourses, randomizeAllStudents } from '@/lib/demo';
import { Building2, Users, BookOpen, TrendingUp, Shuffle, GraduationCap, Award } from 'lucide-react';

export default function SchoolDemo() {
  const [selectedSchool, setSelectedSchool] = useState(schools[0]);
  const [students, setStudents] = useState(initialStudents);

  const handleRandomize = () => {
    const randomizedStudents = randomizeAllStudents();
    setStudents(randomizedStudents);
  };

  // Get students and courses for the selected school
  const schoolCourses = allCourses.filter(course => selectedSchool.coursesOffered.includes(course.id));
  const schoolTeachers = teachers.filter(teacher => 
    teacher.coursesTaught.some(courseId => selectedSchool.coursesOffered.includes(courseId))
  );

  // Calculate overall statistics
  const totalEnrollments = students.reduce((sum, student) => {
    return sum + student.enrolledCourses.filter(courseId => selectedSchool.coursesOffered.includes(courseId)).length;
  }, 0);

  const totalQuestionsAnswered = students.reduce((sum, student) => {
    return sum + student.progress
      .filter(p => selectedSchool.coursesOffered.includes(p.courseId))
      .reduce((pSum, p) => pSum + p.questionsAnswered, 0);
  }, 0);

  const totalCorrectAnswers = students.reduce((sum, student) => {
    return sum + student.progress
      .filter(p => selectedSchool.coursesOffered.includes(p.courseId))
      .reduce((pSum, p) => pSum + p.correctAnswers, 0);
  }, 0);

  const overallAccuracy = totalQuestionsAnswered > 0 
    ? Math.round((totalCorrectAnswers / totalQuestionsAnswered) * 100)
    : 0;

  return (
    <div className="space-y-6">
      {/* School Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">School Administration Dashboard</h2>
          <button
            onClick={handleRandomize}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Shuffle className="w-4 h-4" />
            Randomize Data
          </button>
        </div>

        {/* School Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select School
          </label>
          <select
            value={selectedSchool.id}
            onChange={(e) => {
              const school = schools.find(s => s.id === e.target.value);
              if (school) setSelectedSchool(school);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          >
            {schools.map(school => (
              <option key={school.id} value={school.id}>
                {school.name} ({school.type})
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-3xl">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{selectedSchool.name}</h3>
            <p className="text-gray-600">{selectedSchool.type}</p>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Students</span>
            </div>
            <div className="text-2xl font-bold text-blue-900">{selectedSchool.studentsCount}</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">Teachers</span>
            </div>
            <div className="text-2xl font-bold text-green-900">{selectedSchool.teachersCount}</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-purple-600 mb-2">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium">Courses</span>
            </div>
            <div className="text-2xl font-bold text-purple-900">{selectedSchool.coursesOffered.length}</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-center gap-2 text-orange-600 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm font-medium">Enrollments</span>
            </div>
            <div className="text-2xl font-bold text-orange-900">{totalEnrollments}</div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-purple-600" />
          School-Wide Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-6">
            <div className="text-sm font-medium text-indigo-600 mb-2">Total Questions Answered</div>
            <div className="text-3xl font-bold text-indigo-900">{totalQuestionsAnswered}</div>
            <div className="text-sm text-indigo-700 mt-1">Across all courses</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <div className="text-sm font-medium text-green-600 mb-2">Correct Answers</div>
            <div className="text-3xl font-bold text-green-900">{totalCorrectAnswers}</div>
            <div className="text-sm text-green-700 mt-1">Total correct responses</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <div className="text-sm font-medium text-purple-600 mb-2">Overall Accuracy</div>
            <div className="text-3xl font-bold text-purple-900">{overallAccuracy}%</div>
            <div className="text-sm text-purple-700 mt-1">School average</div>
          </div>
        </div>
      </div>

      {/* Course Performance */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Performance Overview</h3>
        <div className="space-y-4">
          {schoolCourses.map(course => {
            const enrolledStudents = students.filter(s => s.enrolledCourses.includes(course.id));
            const totalStudents = enrolledStudents.length;
            
            const courseStats = enrolledStudents.reduce((acc, student) => {
              const progress = student.progress.find(p => p.courseId === course.id);
              if (progress) {
                acc.totalAnswered += progress.questionsAnswered;
                acc.totalCorrect += progress.correctAnswers;
                if (progress.questionsAnswered === course.questions.length) {
                  acc.completed++;
                }
              }
              return acc;
            }, { totalAnswered: 0, totalCorrect: 0, completed: 0 });

            const avgCompletion = totalStudents > 0
              ? Math.round((courseStats.totalAnswered / (totalStudents * course.questions.length)) * 100)
              : 0;
            
            const avgAccuracy = courseStats.totalAnswered > 0
              ? Math.round((courseStats.totalCorrect / courseStats.totalAnswered) * 100)
              : 0;

            return (
              <div key={course.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{course.title}</h4>
                    <p className="text-sm text-gray-600">{course.subject} • {course.level}</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    {totalStudents} students enrolled
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Avg. Completion</div>
                    <div className="text-lg font-semibold text-indigo-600">{avgCompletion}%</div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div
                        className="bg-indigo-600 h-1.5 rounded-full"
                        style={{ width: `${avgCompletion}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Avg. Accuracy</div>
                    <div className="text-lg font-semibold text-green-600">{avgAccuracy}%</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Questions Answered</div>
                    <div className="text-lg font-semibold text-gray-900">{courseStats.totalAnswered}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Completed</div>
                    <div className="text-lg font-semibold text-purple-600">
                      {courseStats.completed}/{totalStudents}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Faculty Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Faculty Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schoolTeachers.map(teacher => (
            <div key={teacher.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">{teacher.avatar}</div>
                <div>
                  <h4 className="font-semibold text-gray-900">{teacher.name}</h4>
                  <p className="text-sm text-gray-600">{teacher.subject}</p>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Courses:</span>
                  <span className="font-medium text-gray-900">{teacher.coursesTaught.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students:</span>
                  <span className="font-medium text-gray-900">{teacher.studentsCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
