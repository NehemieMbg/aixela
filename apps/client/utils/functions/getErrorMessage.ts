/**
 * Compares a given message with a list of error messages and returns the matching error message if found.
 *
 * @param {string} message - The message to compare against the list of error messages.
 * @param {string[]} errors - An array of error messages to compare with the given message.
 * @returns {string} - The matching error message from the list if found, otherwise an empty string.
 *
 * Example:
 * const errorMessage = getErrorMessage('not found', ['Not Found', 'Unauthorized']);
 * // errorMessage === 'Not Found'
 */
const getErrorMessage = (message: string, errors: string[]) => {
  for (const currentMsg of errors) {
    if (message.toLocaleLowerCase() === currentMsg.toLocaleLowerCase()) {
      return currentMsg;
    }
  }

  return '';
};

export default getErrorMessage;
