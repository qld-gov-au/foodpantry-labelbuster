/* eslint-disable */
(function () {
  if (data.statementsSummary.edible_oil && !input) {
    valid = "The process for making edible oil must be entered for food that is an edible oil.";
    return;
  }

  if (data.statementsSummary.edible_oil  && input.length > 1000) {
    valid = "The edible oil details must have less than 1000 characters.";
    return;
  }
  // check if not a valid character
  if (!/^[a-zA-Z0-9 "().,'°]*$/.test(input)) {
    valid = 'You have entered an invalid character, please use only letters, numbers and these special characters ()°",\'';
    return;
  }

  valid = true;
})();
