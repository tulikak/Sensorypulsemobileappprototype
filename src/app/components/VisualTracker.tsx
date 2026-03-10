import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Smartphone, Activity, Heart, Brain, Eye, HomeIcon, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export function VisualTracker() {
  const navigate = useNavigate();
  const [currentResonance, setCurrentResonance] = useState(42);
  const [heartRate, setHeartRate] = useState(72);
  const [hrvScore, setHrvScore] = useState(58);
  const [skinTemp, setSkinTemp] = useState(34.2);

  // Simulate real-time biometric changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentResonance(prev => Math.max(20, Math.min(80, prev + (Math.random() - 0.5) * 8)));
      setHeartRate(prev => Math.max(60, Math.min(95, prev + (Math.random() - 0.5) * 3)));
      setHrvScore(prev => Math.max(40, Math.min(75, prev + (Math.random() - 0.5) * 5)));
      setSkinTemp(prev => Math.max(33, Math.min(36, prev + (Math.random() - 0.5) * 0.3)));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const biometrics = [
    { 
      label: "Heart Rate", 
      value: `${heartRate.toFixed(0)} bpm`, 
      icon: Heart, 
      color: "text-red-400",
      status: heartRate < 75 ? "optimal" : "elevated"
    },
    { 
      label: "HRV Score", 
      value: hrvScore.toFixed(0), 
      icon: Activity, 
      color: "text-blue-400",
      status: hrvScore > 50 ? "good" : "low"
    },
    { 
      label: "Skin Temp", 
      value: `${skinTemp.toFixed(1)}°C`, 
      icon: TrendingUp, 
      color: "text-yellow-400",
      status: "normal"
    },
  ];

  const recentEvents = [
    { time: "2 min ago", event: "Entered crowded space", impact: "+15", type: "warning" },
    { time: "8 min ago", event: "Deep breathing detected", impact: "-8", type: "success" },
    { time: "15 min ago", event: "Fluorescent lighting exposure", impact: "+5", type: "caution" },
    { time: "22 min ago", event: "Quiet environment entered", impact: "-12", type: "success" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 pb-8">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/5 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-white">Visual Tracker</h2>
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
        {/* Phone Device Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-72 flex items-center justify-center"
        >
          {/* Phone outline */}
          <div className="w-48 h-64 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-purple-900 border-4 border-purple-500/30 p-3 shadow-2xl shadow-purple-500/50">
            {/* Screen content */}
            <div className="w-full h-full bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 rounded-[1.5rem] overflow-hidden relative">
              {/* Live resonance visualization */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)",
                    "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-4xl text-white mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {currentResonance.toFixed(0)}
                  </motion.div>
                  <div className="text-xs text-purple-300">Live Resonance</div>
                </div>
              </motion.div>

              {/* Activity indicator */}
              <motion.div
                className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[0.6rem] text-green-400">LIVE</span>
              </motion.div>
            </div>
          </div>

          <Smartphone className="absolute w-6 h-6 text-purple-400 -bottom-8" />
        </motion.div>

        {/* Current State */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`backdrop-blur-sm rounded-3xl p-5 border ${
            currentResonance < 40 
              ? "bg-green-500/10 border-green-500/30" 
              : currentResonance < 60 
              ? "bg-yellow-500/10 border-yellow-500/30"
              : "bg-red-500/10 border-red-500/30"
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white">Nervous System State</h3>
            <Brain className={`w-6 h-6 ${
              currentResonance < 40 ? "text-green-400" : currentResonance < 60 ? "text-yellow-400" : "text-red-400"
            }`} />
          </div>
          <div className="text-3xl text-white mb-2">{currentResonance.toFixed(0)}</div>
          <div className="text-sm text-purple-300 mb-4">
            {currentResonance < 40 && "Deep resonance - optimal state"}
            {currentResonance >= 40 && currentResonance < 60 && "Moderate - stay aware"}
            {currentResonance >= 60 && "High dissonance - consider break"}
          </div>

          {/* Live progress bar */}
          <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full ${
                currentResonance < 40 ? "bg-green-400" : currentResonance < 60 ? "bg-yellow-400" : "bg-red-400"
              }`}
              animate={{ width: `${currentResonance}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Real-time Biometrics */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider">Live Biometrics</h3>
          <div className="grid grid-cols-3 gap-3">
            {biometrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10 text-center"
                >
                  <Icon className={`w-5 h-5 mx-auto mb-2 ${metric.color}`} />
                  <div className="text-sm text-white mb-1">{metric.value}</div>
                  <div className="text-xs text-purple-400">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Recent Events Timeline */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider flex items-center gap-2">
            <Eye className="w-4 h-4" />
            Recent Detection Events
          </h3>
          {recentEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-xs text-purple-400 mb-1">{event.time}</div>
                  <div className="text-sm text-white">{event.event}</div>
                </div>
                <div className={`text-sm px-2 py-1 rounded-lg ${
                  event.type === "success" 
                    ? "text-green-400 bg-green-400/10" 
                    : event.type === "warning"
                    ? "text-red-400 bg-red-400/10"
                    : "text-yellow-400 bg-yellow-400/10"
                }`}>
                  {event.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Display Settings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-5 border border-white/10 space-y-3"
        >
          <h3 className="text-white text-sm">Display Options</h3>
          {[
            { label: "Always-On Display", enabled: true },
            { label: "Lock Screen Widget", enabled: true },
            { label: "Color-Coded Notifications", enabled: false },
          ].map((option, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-sm text-purple-300">{option.label}</span>
              <div className={`w-10 h-6 rounded-full transition-all ${
                option.enabled ? "bg-purple-500" : "bg-white/10"
              } relative`}>
                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${
                  option.enabled ? "left-5" : "left-1"
                }`} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Navigation */}
        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/dashboard")}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-sm rounded-xl shadow-lg shadow-purple-500/30 transition-all"
          >
            Full Dashboard
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/patterns")}
            className="flex-1 py-3 px-4 bg-white/5 backdrop-blur-sm text-white text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
          >
            View Patterns
          </motion.button>
        </div>
      </div>
    </div>
  );
}
