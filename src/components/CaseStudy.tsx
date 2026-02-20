import { motion } from "framer-motion";
import { useState } from "react";
import { Flame, BarChart3, Lightbulb, Users, BookOpen, ChevronRight } from "lucide-react";

const CaseStudy = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Problem", icon: Lightbulb },
    { label: "Solution", icon: Flame },
    { label: "UX Flow", icon: BarChart3 },
    { label: "Metrics", icon: Users },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap
              ${activeTab === i ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 0 && <ProblemSection />}
        {activeTab === 1 && <SolutionSection />}
        {activeTab === 2 && <UXFlowSection />}
        {activeTab === 3 && <MetricsSection />}
      </motion.div>
    </div>
  );
};

const SectionCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`surface-elevated p-6 md:p-8 ${className}`}>{children}</div>
);

const ProblemSection = () => (
  <div className="space-y-4">
    <SectionCard>
      <h3 className="font-display text-xl font-bold text-foreground mb-4">Problem Understanding</h3>
      
      <div className="space-y-5">
        <div>
          <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Demographics</h4>
          <p className="text-sm text-foreground leading-relaxed">
            Students aged 18–26 (UG/PG aspirants) and early professionals preparing for IELTS to study abroad. 
            They're juggling college/work commitments with limited daily study windows.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Behavioural Traits</h4>
          <ul className="space-y-2">
            {[
              "Motivation spikes near exam dates, drops during long prep cycles",
              "Prefer bite-sized learning over marathon sessions",
              "Respond well to social proof and visible progress",
              "Procrastinate without external accountability structures",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">Pain Points</h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { title: "No Daily Habit Loop", desc: "No system to build consistent daily engagement" },
              { title: "Invisible Progress", desc: "Can't see how daily effort translates to band score improvement" },
              { title: "Motivation Decay", desc: "Without short-term wins, users disengage during weeks 1-3" },
              { title: "One-size-fits-all", desc: "No personalization based on weak areas or study patterns" },
            ].map((p, i) => (
              <div key={i} className="p-3 rounded-xl bg-secondary/50 border border-border">
                <p className="text-sm font-semibold text-foreground">{p.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  </div>
);

const SolutionSection = () => (
  <div className="space-y-4">
    <SectionCard>
      <h3 className="font-display text-xl font-bold text-foreground mb-2">
        🔥 Streak-Powered Daily Momentum Engine
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        A gamified habit system that transforms IELTS prep from "I'll do it later" to "I can't break my streak."
      </p>

      <div className="space-y-4">
        {[
          {
            title: "Adaptive Daily Challenges",
            desc: "Each day, 4-5 curated micro-tasks (8-20 min each) covering all IELTS sections. Tasks adapt based on weak areas and time availability. Users can complete them in any order.",
            icon: "📋",
          },
          {
            title: "Streak & XP System",
            desc: "Complete at least 3/5 daily tasks to maintain your streak. XP accumulates into a visible level system. Streak freezes (earned via consistency) protect against busy days.",
            icon: "🔥",
          },
          {
            title: "Predictive Score Tracker",
            desc: "Real-time band score prediction based on practice performance. Shows how daily effort correlates with score improvement — making abstract progress tangible.",
            icon: "📊",
          },
          {
            title: "Smart Nudges & Scheduling",
            desc: "AI-powered reminders at optimal study times (learned from user behavior). Nudges highlight what's at stake: 'You're 2 lessons from unlocking Band 7 strategies!'",
            icon: "🧠",
          },
          {
            title: "Study Groups & Social Proof",
            desc: "Small peer groups (5-8 users) with shared leaderboards. Social accountability without toxic competition. See how peers are progressing.",
            icon: "👥",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 p-4 rounded-xl bg-secondary/30 border border-border"
          >
            <span className="text-2xl shrink-0">{f.icon}</span>
            <div>
              <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  </div>
);

const UXFlowSection = () => (
  <div className="space-y-4">
    <SectionCard>
      <h3 className="font-display text-xl font-bold text-foreground mb-5">User Experience Flow</h3>

      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />
        
        {[
          { step: "1", title: "Onboarding (Day 0)", desc: "User sets target band score, exam date, and available study hours. System creates personalized 4-week plan with daily micro-goals.", color: "bg-primary" },
          { step: "2", title: "Daily Engagement (Day 1+)", desc: "Push notification at optimal time → Opens app → Sees streak counter + today's 5 challenges → Completes tasks → Earns XP → Sees score prediction update.", color: "bg-accent" },
          { step: "3", title: "Progress Reinforcement", desc: "Weekly progress email with score trend, streak badge earned, and comparison with study group. 'You improved 0.5 bands in Listening this week!'", color: "bg-primary" },
          { step: "4", title: "Re-engagement Hooks", desc: "If user misses a day: 'Your 7-day streak is at risk!' If they miss 2 days: Buddy from study group sends automated encouragement. Streak freeze offer after 3-day streak.", color: "bg-accent" },
          { step: "5", title: "Milestone Celebrations", desc: "Band score milestones unlock new content tiers. 7-day, 14-day, 21-day streak badges. 'You're now in the top 15% of IELTS preppers!'", color: "bg-badge" },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            className="relative pl-12 pb-6 last:pb-0"
          >
            <div className={`absolute left-3 w-5 h-5 rounded-full ${s.color} flex items-center justify-center`}>
              <span className="text-[10px] font-bold text-primary-foreground">{s.step}</span>
            </div>
            <h4 className="text-sm font-semibold text-foreground">{s.title}</h4>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  </div>
);

const MetricsSection = () => (
  <div className="space-y-4">
    <SectionCard>
      <h3 className="font-display text-xl font-bold text-foreground mb-5">Success Metrics</h3>
      
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            metric: "DAU/WAU Ratio",
            target: "> 0.6",
            current: "~0.25 (est.)",
            desc: "Daily active / Weekly active users. Measures habit formation. Streak mechanics should drive daily returns.",
            primary: true,
          },
          {
            metric: "Avg. Sessions / User / Week",
            target: "> 5",
            current: "~2 (est.)",
            desc: "Sessions per user within first 4 weeks. Daily challenges create reason to return each day.",
            primary: true,
          },
          {
            metric: "Course Completion Rate",
            target: "> 65%",
            current: "~30% (est.)",
            desc: "% of users completing full prep within 4 weeks. Momentum engine prevents mid-cycle dropout.",
            primary: true,
          },
        ].map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12 }}
            className={`p-5 rounded-xl border ${m.primary ? "border-primary/20 bg-primary/5" : "border-border"}`}
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Primary Metric</p>
            <h4 className="font-display font-bold text-foreground text-lg mb-1">{m.metric}</h4>
            <div className="flex gap-3 mb-3">
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">Target: {m.target}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-medium">Now: {m.current}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20">
        <h4 className="text-sm font-semibold text-foreground mb-2">Supporting Metrics</h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            "Streak length distribution (7-day+ streak users)",
            "XP earned per session (engagement depth)",
            "Score prediction accuracy vs actual IELTS score",
            "Notification → App Open conversion rate",
          ].map((m, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {m}
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  </div>
);

export default CaseStudy;
