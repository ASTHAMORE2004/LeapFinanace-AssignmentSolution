import { motion } from "framer-motion";

const WeeklyProgress = () => {
  const days = [
    { day: "Mon", completed: true, xp: 85 },
    { day: "Tue", completed: true, xp: 120 },
    { day: "Wed", completed: true, xp: 60 },
    { day: "Thu", completed: true, xp: 95 },
    { day: "Fri", completed: false, xp: 40, isToday: true },
    { day: "Sat", completed: false, xp: 0 },
    { day: "Sun", completed: false, xp: 0 },
  ];

  const maxXp = 120;

  return (
    <div className="surface-elevated p-6">
      <h3 className="font-display font-semibold text-lg text-foreground mb-1">This Week</h3>
      <p className="text-sm text-muted-foreground mb-5">400 / 700 XP weekly goal</p>

      <div className="flex items-end justify-between gap-2 h-28">
        {days.map((d, i) => (
          <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
            <motion.div
              className="w-full rounded-lg relative overflow-hidden"
              style={{ minHeight: 8, backgroundColor: "hsl(var(--progress-track))" }}
              initial={{ height: 8 }}
              animate={{ height: Math.max(8, (d.xp / maxXp) * 80) }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <motion.div
                className={`absolute inset-0 rounded-lg ${d.completed ? "bg-primary" : d.isToday ? "bg-accent" : "bg-secondary"}`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                style={{ transformOrigin: "bottom" }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
              />
            </motion.div>
            <span className={`text-xs font-medium ${d.isToday ? "text-accent" : d.completed ? "text-foreground" : "text-muted-foreground"}`}>
              {d.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyProgress;
