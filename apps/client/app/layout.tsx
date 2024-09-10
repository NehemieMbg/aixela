import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { user as tempUser } from '@/constants';
import StoreProvider from '@/providers/StoreProvider';
import { getCurrentUserAction } from '@/utils/actions/authentication/getUserAction';
import { User } from '@/utils/types/temp';
import ConfirmAccountCard from '@/components/cards/ConfirmAccountCard';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aixela',
  description:
    'AIXELA is a fundraising web application designed to help campaigns raise money efficiently. It provides a dynamic platform where users can create and manage campaigns, track their progress, and engage with potential contributors. The application features a prominent video section, detailed campaign information, a real-time progress bar, and sections for user profiles and latest contributors. Excella aims to make fundraising more interactive and impactful',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let user = (await getCurrentUserAction()) || tempUser; // ! tempUser is a temporary code to be removed

  // ! Temporary code to be removed
  if (user) {
    user = { ...tempUser, ...user };
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {user && <ConfirmAccountCard isConfirmed={user.isConfirmed} />}

          <StoreProvider user={user as User | undefined}>
            {children}
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}
