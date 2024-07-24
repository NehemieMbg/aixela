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
import { contributeSchema } from '@/utils/schemas/ContributeSchema';
import SubmitPrimary from '../buttons/SubmitPrimary';
import { useAppSelector } from '@/lib/hooks';

/**
 * Contribute form
 * @returns the contribute form
 */
const ContributeForm = ({ campaignId }: { campaignId: number }) => {
  const user = useAppSelector((state) => state.user);

  // 1. Define your form.
  const form = useForm<z.infer<typeof contributeSchema>>({
    resolver: zodResolver(contributeSchema),
    defaultValues: {
      userId: user.id,
      campaignId: campaignId,
      amount: 10,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof contributeSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-app-gray-300">
                Amount (min $10)
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onChange={(e) =>
                    form.setValue('amount', parseInt(e.target.value))
                  }
                  className="text-center text-base font-semibold"
                  style={{
                    WebkitAppearance: 'none',
                    MozAppearance: 'textfield',
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitPrimary className="font-normal">Contribute</SubmitPrimary>
      </form>
    </Form>
  );
};
export default ContributeForm;
