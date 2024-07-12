import { cn } from '@/lib/utils';
import Link from 'next/link';

/**
 * Aixela logo of the application
 * @param redirectLink - The link to redirect to
 * @param className - The className to apply (styling purposes)
 * @returns The Aixela logo
 */
const Aixela = ({
  redirectLink,
  className,
}: {
  redirectLink?: string;
  className?: string;
}) => {
  return (
    <Link
      href={`${redirectLink ? redirectLink : '/'}`}
      className={cn('text-xl', {
        [`${className}`]: className,
      })}
    >
      Aixela
    </Link>
  );
};

export default Aixela;
