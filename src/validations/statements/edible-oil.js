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

  if (/[|&;$%"<>()\{\}+\\\/]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
