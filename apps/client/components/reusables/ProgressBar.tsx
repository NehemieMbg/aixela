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
  showProgress = true,
}: {
  current: number;
  target: number;
  color?: 'primary' | 'clear' | 'dark';
  showProgress?: boolean;
}) => {
  const progress = progressToPercent(current, target);

  return (
    <div className="w-full space-y-2">
      <div
        className={cn('text-sm text-right text-white', {
          hidden: !showProgress,
        })}
      >
        {progress < 100 ? `${progress}%` : 'Completed'}
      </div>

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
    </div>
  );
};
export default ProgressBar;
