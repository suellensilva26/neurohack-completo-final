import React, { useState } from 'react';
import QuizLanding from './QuizLanding';
import QuizQuestion from './QuizQuestion';
import QuizAnalysis from './QuizAnalysis';

const QuizApp = () => {
  const [currentStep, setCurrentStep] = useState('landing');

  const handleNext = () => {
    if (currentStep === 'landing') {
      setCurrentStep('questions');
    } else if (currentStep === 'questions') {
      setCurrentStep('analysis');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {currentStep === 'landing' && <QuizLanding onNext={handleNext} />}
      {currentStep === 'questions' && <QuizQuestion onNext={handleNext} />}
      {currentStep === 'analysis' && <QuizAnalysis />}
    </div>
  );
};

export default QuizApp;
