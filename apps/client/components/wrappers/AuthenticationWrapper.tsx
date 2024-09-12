'use client';

import OauthBtn from '@/components/buttons/OauthBtn';
import GoogleIcon from '@/components/icons/GoogleIcon';
import XIcon from '@/components/icons/XIcon';
import Separator from '@/components/reusables/Separator';
import Link from 'next/link';
import { ReactNode } from 'react';
import Aixela from '../logo/Aixela';
import server from '@/utils/server/server';
import { googleSignInAction } from '@/utils/actions/authentication/signInAction';

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
  showOauth = true,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  redirectTitle: string;
  redirectBtnLabel: string;
  redirectLink: string;
  showOauth?: boolean;
}) => {
  const handleXSignIn = async () => {
    return;
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await googleSignInAction();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 lg:space-y-10 max-w-[436px] w-full">
      {/* //? LOGO */}
      <Aixela className="lg:hidden" />

      {/* //? TITLES */}
      <div className="w-full space-y-4">
        <h1 className="text-2xl mx-auto w-max font-semibold">{title}</h1>
        <p className="text-center text-sm text-app-text-gray font-medium">
          {subtitle}
        </p>
      </div>

      {/* //? OAUTH BTN */}
      {showOauth && (
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
      )}

      {/* //? SEPARATOR */}
      {showOauth && (
        <div className="flex w-full items-center gap-5">
          <Separator />
          <div className="text-xs font-medium text-app-text-gray">OR</div>
          <Separator />
        </div>
      )}

      {children}

      {/* //? REDIRECTION BTN */}
      <div className="flex flex-col items-center gap-2 w-full text-sm text-app-gray-300">
        <div className="font-medium">{redirectTitle}</div>
        <Link href={redirectLink} className="w-max underline font-semibold">
          {redirectBtnLabel}
        </Link>
      </div>
    </div>
  );
};
export default AuthenticationWrapper;
