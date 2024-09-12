import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const signUpSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email().min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const passwordRequestSchema = z.object({
  email: z.string().email().min(1, 'Email is required'),
});
