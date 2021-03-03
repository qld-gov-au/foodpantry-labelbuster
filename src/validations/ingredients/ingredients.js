/* eslint-disable */
(function () {
  // The ingredients field must have atleast one ingredient
if (input === "") {
  valid = "Please enter at least one ingredient to the ingredients list.";
  return;
}

// The ingredients field character shouldn't exceed 250 characters
if (input.length > 250)
{
  valid = "The ingredient must have 250 characters or less.";
  return;
}
// check if not a valid character
if (!/^[a-zA-Z0-9" .,'°()%\[\]<]*$/.test(input)) {
    valid = 'You have entered an invalid character, please use only letters, numbers and these special characters ()%[]</.,\'°';
    return;
}

valid = true;
})();
