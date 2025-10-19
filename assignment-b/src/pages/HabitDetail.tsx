import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUser } from '@/context/UserContext';
import { habits } from '@/data/habits';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Clock, Zap, CheckCircle2, PartyPopper } from 'lucide-react';
import { cn } from '@/lib/utils';

const HabitDetail = () => {
  const { habitId } = useParams();
  const navigate = useNavigate();
  const { profile } = useUser();
  const { toast } = useToast();
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const habit = habits.find(h => h.id === habitId);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsActive(false);
            handleComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  if (!habit) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Habit not found</p>
      </div>
    );
  }

  const description = habit.personality_variants[profile.personalityTone || 'Playful'];

  const handleStart = () => {
    setTimeLeft(habit.duration_mins * 60);
    setIsActive(true);
  };

  const handleComplete = () => {
    setShowCelebration(true);
    toast({
      title: "Nice! One tiny win 🎉",
      description: "Streak +1",
    });
    setTimeout(() => {
      setShowCelebration(false);
      navigate('/dashboard');
    }, 2000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 pb-20">
      <div className="max-w-2xl mx-auto p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            disabled={isActive}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold flex-1">{habit.title}</h1>
        </div>

        {/* Main Card */}
        <Card className="shadow-card">
          <CardContent className="pt-6 space-y-6">
            {/* Description */}
            <div className="space-y-3">
              <h3 className="font-semibold">What to do</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-primary/10 text-primary">
                {habit.category}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{habit.duration_mins} min</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Zap className="h-4 w-4" />
                <span>{habit.trigger}</span>
              </div>
            </div>

            {/* Evidence */}
            <div className="space-y-2 p-4 bg-muted/50 rounded-lg">
              <h4 className="text-sm font-semibold">Why it works</h4>
              <p className="text-sm text-muted-foreground italic">{habit.evidence}</p>
            </div>

            {/* Timer Display */}
            {isActive && (
              <div className="text-center space-y-4 py-8">
                <div className={cn(
                  "text-6xl font-bold transition-smooth",
                  timeLeft <= 10 ? "text-primary animate-pulse" : "text-foreground"
                )}>
                  {formatTime(timeLeft)}
                </div>
                <p className="text-muted-foreground">Keep going! You've got this.</p>
              </div>
            )}

            {/* Celebration */}
            {showCelebration && (
              <div className="text-center space-y-4 py-8 animate-celebrate">
                <PartyPopper className="h-16 w-16 mx-auto text-primary" />
                <h3 className="text-2xl font-bold">Amazing!</h3>
                <p className="text-muted-foreground">You completed this micro-habit</p>
              </div>
            )}

            {/* Action Button */}
            {!isActive && !showCelebration && (
              <Button
                onClick={handleStart}
                className="w-full gradient-warm text-primary-foreground text-lg py-6"
              >
                Start {habit.duration_mins} min session
              </Button>
            )}

            {isActive && (
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsActive(false)}
                >
                  Pause
                </Button>
                <Button
                  onClick={handleComplete}
                  className="gradient-warm text-primary-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Complete
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HabitDetail;
