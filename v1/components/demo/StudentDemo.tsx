'use client';

import { useState, useEffect } from 'react';
import { Student, students as initialStudents, randomizeAllStudents, getCourseById, calculateOverallProgress } from '@/lib/demo';
import CourseCard from './student/CourseCard';
import QuizInterface from './student/QuizInterface';
import ProgressDashboard from './student/ProgressDashboard';
import { Shuffle } from 'lucide-react';

export default function StudentDemo() {
  const [students, setStudents] = useState(initialStudents);
  const [selectedStudent, setSelectedStudent] = useState<Student>(students[0]);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'dashboard' | 'courses' | 'quiz'>('dashboard');

  useEffect(() => {
    // Update selected student when students change
    const updatedStudent = students.find(s => s.id === selectedStudent.id);
    if (updatedStudent) {
      setSelectedStudent(updatedStudent);
    }
  }, [students, selectedStudent.id]);

  const handleRandomize = () => {
    const randomizedStudents = randomizeAllStudents();
    setStudents(randomizedStudents);
    setSelectedCourseId(null);
    setViewMode('dashboard');
  };

  const handleStartQuiz = (courseId: string) => {
    setSelectedCourseId(courseId);
    setViewMode('quiz');
  };

  const handleQuizComplete = (updatedStudent: Student) => {
    const updatedStudents = students.map(s =>
      s.id === updatedStudent.id ? updatedStudent : s
    );
    setStudents(updatedStudents);
    setSelectedStudent(updatedStudent);
    setViewMode('dashboard');
    setSelectedCourseId(null);
  };

  const overallProgress = calculateOverallProgress(selectedStudent);
  const selectedCourse = selectedCourseId ? getCourseById(selectedCourseId) : null;

  return (
    <div className="space-y-6">
      {/* Student Selector and Randomize */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Student Dashboard</h2>
          <button
            onClick={handleRandomize}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Shuffle className="w-4 h-4" />
            Randomize Progress
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-4xl">{selectedStudent.avatar}</div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Student
            </label>
            <select
              value={selectedStudent.id}
              onChange={(e) => {
                const student = students.find(s => s.id === e.target.value);
                if (student) {
                  setSelectedStudent(student);
                  setSelectedCourseId(null);
                  setViewMode('dashboard');
                }
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {students.map(student => (
                <option key={student.id} value={student.id}>
                  {student.name} - {student.grade}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-sm font-medium text-blue-600">Enrolled Courses</div>
            <div className="text-2xl font-bold text-blue-900">{selectedStudent.enrolledCourses.length}</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-sm font-medium text-green-600">Questions Answered</div>
            <div className="text-2xl font-bold text-green-900">{overallProgress.answeredQuestions}</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-sm font-medium text-purple-600">Correct Answers</div>
            <div className="text-2xl font-bold text-purple-900">{overallProgress.correctAnswers}</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="text-sm font-medium text-orange-600">Average Score</div>
            <div className="text-2xl font-bold text-orange-900">{overallProgress.averageScore}%</div>
          </div>
        </div>
      </div>

      {/* View Tabs */}
      <div className="bg-white rounded-xl shadow-lg p-2">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('dashboard')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'dashboard'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setViewMode('courses')}
            className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              viewMode === 'courses'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            My Courses
          </button>
        </div>
      </div>

      {/* Content Area */}
      {viewMode === 'dashboard' && (
        <ProgressDashboard student={selectedStudent} />
      )}

      {viewMode === 'courses' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedStudent.enrolledCourses.map(courseId => {
            const course = getCourseById(courseId);
            if (!course) return null;
            
            const progress = selectedStudent.progress.find(p => p.courseId === courseId);
            
            return (
              <CourseCard
                key={courseId}
                course={course}
                progress={progress}
                onStartQuiz={() => handleStartQuiz(courseId)}
              />
            );
          })}
        </div>
      )}

      {viewMode === 'quiz' && selectedCourse && (
        <QuizInterface
          course={selectedCourse}
          student={selectedStudent}
          onComplete={handleQuizComplete}
          onBack={() => {
            setViewMode('courses');
            setSelectedCourseId(null);
          }}
        />
      )}
    </div>
  );
}
