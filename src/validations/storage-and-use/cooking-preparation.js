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

  if (/^((?![|&;$%"<>()\{\}+\\\/]).)*$/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
