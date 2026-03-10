import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Home, Lightbulb, Palette, Bell, HomeIcon, Sun, Moon, Plus, X } from "lucide-react";
import { useState } from "react";

export function AmbientOrb() {
  const navigate = useNavigate();
  const [brightness, setBrightness] = useState(75);
  const [alertMode, setAlertMode] = useState<"ambient" | "pulse" | "off">("ambient");
  const [selectedColor, setSelectedColor] = useState("auto");
  const [showAddOrbModal, setShowAddOrbModal] = useState(false);
  const [connectedOrbs, setConnectedOrbs] = useState([
    { id: 1, name: "Living Room", room: "Living Room", synced: false, status: "active" }
  ]);
  const [newOrbName, setNewOrbName] = useState("");
  const [newOrbRoom, setNewOrbRoom] = useState("");
  const [newOrbSynced, setNewOrbSynced] = useState(true);

  const handleAddOrb = () => {
    if (newOrbName && newOrbRoom) {
      const newOrb = {
        id: Date.now(),
        name: newOrbName,
        room: newOrbRoom,
        synced: newOrbSynced,
        status: "active"
      };
      setConnectedOrbs([...connectedOrbs, newOrb]);
      setShowAddOrbModal(false);
      setNewOrbName("");
      setNewOrbRoom("");
      setNewOrbSynced(true);
    }
  };

  const removeOrb = (id: number) => {
    setConnectedOrbs(connectedOrbs.filter(orb => orb.id !== id));
  };

  const colorModes = [
    { 
      id: "auto", 
      name: "Auto Resonance", 
      color: "from-green-400 via-yellow-400 to-red-400",
      description: "Green = calm, Yellow = moderate, Red = high dissonance"
    },
    { 
      id: "blue", 
      name: "Calm Blue", 
      color: "from-blue-400 to-cyan-400",
      description: "Constant calming blue regardless of state"
    },
    { 
      id: "purple", 
      name: "Purple Zen", 
      color: "from-purple-400 to-pink-400",
      description: "Soothing purple ambient light"
    },
    { 
      id: "warm", 
      name: "Warm Sunset", 
      color: "from-orange-400 to-pink-400",
      description: "Warm evening tones for relaxation"
    },
  ];

  const schedules = [
    { time: "Morning (6-9 AM)", mode: "Gentle Wake", brightness: 50 },
    { time: "Work Hours (9-5 PM)", mode: "Auto Resonance", brightness: 75 },
    { time: "Evening (5-10 PM)", mode: "Warm Sunset", brightness: 60 },
    { time: "Night (10 PM-6 AM)", mode: "Off", brightness: 0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 pb-8">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/5 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-white">Ambient Orb</h2>
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
        {/* Orb Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-72 flex items-center justify-center"
        >
          {/* Ambient glow layers */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${120 + i * 40}px`,
                height: `${120 + i * 40}px`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className={`w-full h-full rounded-full bg-gradient-to-br ${
                selectedColor === "auto" ? "from-green-400 via-yellow-400 to-red-400" :
                selectedColor === "blue" ? "from-blue-400 to-cyan-400" :
                selectedColor === "purple" ? "from-purple-400 to-pink-400" :
                "from-orange-400 to-pink-400"
              } blur-3xl opacity-${brightness > 50 ? '80' : '40'}`} />
            </motion.div>
          ))}

          {/* Core orb */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px rgba(168, 85, 247, 0.5)",
                "0 0 80px rgba(168, 85, 247, 0.8)",
                "0 0 40px rgba(168, 85, 247, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-10 w-32 h-32 rounded-full overflow-hidden border-4 border-white/20"
          >
            <div className={`w-full h-full bg-gradient-to-br ${
              selectedColor === "auto" ? "from-green-400 via-yellow-400 to-red-400" :
              selectedColor === "blue" ? "from-blue-400 to-cyan-400" :
              selectedColor === "purple" ? "from-purple-400 to-pink-400" :
              "from-orange-400 to-pink-400"
            }`} style={{ opacity: brightness / 100 }} />
          </motion.div>

          {/* Room placement indicator */}
          <div className="absolute -bottom-4 flex items-center gap-2 text-xs text-purple-400">
            <Home className="w-4 h-4" />
            <span>Living Room</span>
          </div>
        </motion.div>

        {/* Brightness Control */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-5 border border-white/10 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-white flex items-center gap-2">
              <Sun className="w-5 h-5 text-yellow-400" />
              Brightness
            </h3>
            <span className="text-2xl text-purple-300">{brightness}%</span>
          </div>
          
          <input
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(parseInt(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, rgb(168, 85, 247) 0%, rgb(168, 85, 247) ${brightness}%, rgba(255, 255, 255, 0.1) ${brightness}%, rgba(255, 255, 255, 0.1) 100%)`,
            }}
          />
          
          <div className="text-xs text-purple-400">
            {brightness === 0 && "Orb is off"}
            {brightness > 0 && brightness < 40 && "Subtle ambient glow"}
            {brightness >= 40 && brightness < 70 && "Moderate room illumination"}
            {brightness >= 70 && "Full brightness - highly visible"}
          </div>
        </motion.div>

        {/* Color Mode Selection */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider flex items-center gap-2">
            <Palette className="w-4 h-4" />
            Color Mode
          </h3>
          {colorModes.map((mode, index) => (
            <motion.button
              key={mode.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              onClick={() => setSelectedColor(mode.id)}
              className={`w-full bg-white/5 backdrop-blur-sm rounded-2xl p-4 border transition-all ${
                selectedColor === mode.id 
                  ? "border-purple-400 bg-white/10" 
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${mode.color} flex-shrink-0`} />
                <div className="flex-1 text-left">
                  <div className="text-sm text-white mb-1">{mode.name}</div>
                  <div className="text-xs text-purple-400">{mode.description}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Alert Mode */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Alert Behavior
          </h3>
          <div className="flex gap-2 bg-black/30 backdrop-blur-sm rounded-xl p-1 border border-white/10">
            <button
              onClick={() => setAlertMode("ambient")}
              className={`flex-1 py-3 px-4 rounded-lg text-xs transition-all ${
                alertMode === "ambient"
                  ? "bg-purple-500 text-white"
                  : "text-purple-400 hover:text-purple-200"
              }`}
            >
              Ambient Shift
            </button>
            <button
              onClick={() => setAlertMode("pulse")}
              className={`flex-1 py-3 px-4 rounded-lg text-xs transition-all ${
                alertMode === "pulse"
                  ? "bg-purple-500 text-white"
                  : "text-purple-400 hover:text-purple-200"
              }`}
            >
              Pulse Alert
            </button>
            <button
              onClick={() => setAlertMode("off")}
              className={`flex-1 py-3 px-4 rounded-lg text-xs transition-all ${
                alertMode === "off"
                  ? "bg-purple-500 text-white"
                  : "text-purple-400 hover:text-purple-200"
              }`}
            >
              Off
            </button>
          </div>
          <div className="text-xs text-purple-400 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
            {alertMode === "ambient" && "🌊 Orb gradually shifts color as resonance changes"}
            {alertMode === "pulse" && "⚡ Orb pulses when approaching dissonance threshold"}
            {alertMode === "off" && "⭕ No alerts - display only"}
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider flex items-center gap-2">
            <Moon className="w-4 h-4" />
            Auto Schedule
          </h3>
          {schedules.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 flex items-center justify-between"
            >
              <div>
                <div className="text-sm text-white mb-1">{schedule.time}</div>
                <div className="text-xs text-purple-400">{schedule.mode}</div>
              </div>
              <div className="text-sm text-purple-300">{schedule.brightness}%</div>
            </motion.div>
          ))}
        </div>

        {/* Room Sync */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-5 border border-purple-400/30"
        >
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-6 h-6 text-purple-400" />
            <div className="flex-1">
              <div className="text-sm text-white mb-1">Connected Orbs ({connectedOrbs.length})</div>
              <div className="text-xs text-purple-300">Manage your multi-room setup</div>
            </div>
          </div>

          {/* List of Connected Orbs */}
          <div className="space-y-2 mb-3">
            {connectedOrbs.map((orb) => (
              <motion.div
                key={orb.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div>
                    <div className="text-sm text-white">{orb.name}</div>
                    <div className="text-xs text-purple-300 flex items-center gap-2">
                      {orb.room}
                      {orb.synced && <span className="text-purple-400">• Synced</span>}
                    </div>
                  </div>
                </div>
                {orb.id !== 1 && (
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => removeOrb(orb.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowAddOrbModal(true)}
            className="w-full py-3 px-4 bg-white/10 backdrop-blur-sm text-white text-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Another Orb
          </motion.button>
        </motion.div>

        {/* Navigation */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/dashboard")}
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-sm rounded-xl shadow-lg shadow-purple-500/30 transition-all"
        >
          View Live Detection
        </motion.button>
      </div>

      {/* Add Orb Modal */}
      <AnimatePresence>
        {showAddOrbModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setShowAddOrbModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl p-6 border border-purple-500/30 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl text-white flex items-center gap-2">
                  <Plus className="w-6 h-6 text-purple-400" />
                  Add Another Orb
                </h3>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAddOrbModal(false)}
                  className="text-purple-400 hover:text-purple-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="space-y-5">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-purple-400" />
                    <div className="text-sm text-white">Orb Name</div>
                  </div>
                  <input
                    type="text"
                    placeholder="e.g., Bedroom Orb"
                    value={newOrbName}
                    onChange={(e) => setNewOrbName(e.target.value)}
                    className="w-full py-3 px-4 bg-white/10 backdrop-blur-sm text-white text-sm rounded-xl border border-white/20 focus:border-purple-400 focus:outline-none transition-all placeholder:text-purple-400/50"
                  />
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Home className="w-6 h-6 text-purple-400" />
                    <div className="text-sm text-white">Room Location</div>
                  </div>
                  <select
                    value={newOrbRoom}
                    onChange={(e) => setNewOrbRoom(e.target.value)}
                    className="w-full py-3 px-4 bg-white/10 backdrop-blur-sm text-white text-sm rounded-xl border border-white/20 focus:border-purple-400 focus:outline-none transition-all"
                  >
                    <option value="" className="bg-slate-900">Select room...</option>
                    <option value="bedroom" className="bg-slate-900">Bedroom</option>
                    <option value="office" className="bg-slate-900">Office</option>
                    <option value="entryway" className="bg-slate-900">Entryway</option>
                    <option value="kitchen" className="bg-slate-900">Kitchen</option>
                    <option value="bathroom" className="bg-slate-900">Bathroom</option>
                  </select>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="text-sm text-white mb-3">Sync with Living Room?</div>
                  <div className="flex gap-2">
                    <button
                      className="flex-1 py-2 px-4 bg-purple-500 text-white text-sm rounded-lg"
                      onClick={() => setNewOrbSynced(true)}
                    >
                      Yes
                    </button>
                    <button
                      className="flex-1 py-2 px-4 bg-white/10 text-purple-300 text-sm rounded-lg border border-white/20"
                      onClick={() => setNewOrbSynced(false)}
                    >
                      No
                    </button>
                  </div>
                  <div className="text-xs text-purple-400 mt-3">
                    Synced orbs display the same state and color
                  </div>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleAddOrb}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-sm rounded-xl shadow-lg shadow-purple-500/30 transition-all mt-6"
              >
                Add Orb
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}