'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';

/**
 *  Campaign Header component
 * @param title - The title of the campaign
 * @returns the campaign header component
 */
const CampaignHeader = ({
  title,
  campaignId,
}: {
  title: string;
  campaignId: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Show the header when the user has scrolled 50% of the viewport height
      if (scrollPosition >= viewportHeight / 4) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className={cn(
        'fixed z-[90] flex justify-between items-center p-side py-3 top-0 w-full bg-app-gray-highlight-3 text-white backdrop-blur-lg transition-all duration-300',
        {
          'opacity-0 pointer-events-none': !isVisible,
          'opacity-100 pointer-events-auto': isVisible,
        }
      )}
      style={{
        transition: 'opacity 0.5s ease-in-out', // Smooth transition effect
        backgroundColor: 'rgba(0, 0, 0, 0.40)', // Adjust the background color as needed
      }}
    >
      <h2 className="">{title}</h2>

      <Button
        asChild
        type="submit"
        className={cn(
          'bg-app-blue-primary hover:bg-app-blue-secondary hover:backdrop-brightness-75 text-white py-0 h-[28px] font-normal text-xs px-4 rounded-[4px]',
          {}
        )}
      >
        <Link href={`/campaigns/${campaignId}/contribute`}>Contribute</Link>
      </Button>
    </section>
  );
};
export default CampaignHeader;
