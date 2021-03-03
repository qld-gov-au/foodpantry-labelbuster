/* eslint-disable */
(function () {
  if (data.statementsSummary.Alcohol && !input) {
    valid = "The food containing alcohol details must be entered when your food contains more than 1.15% alcohol by volume.";
    return;
  }

  if (data.statementsSummary.Alcohol && input.length > 1000) {
    valid = "The food containing alcohol details must have less than 1000 characters.";
    return;
  }

  if (!/^[a-zA-Z0-9" "%\/.,'°]*$/.test(input)) {
    valid = 'You have entered an invalid character, please use only letters, numbers and these special characters % /';
    return;
  }

  valid = true;
})();
