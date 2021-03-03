/* eslint-disable */
(function () {
  // Address 2 line must have 250 characters or less.
  if (input.length > 250) {
    valid = "Address 2 line must have 250 characters or less.";
    return;
  }

  // check if not a valid character
  if (!/^[a-zA-Z0-9 "/.,']*$/.test(input)) {
    valid = 'You have entered an invalid character, please use only letters, numbers and these special characters "./,\'';
    return;
  }

  valid = true;
})();
