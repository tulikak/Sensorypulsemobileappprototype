import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Waves, Watch, Smartphone, Home } from "lucide-react";

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Resonance field visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-12 h-72 flex items-center justify-center"
        >
          {/* Interference patterns */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${160 + i * 40}px`,
                height: `${160 + i * 40}px`,
                border: "1px solid rgba(139, 92, 246, 0.3)",
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Center pulse - represents user's nervous system */}
          <motion.div
            className="relative z-10"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 blur-xl opacity-80" />
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400" />
          </motion.div>

          {/* Smaller orbiting pulses - environmental signals */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute w-4 h-4 rounded-full bg-purple-400/60"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [
                  Math.cos((i * Math.PI) / 2) * 80,
                  Math.cos((i * Math.PI) / 2 + Math.PI) * 80,
                  Math.cos((i * Math.PI) / 2) * 80,
                ],
                y: [
                  Math.sin((i * Math.PI) / 2) * 80,
                  Math.sin((i * Math.PI) / 2 + Math.PI) * 80,
                  Math.sin((i * Math.PI) / 2) * 80,
                ],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center space-y-6"
        >
          <div className="space-y-3">
            <h1 className="text-5xl tracking-tight text-white">
              SensoryPulse
            </h1>
            <p className="text-lg text-purple-200 max-w-sm mx-auto leading-relaxed">
              Track your nervous system resonance
            </p>
          </div>

          {/* Multi-surface explanation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-6 space-y-4"
          >
            <div className="text-xs text-purple-400 uppercase tracking-wider mb-3">
              Multi-Surface
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Watch, label: "Haptic\nWearable", route: "/haptic-wearable" },
                { icon: Smartphone, label: "Visual\nTracker", route: "/visual-tracker" },
                { icon: Home, label: "Ambient\nOrb", route: "/ambient-orb" },
                { icon: Waves, label: "AR\nOverlay", route: "/ar-overlay" },
              ].map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(item.route)}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                  <item.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-xs text-purple-300 whitespace-pre-line leading-tight">
                    {item.label}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="pt-6 space-y-3">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/dashboard")}
              className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white rounded-2xl shadow-lg shadow-purple-500/40 hover:shadow-xl hover:shadow-purple-500/60 transition-all"
            >
              View Live Resonance
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/insights")}
              className="w-full py-3 px-6 bg-white/5 backdrop-blur-sm text-purple-200 text-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              How It Works
            </motion.button>
          </div>

          {/* Privacy Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="pt-4 text-center"
          >
            <p className="text-xs text-purple-400/70 leading-relaxed mb-2">
              This app processes biometric & location data locally on your device.
            </p>
            <button
              onClick={() => navigate("/privacy")}
              className="text-xs text-purple-300 underline hover:text-purple-200 transition-colors"
            >
              Privacy & Data Collection Notice
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}