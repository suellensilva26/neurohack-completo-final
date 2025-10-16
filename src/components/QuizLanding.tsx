import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface QuizLandingProps {
  onNext: () => void;
}

const QuizLanding = ({ onNext }: QuizLandingProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 px-4 py-6">
      <div className="max-w-sm mx-auto space-y-6">
        
        {/* Hero Section */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-3xl">🧠</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Diagnóstico Neurológico</h1>
          <p className="text-yellow-400 font-semibold">Personalizado para o ENEM</p>
        </motion.div>

        {/* Description */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-white/80 text-sm leading-relaxed">
            Responda com sinceridade para receber seu protocolo personalizado
          </p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-14 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-lg font-bold rounded-2xl shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            COMEÇAR DIAGNÓSTICO
          </span>
        </motion.button>

        {/* Footer */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs text-white/50">
            🔒 Seus dados são 100% seguros • Usado apenas para personalização
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizLanding;