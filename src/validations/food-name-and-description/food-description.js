/* eslint-disable */
(function () {
  // The food description must have 250 characters or less.
  if (input.length > 250) {
    valid = "The food description must have 250 characters or less.";
    return;
  }
  // check for special characters
  if (/[|;$"<>{}+/]/.test(input)) {
    valid = 'Please do not special characters e.g. not any of these | ; $ " < > { } + /';
    return;
  }
  valid = true;
})();
