import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Shield, Database, MapPin, Heart, Eye, Lock, ArrowLeft } from "lucide-react";

export function Privacy() {
  const navigate = useNavigate();

  const sections = [
    {
      icon: Database,
      title: "Data Collected",
      items: [
        "Heart rate variability (HRV)",
        "Skin conductance & temperature",
        "Movement & activity patterns",
        "GPS location (approximate)",
        "Ambient sound levels (dB only, no audio)",
        "Light intensity & spectrum",
        "Time-stamped nervous system states",
      ],
    },
    {
      icon: Lock,
      title: "How Data Is Stored",
      items: [
        "All processing happens locally on your device",
        "No cloud uploads without explicit consent",
        "Encrypted storage using device security",
        "Pattern data stored for 90 days, then deleted",
        "You can delete all data anytime from Settings",
      ],
    },
    {
      icon: Eye,
      title: "What We Never Collect",
      items: [
        "Audio recordings or conversations",
        "Photos or camera access",
        "Precise GPS coordinates (only general area)",
        "Contact lists or messages",
        "Personally identifiable information (PII)",
      ],
    },
    {
      icon: Shield,
      title: "Your Control",
      items: [
        "Turn off location tracking anytime",
        "Disable specific sensors",
        "Export your data as JSON",
        "Delete your account & all data instantly",
        "Opt-out of anonymous research sharing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 pb-8">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/5 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/")}
                className="text-purple-400 hover:text-purple-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <h2 className="text-lg text-white">Privacy & Data Collection</h2>
            </div>
            <Shield className="w-5 h-5 text-purple-400" />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-6 space-y-5">
        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-5 border border-purple-500/40"
        >
          <div className="flex items-start gap-3">
            <Heart className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-sm text-white mb-2">Speculative Design Prototype</div>
              <div className="text-xs text-purple-300 leading-relaxed">
                SensoryPulse is a design concept exploring biometric tracking for autistic/HSP burnout prevention. 
                This prototype simulates data collection. No actual biometric or location data is collected, stored, or transmitted.
              </div>
            </div>
          </div>
        </motion.div>

        {/* If this were real */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center py-4"
        >
          <div className="text-xs text-purple-400 uppercase tracking-wider mb-2">
            If This Were A Real App
          </div>
          <div className="text-xs text-purple-400/70">
            Here's how we would handle your sensitive data
          </div>
        </motion.div>

        {/* Privacy Sections */}
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white text-base">{section.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-purple-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}

        {/* Purpose Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-5 border border-blue-500/30"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="text-sm text-white mb-2">Why We Need This Data</div>
              <div className="text-xs text-purple-300 leading-relaxed">
                Predicting nervous system overload requires tracking environmental factors (location, crowd density, 
                light, sound) alongside biometric responses (HRV, skin conductance). The AI learns YOUR unique 
                triggers—what causes stress for you may not affect others. All processing happens locally to protect 
                your privacy while delivering personalized predictions 15-30 minutes before burnout hits.
              </div>
            </div>
          </div>
        </motion.div>

        {/* GDPR/CCPA Compliance */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
        >
          <div className="text-sm text-white mb-3">Regulatory Compliance</div>
          <div className="text-xs text-purple-400 leading-relaxed space-y-2">
            <p>
              <strong className="text-purple-300">GDPR (EU):</strong> Right to access, rectify, erase, and port your data. 
              Data minimization by design.
            </p>
            <p>
              <strong className="text-purple-300">CCPA (California):</strong> Disclosure of data categories, right to opt-out 
              of sales (we never sell data).
            </p>
            <p>
              <strong className="text-purple-300">HIPAA:</strong> Not applicable—this is not a medical device. 
              Biometric data for personal insight only.
            </p>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center py-4 space-y-2"
        >
          <div className="text-xs text-purple-400">Questions about your data?</div>
          <div className="text-xs text-purple-300">privacy@sensorypulse.app (speculative)</div>
        </motion.div>

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/")}
          className="w-full py-3 px-6 bg-white/5 backdrop-blur-sm text-white text-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
        >
          Back to Home
        </motion.button>
      </div>
    </div>
  );
}
