'use client';

import OauthBtn from '@/components/buttons/OauthBtn';
import GoogleIcon from '@/components/icons/GoogleIcon';
import XIcon from '@/components/icons/XIcon';
import Separator from '@/components/reusables/Separator';
import Link from 'next/link';
import { ReactNode } from 'react';
import Aixela from '../logo/Aixela';

/**
 * This is the authentication wrapper component used for both the sign-in and sign-up pages.
 * @param title - The title to great the user.
 * @param subtitle - The subtitle to great the user.
 * @param children - The children components.
 * @param redirectTitle - The title to redirect the user.
 * @param redirectBtnLabel - The label of the redirection button.
 * @param redirectLink - The link to redirect the user.
 * @returns The authentication wrapper component.
 */
const AuthenticationWrapper = ({
  title,
  subtitle,
  children,
  redirectTitle,
  redirectBtnLabel,
  redirectLink,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  redirectTitle: string;
  redirectBtnLabel: string;
  redirectLink: string;
}) => {
  const handleXSignIn = async () => {
    return;
  };

  const handleGoogleSignIn = async () => {
    return;
  };

  return (
    <div className="flex flex-col items-center space-y-8 lg:space-y-10 max-w-[436px] w-full">
      {/* //? LOGO */}
      <Aixela className="lg:hidden" />

      {/* //? TITLES */}
      <div className="w-full space-y-4">
        <h1 className="text-2xl mx-auto w-max font-medium">{title}</h1>
        <p className="text-center text-sm text-app-gray-200">{subtitle}</p>
      </div>

      {/* //? OAUTH BTN */}
      <div className="grid grid-cols-2 gap-3 w-full">
        <OauthBtn
          action={handleXSignIn}
          icon={<XIcon className="size-6" />}
          label="X"
        />
        <OauthBtn
          action={handleGoogleSignIn}
          icon={<GoogleIcon className="size-6" />}
          label="Google"
        />
      </div>

      {/* //? SEPARATOR */}
      <div className="flex w-full items-center gap-5">
        <Separator />
        <div className="text-xs text-app-gray-200">OR</div>
        <Separator />
      </div>

      {children}

      {/* //? REDIRECTION BTN */}
      <div className="flex flex-col items-center gap-2 w-ful text-sm text-app-gray-200">
        <div className="">{redirectTitle}</div>
        <Link href={redirectLink} className="w-max underline">
          {redirectBtnLabel}
        </Link>
      </div>
    </div>
  );
};
export default AuthenticationWrapper;
