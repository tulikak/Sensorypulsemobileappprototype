import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Watch, Battery, Vibrate, Signal, Settings, HomeIcon, Zap, X, Clock, Sliders } from "lucide-react";
import { useState } from "react";

export function HapticWearable() {
  const navigate = useNavigate();
  const [intensity, setIntensity] = useState(65);
  const [pulseMode, setPulseMode] = useState<"discrete" | "continuous">("discrete");
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  const deviceStats = [
    { label: "Battery", value: "87%", icon: Battery, color: "text-green-400" },
    { label: "Signal", value: "Strong", icon: Signal, color: "text-blue-400" },
    { label: "Haptics", value: "Active", icon: Vibrate, color: "text-purple-400" },
  ];

  const pulsePatterns = [
    { 
      id: "calm", 
      name: "Calm Resonance", 
      pattern: "Gentle waves every 30s",
      intensity: 30,
      description: "Soft reminder you're in a safe zone"
    },
    { 
      id: "alert", 
      name: "Rising Dissonance", 
      pattern: "Increasing pulses every 10s",
      intensity: 70,
      description: "Warning of approaching threshold"
    },
    { 
      id: "urgent", 
      name: "Crisis Alert", 
      pattern: "Strong continuous vibration",
      intensity: 100,
      description: "Immediate intervention needed"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 pb-8">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/5 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-white">Haptic Wearable</h2>
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

      <div className="max-w-md mx-auto px-6 py-6 space-y-5">
        {/* Device Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-64 flex items-center justify-center"
        >
          {/* Wearable device visualization */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.3)",
                "0 0 40px rgba(168, 85, 247, 0.6)",
                "0 0 20px rgba(168, 85, 247, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-40 rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 border-4 border-purple-500/50 flex items-center justify-center relative overflow-hidden"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-16 h-16 rounded-full bg-purple-400/30 blur-xl"
            />
            <Watch className="absolute w-12 h-12 text-purple-300" />
          </motion.div>

          {/* Status indicators */}
          <motion.div
            className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full border border-green-500/30"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs text-green-400">Connected</span>
          </motion.div>
        </motion.div>

        {/* Device Stats */}
        <div className="grid grid-cols-3 gap-3">
          {deviceStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center"
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className="text-sm text-white mb-1">{stat.value}</div>
                <div className="text-xs text-purple-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Haptic Intensity Control */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-5 border border-white/10 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              Haptic Intensity
            </h3>
            <span className="text-2xl text-purple-300">{intensity}%</span>
          </div>
          
          <input
            type="range"
            min="0"
            max="100"
            value={intensity}
            onChange={(e) => setIntensity(parseInt(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${intensity}%, rgba(255, 255, 255, 0.1) ${intensity}%, rgba(255, 255, 255, 0.1) 100%)`,
            }}
          />
          
          <div className="text-xs text-purple-400">
            {intensity < 30 && "Subtle pulses - minimal distraction"}
            {intensity >= 30 && intensity < 70 && "Balanced feedback - noticeable but gentle"}
            {intensity >= 70 && "Strong alerts - impossible to miss"}
          </div>
        </motion.div>

        {/* Pulse Mode Toggle */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider">Pulse Mode</h3>
          <div className="flex gap-2 bg-black/30 backdrop-blur-sm rounded-xl p-1 border border-white/10">
            <button
              onClick={() => setPulseMode("discrete")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm transition-all ${
                pulseMode === "discrete"
                  ? "bg-purple-500 text-white"
                  : "text-purple-400 hover:text-purple-200"
              }`}
            >
              Discrete Alerts
            </button>
            <button
              onClick={() => setPulseMode("continuous")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm transition-all ${
                pulseMode === "continuous"
                  ? "bg-purple-500 text-white"
                  : "text-purple-400 hover:text-purple-200"
              }`}
            >
              Continuous
            </button>
          </div>
          <div className="text-xs text-purple-400 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            {pulseMode === "discrete" 
              ? "🔔 Device pulses only when thresholds are crossed (recommended for focus)"
              : "〰️ Constant feedback matching real-time nervous system state"}
          </div>
        </div>

        {/* Pulse Patterns */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider">Current Pulse Patterns</h3>
          {pulsePatterns.map((pattern, index) => (
            <motion.div
              key={pattern.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-sm text-white mb-1">{pattern.name}</div>
                  <div className="text-xs text-purple-400">{pattern.pattern}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-purple-300">{pattern.intensity}%</div>
                  <div className="text-xs text-purple-500">intensity</div>
                </div>
              </div>
              <div className="text-xs text-purple-400 leading-relaxed mt-2">
                {pattern.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Settings */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowAdvancedSettings(true)}
          className="w-full py-4 px-6 bg-white/5 backdrop-blur-sm text-white rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
        >
          <Settings className="w-5 h-5 text-purple-400" />
          Advanced Haptic Settings
        </motion.button>

        {/* Navigation */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/dashboard")}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-sm rounded-xl shadow-lg shadow-purple-500/30 transition-all"
        >
          View Live Detection
        </motion.button>
      </div>

      {/* Advanced Settings Modal */}
      <AnimatePresence>
        {showAdvancedSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setShowAdvancedSettings(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-6 border border-purple-500/30 max-w-md w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl text-white flex items-center gap-2">
                  <Sliders className="w-6 h-6 text-purple-400" />
                  Advanced Settings
                </h3>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAdvancedSettings(false)}
                  className="text-purple-400 hover:text-purple-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="space-y-5">
                {/* Pulse Duration */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-white">Pulse Duration</div>
                    <div className="text-sm text-purple-300">100ms</div>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    defaultValue="100"
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: "linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) 10%, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0.1) 100%)",
                    }}
                  />
                  <div className="text-xs text-purple-400 mt-2">Length of each vibration pulse</div>
                </div>

                {/* Pulse Frequency */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-white">Pulse Frequency</div>
                    <div className="text-sm text-purple-300">5 Hz</div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    defaultValue="5"
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: "linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) 40%, rgba(255, 255, 255, 0.1) 40%, rgba(255, 255, 255, 0.1) 100%)",
                    }}
                  />
                  <div className="text-xs text-purple-400 mt-2">Pulses per second during alerts</div>
                </div>

                {/* Alert Threshold */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-white">Alert Threshold</div>
                    <div className="text-sm text-purple-300">60</div>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="90"
                    defaultValue="60"
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: "linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 100%)",
                    }}
                  />
                  <div className="text-xs text-purple-400 mt-2">Resonance level that triggers alerts</div>
                </div>

                {/* Sleep Mode */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-sm text-white mb-1 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-400" />
                        Sleep Mode
                      </div>
                      <div className="text-xs text-purple-400">Disable haptics at night</div>
                    </div>
                    <div className="w-10 h-6 rounded-full bg-purple-500 relative">
                      <div className="absolute top-1 left-5 w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>
                  <div className="text-xs text-purple-300 mt-3 pt-3 border-t border-white/10">
                    10:00 PM - 6:00 AM
                  </div>
                </div>

                {/* Battery Saver */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-white mb-1 flex items-center gap-2">
                        <Battery className="w-4 h-4 text-green-400" />
                        Battery Saver Mode
                      </div>
                      <div className="text-xs text-purple-400">Reduce haptic intensity below 20%</div>
                    </div>
                    <div className="w-10 h-6 rounded-full bg-white/10 relative">
                      <div className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowAdvancedSettings(false)}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-sm rounded-xl shadow-lg shadow-purple-500/30 transition-all mt-6"
              >
                Save Settings
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}