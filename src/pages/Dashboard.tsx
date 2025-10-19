import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/context/UserContext';
import { habits } from '@/data/habits';
import { HabitCard } from '@/components/HabitCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, TrendingUp, Target } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { profile } = useUser();
  const { toast } = useToast();
  const [completedToday, setCompletedToday] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

  useEffect(() => {
    if (!profile.hasCompletedOnboarding) {
      navigate('/onboarding');
    }
  }, [profile.hasCompletedOnboarding, navigate]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const suggestedHabits = habits
    .filter(habit => profile.goals.includes(habit.category))
    .slice(0, 3);

  const handleStartHabit = (habitId: string) => {
    const habit = habits.find(h => h.id === habitId);
    if (habit) {
      navigate(`/habit/${habitId}`);
    }
  };

  const handleSaveHabit = (habitId: string) => {
    toast({
      title: "Habit saved!",
      description: "Added to your collection",
    });
  };

  if (!profile.hasCompletedOnboarding) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 pb-20">
      <div className="max-w-4xl mx-auto p-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            {getGreeting()}{profile.name ? `, ${profile.name}` : ''}
          </h1>
          <p className="text-muted-foreground">Ready for one tiny win?</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="shadow-card">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-primary">{completedToday}</div>
              <div className="text-xs text-muted-foreground">Today</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-accent">{currentStreak}</div>
              <div className="text-xs text-muted-foreground">Day streak</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-secondary-foreground">{profile.dailyTimeMins}</div>
              <div className="text-xs text-muted-foreground">Min/day</div>
            </CardContent>
          </Card>
        </div>

        {/* Now Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              For you now
            </h2>
          </div>
          
          {suggestedHabits.length > 0 ? (
            <div className="grid gap-4">
              {suggestedHabits.map(habit => (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  personalityTone={profile.personalityTone || 'Playful'}
                  onStartHabit={handleStartHabit}
                  onSaveHabit={handleSaveHabit}
                  compact
                />
              ))}
            </div>
          ) : (
            <Card className="shadow-card">
              <CardContent className="py-12 text-center space-y-4">
                <Target className="h-12 w-12 mx-auto text-muted-foreground" />
                <p className="text-muted-foreground">
                  No suggestions yet. Let's discover some habits!
                </p>
                <Button onClick={() => navigate('/discover')} className="gradient-warm text-primary-foreground">
                  Discover habits
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="h-20 flex flex-col gap-2"
            onClick={() => navigate('/discover')}
          >
            <Sparkles className="h-5 w-5" />
            <span>Discover</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex flex-col gap-2"
            onClick={() => navigate('/progress')}
          >
            <TrendingUp className="h-5 w-5" />
            <span>Progress</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
