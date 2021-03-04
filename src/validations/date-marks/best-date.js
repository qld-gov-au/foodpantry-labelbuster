/* eslint-disable */
(function () {
  // The date mark must 20 characters or less.
  if (input.length > 20) {
    valid = "The date mark must 20 characters or less.";
    return;
  }
  // check if not a valid character
  if (!/^[a-zA-Z0-9" |/.,']*$/.test(input)) {
    valid = 'You have entered an invalid character, please use only letters, numbers and these special characters "|./,\'';
    return;
  }
  valid = true;
})();
