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
import { emailSchema } from '@/utils/schemas/AccountSchema';
import SubmitPrimary from '../buttons/SubmitPrimary';
import { useAppSelector } from '@/lib/hooks';
import PasswordInput from '../inputs/PasswordInput';
import { updateEmailAction } from '@/utils/actions/users/updateEmailAction';
import { useState } from 'react';
import ConfirmEmailForm from './ConfirmEmailForm';

/**
 * Email form
 * @returns the email form
 */
const EmailForm = () => {
  const user = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isOtpActive, setIsOtpActive] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof emailSchema>) {
    setIsLoading(true);
    const response = await updateEmailAction(values);

    if (response?.status === 'error') {
      form.setError('email', {
        type: 'manual',
        message: response.message,
      });
    }

    // Clear the password field.
    form.setValue('password', '');
    setIsLoading(false);
    setIsOtpActive(true);
  }

  return (
    <>
      <ConfirmEmailForm
        isActive={isOtpActive}
        closeOtp={() => setIsOtpActive(false)}
      />

      <div className="w-full space-y-5">
        <div className="w-full flex justify-between items-start">
          <div>
            <h3 className="text-sm">Current email address</h3>
            <p className="font-medium">{user.email as string}</p>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-app-blue-300 font-medium text-sm"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {isEditing && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <div className="space-y-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-app-gray-300">
                        New Email Address(*)
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-app-gray-300">
                        Password (*)
                      </FormLabel>
                      <FormControl>
                        <PasswordInput field={field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <SubmitPrimary
                isLoading={isLoading}
                className="font-normal mt-10 w-max rounded-md"
              >
                Update Email
              </SubmitPrimary>
            </form>
          </Form>
        )}
      </div>
    </>
  );
};
export default EmailForm;
