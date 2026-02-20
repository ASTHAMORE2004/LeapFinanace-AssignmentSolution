import { motion } from "framer-motion";

const ScorePredictor = () => {
  const sections = [
    { name: "Listening", current: 6.5, target: 7.5, color: "bg-primary" },
    { name: "Reading", current: 6.0, target: 7.0, color: "bg-accent" },
    { name: "Writing", current: 5.5, target: 7.0, color: "bg-badge" },
    { name: "Speaking", current: 6.0, target: 7.5, color: "bg-primary" },
  ];

  const overallCurrent = 6.0;
  const overallTarget = 7.5;

  return (
    <div className="surface-elevated p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground">Score Predictor</h3>
          <p className="text-sm text-muted-foreground">Based on your practice performance</p>
        </div>
        <div className="text-right">
          <motion.p
            className="text-2xl font-display font-bold text-gradient-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {overallCurrent}
          </motion.p>
          <p className="text-xs text-muted-foreground">Target: {overallTarget}</p>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between text-sm mb-1.5">
              <span className="font-medium text-foreground">{s.name}</span>
              <span className="text-muted-foreground">{s.current} / {s.target}</span>
            </div>
            <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${s.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${(s.current / 9) * 100}%` }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.7 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScorePredictor;
