/**
 * Converts a number to a readable format
 * @param num - The number to convert
 * @returns the number in a readable format
 */
const toReadableNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default toReadableNumber;
