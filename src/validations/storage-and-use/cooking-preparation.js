/* eslint-disable */

// cooking / preparation instructions
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && data.directionsForUse.cookingPreparationInstructions && data.directionsForUse.cookingPreparationInstructionsDetails === '') {
    valid = "The cooking / preparation instructions must be entered when the selected as a direction for use. ";
    return;
  } // Can`t be less than zero minutes.


  if (data && data.directionsForUse && data.directionsForUse.cookingPreparationInstructions && data.directionsForUse.cookingPreparationInstructionsDetails.length > 1000) {
    valid = "The cooking / preparation instruction details must have less than 1000 characters. ";
    return;
  }

  // check if not a valid character
  if (!/^[a-zA-Z0-9" .,'°]*$/.test(input)) {
    valid = 'You have entered an invalid character, please use only letters, numbers and these special characters ".,\'°';
    return;
  }

  valid = true;
})();
