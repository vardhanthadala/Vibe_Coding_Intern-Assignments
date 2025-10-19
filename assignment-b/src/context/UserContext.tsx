import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PersonalityTone, Goal } from '@/data/habits';

interface UserProfile {
  name?: string;
  personalityTone: PersonalityTone | null;
  goals: Goal[];
  dailyTimeMins: number;
  hasCompletedOnboarding: boolean;
}

interface UserContextType {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  completeOnboarding: (profile: Omit<UserProfile, 'hasCompletedOnboarding'>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<UserProfile>({
    personalityTone: null,
    goals: [],
    dailyTimeMins: 10,
    hasCompletedOnboarding: false,
  });

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const completeOnboarding = (newProfile: Omit<UserProfile, 'hasCompletedOnboarding'>) => {
    setProfile({ ...newProfile, hasCompletedOnboarding: true });
  };

  return (
    <UserContext.Provider value={{ profile, updateProfile, completeOnboarding }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
