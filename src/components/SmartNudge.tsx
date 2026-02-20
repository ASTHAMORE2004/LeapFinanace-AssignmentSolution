import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Calendar } from "lucide-react";

const SmartNudge = () => {
  const nudges = [
    {
      icon: TrendingUp,
      title: "You're 2 lessons away from unlocking Band 7 strategies!",
      cta: "Continue Learning",
      accent: "primary" as const,
    },
    {
      icon: Clock,
      title: "Best time to study: 8-9 PM based on your pattern",
      cta: "Set Reminder",
      accent: "accent" as const,
    },
    {
      icon: Calendar,
      title: "Exam in 18 days — you're on track if you practice daily",
      cta: "View Plan",
      accent: "primary" as const,
    },
  ];

  const colorMap = {
    primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
    accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" },
  };

  return (
    <div className="surface-elevated p-6">
      <h3 className="font-display font-semibold text-lg text-foreground mb-4">Smart Nudges</h3>
      <div className="space-y-3">
        {nudges.map((n, i) => {
          const colors = colorMap[n.accent];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className={`flex items-center gap-3 p-3 rounded-xl border ${colors.border} ${colors.bg} cursor-pointer hover:scale-[1.01] transition-transform`}
            >
              <n.icon className={`w-5 h-5 shrink-0 ${colors.text}`} />
              <p className="text-sm text-foreground flex-1">{n.title}</p>
              <ArrowRight className={`w-4 h-4 shrink-0 ${colors.text}`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SmartNudge;
