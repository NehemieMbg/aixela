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
import { signUpSchema } from '@/utils/schemas/AuthSchemas';
import SubmitPrimary from '../buttons/SubmitPrimary';
import PasswordInput from '../inputs/PasswordInput';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signUpAction } from '@/utils/actions/authentication/signUpAction';

/**
 * Sign up form
 * @returns the sign up form
 */
const SignUpForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    setIsLoading(true);
    const error = await signUpAction(values);

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
        <div className="space-y-5 mb-5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-app-gray-300">
                  Full Name (*)
                </FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

        <SubmitPrimary isLoading={isLoading}>Sign up</SubmitPrimary>
      </form>
    </Form>
  );
};
export default SignUpForm;
