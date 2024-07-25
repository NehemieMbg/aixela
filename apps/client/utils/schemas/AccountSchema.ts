import { z } from 'zod';

export const accountSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  location: z.string().min(1, 'Location is required'),
  title: z.string().min(1, 'Title is required'),
});

export const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const passwordSchema = z
  .object({
    password: z.string().min(1, 'Password is required'),
    newPassword: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z
      .string()
      .min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // Path of error
  });
