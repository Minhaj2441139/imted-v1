"use client"

import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";
import { motion } from "framer-motion";

// Generate realistic energy consumption data
const generateConsumptionData = () => {
  const data = [];
  const baseConsumption = 150;
  const anomalyIndices = [8, 15, 22];

  for (let i = 0; i < 24; i++) {
    const hour = i;
    const predicted =
      baseConsumption + Math.sin(i / 4) * 50 + Math.random() * 20;
    let actual = predicted + (Math.random() - 0.5) * 30;

    // Add anomalies
    if (anomalyIndices.includes(i)) {
      actual += 80 + Math.random() * 40;
    }

    data.push({
      hour: `${hour}:00`,
      predicted: Math.round(predicted),
      actual: Math.round(actual),
      isAnomaly: anomalyIndices.includes(i),
    });
  }
  return data;
};

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"consumption" | "anomaly">(
    "consumption"
  );
  const data = useMemo(() => generateConsumptionData(), []);

  const anomalies = data.filter((d) => d.isAnomaly);
  const avgAccuracy = Math.round(
    (data.reduce(
      (sum, d) => sum + (1 - Math.abs(d.actual - d.predicted) / d.predicted),
      0
    ) /
      data.length) *
      100
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full space-y-6">
      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="glass p-6 rounded-xl">
          <p className="text-sm text-muted-foreground mb-2">
            Prediction Accuracy
          </p>
          <p
            className="text-3xl font-bold text-primary"
            suppressHydrationWarning
          >
            {avgAccuracy}%
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Real-time AI model
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass p-6 rounded-xl">
          <p className="text-sm text-muted-foreground mb-2">
            Anomalies Detected
          </p>
          <p className="text-3xl font-bold text-accent">{anomalies.length}</p>
          <p className="text-xs text-muted-foreground mt-2">In last 24 hours</p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass p-6 rounded-xl">
          <p className="text-sm text-muted-foreground mb-2">Avg Consumption</p>
          <p className="text-3xl font-bold text-primary">
            {Math.round(
              data.reduce((sum, d) => sum + d.actual, 0) / data.length
            )}{" "}
            kWh
          </p>
          <p className="text-xs text-muted-foreground mt-2">Current period</p>
        </motion.div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        className="flex gap-2 glass p-1 rounded-lg w-fit"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <button
          onClick={() => setActiveTab("consumption")}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeTab === "consumption"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Real vs Predicted
        </button>
        <button
          onClick={() => setActiveTab("anomaly")}
          className={`px-4 py-2 rounded-md transition-all duration-300 ${
            activeTab === "anomaly"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Anomaly Detection
        </button>
      </motion.div>

      {/* Charts */}
      <motion.div
        className="glass p-8 rounded-xl"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {activeTab === "consumption" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              24-Hour Energy Consumption
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorPredicted"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#00D9A3" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00D9A3" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#39FF14" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#39FF14" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis dataKey="hour" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid rgba(0, 217, 163, 0.5)",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="predicted"
                  stroke="#00D9A3"
                  fillOpacity={1}
                  fill="url(#colorPredicted)"
                  name="Predicted (kWh)"
                />
                <Area
                  type="monotone"
                  dataKey="actual"
                  stroke="#39FF14"
                  fillOpacity={1}
                  fill="url(#colorActual)"
                  name="Actual (kWh)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-sm text-muted-foreground">
              Green line shows actual consumption, teal shows AI predictions.
              The closer they are, the better our model performs.
            </p>
          </div>
        )}

        {activeTab === "anomaly" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Anomaly Detection Analysis
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                />
                <XAxis
                  type="number"
                  dataKey="hour"
                  name="Hour"
                  stroke="rgba(255,255,255,0.5)"
                />
                <YAxis
                  type="number"
                  dataKey="actual"
                  name="Consumption (kWh)"
                  stroke="rgba(255,255,255,0.5)"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid rgba(0, 217, 163, 0.5)",
                    borderRadius: "8px",
                  }}
                  cursor={{ strokeDasharray: "3 3" }}
                />
                <Scatter
                  name="Normal"
                  data={data.filter((d) => !d.isAnomaly)}
                  fill="#00D9A3"
                  fillOpacity={0.6}
                />
                <Scatter
                  name="Anomaly Detected"
                  data={data.filter((d) => d.isAnomaly)}
                  fill="#FF6B6B"
                  fillOpacity={0.8}
                />
              </ScatterChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {anomalies.map((anomaly, idx) => (
                <motion.div
                  key={idx}
                  className="glass p-4 rounded-lg border border-red-500/30"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm font-semibold text-red-400">
                    Alert #{idx + 1}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {anomaly.hour}
                  </p>
                  <p className="text-lg font-bold mt-2">{anomaly.actual} kWh</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    +{anomaly.actual - anomaly.predicted} kWh above predicted
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Key Insights */}
      <motion.div
        className="glass p-6 rounded-xl"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="font-semibold mb-4">Key Insights</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold">•</span>
            <span>
              Peak consumption detected at 15:00 - consider load shifting to
              off-peak hours
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold">•</span>
            <span>
              Anomalies suggest potential equipment malfunction - recommend
              maintenance check
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-bold">•</span>
            <span>
              Potential savings of 15-20% by optimizing consumption patterns
            </span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
