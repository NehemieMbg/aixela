'use client';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useState } from 'react';
import { UserRoundMinus, UserRoundPlus } from 'lucide-react';

/**
 *
 * @param isSubscribe - The boolean value to check if the user is subscribed
 * @param isOwner - The boolean value to check if the user is the owner
 * @param btnType - The type of button to render
 * @returns
 */
const SubscribeBtn = ({
  isSubscribe,
  isOwner,
  btnType,
}: {
  isSubscribe: boolean;
  isOwner: boolean;
  btnType: 'small' | 'medium' | 'large';
}) => {
  const [tempIsSubscribe, tempSetIsSubscribe] = useState(isSubscribe);

  const handleSubscribe = () => {
    tempSetIsSubscribe((prev) => !prev);
  };

  if (isOwner) {
    return null;
  }

  return (
    <>
      <Button
        type="submit"
        onClick={handleSubscribe}
        className={cn(
          'hover:backdrop-brightness-75 text-white p-0 px-1 size-[32px] font-medium text-xs rounded-lg',
          {
            hidden: btnType !== 'small',
            'bg-app-blue-primary hover:bg-app-blue-secondary': !tempIsSubscribe, //! to be replaced with isSubscribed
            'bg-app-gray-250 text-app-gray-highlight-3 hover:contrast-[90%] transition-all duration-300':
              tempIsSubscribe, //! to be replaced with isSubscribed
          }
        )}
      >
        {tempIsSubscribe ? ( //! to be replaced with isSubscribed
          <UserRoundMinus className="size-4" />
        ) : (
          <UserRoundPlus className="size-4" />
        )}
      </Button>

      {/* //? MEDIUM btn size */}
      <Button
        type="submit"
        onClick={handleSubscribe}
        className={cn(
          'hover:backdrop-brightness-75 text-white py-0 h-[32px] font-medium text-xs px-4 rounded-[4px]',
          {
            hidden: btnType !== 'medium',
            'bg-app-blue-primary hover:bg-app-blue-secondary': !tempIsSubscribe, //! to be replaced with isSubscribed
            'bg-app-gray-250 text-app-gray-highlight-3 hover:contrast-[90%] transition-all duration-300':
              tempIsSubscribe, //! to be replaced with isSubscribed
          }
        )}
      >
        {tempIsSubscribe //! to be replaced with isSubscribed
          ? 'Subscribed'
          : 'Subscribe'}
      </Button>
    </>
  );
};
export default SubscribeBtn;
