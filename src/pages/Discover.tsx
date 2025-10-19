import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/context/UserContext';
import { habits, Goal } from '@/data/habits';
import { HabitCard } from '@/components/HabitCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const Discover = () => {
  const navigate = useNavigate();
  const { profile } = useUser();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<Goal | 'All'>('All');

  const categories: (Goal | 'All')[] = ['All', 'Focus', 'Movement', 'Social', 'Creativity', 'Mindfulness', 'Sleep'];

  const filteredHabits = selectedCategory === 'All'
    ? habits
    : habits.filter(h => h.category === selectedCategory);

  const handleStartHabit = (habitId: string) => {
    navigate(`/habit/${habitId}`);
  };

  const handleSaveHabit = (habitId: string) => {
    toast({
      title: "Habit saved!",
      description: "Added to your collection",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 pb-20">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold">Discover</h1>
            <p className="text-muted-foreground">Explore quirky micro-habits</p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span>Filter by theme</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={cn(
                  'cursor-pointer whitespace-nowrap transition-smooth',
                  selectedCategory === category && 'gradient-warm text-primary-foreground'
                )}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Habits Grid */}
        <div className="grid md:grid-cols-2 gap-4 animate-fade-in">
          {filteredHabits.map(habit => (
            <HabitCard
              key={habit.id}
              habit={habit}
              personalityTone={profile.personalityTone || 'Playful'}
              onStartHabit={handleStartHabit}
              onSaveHabit={handleSaveHabit}
            />
          ))}
        </div>

        {filteredHabits.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            No habits found in this category
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
