import React from 'react';
import QuizLanding from './QuizLanding';
import QuizQuestion from './QuizQuestion';
import QuizAnalysis from './QuizAnalysis';
import { useQuizStore } from '../store/quizStore';

const QuizApp = () => {
  const { currentStep } = useQuizStore();

  return (
    <div className="min-h-screen bg-gradient-dark">
      {currentStep === 'landing' && <QuizLanding />}
      {currentStep === 'questions' && <QuizQuestion />}
      {currentStep === 'analysis' && <QuizAnalysis />}
    </div>
  );
};

export default QuizApp;
