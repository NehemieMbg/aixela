'use client';

import Backdrop from '../reusables/Backdrop';

import { cn } from '@/lib/utils';
import { initiateConfirmRequestAction } from '@/utils/actions/authentication/initiateConfirmRequestAction';
import { ShieldCheck } from 'lucide-react';
import SubmitPrimary from '../buttons/SubmitPrimary';

const ConfirmAccountCard = ({ isConfirmed }: { isConfirmed: boolean }) => {
  if (isConfirmed) {
    return null;
  }

  const handleSubmit = async () => {
    await initiateConfirmRequestAction();
  };

  return (
    <>
      <Backdrop isActive={true} zIndex={999} />

      <div
        className={cn(
          'fixed top-0 w-screen h-screen z-[1000] flex items-center justify-center p-side'
        )}
      >
        <div className="max-w-[460px] w-full space-y-8 p-5 bg-white rounded-md">
          <div className="flex justify-between items-start">
            <div
              className={cn(
                ' bg-opacity-50 w-max p-2 rounded-md bg-red-500 text-red-500'
              )}
            >
              <ShieldCheck size={20} strokeWidth={1.8} />
            </div>
          </div>

          <div className="space-y-2.5">
            <h1 className="text-2xl">Verify Your Aixela Account</h1>

            <p className="text-sm">
              This step makes sure you get the most out of your Aixela
              experience by helping us keep your account secure and ensuring you
              have full access to all the features.
            </p>
          </div>

          <SubmitPrimary onClick={handleSubmit}>
            Send My Confirmation Link
          </SubmitPrimary>
        </div>
      </div>
    </>
  );
};
export default ConfirmAccountCard;
