import { cn } from '@/lib/utils';
import progressToPercent from '@/utils/functions/progressToPercent';

/**
 * Progress bar component
 * @param current - The current progress status
 * @param target - The target
 * @returns the progress bar component
 */
const ProgressBar = ({
  current,
  target,
  color = 'clear',
}: {
  current: number;
  target: number;
  color?: 'primary' | 'clear' | 'dark';
}) => {
  const progress = progressToPercent(current, target);

  return (
    <div
      className={cn(
        'relative w-full h-2 bg-app-gray-200  rounded-full overflow-hidden',
        {
          'bg-opacity-50': color === 'clear',
        }
      )}
    >
      <div
        className={cn('h-full', {
          'bg-app-blue-primary': color === 'primary',
          'bg-white': color === 'clear',
          'bg-app-gray-950': color === 'dark',
        })}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
export default ProgressBar;
