import { motion } from "framer-motion";
import { Flame, GraduationCap } from "lucide-react";
import StreakRing from "@/components/StreakRing";
import DailyChallenge from "@/components/DailyChallenge";
import WeeklyProgress from "@/components/WeeklyProgress";
import ScorePredictor from "@/components/ScorePredictor";
import Leaderboard from "@/components/Leaderboard";
import SmartNudge from "@/components/SmartNudge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground text-lg">Leap IELTS</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-accent/10">
              <Flame className="w-4 h-4 text-accent" />
              <span className="text-sm font-bold text-accent">12</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
              A
            </div>
          </div>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4 py-6"
      >
        {/* Hero banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="surface-elevated p-6 mb-6 bg-gradient-to-r from-primary/5 to-accent/5"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                Good evening, Aarav! 👋
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Day 12 of your IELTS journey · Exam in 18 days · You're on track!
              </p>
            </div>
            <div className="hidden sm:block text-right">
              <p className="text-xs text-muted-foreground">Today's XP Goal</p>
              <p className="text-lg font-display font-bold text-primary">50 / 100 XP</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <DailyChallenge />
            <div className="grid gap-4 sm:grid-cols-2">
              <WeeklyProgress />
              <ScorePredictor />
            </div>
            <SmartNudge />
          </div>

          <div className="space-y-4">
            <StreakRing currentStreak={12} bestStreak={14} todayComplete={false} />
            <Leaderboard />
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Index;
