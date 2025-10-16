import { motion } from 'framer-motion';

const QuizAnalysis = () => {

  const handleNext = () => {
    // Redirecionar para o funil de vendas
    window.location.href = '/quiz-diagnostico';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 px-4 py-6">
      <div className="max-w-sm mx-auto space-y-6">
        
        {/* Header */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-3xl">🧠</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Diagnóstico Completo!</h1>
          <p className="text-white/70">Seu perfil neurológico foi analisado</p>
        </motion.div>

        {/* Result Card */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-xl font-bold text-white mb-2">Seu Perfil de Risco</h2>
              <div className="w-full bg-white/20 rounded-full h-4 mb-4">
                <motion.div 
                  className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "89%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
              <p className="text-3xl font-bold text-white">89%</p>
              <p className="text-sm text-white/70 mt-2">Risco de não passar no ENEM</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white/5 rounded-2xl p-4">
                <h3 className="text-white font-semibold mb-2">Principais Problemas Identificados:</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Falta de foco e concentração</li>
                  <li>• Ansiedade excessiva</li>
                  <li>• Dificuldade de memorização</li>
                  <li>• Falta de método de estudo</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={handleNext}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-16 bg-gradient-to-r from-green-500 to-green-600 text-black text-lg font-black rounded-2xl shadow-[0_0_30px_rgba(34,197,94,0.5)] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="relative z-10">
            🧬 DESCOBRIR MINHA SOLUÇÃO PERSONALIZADA
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

export default QuizAnalysis;