import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aixela',
  description:
    'AIXELA is a modern authentication platform designed to provide secure and seamless login experiences. It supports both traditional email/password login and Google OAuth2 integration, catering to diverse user preferences. AIXELA aims to enhance security and usability, making it easy for developers to implement robust authentication systems and for users to enjoy quick, secure access to their accounts.',
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
