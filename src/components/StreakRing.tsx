import { motion } from "framer-motion";

interface StreakRingProps {
  currentStreak: number;
  bestStreak: number;
  todayComplete: boolean;
}

const StreakRing = ({ currentStreak, bestStreak, todayComplete }: StreakRingProps) => {
  const circumference = 2 * Math.PI * 54;
  const progress = todayComplete ? 1 : 0.65;

  return (
    <div className="surface-elevated p-6 flex flex-col items-center gap-3">
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(var(--progress-track))" strokeWidth="8" />
          <motion.circle
            cx="60" cy="60" r="54" fill="none"
            stroke="hsl(var(--streak))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference * (1 - progress) }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-3xl font-display font-bold text-gradient-streak"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            🔥 {currentStreak}
          </motion.span>
          <span className="text-xs text-muted-foreground">day streak</span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-foreground">
          {todayComplete ? "Today's goal complete!" : "Complete today's tasks"}
        </p>
        <p className="text-xs text-muted-foreground mt-1">Best streak: {bestStreak} days</p>
      </div>
    </div>
  );
};

export default StreakRing;
