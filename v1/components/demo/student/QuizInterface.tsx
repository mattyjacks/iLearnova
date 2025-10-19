'use client';

import { useState, useEffect } from 'react';
import { Course, Student } from '@/lib/demo';
import { CheckCircle2, XCircle, ArrowLeft, ArrowRight, Award } from 'lucide-react';

interface QuizInterfaceProps {
  course: Course;
  student: Student;
  onComplete: (updatedStudent: Student) => void;
  onBack: () => void;
}

export default function QuizInterface({ course, student, onComplete, onBack }: QuizInterfaceProps) {
  const progress = student.progress.find(p => p.courseId === course.id);
  const completedQuestionIds = new Set(progress?.completedQuestions || []);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [sessionAnswers, setSessionAnswers] = useState<Map<string, { answer: number; correct: boolean }>>(new Map());

  const currentQuestion = course.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === course.questions.length - 1;
  const wasAlreadyCompleted = completedQuestionIds.has(currentQuestion.id);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowResult(false);
  }, [currentQuestionIndex]);

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setShowResult(true);
    
    // Track answer in session
    setSessionAnswers(prev => {
      const updated = new Map(prev);
      updated.set(currentQuestion.id, { answer: selectedAnswer, correct: isCorrect });
      return updated;
    });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      handleFinishQuiz();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleFinishQuiz = () => {
    // Update student progress
    const updatedCompletedQuestions = new Set(completedQuestionIds);
    let newCorrectAnswers = progress?.correctAnswers || 0;

    sessionAnswers.forEach((result, questionId) => {
      if (!completedQuestionIds.has(questionId)) {
        updatedCompletedQuestions.add(questionId);
        if (result.correct) {
          newCorrectAnswers++;
        }
      }
    });

    const updatedProgress = student.progress.map(p => {
      if (p.courseId === course.id) {
        return {
          ...p,
          questionsAnswered: updatedCompletedQuestions.size,
          correctAnswers: newCorrectAnswers,
          lastAccessed: new Date(),
          completedQuestions: Array.from(updatedCompletedQuestions)
        };
      }
      return p;
    });

    // If no progress exists for this course, create it
    if (!progress) {
      updatedProgress.push({
        courseId: course.id,
        questionsAnswered: updatedCompletedQuestions.size,
        correctAnswers: newCorrectAnswers,
        lastAccessed: new Date(),
        completedQuestions: Array.from(updatedCompletedQuestions)
      });
    }

    const updatedStudent = {
      ...student,
      progress: updatedProgress
    };

    onComplete(updatedStudent);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </button>
        <h2 className="text-2xl font-bold">{course.title}</h2>
        <div className="mt-2 text-white/90">
          Question {currentQuestionIndex + 1} of {course.questions.length}
        </div>
        <div className="mt-2 w-full bg-white/20 rounded-full h-2">
          <div
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / course.questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="p-8">
        {wasAlreadyCompleted && (
          <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center gap-2 text-blue-700">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">You&apos;ve already answered this question!</span>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && setSelectedAnswer(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showResult
                    ? index === currentQuestion.correctAnswer
                      ? 'border-green-500 bg-green-50'
                      : index === selectedAnswer
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 bg-gray-50'
                    : selectedAnswer === index
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{option}</span>
                  {showResult && (
                    <>
                      {index === currentQuestion.correctAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      )}
                      {index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Explanation */}
        {showResult && (
          <div className={`p-4 rounded-lg ${
            selectedAnswer === currentQuestion.correctAnswer
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}>
            <div className="flex items-start gap-2">
              {selectedAnswer === currentQuestion.correctAnswer ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
              )}
              <div>
                <div className={`font-semibold mb-1 ${
                  selectedAnswer === currentQuestion.correctAnswer ? 'text-green-900' : 'text-red-900'
                }`}>
                  {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                </div>
                <div className="text-sm text-gray-700">{currentQuestion.explanation}</div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          {!showResult ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
              {!isLastQuestion && <ArrowRight className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
