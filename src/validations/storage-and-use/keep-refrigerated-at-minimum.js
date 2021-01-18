/* eslint-disable */

(function () {
  // Minimum can`t be left blank
  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt && typeof data.storageConditions.keepRefrigeratedAtMinimum === 'undefined') {
    valid = "The keep refrigerated from temperature must be entered when the\n    food is to be refrigerated between a specified temperature range.";
    return;
  } // Minimum can`t be less than zero


  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt && data.storageConditions.keepRefrigeratedAtMinimum < 0) {
    valid = "The keep refrigerated from temperature must be a number between\n    0 \xB0C and 30 \xB0C when the food is to be refrigerated between a specified\n    temperature range.";
    return;
  } // Maximum can`t be zero or below


  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt && data.storageConditions.keepRefrigeratedAtMaxmium <= 0) {
    valid = "The keep refrigerated from temperature must be a number between\n    0 \xB0C and 30 \xB0C when the food is to be refrigerated between a specified\n    temperature range.";
    return;
  } // Minimum can`t be 30 or above.


  if (data && data.directionsForUse && data.storageConditions.keepRefrigeratedAt && data.storageConditions.keepRefrigeratedAtMinimum >= 30) {
    valid = "The keep refrigerated from temperature must be a number between\n    0 \xB0C and 30 \xB0C when the food is to be refrigerated between a specified\n    temperature range.";
    return;
  }

  if (/^((?![|&;$%"<>()\{\}+\\\/]).)*$/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
