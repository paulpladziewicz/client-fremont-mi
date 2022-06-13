export const getErrorMessage = (catchErrorMessage: string): string => {
  const errorMessages = {
    'Network Error':
      'The website currently is not working as expected. Please try again later. Sorry for the inconvenience.',
    'Request failed with status code 401':
      'The email or password you entered is incorrect. Please try again.'
  };

  let errorMessage = errorMessages[catchErrorMessage];

  if (errorMessage === undefined) {
    errorMessage =
      'The website currently is not working as expected. Please try again later. Sorry for the inconvenience.';
  }

  return errorMessage;
};
