import Link from 'next/link';
import { Aldrich } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { notFound } from '@/constants';
import Image from 'next/image';

const aldrich = Aldrich({ subsets: ['latin'], weight: ['400'] });

/**
 * Not found page component
 * @returns the not found page component
 */
export default function NotFound() {
  return (
    <div className="flex max-md:flex-col-reverse justify-center items-center w-full h-screen p-10 md:gap-20">
      <div className="md:max-w-[436px] w-full space-y-4 md:space-y-6">
        <h2
          className={cn(
            'text-[162px] h-max leading-none max-md:hidden',
            aldrich.className
          )}
        >
          {notFound.title}
        </h2>

        <p className="">{notFound.description}</p>

        <Button
          asChild
          className="w-full bg-app-gray-950 hover:bg-app text-white"
        >
          <Link href="/">Return Home</Link>
        </Button>
      </div>

      <div className="relative max-w-[700px] w-full max-h-[700px] h-max">
        <Image
          src={notFound.imageUrl}
          alt={notFound.title}
          width={700}
          height={700}
          loading="lazy"
          blurDataURL={notFound.imageUrl}
          className="size-full object-contain"
        />
      </div>
    </div>
  );
}
