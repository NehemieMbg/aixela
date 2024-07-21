/**
 * Convert the current progress to a percentage
 * @param current - The current progress status
 * @param target - The target
 * @returns the percentage of the current progress
 */
const progressToPercent = (current: number, target: number) => {
  return Math.round((current / target) * 100);
};

export default progressToPercent;
