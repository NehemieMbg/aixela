'use client';

import { footerLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Footer Component
 * @returns the footer component
 */
const Footer = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isContributePage = pathname.includes('/contribute');

  return (
    <footer
      className={cn(
        'flex max-sm:flex-col-reverse justify-center items-center gap-5 w-full p-6 text-sm font-medium bg-app-gray-100',
        { hidden: isContributePage }
      )}
    >
      <p>
        <Link href={'/'} className="hover:underline">
          Aixela{' '}
        </Link>
        © {year}
      </p>

      {footerLinks.map((link) => (
        <Link href={link.href} key={link.label} className="hover:underline">
          {link.label}
        </Link>
      ))}
    </footer>
  );
};
export default Footer;
