/* eslint-disable */
(function () {
  // The food name must have 100 characters or less.
  if (input.length > 100) {
    valid = "The food name must have 100 characters or less.";
    return;
  }

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
