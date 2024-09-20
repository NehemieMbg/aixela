import { z } from 'zod';

export const confirmEmailSchema = z.object({
  code: z.string().min(6).max(6),
});
