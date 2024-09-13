'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { credentialSignInAction } from '@/utils/actions/authentication/signInAction';
import { passwordRequestSchema } from '@/utils/schemas/AuthSchemas';
import Link from 'next/link';
import { useState } from 'react';
import SubmitPrimary from '../buttons/SubmitPrimary';
import PasswordInput from '../inputs/PasswordInput';
import { requestPasswordResetAction } from '@/utils/actions/authentication/requestPasswordResetAction';
import { useRouter } from 'next/navigation';

/**
 * Sign in form
 * @returns the sign in form
 */
const PasswordResetRequestForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof passwordRequestSchema>>({
    resolver: zodResolver(passwordRequestSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof passwordRequestSchema>) {
    setIsLoading(true);
    const error = await requestPasswordResetAction(values.email);

    setIsLoading(false);
    router.push('/forgot-password?sent=true');
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 lg:space-y-10 w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-app-gray-300">
                Enter your email (*)
              </FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitPrimary isLoading={isLoading}>Continue</SubmitPrimary>
      </form>
    </Form>
  );
};
export default PasswordResetRequestForm;
