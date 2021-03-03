/* eslint-disable */
(function () {
  if (data.statementsSummary.salt_subs && !input) {
    valid = "The sodium and potassium content must be entered for reduced sodium salt mixtures and salt substitutes.";
    return;
  }

  if (data.statementsSummary.salt_subs  && input.length > 1000) {
    valid = "The sodium and potassium content details must have less than 1000 characters.";
    return;
  }
  if (!/^[a-zA-Z0-9 "%\/,'°]*$/.test(input)) {
    valid = 'You have entered an invalid character, please use only letters, numbers and these special characters "%,\'';
    return;
  }
  valid = true;
})();
