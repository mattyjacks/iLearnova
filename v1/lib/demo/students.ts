import { Student } from './types';

export const students: Student[] = [
  {
    id: 'student-1',
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    grade: '10th Grade',
    avatar: '👨‍🎓',
    enrolledCourses: ['math-101', 'science-101', 'english-101'],
    progress: [
      {
        courseId: 'math-101',
        questionsAnswered: 12,
        correctAnswers: 10,
        lastAccessed: new Date('2025-10-15'),
        completedQuestions: ['math-q1', 'math-q2', 'math-q3', 'math-q4', 'math-q5', 'math-q6', 'math-q7', 'math-q8', 'math-q9', 'math-q10', 'math-q11', 'math-q12']
      },
      {
        courseId: 'science-101',
        questionsAnswered: 8,
        correctAnswers: 7,
        lastAccessed: new Date('2025-10-18'),
        completedQuestions: ['sci-q1', 'sci-q2', 'sci-q3', 'sci-q4', 'sci-q5', 'sci-q6', 'sci-q7', 'sci-q8']
      },
      {
        courseId: 'english-101',
        questionsAnswered: 15,
        correctAnswers: 13,
        lastAccessed: new Date('2025-10-19'),
        completedQuestions: ['eng-q1', 'eng-q2', 'eng-q3', 'eng-q4', 'eng-q5', 'eng-q6', 'eng-q7', 'eng-q8', 'eng-q9', 'eng-q10', 'eng-q11', 'eng-q12', 'eng-q13', 'eng-q14', 'eng-q15']
      }
    ]
  },
  {
    id: 'student-2',
    name: 'Emma Davis',
    email: 'emma.davis@email.com',
    grade: '11th Grade',
    avatar: '👩‍🎓',
    enrolledCourses: ['art-101', 'design-101', 'english-101'],
    progress: [
      {
        courseId: 'art-101',
        questionsAnswered: 20,
        correctAnswers: 18,
        lastAccessed: new Date('2025-10-19'),
        completedQuestions: ['art-q1', 'art-q2', 'art-q3', 'art-q4', 'art-q5', 'art-q6', 'art-q7', 'art-q8', 'art-q9', 'art-q10', 'art-q11', 'art-q12', 'art-q13', 'art-q14', 'art-q15', 'art-q16', 'art-q17', 'art-q18', 'art-q19', 'art-q20']
      },
      {
        courseId: 'design-101',
        questionsAnswered: 10,
        correctAnswers: 9,
        lastAccessed: new Date('2025-10-17'),
        completedQuestions: ['design-q1', 'design-q2', 'design-q3', 'design-q4', 'design-q5', 'design-q6', 'design-q7', 'design-q8', 'design-q9', 'design-q10']
      },
      {
        courseId: 'english-101',
        questionsAnswered: 5,
        correctAnswers: 5,
        lastAccessed: new Date('2025-10-16'),
        completedQuestions: ['eng-q1', 'eng-q2', 'eng-q3', 'eng-q4', 'eng-q5']
      }
    ]
  },
  {
    id: 'student-3',
    name: 'Marcus Williams',
    email: 'marcus.williams@email.com',
    grade: '9th Grade',
    avatar: '👦',
    enrolledCourses: ['math-101', 'science-101'],
    progress: [
      {
        courseId: 'math-101',
        questionsAnswered: 6,
        correctAnswers: 4,
        lastAccessed: new Date('2025-10-18'),
        completedQuestions: ['math-q1', 'math-q2', 'math-q3', 'math-q4', 'math-q5', 'math-q6']
      },
      {
        courseId: 'science-101',
        questionsAnswered: 14,
        correctAnswers: 12,
        lastAccessed: new Date('2025-10-19'),
        completedQuestions: ['sci-q1', 'sci-q2', 'sci-q3', 'sci-q4', 'sci-q5', 'sci-q6', 'sci-q7', 'sci-q8', 'sci-q9', 'sci-q10', 'sci-q11', 'sci-q12', 'sci-q13', 'sci-q14']
      }
    ]
  },
  {
    id: 'student-4',
    name: 'Sophia Martinez',
    email: 'sophia.martinez@email.com',
    grade: '12th Grade',
    avatar: '👧',
    enrolledCourses: ['design-101', 'art-101', 'english-101', 'math-101'],
    progress: [
      {
        courseId: 'design-101',
        questionsAnswered: 18,
        correctAnswers: 16,
        lastAccessed: new Date('2025-10-19'),
        completedQuestions: ['design-q1', 'design-q2', 'design-q3', 'design-q4', 'design-q5', 'design-q6', 'design-q7', 'design-q8', 'design-q9', 'design-q10', 'design-q11', 'design-q12', 'design-q13', 'design-q14', 'design-q15', 'design-q16', 'design-q17', 'design-q18']
      },
      {
        courseId: 'art-101',
        questionsAnswered: 11,
        correctAnswers: 10,
        lastAccessed: new Date('2025-10-18'),
        completedQuestions: ['art-q1', 'art-q2', 'art-q3', 'art-q4', 'art-q5', 'art-q6', 'art-q7', 'art-q8', 'art-q9', 'art-q10', 'art-q11']
      },
      {
        courseId: 'english-101',
        questionsAnswered: 20,
        correctAnswers: 19,
        lastAccessed: new Date('2025-10-19'),
        completedQuestions: ['eng-q1', 'eng-q2', 'eng-q3', 'eng-q4', 'eng-q5', 'eng-q6', 'eng-q7', 'eng-q8', 'eng-q9', 'eng-q10', 'eng-q11', 'eng-q12', 'eng-q13', 'eng-q14', 'eng-q15', 'eng-q16', 'eng-q17', 'eng-q18', 'eng-q19', 'eng-q20']
      },
      {
        courseId: 'math-101',
        questionsAnswered: 9,
        correctAnswers: 8,
        lastAccessed: new Date('2025-10-17'),
        completedQuestions: ['math-q1', 'math-q2', 'math-q3', 'math-q4', 'math-q5', 'math-q6', 'math-q7', 'math-q8', 'math-q9']
      }
    ]
  },
  {
    id: 'student-5',
    name: 'Liam Chen',
    email: 'liam.chen@email.com',
    grade: '10th Grade',
    avatar: '👨',
    enrolledCourses: ['math-101', 'science-101', 'design-101'],
    progress: [
      {
        courseId: 'math-101',
        questionsAnswered: 20,
        correctAnswers: 17,
        lastAccessed: new Date('2025-10-19'),
        completedQuestions: ['math-q1', 'math-q2', 'math-q3', 'math-q4', 'math-q5', 'math-q6', 'math-q7', 'math-q8', 'math-q9', 'math-q10', 'math-q11', 'math-q12', 'math-q13', 'math-q14', 'math-q15', 'math-q16', 'math-q17', 'math-q18', 'math-q19', 'math-q20']
      },
      {
        courseId: 'science-101',
        questionsAnswered: 17,
        correctAnswers: 15,
        lastAccessed: new Date('2025-10-18'),
        completedQuestions: ['sci-q1', 'sci-q2', 'sci-q3', 'sci-q4', 'sci-q5', 'sci-q6', 'sci-q7', 'sci-q8', 'sci-q9', 'sci-q10', 'sci-q11', 'sci-q12', 'sci-q13', 'sci-q14', 'sci-q15', 'sci-q16', 'sci-q17']
      },
      {
        courseId: 'design-101',
        questionsAnswered: 3,
        correctAnswers: 3,
        lastAccessed: new Date('2025-10-15'),
        completedQuestions: ['design-q1', 'design-q2', 'design-q3']
      }
    ]
  },
  {
    id: 'student-6',
    name: 'Olivia Brown',
    email: 'olivia.brown@email.com',
    grade: '11th Grade',
    avatar: '👩',
    enrolledCourses: ['english-101', 'art-101'],
    progress: [
      {
        courseId: 'english-101',
        questionsAnswered: 7,
        correctAnswers: 6,
        lastAccessed: new Date('2025-10-19'),
        completedQuestions: ['eng-q1', 'eng-q2', 'eng-q3', 'eng-q4', 'eng-q5', 'eng-q6', 'eng-q7']
      },
      {
        courseId: 'art-101',
        questionsAnswered: 13,
        correctAnswers: 11,
        lastAccessed: new Date('2025-10-18'),
        completedQuestions: ['art-q1', 'art-q2', 'art-q3', 'art-q4', 'art-q5', 'art-q6', 'art-q7', 'art-q8', 'art-q9', 'art-q10', 'art-q11', 'art-q12', 'art-q13']
      }
    ]
  }
];
