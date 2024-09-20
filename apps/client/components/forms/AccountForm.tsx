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
import { useToast } from '@/hooks/use-toast';
import { setUser, updateUser } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { updateInfoAction } from '@/utils/actions/users/updateInfoAction';
import { accountSchema } from '@/utils/schemas/AccountSchema';
import { useState } from 'react';
import SubmitPrimary from '../buttons/SubmitPrimary';

const AccountForm = () => {
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      fullName: user.fullName,
      location: user.location,
      title: user.title,
    },
  });

  async function onSubmit(values: z.infer<typeof accountSchema>) {
    setIsLoading(true);
    const userInfo = await updateInfoAction(values);

    if (userInfo) {
      dispatch(updateUser(userInfo));
      toast({
        description: 'Your profile has been updated.',
      });
    } else {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    }

    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-app-gray-300">
                  Display Name (*)
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
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-app-gray-300">
                  Location (*)
                </FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-app-gray-300">Title (*)</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitPrimary
          isLoading={isLoading}
          className="font-normal mt-10 w-max rounded-md"
        >
          Save profile
        </SubmitPrimary>
      </form>
    </Form>
  );
};
export default AccountForm;
