import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { TrendingDown, Calendar, MapPin, Clock, Zap, Brain, HomeIcon } from "lucide-react";
import { LineChart, Line, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function Patterns() {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState<"week" | "month">("week");

  // Simulated historical data - in reality from biometric tracking
  const weeklyData = [
    { id: "mon", day: "Mon", resonance: 45, recovery: 30, dissonance: 15 },
    { id: "tue", day: "Tue", resonance: 52, recovery: 25, dissonance: 27 },
    { id: "wed", day: "Wed", resonance: 78, recovery: 10, dissonance: 68 },
    { id: "thu", day: "Thu", resonance: 35, recovery: 50, dissonance: 8 },
    { id: "fri", day: "Fri", resonance: 68, recovery: 18, dissonance: 50 },
    { id: "sat", day: "Sat", resonance: 25, recovery: 60, dissonance: 5 },
    { id: "sun", day: "Sun", resonance: 30, recovery: 55, dissonance: 10 },
  ];

  const monthlyData = [
    { id: "w1", week: "Week 1", resonance: 52, recovery: 35, dissonance: 32 },
    { id: "w2", week: "Week 2", resonance: 65, recovery: 22, dissonance: 48 },
    { id: "w3", week: "Week 3", resonance: 45, recovery: 40, dissonance: 25 },
    { id: "w4", week: "Week 4", resonance: 58, recovery: 28, dissonance: 38 },
  ];

  const data = timeframe === "week" ? weeklyData : monthlyData;

  // Trigger patterns detected by AI
  const triggers = [
    {
      id: "crowd",
      name: "Crowded Spaces",
      frequency: 12,
      avgImpact: "+42",
      times: "12-2 PM, 5-7 PM",
      icon: MapPin,
    },
    {
      id: "meetings",
      name: "Back-to-Back Meetings",
      frequency: 8,
      avgImpact: "+38",
      times: "Mon-Wed mornings",
      icon: Calendar,
    },
    {
      id: "sleep",
      name: "Poor Sleep (<6hrs)",
      frequency: 5,
      avgImpact: "+28",
      times: "Following day afternoon",
      icon: Clock,
    },
    {
      id: "fluorescent",
      name: "Fluorescent Lighting",
      frequency: 15,
      avgImpact: "+22",
      times: "Office hours",
      icon: Zap,
    },
  ];

  // Optimal conditions
  const radarData = [
    { factor: "Time", current: 65, optimal: 85 },
    { factor: "Location", current: 40, optimal: 90 },
    { factor: "Social", current: 55, optimal: 75 },
    { factor: "Sensory", current: 45, optimal: 85 },
    { factor: "Rest", current: 70, optimal: 95 },
    { factor: "Control", current: 60, optimal: 80 },
  ];

  // Insights
  const insights = [
    {
      type: "warning",
      title: "Wednesday Pattern",
      description: "Your dissonance consistently peaks on Wednesdays (avg 78). This coincides with all-hands meetings + open office hours.",
    },
    {
      type: "success",
      title: "Weekend Recovery",
      description: "Deep resonance achieved every weekend (avg 27). Your nervous system fully resets with 2 days of low neural density exposure.",
    },
    {
      type: "tip",
      title: "Optimal Window",
      description: "Thursday mornings (7-9 AM) show your lowest dissonance (avg 28). Schedule important tasks requiring focus during this window.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 pb-8">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/5 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-white">Your Patterns</h2>
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
        {/* Timeframe Toggle */}
        <div className="flex gap-2 bg-black/30 backdrop-blur-sm rounded-xl p-1 border border-white/10">
          <button
            onClick={() => setTimeframe("week")}
            className={`flex-1 py-2 px-4 rounded-lg text-sm transition-all ${
              timeframe === "week"
                ? "bg-purple-500 text-white"
                : "text-purple-400 hover:text-purple-200"
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setTimeframe("month")}
            className={`flex-1 py-2 px-4 rounded-lg text-sm transition-all ${
              timeframe === "month"
                ? "bg-purple-500 text-white"
                : "text-purple-400 hover:text-purple-200"
            }`}
          >
            This Month
          </button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Avg Resonance", value: "48", status: "good", color: "text-green-400" },
            { label: "Peak Day", value: "Wed", status: "caution", color: "text-yellow-400" },
            { label: "Recovery Days", value: "3", status: "optimal", color: "text-blue-400" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center"
            >
              <div className={`text-2xl mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-purple-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Resonance Trend Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-5 border border-white/10"
        >
          <h3 className="text-white mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-purple-400" />
            Resonance Trend
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
              <XAxis 
                dataKey={timeframe === "week" ? "day" : "week"} 
                stroke="rgba(168, 85, 247, 0.5)" 
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="rgba(168, 85, 247, 0.5)" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Line 
                type="monotone" 
                dataKey="resonance" 
                stroke="rgb(168, 85, 247)" 
                strokeWidth={3}
                dot={{ fill: "rgb(168, 85, 247)", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Recovery vs Dissonance Bar Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-5 border border-white/10"
        >
          <h3 className="text-white mb-4">Recovery vs Dissonance</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
              <XAxis 
                dataKey={timeframe === "week" ? "day" : "week"} 
                stroke="rgba(168, 85, 247, 0.5)" 
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="rgba(168, 85, 247, 0.5)" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  border: "1px solid rgba(139, 92, 246, 0.3)",
                  borderRadius: "12px",
                  fontSize: "12px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="recovery" fill="rgb(34, 197, 94)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="dissonance" fill="rgb(239, 68, 68)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Optimal Conditions Radar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-black/30 backdrop-blur-sm rounded-3xl p-5 border border-white/10"
        >
          <h3 className="text-white mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            Optimal Conditions Gap
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(139, 92, 246, 0.3)" />
              <PolarAngleAxis 
                dataKey="factor" 
                stroke="rgba(168, 85, 247, 0.7)"
                style={{ fontSize: "11px" }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                stroke="rgba(168, 85, 247, 0.5)"
                style={{ fontSize: "10px" }}
              />
              <Radar 
                name="Current" 
                dataKey="current" 
                stroke="rgb(251, 191, 36)" 
                fill="rgb(251, 191, 36)" 
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Radar 
                name="Optimal" 
                dataKey="optimal" 
                stroke="rgb(34, 197, 94)" 
                fill="rgb(34, 197, 94)" 
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="text-xs text-purple-400 text-center mt-2">
            Yellow = Your average | Green = Your optimal state
          </div>
        </motion.div>

        {/* Detected Triggers */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider">Top Dissonance Triggers</h3>
          {triggers.map((trigger, index) => {
            const Icon = trigger.icon;
            return (
              <motion.div
                key={trigger.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="text-sm text-white mb-1">{trigger.name}</div>
                        <div className="text-xs text-purple-400">{trigger.times}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-red-400">{trigger.avgImpact}</div>
                        <div className="text-xs text-purple-400">avg impact</div>
                      </div>
                    </div>
                    <div className="text-xs text-purple-400">
                      Occurred {trigger.frequency}x this {timeframe}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* AI Insights */}
        <div className="space-y-3">
          <h3 className="text-sm text-purple-300 uppercase tracking-wider">AI Insights</h3>
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={`backdrop-blur-sm rounded-2xl p-4 border ${
                insight.type === "warning"
                  ? "bg-orange-500/10 border-orange-500/30"
                  : insight.type === "success"
                  ? "bg-green-500/10 border-green-500/30"
                  : "bg-blue-500/10 border-blue-500/30"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`text-2xl flex-shrink-0`}>
                  {insight.type === "warning" && "⚠️"}
                  {insight.type === "success" && "✓"}
                  {insight.type === "tip" && "💡"}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white mb-1">{insight.title}</div>
                  <div className="text-xs text-purple-300 leading-relaxed">
                    {insight.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-3 pt-2">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/dashboard")}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white text-sm rounded-xl shadow-lg shadow-purple-500/30 transition-all"
          >
            Live Detection
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/insights")}
            className="flex-1 py-3 px-4 bg-white/5 backdrop-blur-sm text-white text-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
          >
            How It Works
          </motion.button>
        </div>
      </div>
    </div>
  );
}