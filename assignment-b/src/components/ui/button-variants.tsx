import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface HeroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const HeroButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "gradient-warm text-primary-foreground shadow-soft hover:scale-105 transition-smooth text-lg px-8 py-6",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
HeroButton.displayName = "HeroButton";

export const SecondaryButton = forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-smooth",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
SecondaryButton.displayName = "SecondaryButton";
