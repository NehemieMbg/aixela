import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aixela',
  description:
    'AIXELA is a fundraising web application designed to help campaigns raise money efficiently. It provides a dynamic platform where users can create and manage campaigns, track their progress, and engage with potential contributors. The application features a prominent video section, detailed campaign information, a real-time progress bar, and sections for user profiles and latest contributors. Excella aims to make fundraising more interactive and impactful',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
