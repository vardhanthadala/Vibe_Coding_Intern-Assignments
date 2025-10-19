import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, TrendingUp, Target, Calendar, Award } from 'lucide-react';

const Progress = () => {
  const navigate = useNavigate();

  // Mock data for demo
  const stats = {
    totalCompleted: 0,
    currentStreak: 0,
    longestStreak: 0,
    weeklyCompletion: 0,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 pb-20">
      <div className="max-w-4xl mx-auto p-6 space-y-6 animate-fade-in">
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
            <h1 className="text-3xl font-bold">Progress</h1>
            <p className="text-muted-foreground">Your micro-wins journey</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Target className="h-4 w-4" />
                Total Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.totalCompleted}</div>
              <p className="text-sm text-muted-foreground mt-1">All-time micro-habits</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">{stats.currentStreak}</div>
              <p className="text-sm text-muted-foreground mt-1">Days in a row</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Award className="h-4 w-4" />
                Longest Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary-foreground">{stats.longestStreak}</div>
              <p className="text-sm text-muted-foreground mt-1">Personal best</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.weeklyCompletion}%</div>
              <p className="text-sm text-muted-foreground mt-1">Completion rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Empty State */}
        <Card className="shadow-card">
          <CardContent className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Start your journey</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Complete your first micro-habit to see your progress and build streaks!
              </p>
            </div>
            <Button
              onClick={() => navigate('/discover')}
              className="gradient-warm text-primary-foreground"
            >
              Discover habits
            </Button>
          </CardContent>
        </Card>

        {/* Insights Placeholder */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💡 Tip: Consistency beats perfection. Even 1 minute counts!
              </p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                🎯 Your most active category will appear here
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
