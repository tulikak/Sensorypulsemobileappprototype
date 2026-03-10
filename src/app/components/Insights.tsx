import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Brain, Zap, Waves, Clock, Shield, Target, HomeIcon } from "lucide-react";

export function Insights() {
  const navigate = useNavigate();

  const useCases = [
    {
      title: "Alexis, 32, Autistic Software Engineer",
      scenario: "Meeting Overload",
      before: "Unable to detect when approaching meltdown until it's too late",
      after: "Wearable vibrates at 70 resonance. Alexis sees she has 15 min before critical threshold. Excuses herself, finds quiet room. Crisis averted.",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Jordan, 28, ADHD Grad Student",
      scenario: "Environment Selection",
      before: "Tries to study in coffee shop, becomes inexplicably exhausted and unproductive",
      after: "Checks resonance map before leaving home. Coffee shop shows 78 dissonance (crowd + music). Chooses library (32 resonance) instead. Productive session.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Sam, 45, HSP Parent",
      scenario: "Social Event Management",
      before: "Forces through family gathering, pays with 3-day recovery burnout",
      after: "Enters party at 45 resonance. Monitors real-time. At 75, AR overlay shows quiet patio (22 resonance). Strategic break prevents shutdown.",
      icon: Waves,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const safeguards = [
    {
      title: "Consent-First Detection",
      description: "Only detects YOUR nervous system state. Cannot read others' emotions or states without their explicit device pairing and consent.",
      icon: Shield,
      priority: "critical",
    },
    {
      title: "Anonymous Proximity Data",
      description: "Neural density detection counts nervous systems nearby but collects zero identifying information. No facial recognition, no tracking.",
      icon: Shield,
      priority: "critical",
    },
    {
      title: "Override Control",
      description: "Instant disable button. You choose when to monitor. No forced always-on surveillance of your biometrics.",
      icon: Target,
      priority: "high",
    },
    {
      title: "Emergency Mode",
      description: "If resonance hits 90+, system can auto-alert trusted contact or suggest nearest recovery space. Configurable, opt-in only.",
      icon: Target,
      priority: "high",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 pb-8">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/5 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-white">How It Works</h2>
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

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Core Concept */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30"
        >
          <h3 className="text-white text-lg mb-3">The New Sense</h3>
          <div className="space-y-3 text-sm text-purple-200 leading-relaxed">
            <p>
              <strong className="text-white">What you're detecting:</strong> Electromagnetic resonance between your nervous system and your environment.
            </p>
            <p>
              When you feel inexplicably "drained" or "energized" in certain spaces, that's real—you're experiencing frequency mismatch or alignment. But you can't see it, measure it, or predict it.
            </p>
            <p className="text-purple-100">
              <strong>Until now.</strong> SensoryPulse makes the invisible visible through passive biometric sensors + environmental detection.
            </p>
          </div>
        </motion.div>

        {/* Who It's For */}
        <div>
          <h3 className="text-white mb-3">Who This Is For</h3>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
            <div className="space-y-3 text-sm text-purple-300">
              <div>
                <div className="text-white mb-1">🎯 Primary: Neurodivergent Adults (25-45)</div>
                <div className="text-xs">Autistic, ADHD, HSP individuals who experience sensory overwhelm but can't predict or detect warning signs early enough.</div>
              </div>
              <div className="pt-3 border-t border-white/10">
                <div className="text-white mb-1">📊 Secondary: Burnout-Prone Professionals</div>
                <div className="text-xs">Anyone who pushes through discomfort until forced shutdown. Cannot self-regulate because signals are invisible.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <h3 className="text-white mb-3">Use Cases</h3>
          <div className="space-y-4">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${useCase.color} opacity-30 flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white mb-1">{useCase.title}</div>
                      <div className="text-xs text-purple-400">{useCase.scenario}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="text-purple-400 mb-1">❌ Before:</div>
                      <div className="text-purple-300 leading-relaxed">{useCase.before}</div>
                    </div>
                    <div>
                      <div className="text-green-400 mb-1">✓ After:</div>
                      <div className="text-purple-200 leading-relaxed">{useCase.after}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* How It Works Technically */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-black/30 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
        >
          <h3 className="text-white mb-3">Detection System</h3>
          <div className="space-y-3">
            {[
              {
                label: "Biometric Sensors",
                detail: "Wearable tracks HRV, skin conductance, temperature. Detects nervous system stress before you consciously feel it.",
              },
              {
                label: "Environmental Detection",
                detail: "Sound frequency analysis, light spectrum measurement, EMF field detection, proximity sensors (anonymous crowd density).",
              },
              {
                label: "AI Pattern Learning",
                detail: "Machine learning identifies YOUR unique thresholds. What's resonant for you may differ from others.",
              },
              {
                label: "Predictive Modeling",
                detail: "Historical data + current trajectory = early warning system. Alerts 15-30 min before critical threshold.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0 mt-1.5" />
                <div className="flex-1">
                  <div className="text-sm text-white mb-1">{item.label}</div>
                  <div className="text-xs text-purple-300 leading-relaxed">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Wellness Goal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-2xl p-5 border border-green-500/30"
        >
          <h3 className="text-white mb-3">Wellness Goal</h3>
          <div className="space-y-2 text-sm text-purple-200 leading-relaxed">
            <p>
              <strong className="text-white">Primary:</strong> Prevent nervous system bankruptcy (meltdowns, shutdowns, burnout) through early detection and intervention.
            </p>
            <p>
              <strong className="text-white">Secondary:</strong> Enable informed consent to sensory cost. Choose when to "spend" capacity vs. when to protect it.
            </p>
            <p className="text-xs text-purple-400 pt-2 border-t border-green-500/20">
              Dimension: Mental, emotional, and physical wellbeing through nervous system regulation
            </p>
          </div>
        </motion.div>

        {/* Safeguards */}
        <div>
          <h3 className="text-white mb-3">Safeguards & Ethics</h3>
          <div className="space-y-3">
            {safeguards.map((safeguard, index) => {
              const Icon = safeguard.icon;
              return (
                <motion.div
                  key={safeguard.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className={`backdrop-blur-sm rounded-2xl p-4 border ${
                    safeguard.priority === "critical"
                      ? "bg-red-500/10 border-red-500/30"
                      : "bg-orange-500/10 border-orange-500/30"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      safeguard.priority === "critical" ? "bg-red-500/20" : "bg-orange-500/20"
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        safeguard.priority === "critical" ? "text-red-400" : "text-orange-400"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-sm text-white">{safeguard.title}</div>
                        <div className={`text-xs px-2 py-0.5 rounded-full ${
                          safeguard.priority === "critical"
                            ? "bg-red-500/30 text-red-300"
                            : "bg-orange-500/30 text-orange-300"
                        }`}>
                          {safeguard.priority}
                        </div>
                      </div>
                      <div className="text-xs text-purple-300 leading-relaxed">
                        {safeguard.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Edge Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
        >
          <h3 className="text-white mb-3">Edge Cases & Considerations</h3>
          <div className="space-y-3 text-xs text-purple-300">
            <div>
              <strong className="text-white">False Positives:</strong> Excitement and anxiety can have similar signatures. System learns to distinguish via context (location, time, calendar events).
            </div>
            <div>
              <strong className="text-white">Dependency Risk:</strong> Could users become over-reliant on external monitoring vs. internal awareness? Include "calibration mode" that teaches body signal recognition.
            </div>
            <div>
              <strong className="text-white">Social Stigma:</strong> Wearable haptics are private—no visible warnings. AR overlay only visible to user.
            </div>
            <div>
              <strong className="text-white">Medical Disclaimer:</strong> Not a diagnostic tool. Complement to, not replacement for, medical care and therapy.
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/dashboard")}
            className="py-3 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-sm rounded-xl shadow-lg shadow-purple-500/30 transition-all"
          >
            View Live Detection
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/")}
            className="py-3 px-4 bg-white/5 backdrop-blur-sm text-white text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
          >
            Back to Home
          </motion.button>
        </div>
      </div>
    </div>
  );
}