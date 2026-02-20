import { motion } from "framer-motion";
import { Trophy, Target, Zap, BookOpen } from "lucide-react";

const Leaderboard = () => {
  const badges = [
    { icon: Zap, label: "7-Day Streak", earned: true },
    { icon: Trophy, label: "Mock Master", earned: true },
    { icon: Target, label: "Band 7 Ready", earned: false },
    { icon: BookOpen, label: "100 Lessons", earned: false },
  ];

  const peers = [
    { name: "You", xp: 1240, rank: 3, isUser: true },
    { name: "Priya S.", xp: 1580, rank: 1 },
    { name: "Arjun M.", xp: 1420, rank: 2 },
    { name: "Sneha R.", xp: 1100, rank: 4 },
    { name: "Rahul K.", xp: 980, rank: 5 },
  ].sort((a, b) => a.rank - b.rank);

  return (
    <div className="space-y-4">
      {/* Badges */}
      <div className="surface-elevated p-6">
        <h3 className="font-display font-semibold text-lg text-foreground mb-4">Badges</h3>
        <div className="grid grid-cols-4 gap-3">
          {badges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl ${b.earned ? "bg-accent/10" : "bg-secondary opacity-40"}`}
            >
              <b.icon className={`w-6 h-6 ${b.earned ? "text-accent" : "text-muted-foreground"}`} />
              <span className="text-[10px] text-center font-medium text-foreground leading-tight">{b.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="surface-elevated p-6">
        <h3 className="font-display font-semibold text-lg text-foreground mb-4">Study Group</h3>
        <div className="space-y-2">
          {peers.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`flex items-center gap-3 p-3 rounded-xl ${p.isUser ? "bg-primary/10 border border-primary/20" : ""}`}
            >
              <span className={`w-6 text-sm font-bold ${p.rank <= 3 ? "text-accent" : "text-muted-foreground"}`}>
                #{p.rank}
              </span>
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-foreground">
                {p.name[0]}
              </div>
              <span className={`flex-1 text-sm font-medium ${p.isUser ? "text-primary" : "text-foreground"}`}>
                {p.name}
              </span>
              <span className="text-xs font-semibold text-muted-foreground">{p.xp} XP</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
