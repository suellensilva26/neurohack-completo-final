import { useState } from 'react';
import { motion } from 'framer-motion';

interface QuizOption {
  id: string;
  text: string;
  value: number;
}

interface QuizQuestionProps {
  onNext: () => void;
}

const QuizQuestion = ({ onNext }: QuizQuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const questions = [
    {
      title: "Qual é sua maior dificuldade nos estudos?",
      options: [
        { id: "1", text: "Procrastinação e falta de foco", value: 1 },
        { id: "2", text: "Não conseguir memorizar o conteúdo", value: 2 },
        { id: "3", text: "Ansiedade e bloqueios mentais", value: 3 },
        { id: "4", text: "Falta de organização e método", value: 4 }
      ]
    },
    {
      title: "Como você se sente antes das provas?",
      options: [
        { id: "1", text: "Muito ansioso e nervoso", value: 1 },
        { id: "2", text: "Confuso e sem direção", value: 2 },
        { id: "3", text: "Preparado mas com medo", value: 3 },
        { id: "4", text: "Tranquilo e confiante", value: 4 }
      ]
    },
    {
      title: "Qual é seu maior desafio na redação?",
      options: [
        { id: "1", text: "Não sei por onde começar", value: 1 },
        { id: "2", text: "Falta de argumentos", value: 2 },
        { id: "3", text: "Estrutura e organização", value: 3 },
        { id: "4", text: "Tempo insuficiente", value: 4 }
      ]
    }
  ];

  const handleOptionSelect = (option: QuizOption) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onNext();
    }
  };

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  const handleSelect = (option: QuizOption) => {
    setSelectedOption(option.id);
    setTimeout(() => handleOptionSelect(option), 800);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 px-4 py-6">
      <div className="max-w-sm mx-auto space-y-6">
        
        {/* Progress Header */}
        <motion.div 
          className="space-y-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center">
            <span className="text-sm text-white/70">Progresso do diagnóstico</span>
            <span className="text-sm text-white/70">{Math.round(progress)}% completo</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </motion.div>
        
        {/* Question Card */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-sm text-white/70">Pergunta {currentQuestion + 1} de {questions.length}</span>
              <h2 className="text-xl font-bold text-white mt-2">{questions[currentQuestion].title}</h2>
            </div>
            
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleSelect(option)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 ${
                    selectedOption === option.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * parseInt(option.id) }}
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs text-white/50">
            🔒 Seus dados são 100% seguros • Usado apenas para personalização
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizQuestion;