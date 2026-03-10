import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { MapPin, Navigation, AlertCircle, Sparkles, HomeIcon } from "lucide-react";

export function Snapshot() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  // Simulated location-based resonance data
  // In reality, this would use GPS + historical biometric data
  const locations = [
    {
      id: "coffee-shop",
      name: "Brew & Co.",
      type: "Café",
      distance: "0.2 mi",
      resonance: 28,
      status: "safe",
      x: 30,
      y: 40,
      prediction: "Optimal morning spot. Low density 6-9 AM.",
    },
    {
      id: "office",
      name: "Your Office",
      type: "Workplace",
      distance: "0.5 mi",
      resonance: 76,
      status: "caution",
      x: 60,
      y: 30,
      prediction: "High dissonance 12-3 PM. Consider remote work.",
    },
    {
      id: "park",
      name: "Riverside Park",
      type: "Outdoor",
      distance: "0.8 mi",
      resonance: 15,
      status: "optimal",
      x: 45,
      y: 70,
      prediction: "Deep resonance. Ideal for nervous system reset.",
    },
    {
      id: "gym",
      name: "Metro Fitness",
      type: "Gym",
      distance: "0.3 mi",
      resonance: 82,
      status: "danger",
      x: 75,
      y: 50,
      prediction: "Critical density + sound clash. Avoid 5-7 PM.",
    },
    {
      id: "library",
      name: "Public Library",
      type: "Study Space",
      distance: "0.6 mi",
      resonance: 35,
      status: "safe",
      x: 20,
      y: 60,
      prediction: "Moderate resonance. EMF interference present.",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal": return { bg: "bg-green-500", border: "border-green-500", text: "text-green-400" };
      case "safe": return { bg: "bg-blue-500", border: "border-blue-500", text: "text-blue-400" };
      case "caution": return { bg: "bg-yellow-500", border: "border-yellow-500", text: "text-yellow-400" };
      case "danger": return { bg: "bg-red-500", border: "border-red-500", text: "text-red-400" };
      default: return { bg: "bg-gray-500", border: "border-gray-500", text: "text-gray-400" };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 pb-8">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-white">Resonance Map</h2>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-purple-400" />
                <span className="text-xs text-purple-400">AR Mode Available</span>
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
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/30"
        >
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-sm text-white mb-1">Predictive Resonance</div>
              <div className="text-xs text-purple-300 leading-relaxed">
                Based on your biometric history, we've mapped safe zones and dissonance hotspots near you.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Simulated Map Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 border border-white/10 overflow-hidden"
        >
          <div className="relative w-full h-80 bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }} />

            {/* Your current position */}
            <motion.div
              className="absolute"
              style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-white shadow-lg shadow-white/50" />
                <motion.div
                  className="absolute inset-0 w-4 h-4 rounded-full border-2 border-white"
                  animate={{
                    scale: [1, 2, 2],
                    opacity: [0.8, 0, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Location markers */}
            {locations.map((location, index) => {
              const colors = getStatusColor(location.status);
              return (
                <motion.button
                  key={location.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  onClick={() => setSelectedLocation(location.id)}
                  className="absolute"
                  style={{
                    left: `${location.x}%`,
                    top: `${location.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="relative">
                    {/* Pulse ring */}
                    <motion.div
                      className={`absolute inset-0 w-8 h-8 rounded-full ${colors.bg} opacity-30`}
                      animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.3, 0, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    
                    {/* Marker */}
                    <div className={`relative w-8 h-8 rounded-full ${colors.bg} opacity-80 border-2 border-white/50 flex items-center justify-center shadow-lg`}>
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Location Cards */}
        <div className="space-y-3">
          <div className="text-xs text-purple-400 uppercase tracking-wider">Nearby Environments</div>
          
          {locations.map((location, index) => {
            const colors = getStatusColor(location.status);
            const isSelected = selectedLocation === location.id;

            return (
              <motion.button
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                onClick={() => setSelectedLocation(isSelected ? null : location.id)}
                className={`w-full text-left bg-white/5 backdrop-blur-sm rounded-2xl p-4 border transition-all ${
                  isSelected ? `${colors.border} border-2` : "border-white/10 hover:bg-white/10"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${colors.bg} opacity-30 flex items-center justify-center flex-shrink-0`}>
                    <MapPin className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <div className="text-sm text-white mb-0.5">{location.name}</div>
                        <div className="text-xs text-purple-400">{location.type} • {location.distance}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg ${colors.text}`}>{location.resonance}</div>
                        <div className="text-xs text-purple-400">index</div>
                      </div>
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-3 border-t border-white/10"
                  >
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-purple-300 leading-relaxed">
                        {location.prediction}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* AR Mode CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-5 border border-cyan-500/30"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="text-sm text-white mb-2">AR Overlay Mode</div>
              <div className="text-xs text-purple-300 leading-relaxed mb-3">
                See resonance fields through smart glasses. Green = safe. Red = danger.
              </div>
              <button className="text-xs text-cyan-400 underline">
                Enable AR Mode
              </button>
            </div>
            <Navigation className="w-8 h-8 text-cyan-400 flex-shrink-0" />
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/dashboard")}
            className="flex-1 py-3 px-4 bg-white/5 backdrop-blur-sm text-white text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
          >
            Live Detection
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/insights")}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-sm rounded-xl shadow-lg shadow-purple-500/30 transition-all"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
  );
}