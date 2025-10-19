import { HeroButton, SecondaryButton } from "@/components/ui/button-variants";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gradient-hero">
      <div className="max-w-lg w-full space-y-8 text-center animate-fade-in">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Tiny habits.<br />Big differences.
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Discover playful micro-habits that fit your day
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <HeroButton 
            onClick={() => navigate('/onboarding')}
            className="w-full bg-white text-primary hover:bg-white/90"
          >
            Get started
          </HeroButton>
          <SecondaryButton 
            onClick={() => navigate('/dashboard')}
            className="w-full border-white text-white hover:bg-white/10"
          >
            Sign in
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
