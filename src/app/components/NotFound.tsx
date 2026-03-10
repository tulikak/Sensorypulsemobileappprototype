import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { HomeIcon, Compass } from "lucide-react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center p-6">
      <div className="max-w-md mx-auto text-center space-y-6">
        {/* Animated resonance field */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-48 flex items-center justify-center mb-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-purple-500/30"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
          <Compass className="w-16 h-16 text-purple-400 relative z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl text-white mb-3">Signal Lost</h1>
          <p className="text-purple-300 mb-2">
            This resonance frequency doesn't exist
          </p>
          <p className="text-sm text-purple-400">
            Let's get you back to a known state
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/")}
          className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white rounded-2xl shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-purple-500/60 transition-all flex items-center justify-center gap-2"
        >
          <HomeIcon className="w-5 h-5" />
          Return Home
        </motion.button>
      </div>
    </div>
  );
}