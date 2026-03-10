import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Waves, Camera, Layers, Eye, HomeIcon, Maximize2, Grid3x3 } from "lucide-react";
import { useState } from "react";

export function AROverlay() {
  const navigate = useNavigate();
  const [overlayMode, setOverlayMode] = useState<"field" | "density" | "safe">("field");
  const [opacity, setOpacity] = useState(70);

  const overlayModes = [
    {
      id: "field",
      name: "Resonance Field",
      icon: Waves,
      description: "See electromagnetic resonance patterns around you in real-time",
      color: "purple",
    },
    {
      id: "density",
      name: "Neural Density",
      icon: Grid3x3,
      description: "Visualize crowd density and sensory load zones",
      color: "yellow",
    },
    {
      id: "safe",
      name: "Safe Zones",
      icon: Layers,
      description: "Highlight low-stimulation recovery spaces near you",
      color: "green",
    },
  ];

  const arElements = [
    { 
      type: "High Density Zone", 
      distance: "15m ahead", 
      resonance: "+45",
      color: "red",
      icon: "🔴",
      action: "Avoid this area"
    },
    { 
      type: "Safe Recovery Space", 
      distance: "30m left", 
      resonance: "-20",
      color: "green",
      icon: "✓",
      action: "Good for reset"
    },
    { 
      type: "Moderate Activity", 
      distance: "8m right", 
      resonance: "+12",
      color: "yellow",
      icon: "⚠️",
      action: "Monitor closely"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 pb-8">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/5 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-white">AR Overlay</h2>
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
        {/* AR Camera View Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-80 bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl overflow-hidden border-2 border-purple-500/30"
        >
          {/* Simulated camera view background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/30 to-pink-900/20" />
          
          {/* AR Grid Overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Resonance field visualization */}
          {overlayMode === "field" && (
            <>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-400"
                  style={{
                    width: `${100 + i * 60}px`,
                    height: `${100 + i * 60}px`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </>
          )}

          {/* Neural density zones */}
          {overlayMode === "density" && (
            <>
              <motion.div
                className="absolute top-12 right-8 w-24 h-24 rounded-full bg-red-500/30 border-2 border-red-400"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-16 left-12 w-32 h-32 rounded-full bg-yellow-500/30 border-2 border-yellow-400"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </>
          )}

          {/* Safe zone highlights */}
          {overlayMode === "safe" && (
            <motion.div
              className="absolute bottom-20 right-10 w-28 h-28 rounded-full bg-green-500/30 border-2 border-green-400"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          )}

          {/* AR UI Elements */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full border border-purple-500/30">
            <Camera className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-purple-300">AR Active</span>
          </div>

          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full border border-purple-500/30">
            <span className="text-xs text-purple-300">42 resonance</span>
          </div>

          {/* Center crosshair */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-8 h-8">
              <div className="absolute top-0 left-1/2 w-0.5 h-3 bg-purple-400 -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-0.5 h-3 bg-purple-400 -translate-x-1/2" />
              <div className="absolute left-0 top-1/2 w-3 h-0.5 bg-purple-400 -translate-y-1/2" />
              <div className="absolute right-0 top-1/2 w-3 h-0.5 bg-purple-400 -translate-y-1/2" />
            </div>
          </div>
        </motion.div>

        {/* Overlay Mode Selection */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider">Overlay Mode</h3>
          {overlayModes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <motion.button
                key={mode.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => setOverlayMode(mode.id as any)}
                className={`w-full bg-white/5 backdrop-blur-sm rounded-2xl p-4 border transition-all ${
                  overlayMode === mode.id 
                    ? "border-purple-400 bg-white/10" 
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    mode.color === "purple" ? "bg-purple-500/20" :
                    mode.color === "yellow" ? "bg-yellow-500/20" :
                    "bg-green-500/20"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      mode.color === "purple" ? "text-purple-400" :
                      mode.color === "yellow" ? "text-yellow-400" :
                      "text-green-400"
                    }`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm text-white mb-1">{mode.name}</div>
                    <div className="text-xs text-purple-400">{mode.description}</div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Overlay Opacity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-5 border border-white/10 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-purple-400" />
              Overlay Opacity
            </h3>
            <span className="text-2xl text-purple-300">{opacity}%</span>
          </div>
          
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(parseInt(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${opacity}%, rgba(255, 255, 255, 0.1) ${opacity}%, rgba(255, 255, 255, 0.1) 100%)`,
            }}
          />
          
          <div className="text-xs text-purple-400">
            {opacity < 30 && "Subtle overlay - see through clearly"}
            {opacity >= 30 && opacity < 70 && "Balanced - visible but not distracting"}
            {opacity >= 70 && "High visibility - overlay dominates view"}
          </div>
        </motion.div>

        {/* Detected AR Elements */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider flex items-center gap-2">
            <Maximize2 className="w-4 h-4" />
            Visible AR Elements
          </h3>
          {arElements.map((element, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className={`backdrop-blur-sm rounded-2xl p-4 border ${
                element.color === "red" 
                  ? "bg-red-500/10 border-red-500/30"
                  : element.color === "green"
                  ? "bg-green-500/10 border-green-500/30"
                  : "bg-yellow-500/10 border-yellow-500/30"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl flex-shrink-0">{element.icon}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div className="text-sm text-white">{element.type}</div>
                    <div className={`text-sm ${
                      element.color === "red" ? "text-red-400" :
                      element.color === "green" ? "text-green-400" :
                      "text-yellow-400"
                    }`}>
                      {element.resonance}
                    </div>
                  </div>
                  <div className="text-xs text-purple-400 mb-2">{element.distance}</div>
                  <div className="text-xs text-purple-300">{element.action}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AR Settings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-5 border border-white/10 space-y-3"
        >
          <h3 className="text-white text-sm">AR Display Settings</h3>
          {[
            { label: "Show Distance Markers", enabled: true },
            { label: "Audio Proximity Alerts", enabled: false },
            { label: "Record AR Sessions", enabled: false },
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

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-blue-500/10 backdrop-blur-sm rounded-2xl p-4 border border-blue-400/30"
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl flex-shrink-0">💡</div>
            <div className="flex-1">
              <div className="text-sm text-white mb-1">AR Glasses Required</div>
              <div className="text-xs text-purple-300 leading-relaxed">
                Full AR overlay requires compatible smart glasses. Currently showing simulation mode.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/snapshot")}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-sm rounded-xl shadow-lg shadow-purple-500/30 transition-all"
          >
            Safe Zones Map
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/dashboard")}
            className="flex-1 py-3 px-4 bg-white/5 backdrop-blur-sm text-white text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
          >
            Live Detection
          </motion.button>
        </div>
      </div>
    </div>
  );
}
