import { cn } from '@/lib/utils';
import MenuNavLinks from '../sections/MenuNavLinks';
import UserMenuInfo from '../sections/UserMenuInfo';
import Notifications from '../sections/Notifications';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Menu component
 * @param isOpen - the state of the menu
 * @returns the menu component
 */
const Menu = ({
  isOpen,
  closeMenu,
}: {
  isOpen: boolean;
  closeMenu: () => void;
}) => {
  const pathname = usePathname();
  const isCampaignPage = pathname.includes('/campaigns');

  const [topPosition, setTopPosition] = useState(60); // Initial top position

  //? Dynamically set top position on scroll to create sticky effect and remove the gap between the menu and the navbar
  useEffect(() => {
    if (!isCampaignPage) return; // If not campaign page, return

    const handleScroll = () => {
      const newTopPosition = Math.max(60 - window.scrollY, 0); // Calculate new top position
      setTopPosition(newTopPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isCampaignPage]);

  return (
    <>
      <div
        className={cn(
          'fixed z-[99] w-full bg-white lg:rounded-b-xl transition-all duration-300 ease-in-out overflow-hidden p-side pt-10 lg:pt-16 pb-10',
          {
            '-translate-y-[100%] opacity-0 pointer-events-none': !isOpen,
            'translate-y-0 opacity-100': isOpen,
          }
        )}
        style={{ top: `${topPosition}px` }} // Dynamically set top position
      >
        <div className="flex items-center justify-center h-full">
          <div className="lg:grid grid-cols-3 lg:gap-10 max-lg:space-y-1 max-w-[1360px] w-full h-full">
            <UserMenuInfo closeMenu={closeMenu} />
            <MenuNavLinks closeMenu={closeMenu} />
          </div>
        </div>
      </div>

      <Notifications />
    </>
  );
};
export default Menu;
