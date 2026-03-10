import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Activity, AlertTriangle, Waves, TrendingDown, Users, Volume2, Eye, Thermometer, HomeIcon } from "lucide-react";

export function Dashboard() {
  const navigate = useNavigate();
  const [currentResonance, setCurrentResonance] = useState(62);
  const [activeFactors, setActiveFactors] = useState<string[]>([]);

  // Simulate live biometric detection
  useEffect(() => {
    const interval = setInterval(() => {
      const newResonance = Math.max(20, Math.min(95, currentResonance + (Math.random() - 0.5) * 8));
      setCurrentResonance(newResonance);

      // Detect which factors are contributing
      const factors = [];
      if (newResonance > 70) {
        factors.push("dissonance-detected");
      }
      if (Math.random() > 0.6) factors.push("crowd-pressure");
      if (Math.random() > 0.7) factors.push("frequency-clash");
      setActiveFactors(factors);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentResonance]);

  const getResonanceState = (value: number) => {
    if (value < 35) return { label: "Deep Resonance", color: "green", status: "recovery" };
    if (value < 60) return { label: "Neutral", color: "blue", status: "stable" };
    if (value < 80) return { label: "Mild Dissonance", color: "yellow", status: "caution" };
    return { label: "Critical Dissonance", color: "red", status: "danger" };
  };

  const state = getResonanceState(currentResonance);

  // Environmental factor detection (simulated as passive sensors)
  const environmentalSignals = [
    { 
      id: "neural-density",
      icon: Users, 
      label: "Neural Density", 
      value: 8, 
      unit: "people", 
      impact: "high",
    },
    { 
      id: "sound-frequency",
      icon: Volume2, 
      label: "Sound Frequency", 
      value: 2800, 
      unit: "Hz", 
      impact: "moderate",
    },
    { 
      id: "light-spectrum",
      icon: Eye, 
      label: "Light Spectrum", 
      value: 6500, 
      unit: "K", 
      impact: "low",
    },
    { 
      id: "emf-field",
      icon: Waves, 
      label: "EMF Field", 
      value: 42, 
      unit: "mG", 
      impact: "moderate",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 pb-8">
      {/* Minimal header - no back button, autonomous interface */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xs text-purple-400 uppercase tracking-wider">Live Detection</div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-green-400">Sensors Active</span>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/")}
                className="text-purple-400 hover:text-purple-200 transition-colors"
              >
                <HomeIcon className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-6 space-y-5">
        {/* Live Resonance Meter - Main Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-hidden"
        >
          {/* Animated background based on state */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                `radial-gradient(circle at 30% 50%, ${
                  state.color === "green" ? "rgb(34, 197, 94)" :
                  state.color === "blue" ? "rgb(59, 130, 246)" :
                  state.color === "yellow" ? "rgb(251, 191, 36)" :
                  "rgb(239, 68, 68)"
                } 0%, transparent 50%)`,
                `radial-gradient(circle at 70% 50%, ${
                  state.color === "green" ? "rgb(34, 197, 94)" :
                  state.color === "blue" ? "rgb(59, 130, 246)" :
                  state.color === "yellow" ? "rgb(251, 191, 36)" :
                  "rgb(239, 68, 68)"
                } 0%, transparent 50%)`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />

          <div className="relative z-10">
            <div className="text-center mb-6">
              <motion.div
                key={Math.floor(currentResonance)}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-7xl text-white mb-2"
              >
                {Math.round(currentResonance)}
              </motion.div>
              <div className="text-sm text-purple-300 mb-4">Dissonance Index</div>
              
              <motion.div
                animate={{
                  backgroundColor: 
                    state.color === "green" ? "rgba(34, 197, 94, 0.2)" :
                    state.color === "blue" ? "rgba(59, 130, 246, 0.2)" :
                    state.color === "yellow" ? "rgba(251, 191, 36, 0.2)" :
                    "rgba(239, 68, 68, 0.2)",
                  borderColor:
                    state.color === "green" ? "rgb(34, 197, 94)" :
                    state.color === "blue" ? "rgb(59, 130, 246)" :
                    state.color === "yellow" ? "rgb(251, 191, 36)" :
                    "rgb(239, 68, 68)",
                }}
                className="inline-block px-6 py-2 rounded-full border-2 transition-colors"
              >
                <div className="text-white text-base">{state.label}</div>
              </motion.div>
            </div>

            {/* Resonance bar */}
            <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                animate={{
                  width: `${currentResonance}%`,
                  backgroundColor:
                    state.color === "green" ? "rgb(34, 197, 94)" :
                    state.color === "blue" ? "rgb(59, 130, 246)" :
                    state.color === "yellow" ? "rgb(251, 191, 36)" :
                    "rgb(239, 68, 68)",
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex justify-between text-xs text-purple-400 mt-2">
              <span>Resonance</span>
              <span>Dissonance</span>
            </div>
          </div>
        </motion.div>

        {/* Warning Banner - Only shows when needed */}
        <AnimatePresence>
          {currentResonance > 75 && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="bg-orange-500/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/50"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm text-white mb-1">Threshold Reached</div>
                  <div className="text-xs text-orange-200">
                    Consider relocating within 15 minutes.
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Passive Environmental Detection */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm text-purple-300 uppercase tracking-wider">Detected Signals</h3>
            <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
          </div>

          {environmentalSignals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={signal.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    signal.impact === "high" ? "bg-red-500/20" :
                    signal.impact === "moderate" ? "bg-yellow-500/20" :
                    "bg-blue-500/20"
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      signal.impact === "high" ? "text-red-400" :
                      signal.impact === "moderate" ? "text-yellow-400" :
                      "text-blue-400"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm text-white">{signal.label}</div>
                      <div className="text-sm text-purple-300">
                        {signal.value} <span className="text-xs">{signal.unit}</span>
                      </div>
                    </div>
                    <div className="text-xs text-purple-400 leading-relaxed">
                      {signal.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Haptic Wearable Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-5 border border-purple-500/30"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm text-white">Wearable Feedback</div>
            <div className="text-xs text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
              Connected
            </div>
          </div>
          <div className="text-xs text-purple-300 leading-relaxed">
            Gentle haptic pulses match your state. Stronger = approaching threshold.
          </div>
        </motion.div>

        {/* Multi-Surface Navigation */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/snapshot")}
            className="py-3 px-4 bg-white/5 backdrop-blur-sm text-white text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
          >
            Safe Zones Map
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/patterns")}
            className="py-3 px-4 bg-white/5 backdrop-blur-sm text-white text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
          >
            Your Patterns
          </motion.button>
        </div>
      </div>
    </div>
  );
}