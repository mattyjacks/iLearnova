import { Course } from './types';

export const mathCourse: Course = {
  id: 'math-101',
  title: 'Algebra Fundamentals',
  description: 'Master the essentials of algebra including equations, inequalities, and functions',
  subject: 'Mathematics',
  level: 'High School',
  duration: '8 weeks',
  instructor: 'Dr. Sarah Chen',
  questions: [
    {
      id: 'math-q1',
      question: 'What is the value of x in the equation 2x + 5 = 13?',
      options: ['2', '4', '6', '8'],
      correctAnswer: 1,
      explanation: 'Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4'
    },
    {
      id: 'math-q2',
      question: 'Simplify: 3(x + 4) - 2x',
      options: ['x + 12', '5x + 12', 'x + 4', '3x + 12'],
      correctAnswer: 0,
      explanation: 'Distribute: 3x + 12 - 2x = x + 12'
    },
    {
      id: 'math-q3',
      question: 'What is the slope of the line y = 3x - 7?',
      options: ['-7', '3', '7', '-3'],
      correctAnswer: 1,
      explanation: 'In slope-intercept form y = mx + b, m is the slope, which is 3'
    },
    {
      id: 'math-q4',
      question: 'Solve for y: 5y - 10 = 25',
      options: ['3', '5', '7', '9'],
      correctAnswer: 2,
      explanation: 'Add 10: 5y = 35, divide by 5: y = 7'
    },
    {
      id: 'math-q5',
      question: 'What is (x + 3)(x - 3)?',
      options: ['x² - 9', 'x² + 9', 'x² - 6x - 9', 'x² + 6x + 9'],
      correctAnswer: 0,
      explanation: 'This is difference of squares: (a + b)(a - b) = a² - b²'
    },
    {
      id: 'math-q6',
      question: 'If f(x) = 2x + 1, what is f(5)?',
      options: ['9', '10', '11', '12'],
      correctAnswer: 2,
      explanation: 'Substitute x = 5: f(5) = 2(5) + 1 = 10 + 1 = 11'
    },
    {
      id: 'math-q7',
      question: 'Factor: x² + 5x + 6',
      options: ['(x + 2)(x + 3)', '(x + 1)(x + 6)', '(x - 2)(x - 3)', '(x + 4)(x + 2)'],
      correctAnswer: 0,
      explanation: 'Find two numbers that multiply to 6 and add to 5: 2 and 3'
    },
    {
      id: 'math-q8',
      question: 'What is the y-intercept of y = -2x + 8?',
      options: ['-2', '2', '8', '-8'],
      correctAnswer: 2,
      explanation: 'The y-intercept is the constant term, which is 8'
    },
    {
      id: 'math-q9',
      question: 'Solve: |x - 4| = 6',
      options: ['x = 10 or x = -2', 'x = 2 or x = -10', 'x = 10 only', 'x = -2 only'],
      correctAnswer: 0,
      explanation: 'x - 4 = 6 gives x = 10, or x - 4 = -6 gives x = -2'
    },
    {
      id: 'math-q10',
      question: 'What is the domain of f(x) = 1/(x - 3)?',
      options: ['All real numbers', 'All real numbers except 3', 'All positive numbers', 'All real numbers except 0'],
      correctAnswer: 1,
      explanation: 'Cannot divide by zero, so x ≠ 3'
    },
    {
      id: 'math-q11',
      question: 'Simplify: (2x³)(4x²)',
      options: ['6x⁵', '8x⁵', '6x⁶', '8x⁶'],
      correctAnswer: 1,
      explanation: 'Multiply coefficients: 2 × 4 = 8, add exponents: 3 + 2 = 5'
    },
    {
      id: 'math-q12',
      question: 'What is the solution to x² = 25?',
      options: ['x = 5', 'x = -5', 'x = ±5', 'No solution'],
      correctAnswer: 2,
      explanation: 'Taking square root gives both positive and negative: x = ±5'
    },
    {
      id: 'math-q13',
      question: 'If 3x - 7 > 8, what is x?',
      options: ['x > 5', 'x < 5', 'x > 15', 'x < 1'],
      correctAnswer: 0,
      explanation: 'Add 7: 3x > 15, divide by 3: x > 5'
    },
    {
      id: 'math-q14',
      question: 'What is the vertex form of a parabola?',
      options: ['y = ax² + bx + c', 'y = a(x - h)² + k', 'y = mx + b', 'y = a(x + h)² - k'],
      correctAnswer: 1,
      explanation: 'Vertex form is y = a(x - h)² + k where (h, k) is the vertex'
    },
    {
      id: 'math-q15',
      question: 'Evaluate: (-2)³',
      options: ['-6', '6', '-8', '8'],
      correctAnswer: 2,
      explanation: '(-2)³ = (-2) × (-2) × (-2) = -8'
    },
    {
      id: 'math-q16',
      question: 'What is the inverse operation of multiplication?',
      options: ['Addition', 'Subtraction', 'Division', 'Exponentiation'],
      correctAnswer: 2,
      explanation: 'Division undoes multiplication'
    },
    {
      id: 'math-q17',
      question: 'Solve: 2(x - 3) = 4(x + 1)',
      options: ['x = -5', 'x = 5', 'x = -8', 'x = 8'],
      correctAnswer: 0,
      explanation: '2x - 6 = 4x + 4, so -10 = 2x, thus x = -5'
    },
    {
      id: 'math-q18',
      question: 'What is √64?',
      options: ['6', '7', '8', '9'],
      correctAnswer: 2,
      explanation: '8 × 8 = 64, so √64 = 8'
    },
    {
      id: 'math-q19',
      question: 'Which represents a linear function?',
      options: ['y = x²', 'y = 2x + 3', 'y = 1/x', 'y = |x|'],
      correctAnswer: 1,
      explanation: 'Linear functions have form y = mx + b with no exponents'
    },
    {
      id: 'math-q20',
      question: 'What is 30% of 200?',
      options: ['30', '60', '90', '150'],
      correctAnswer: 1,
      explanation: '0.30 × 200 = 60'
    }
  ]
};
