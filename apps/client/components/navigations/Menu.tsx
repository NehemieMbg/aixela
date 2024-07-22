import { cn } from '@/lib/utils';
import MenuNavLinks from '../sections/MenuNavLinks';
import UserMenuInfo from '../sections/UserMenuInfo';

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
  return (
    <div
      className={cn(
        'fixed top-[60px] z-[99] w-full  bg-white lg:rounded-b-xl transition-all duration-300 ease-in-out overflow-hidden p-side  pt-16 pb-10',
        {
          '-translate-y-[100%] opacity-0 pointer-events-none': !isOpen,
          'translate-y-0 opacity-100': isOpen,
        }
      )}
    >
      <div className="flex items-center justify-center h-full">
        <div className="lg:grid grid-cols-3 lg:gap-10 max-lg:space-y-4 max-w-[1360px] w-full h-full">
          <UserMenuInfo closeMenu={closeMenu} />

          <MenuNavLinks closeMenu={closeMenu} />
        </div>
      </div>
    </div>
  );
};
export default Menu;
