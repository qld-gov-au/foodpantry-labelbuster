/* eslint-disable */

// other directions for use
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && !input) {
    valid = "The other directions for use details must be entered when other is selected as a direction for use.";
    return;
  }

  if (data && data.directionsForUse && input.length > 1000) {
    valid = "The other directions for use details must have less than 1000 characters.";
    return;
  }

  // check if not a valid character
  if (!/^[a-zA-Z0-9" .,'°]*$/.test(input)) {
    valid = 'You have entered an invalid character, please use only letters, numbers and these special characters ".,\'°';
    return;
  }

  valid = true;
})();
