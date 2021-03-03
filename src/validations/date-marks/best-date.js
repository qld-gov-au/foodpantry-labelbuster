/* eslint-disable */
(function () {
  // The date mark must 20 characters or less.
  if (input.length > 20) {
    valid = "The date mark must 20 characters or less.";
    return;
  }
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(input)) {
    valid = 'Please use the format dd/mm/yyyy';
    return;
  }
  valid = true;
})();
