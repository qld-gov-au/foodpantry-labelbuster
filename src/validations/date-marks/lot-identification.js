/* eslint-disable */
(function () {
  // The lot idenfication must have 100 characters or less.
  if (input.length > 100) {
    valid = "The lot idenfication must have 100 characters or less.";
    return;
  }
  // check for special characters
  if (/[&;$%"<>(){}+]/.test(input)) {
    valid = 'Please do not special characters e.g. not any of these & ; $ % " < > ( ){ } +';
    return;
  }
  valid = true;
})();
