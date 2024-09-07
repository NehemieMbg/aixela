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
import { campaignSchema } from '@/utils/schemas/campaignSchema';
import SubmitPrimary from '../buttons/SubmitPrimary';
import { useAppSelector } from '@/lib/hooks';
import PasswordInput from '../inputs/PasswordInput';
import FileInput from '../inputs/FileInput';

/**
 * Campaign form
 * @returns the campaign form
 */
const CampaignForm = () => {
  const user = useAppSelector((state) => state.user);

  // 1. Define your form.
  const form = useForm<z.infer<typeof campaignSchema>>({
    resolver: zodResolver(campaignSchema),
    defaultValues: {
      thumbnail: undefined,
      title: '',
      subtitle: '',
      videoUrl: '',
      //   targetAmount: 0,
      description: '',
      documentPdf: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof campaignSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-5">
          <FileInput
            control={form.control}
            name="thumbnail"
            label="Thumbnail (*)"
            accept="image/jpeg,image/jpg,image/png,image/webp"
          />

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

          {/* subtitle */}
          <FormField
            control={form.control}
            name="subtitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-app-gray-300">
                  Subtitle (*)
                </FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* videoUrl */}
          <FormField
            control={form.control}
            name="videoUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-app-gray-300">
                  Video URL (*)
                </FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* targetAmount */}
          {/* <FormField
            control={form.control}
            name="targetAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-app-gray-300 font-medium">
                  Target Amount (*)
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    onChange={(e) =>
                      form.setValue('targetAmount', parseInt(e.target.value))
                    }
                    className="text-base font-semibold"
                    style={{
                      WebkitAppearance: 'none',
                      MozAppearance: 'textfield',
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          /> */}

          {/* description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-app-gray-300">
                  Description (*)
                </FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FileInput
            control={form.control}
            name="documentPdf"
            label="Document PDF"
            accept="application/pdf"
          />
        </div>

        <SubmitPrimary className="font-normal mt-10 w-max rounded-md">
          Create Campaign
        </SubmitPrimary>
      </form>
    </Form>
  );
};
export default CampaignForm;
