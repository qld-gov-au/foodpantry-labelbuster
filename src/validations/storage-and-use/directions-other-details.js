/* eslint-disable */

// other directions for use
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && data.directionsForUse.otherDirectionsForUse && data.directionsForUse.otherDirectionsForUseDetails === '') {
    valid = "The other directions for use details must be entered when the other is selected as a direction for use.";
    return;
  } // Can`t be less than zero minutes.


  if (data && data.directionsForUse && data.directionsForUse.otherDirectionsForUse && data.directionsForUse.otherDirectionsForUseDetails.length > 1000) {
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
