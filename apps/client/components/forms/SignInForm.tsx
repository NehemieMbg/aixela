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
import { signInSchema } from '@/utils/schemas/AuthSchemas';
import Link from 'next/link';
import SubmitPrimary from '../buttons/SubmitPrimary';
import PasswordInput from '../inputs/PasswordInput';
import { credentialSignInAction } from '@/utils/actions/authentication/signInAction';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * Sign in form
 * @returns the sign in form
 */
const SignInForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signInSchema>) {
    setIsLoading(true);
    const error = await credentialSignInAction(values);

    if (error) {
      form.setError('email', { message: error.email });
      setIsLoading(false);
    } else {
      setIsLoading(false);
      router.push('/');
    }
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-app-gray-300">Email (*)</FormLabel>
                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-2 items-end w-full">
            <div className="w-full">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-app-gray-300">
                      Password (*)
                    </FormLabel>
                    <FormControl>
                      {/* <Input {...field} type="password" /> */}
                      <PasswordInput field={field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Link
              href="/forgot-password"
              className="text-sm font-medium hover:underline transition-text duration-500 text-app-gray-300"
            >
              Forget Password ?
            </Link>
          </div>
        </div>

        <SubmitPrimary isLoading={isLoading}>Sign in</SubmitPrimary>
      </form>
    </Form>
  );
};
export default SignInForm;
