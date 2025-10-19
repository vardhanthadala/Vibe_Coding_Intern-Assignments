import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Zap, Heart } from "lucide-react";
import { Habit } from "@/data/habits";
import { cn } from "@/lib/utils";

interface HabitCardProps {
  habit: Habit;
  personalityTone: 'Playful' | 'Practical' | 'Researchy' | 'Gentle';
  onStartHabit?: (habitId: string) => void;
  onSaveHabit?: (habitId: string) => void;
  compact?: boolean;
}

const difficultyLabels = {
  1: { label: 'Easy', color: 'bg-secondary text-secondary-foreground' },
  2: { label: 'Medium', color: 'bg-accent/20 text-accent-foreground' },
  3: { label: 'Challenge', color: 'bg-primary/20 text-primary' }
};

const categoryColors = {
  Focus: 'bg-accent/10 text-accent-foreground',
  Movement: 'bg-primary/10 text-primary',
  Social: 'bg-secondary text-secondary-foreground',
  Creativity: 'gradient-playful text-accent-foreground',
  Mindfulness: 'gradient-calm text-secondary-foreground',
  Sleep: 'bg-muted text-muted-foreground'
};

export const HabitCard = ({ 
  habit, 
  personalityTone, 
  onStartHabit, 
  onSaveHabit,
  compact = false 
}: HabitCardProps) => {
  const description = habit.personality_variants[personalityTone];
  const difficulty = difficultyLabels[habit.difficulty];

  return (
    <Card className={cn(
      "shadow-card hover:shadow-soft transition-smooth hover:-translate-y-1",
      compact ? "w-full" : "w-full"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg mb-2">{habit.title}</CardTitle>
            <div className="flex flex-wrap gap-2 mb-2">
              <Badge className={categoryColors[habit.category]}>{habit.category}</Badge>
              <Badge className={difficulty.color}>{difficulty.label}</Badge>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onSaveHabit?.(habit.id)}
            className="shrink-0"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{habit.duration_mins} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4" />
            <span className="line-clamp-1">{habit.trigger}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground italic">{habit.evidence}</p>
        <Button 
          className="w-full gradient-warm text-primary-foreground"
          onClick={() => onStartHabit?.(habit.id)}
        >
          Try now
        </Button>
      </CardContent>
    </Card>
  );
};
