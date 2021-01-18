/* eslint-disable */
(function () {
  // Address line 1 must have 250 characters or less.
  if (input.length > 250) {
    valid = "Address line 1 must have 250 characters or less.";
    return;
  }

  if (/^((?![|&;$%"<>()\{\}+\\\/]).)*$/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
