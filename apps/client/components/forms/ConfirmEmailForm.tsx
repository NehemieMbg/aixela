'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { confirmEmailSchema } from '@/utils/schemas/confirmEmailSchema';
import SubmitPrimary from '../buttons/SubmitPrimary';
import Backdrop from '../reusables/Backdrop';
import useClickOutside from '@/hooks/useClickOutside';
import { LegacyRef, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { confirmEmailAction } from '@/utils/actions/users/confirmEmailAction';
import { useRouter } from 'next/navigation';
import { setUser } from '@/lib/features/user/userSlice';
import { toast } from '@/hooks/use-toast';

const ConfirmEmailForm = ({
  isActive,
  closeOtp,
}: {
  isActive: boolean;
  closeOtp: () => void;
}) => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const otpRef = useRef<LegacyRef<HTMLFormElement> | undefined | any>(null);

  const [isLoading, setIsLoading] = useState(false);

  useClickOutside(otpRef, closeOtp);

  const form = useForm<z.infer<typeof confirmEmailSchema>>({
    resolver: zodResolver(confirmEmailSchema),
    defaultValues: {
      code: '',
    },
  });

  async function onSubmit(values: z.infer<typeof confirmEmailSchema>) {
    setIsLoading(true);
    const response = await confirmEmailAction(values);

    if (response?.status === 'error') {
      form.setError('code', {
        type: 'manual',
        message: response.message,
      });

      toast({
        title: 'Uh oh! Something went wrong.',
        description: response.message,
      });
    } else {
      toast({
        title: 'Your email has been verified.',
        description: 'You will be redirected to the sign-in page.',
      });

      setTimeout(() => {
        // dispatch(setUser(null));
        router.refresh();
      }, 3000);
    }

    setIsLoading(false);
  }

  return (
    <div
      className={cn('fixed top-0 left-0 right-0 bottom-0 z-[100]', {
        hidden: !isActive,
      })}
    >
      <Backdrop zIndex={100} isActive={isActive} />

      <div
        className={cn(
          'fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[110]',
          {
            hidden: !isActive,
          }
        )}
      >
        <Form {...form}>
          <form
            ref={otpRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-[408px] bg-white rounded-md p-10"
          >
            <div className="space-y-2.5">
              <h1 className="font-medium text-2xl">
                Enter the verification code
              </h1>

              <p className="text-sm">
                We sent a code to{' '}
                <span className="font-semibold">{user.email}</span> <br />
                Please enter the code to continue.
              </p>
            </div>

            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <InputOTP {...field} maxLength={6} className="w-full">
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SubmitPrimary isLoading={isLoading} className="font-normal">
              Verify Your Account
            </SubmitPrimary>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default ConfirmEmailForm;
