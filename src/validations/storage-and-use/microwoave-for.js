/* eslint-disable */

// Microwave instructions time
(function () {
  // Can`t be left blank
  if (data && data.directionsForUse && data.directionsForUse.microwaveOn && typeof data.directionsForUse.microwaveOnPowerForMinutes === 'undefined') {
    valid = " The microwave cooking time must be entered.";
    return;
  }

  if (data && data.directionsForUse && data.directionsForUse.microwaveOn && typeof data.directionsForUse.microwaveOnPowerForMinutes === 'undefined') {
    valid = "The microwave cooking time must be entered.";
    return;
  } // Can`t be less than zero minutes.


  if (data && data.directionsForUse && data.directionsForUse.microwaveOn && data.directionsForUse.microwaveOnPowerForMinutes < 0) {
    valid = "The microwave cooking time must be greater than zero.";
    return;
  } // Can`t be greater than 1000 minutes


  if (data && data.directionsForUse && data.directionsForUse.microwaveOn && data.directionsForUse.microwaveOnPowerForMinutes > 1000) {
    valid = "The microwave cooking time must be less than one thousand.";
    return;
  }

  if (/^((?![|&;$%"<>()\{\}+\\\/]).)*$/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
