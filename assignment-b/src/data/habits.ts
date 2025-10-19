export interface Habit {
  id: string;
  title: string;
  duration_mins: number;
  category: 'Focus' | 'Movement' | 'Social' | 'Creativity' | 'Mindfulness' | 'Sleep';
  difficulty: 1 | 2 | 3;
  evidence: string;
  trigger: string;
  personality_variants: {
    Playful: string;
    Practical: string;
    Researchy: string;
    Gentle: string;
  };
}

export const habits: Habit[] = [
  {
    id: 'habit_001',
    title: 'Balance Brush',
    duration_mins: 1,
    category: 'Movement',
    difficulty: 1,
    evidence: 'Standing balance practice 1 min/day can improve proprioception in 1-2 weeks.',
    trigger: 'While brushing teeth',
    personality_variants: {
      Playful: 'Stand on one leg while you brush — wobble welcome!',
      Practical: 'Practice single-leg balance during tooth brushing for better stability.',
      Researchy: 'Perform single-leg stance while brushing to train vestibular function.',
      Gentle: 'Try standing on one foot while brushing — it\'s okay to hold the counter.'
    }
  },
  {
    id: 'habit_002',
    title: 'Gratitude Ping',
    duration_mins: 2,
    category: 'Social',
    difficulty: 1,
    evidence: 'Weekly gratitude expressions strengthen social bonds and boost mood.',
    trigger: 'Every Thursday evening',
    personality_variants: {
      Playful: 'Send a one-line gratitude text to someone — make their Thursday!',
      Practical: 'Text one person you appreciate each Thursday.',
      Researchy: 'Express gratitude to one contact weekly to maintain social connection quality.',
      Gentle: 'Reach out to someone with a kind word this Thursday.'
    }
  },
  {
    id: 'habit_003',
    title: '3-Minute Doodle',
    duration_mins: 3,
    category: 'Creativity',
    difficulty: 1,
    evidence: 'Brief creative breaks enhance divergent thinking and reduce mental fatigue.',
    trigger: 'After lunch',
    personality_variants: {
      Playful: 'Doodle for 3 minutes after lunch — no artistic skills required!',
      Practical: 'Take a 3-minute drawing break to refresh your mind.',
      Researchy: 'Engage in unstructured drawing for 3 minutes to boost creative cognition.',
      Gentle: 'Give yourself 3 minutes to sketch anything that comes to mind.'
    }
  },
  {
    id: 'habit_004',
    title: '2-Breath Reset',
    duration_mins: 1,
    category: 'Mindfulness',
    difficulty: 1,
    evidence: 'Two diaphragmatic breaths activate parasympathetic response within 60 seconds.',
    trigger: 'Before opening email',
    personality_variants: {
      Playful: 'Take two deep belly breaths before diving into email chaos!',
      Practical: 'Do two full breaths before checking email to center yourself.',
      Researchy: 'Perform two diaphragmatic breaths pre-email to reduce cortisol response.',
      Gentle: 'Pause for two calm breaths before opening your inbox.'
    }
  },
  {
    id: 'habit_005',
    title: 'Doorway Stretch',
    duration_mins: 1,
    category: 'Movement',
    difficulty: 1,
    evidence: 'Brief shoulder stretches reduce upper body tension from desk work.',
    trigger: 'Every time you walk through a door',
    personality_variants: {
      Playful: 'Do a quick shoulder roll every time you pass a doorway!',
      Practical: 'Stretch your shoulders briefly when walking through doors.',
      Researchy: 'Perform shoulder mobilization at doorway transitions to counter sitting posture.',
      Gentle: 'Give your shoulders a gentle stretch each time you pass through a door.'
    }
  },
  {
    id: 'habit_006',
    title: 'Water Sip Ritual',
    duration_mins: 1,
    category: 'Mindfulness',
    difficulty: 1,
    evidence: 'Mindful hydration moments improve present-moment awareness.',
    trigger: 'On the hour, every hour',
    personality_variants: {
      Playful: 'Take a slow, mindful sip of water every hour — cheers!',
      Practical: 'Drink water mindfully at the top of each hour.',
      Researchy: 'Practice mindful hydration hourly to maintain awareness and fluid balance.',
      Gentle: 'Pause for a peaceful sip of water when the clock strikes the hour.'
    }
  },
  {
    id: 'habit_007',
    title: 'Curiosity Question',
    duration_mins: 2,
    category: 'Creativity',
    difficulty: 2,
    evidence: 'Daily curiosity exercises enhance cognitive flexibility and learning motivation.',
    trigger: 'During morning coffee',
    personality_variants: {
      Playful: 'Ask yourself one "what if?" question with your morning coffee!',
      Practical: 'Pose one curious question to yourself during your coffee break.',
      Researchy: 'Engage in curiosity-driven questioning during morning routine to prime learning.',
      Gentle: 'Wonder about one thing while enjoying your coffee.'
    }
  },
  {
    id: 'habit_008',
    title: 'Micro-Tidy',
    duration_mins: 2,
    category: 'Focus',
    difficulty: 1,
    evidence: 'Brief tidying reduces visual clutter and improves concentration.',
    trigger: 'Before starting work',
    personality_variants: {
      Playful: 'Spend 2 minutes making your space sparkle before work!',
      Practical: 'Clear your workspace for 2 minutes before beginning tasks.',
      Researchy: 'Reduce environmental distractors with 2-minute pre-work organization.',
      Gentle: 'Take a moment to gently organize your space before diving in.'
    }
  },
  {
    id: 'habit_009',
    title: 'Sky Gaze',
    duration_mins: 1,
    category: 'Mindfulness',
    difficulty: 1,
    evidence: 'Brief nature exposure reduces stress and improves mood within minutes.',
    trigger: 'When stepping outside',
    personality_variants: {
      Playful: 'Look up at the sky for a minute — what do you notice?',
      Practical: 'Spend one minute observing the sky when you go outside.',
      Researchy: 'Engage in brief sky observation to access nature-based stress reduction.',
      Gentle: 'Let your eyes rest on the sky for a peaceful moment.'
    }
  },
  {
    id: 'habit_010',
    title: 'Playlist Dance',
    duration_mins: 3,
    category: 'Movement',
    difficulty: 2,
    evidence: 'Brief movement breaks boost mood and energy more than caffeine.',
    trigger: 'Mid-afternoon energy dip',
    personality_variants: {
      Playful: 'Dance to one song when energy dips — nobody\'s watching!',
      Practical: 'Move to music for 3 minutes during your afternoon slump.',
      Researchy: 'Perform rhythmic movement for 3 minutes to counter circadian energy decline.',
      Gentle: 'Sway to a favorite song when you need a gentle energy boost.'
    }
  },
  {
    id: 'habit_011',
    title: 'Compliment Delivery',
    duration_mins: 1,
    category: 'Social',
    difficulty: 2,
    evidence: 'Giving genuine compliments boosts both giver and receiver mood.',
    trigger: 'During lunch break',
    personality_variants: {
      Playful: 'Give someone a genuine compliment at lunch — spread joy!',
      Practical: 'Offer one authentic compliment during your lunch break.',
      Researchy: 'Deliver prosocial feedback at midday to enhance interpersonal bonds.',
      Gentle: 'Share a kind word with someone during lunch.'
    }
  },
  {
    id: 'habit_012',
    title: 'Phone-Free Bite',
    duration_mins: 5,
    category: 'Mindfulness',
    difficulty: 2,
    evidence: 'Mindful eating without screens improves satiety and reduces overeating.',
    trigger: 'First 5 minutes of any meal',
    personality_variants: {
      Playful: 'Eat the first 5 minutes of your meal phone-free — taste everything!',
      Practical: 'Keep your phone away for the first 5 minutes of eating.',
      Researchy: 'Practice screen-free eating for 5 minutes to improve interoceptive awareness.',
      Gentle: 'Begin each meal with 5 peaceful, phone-free minutes.'
    }
  }
];

export type PersonalityTone = 'Playful' | 'Practical' | 'Researchy' | 'Gentle';
export type Goal = 'Focus' | 'Movement' | 'Social' | 'Creativity' | 'Mindfulness' | 'Sleep';
