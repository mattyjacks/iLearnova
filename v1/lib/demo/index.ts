import { mathCourse } from './math-course';
import { scienceCourse } from './science-course';
import { industrialDesignCourse } from './industrial-design-course';
import { artHistoryCourse } from './art-history-course';
import { englishCourse } from './english-course';
import { students } from './students';
import { teachers } from './teachers';
import { schools } from './schools';
import { parents } from './parents';
import { Student, StudentProgress, Course } from './types';

export * from './types';
export { mathCourse, scienceCourse, industrialDesignCourse, artHistoryCourse, englishCourse };
export { students, teachers, schools, parents };

export const allCourses = [
  mathCourse,
  scienceCourse,
  industrialDesignCourse,
  artHistoryCourse,
  englishCourse
];

// Utility function to get a random number between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Utility function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Function to randomize student progress
export function randomizeStudentProgress(student: Student, availableCourses: Course[]): Student {
  // Randomly select 1-4 courses
  const numCourses = getRandomInt(1, 4);
  const selectedCourses = shuffleArray(availableCourses).slice(0, numCourses);
  
  const newProgress: StudentProgress[] = selectedCourses.map(course => {
    const totalQuestions = course.questions.length;
    const answeredCount = getRandomInt(0, totalQuestions);
    const correctCount = Math.floor(answeredCount * (0.6 + Math.random() * 0.4)); // 60-100% correct
    
    const completedQuestions = shuffleArray(course.questions)
      .slice(0, answeredCount)
      .map(q => q.id);
    
    return {
      courseId: course.id,
      questionsAnswered: answeredCount,
      correctAnswers: correctCount,
      lastAccessed: new Date(Date.now() - getRandomInt(0, 7) * 24 * 60 * 60 * 1000), // Last 7 days
      completedQuestions
    };
  });
  
  return {
    ...student,
    enrolledCourses: selectedCourses.map(c => c.id),
    progress: newProgress
  };
}

// Function to randomize all students
export function randomizeAllStudents(): Student[] {
  return students.map(student => randomizeStudentProgress(student, allCourses));
}

// Function to get course by ID
export function getCourseById(courseId: string): Course | undefined {
  return allCourses.find(course => course.id === courseId);
}

// Function to get student by ID
export function getStudentById(studentId: string, studentsList: Student[] = students): Student | undefined {
  return studentsList.find(student => student.id === studentId);
}

// Function to get teacher by ID
export function getTeacherById(teacherId: string): typeof teachers[0] | undefined {
  return teachers.find(teacher => teacher.id === teacherId);
}

// Function to get school by ID
export function getSchoolById(schoolId: string): typeof schools[0] | undefined {
  return schools.find(school => school.id === schoolId);
}

// Function to get parent by ID
export function getParentById(parentId: string): typeof parents[0] | undefined {
  return parents.find(parent => parent.id === parentId);
}

// Calculate overall progress for a student
export function calculateOverallProgress(student: Student): {
  totalQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
  averageScore: number;
} {
  const totalAnswered = student.progress.reduce((sum, p) => sum + p.questionsAnswered, 0);
  const totalCorrect = student.progress.reduce((sum, p) => sum + p.correctAnswers, 0);
  const totalQuestions = student.enrolledCourses.reduce((sum, courseId) => {
    const course = getCourseById(courseId);
    return sum + (course?.questions.length || 0);
  }, 0);
  
  const averageScore = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  
  return {
    totalQuestions,
    answeredQuestions: totalAnswered,
    correctAnswers: totalCorrect,
    averageScore
  };
}
