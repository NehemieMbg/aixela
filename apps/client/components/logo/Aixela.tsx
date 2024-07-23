import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import logoBlack from '../../public/resources/logo/aixela-logo-black.png';
import logoWhite from '../../public/resources/logo/aixela-logo-white.png';

/**
 * Aixela logo of the application
 * @param redirectLink - The link to redirect to
 * @param className - The className to apply (styling purposes)
 * @returns The Aixela logo
 */
const Aixela = ({
  redirectLink,
  className,
  dark = true,
}: {
  redirectLink?: string;
  className?: string;
  dark?: boolean;
}) => {
  return (
    <Link
      href={`${redirectLink ? redirectLink : '/'}`}
      className={cn('text-base font-medium uppercase', {
        [`${className}`]: className,
      })}
    >
      <Image
        src={dark ? logoBlack : logoWhite}
        alt="App Logo"
        className="h-3 w-max object-contain"
      />
    </Link>
  );
};

export default Aixela;
