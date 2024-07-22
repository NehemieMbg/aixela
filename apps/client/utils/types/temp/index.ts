export interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  avatarUrl?: string; // Optional URL to the user's avatar
  title: string;
  location: string;
  links: {
    website?: string;
    twitter?: string;
    instagram?: string;
    linkedIn?: string;
  };
  subscribers?: Subscriber[]; // Users who follow this user
  subscribedTo?: Subscriber[]; // Users this user is following
}

export interface Campaign {
  id: number;
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
  targetAmount: number; // The goal amount set by the user
  currentAmount: number; // The amount raised currently
  progressPercent?: number; // The percentage of the target amount raised
  startDate: Date;
  endDate: Date;
  creator: User; // Information about the user who created the campaign
  contributors: Contributor[]; // List of contributors
  creationDate: Date;
}

export interface Contributor {
  userId: number;
  amount: number;
  user: User;
  date: Date;
}

export interface Subscriber {
  userId: number; // The ID of the user who is following or being followed
  subscribedDate: Date | String; // The date when the subscription started
  user: User;
}
