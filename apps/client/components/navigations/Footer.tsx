import { footerLinks } from '@/constants';
import Link from 'next/link';

/**
 * Footer Component
 * @returns the footer component
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex max-sm:flex-col-reverse justify-center items-center gap-5 w-full p-6 text-sm font-medium bg-app-gray-100">
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
