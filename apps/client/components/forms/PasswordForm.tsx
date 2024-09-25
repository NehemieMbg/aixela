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
import { passwordSchema } from '@/utils/schemas/AccountSchema';
import SubmitPrimary from '../buttons/SubmitPrimary';
import PasswordInput from '../inputs/PasswordInput';
import { useState } from 'react';
import { updatePasswordAction } from '@/utils/actions/users/updatePasswordAction';
import { toast } from '@/hooks/use-toast';

/**
 * Password form
 * @returns the password form
 */
const PasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof passwordSchema>) {
    setIsLoading(true);
    const response = await updatePasswordAction(values);

    if (response?.status === 'error') {
      form.setError('password', {
        type: 'manual',
        message: response.message,
      });

      form.setValue('password', '');
      form.setValue('newPassword', '');
      form.setValue('confirmPassword', '');

      toast({
        title: 'Error',
        description: response.message,
      });
    } else {
      form.reset();
      setIsEditing(false);
      toast({
        title: 'Password Updated',
        description: 'Your password has been updated successfully.',
      });
    }

    setIsLoading(false);
  }

  return (
    <div className="w-full space-y-5">
      <div className="w-full flex justify-between items-start">
        <div>
          <h3 className="text-sm">Current password</h3>
          <p className="font-medium">{'•••••••••'}</p>
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-app-gray-300">
                      Current Password (*)
                    </FormLabel>
                    <FormControl>
                      <PasswordInput field={field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="newPassword"
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

            <SubmitPrimary
              isLoading={isLoading}
              className="font-normal mt-10 w-max rounded-md"
            >
              Update Password
            </SubmitPrimary>
          </form>
        </Form>
      )}
    </div>
  );
};
export default PasswordForm;
