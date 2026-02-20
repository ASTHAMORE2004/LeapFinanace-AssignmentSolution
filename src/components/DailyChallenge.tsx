import { motion } from "framer-motion";
import { Check, Lock, Play, Mic, FileText, BookOpen } from "lucide-react";

interface Task {
  id: string;
  title: string;
  type: "video" | "practice" | "speaking" | "reading";
  xp: number;
  duration: string;
  completed: boolean;
  locked: boolean;
}

const iconMap = {
  video: Play,
  practice: FileText,
  speaking: Mic,
  reading: BookOpen,
};

const typeColors = {
  video: "bg-primary/10 text-primary",
  practice: "bg-accent/10 text-accent",
  speaking: "bg-badge/10 text-badge",
  reading: "bg-primary/10 text-primary",
};

const DailyChallenge = () => {
  const tasks: Task[] = [
    { id: "1", title: "Watch: Listening Section Tips", type: "video", xp: 20, duration: "8 min", completed: true, locked: false },
    { id: "2", title: "Practice: Reading Passage", type: "practice", xp: 30, duration: "15 min", completed: true, locked: false },
    { id: "3", title: "Speaking: Describe a Place", type: "speaking", xp: 40, duration: "10 min", completed: false, locked: false },
    { id: "4", title: "Mini Mock: Writing Task 1", type: "reading", xp: 50, duration: "20 min", completed: false, locked: false },
    { id: "5", title: "Bonus: Vocabulary Builder", type: "practice", xp: 15, duration: "5 min", completed: false, locked: true },
  ];

  const completedCount = tasks.filter(t => t.completed).length;
  const totalXp = tasks.filter(t => t.completed).reduce((sum, t) => sum + t.xp, 0);

  return (
    <div className="surface-elevated p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground">Today's Challenges</h3>
          <p className="text-sm text-muted-foreground">{completedCount}/{tasks.length} completed · {totalXp} XP earned</p>
        </div>
        <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
          Day 12
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 rounded-full bg-secondary mb-5 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${(completedCount / tasks.length) * 100}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      <div className="space-y-3">
        {tasks.map((task, i) => {
          const Icon = iconMap[task.type];
          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`flex items-center gap-4 p-3 rounded-xl border transition-all cursor-pointer
                ${task.completed ? "bg-primary/5 border-primary/20" : task.locked ? "opacity-50 border-border" : "border-border hover:border-primary/30 hover:bg-primary/5"}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${task.completed ? "bg-primary text-primary-foreground" : typeColors[task.type]}`}>
                {task.completed ? <Check className="w-5 h-5" /> : task.locked ? <Lock className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium truncate ${task.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                  {task.title}
                </p>
                <p className="text-xs text-muted-foreground">{task.duration}</p>
              </div>
              <div className="text-xs font-semibold text-primary shrink-0">+{task.xp} XP</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyChallenge;
