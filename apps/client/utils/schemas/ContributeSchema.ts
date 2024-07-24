import { z } from 'zod';

export const contributeSchema = z.object({
  amount: z
    .number()
    .int()
    .positive('Amount must be positive')
    .min(10, 'Amount must be at least 10'),
});
