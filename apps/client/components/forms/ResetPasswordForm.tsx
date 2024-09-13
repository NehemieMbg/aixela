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
import { resetPasswordAction } from '@/utils/actions/authentication/resetPasswordAction';
import { resetPasswordSchema } from '@/utils/schemas/AuthSchemas';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SubmitPrimary from '../buttons/SubmitPrimary';
import PasswordInput from '../inputs/PasswordInput';

/**
 * Sign in form
 * @returns the sign in form
 */
const ResetPasswordForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    setIsLoading(true);

    const error = await resetPasswordAction(values.password);

    if (error) {
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    router.push('/forgot-password/reset?updated=true');
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 lg:space-y-10 w-full"
      >
        <div className="space-y-5">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-app-gray-300">
                  New Password (*)
                </FormLabel>
                <FormControl>
                  <PasswordInput field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-app-gray-300">
                    Confirm Password (*)
                  </FormLabel>
                  <FormControl>
                    <PasswordInput field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <SubmitPrimary isLoading={isLoading}>Continue</SubmitPrimary>
      </form>
    </Form>
  );
};
export default ResetPasswordForm;
