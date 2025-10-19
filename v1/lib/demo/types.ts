export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  subject: string;
  level: string;
  duration: string;
  instructor: string;
  questions: QuizQuestion[];
}

export interface StudentProgress {
  courseId: string;
  questionsAnswered: number;
  correctAnswers: number;
  lastAccessed: Date;
  completedQuestions: string[];
}

export interface Student {
  id: string;
  name: string;
  email: string;
  grade: string;
  avatar: string;
  enrolledCourses: string[];
  progress: StudentProgress[];
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
  avatar: string;
  coursesTaught: string[];
  studentsCount: number;
}

export interface School {
  id: string;
  name: string;
  type: string;
  studentsCount: number;
  teachersCount: number;
  coursesOffered: string[];
}

export interface Parent {
  id: string;
  name: string;
  email: string;
  avatar: string;
  children: string[];
}

export interface DemoState {
  userType: 'student' | 'teacher' | 'school' | 'parent';
  selectedStudent?: Student;
  selectedTeacher?: Teacher;
  selectedSchool?: School;
  selectedParent?: Parent;
}
