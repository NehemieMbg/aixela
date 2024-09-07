import { z } from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const campaignSchema = z.object({
  thumbnail: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    ),
  title: z.string().min(1, 'Title is required'),
  subtitle: z.string().min(1, 'Subtitle is required'),
  videoUrl: z.string().url('Invalid YouTube URL'),
  //   targetAmount: z.number().positive('Target amount must be greater than 0'),
  description: z.string().min(1, 'Description is required'),
  documentPdf: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max document size is 5MB.`)
    .refine(
      (file) => file.type === 'application/pdf',
      'Only .pdf format is supported.'
    ),
});
