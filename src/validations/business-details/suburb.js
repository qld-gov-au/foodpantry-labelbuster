/* eslint-disable */
(function () {
  // Suburb, town or city must have 100 characters or less.
  if (input.length > 250) {
    valid = "Suburb, town or city must have 100 characters or less.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
