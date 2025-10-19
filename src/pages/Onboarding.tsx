import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PersonalityTone, Goal } from '@/data/habits';
import { useUser } from '@/context/UserContext';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const personalityOptions: { value: PersonalityTone; label: string; description: string }[] = [
  { value: 'Playful', label: 'Playful', description: 'Fun and quirky suggestions' },
  { value: 'Practical', label: 'Practical', description: 'Straightforward and actionable' },
  { value: 'Researchy', label: 'Researchy', description: 'Evidence-based insights' },
  { value: 'Gentle', label: 'Gentle', description: 'Calm and supportive' },
];

const goalOptions: { value: Goal; emoji: string }[] = [
  { value: 'Focus', emoji: '🎯' },
  { value: 'Movement', emoji: '🏃' },
  { value: 'Social', emoji: '💬' },
  { value: 'Creativity', emoji: '🎨' },
  { value: 'Mindfulness', emoji: '🧘' },
  { value: 'Sleep', emoji: '😴' },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const { completeOnboarding } = useUser();
  const [step, setStep] = useState(1);
  const [personality, setPersonality] = useState<PersonalityTone | null>(null);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [dailyTime, setDailyTime] = useState(10);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      if (personality && goals.length > 0) {
        completeOnboarding({
          personalityTone: personality,
          goals,
          dailyTimeMins: dailyTime,
        });
        navigate('/dashboard');
      }
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleGoal = (goal: Goal) => {
    setGoals(prev =>
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  const canProceed = () => {
    if (step === 1) return personality !== null;
    if (step === 2) return goals.length > 0;
    return true;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-2xl w-full space-y-6 animate-fade-in">
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground text-center">
            Step {step} of {totalSteps}
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl">
              {step === 1 && 'How would you like your micro-habits to feel?'}
              {step === 2 && 'Choose what matters most to you'}
              {step === 3 && 'How much time do you have?'}
            </CardTitle>
            <CardDescription>
              {step === 1 && 'Select your preferred tone for habit suggestions'}
              {step === 2 && 'Pick one or more areas you want to improve'}
              {step === 3 && 'We\'ll suggest habits that fit your schedule'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {personalityOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setPersonality(option.value)}
                    className={cn(
                      'p-4 rounded-lg border-2 text-left transition-smooth hover:shadow-soft',
                      personality === option.value
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    )}
                  >
                    <div className="font-semibold mb-1">{option.label}</div>
                    <div className="text-sm text-muted-foreground">{option.description}</div>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {goalOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => toggleGoal(option.value)}
                    className={cn(
                      'p-6 rounded-lg border-2 transition-smooth hover:shadow-soft flex flex-col items-center gap-2',
                      goals.includes(option.value)
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    )}
                  >
                    <span className="text-4xl">{option.emoji}</span>
                    <span className="font-semibold">{option.value}</span>
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="text-sm font-medium">
                    Daily time available: {dailyTime} minutes
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="5"
                    value={dailyTime}
                    onChange={(e) => setDailyTime(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>5 min</span>
                    <span>30 min</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  We'll suggest {Math.floor(dailyTime / 3)}-{Math.floor(dailyTime / 2)} micro-habits per day.
                </p>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex-1 gradient-warm text-primary-foreground"
              >
                {step === totalSteps ? 'Start discovering' : 'Continue'}
                {step < totalSteps && <ChevronRight className="h-4 w-4 ml-2" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
