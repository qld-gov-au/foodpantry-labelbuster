/* eslint-disable no-unused-vars */
/* global data, valid:writable */

// Keep refrigerated at
(() => {
  // Maximum can`t be greater than or equal to the minimum.
  if (
    data.storageConditions.keepRefrigeratedAt &&
    data.storageConditions.keepRefrigeratedAtMinimum >=
      data.storageConditions.keepRefrigeratedAtMaximum
  ) {
    valid = `The keep refrigerated to temperature must higher than the keep
    refrigerated from temperature when the food is to be refrigerated between a
    specified temperature range.`;
    return;
  }
  // Minimum can`t be left blank
  if (
    data.storageConditions.keepRefrigeratedAt &&
    typeof data.storageConditions.keepRefrigeratedAtMinimum === 'undefined'
  ) {
    valid = `The keep refrigerated from temperature must be entered when the
    food is to be refrigerated between a specified temperature range.`;
    return;
  }
  // Maximum can`t be left blank
  if (
    data.storageConditions.keepRefrigeratedAt &&
    typeof data.storageConditions.keepRefrigeratedAtMaximum === 'undefined'
  ) {
    valid = `The keep refrigerated from temperature must be entered when the
    food is to be refrigerated between a specified temperature range.`;
    return;
  }
  // Minimum can`t be less than zero
  if (
    data.storageConditions.keepRefrigeratedAt &&
    data.storageConditions.keepRefrigeratedAtMinimum < 0
  ) {
    valid = `The keep refrigerated from temperature must be a number between
    0 °C and 30 °C when the food is to be refrigerated between a specified
    temperature range.`;
    return;
  }
  // Maximum can`t be zero or below
  if (
    data.storageConditions.keepRefrigeratedAt &&
    data.storageConditions.keepRefrigeratedAtMaxmium <= 0
  ) {
    valid = `The keep refrigerated from temperature must be a number between
    0 °C and 30 °C when the food is to be refrigerated between a specified
    temperature range.`;
    return;
  }
  // Minimum can`t be 30 or above.
  if (
    data.storageConditions.keepRefrigeratedAt &&
    data.storageConditions.keepRefrigeratedAtMinimum >= 30
  ) {
    valid = `The keep refrigerated from temperature must be a number between
    0 °C and 30 °C when the food is to be refrigerated between a specified
    temperature range.`;
    return;
  }
  valid = true;
})();

// Keep refigerated below
(() => {
  // Can not be below zero
  if (
    data.storageConditions.keepRefrigeratedAtOrBelow &&
    data.storageConditions.keepRefrigeratedAtOrBelowTemperature < 0
  ) {
    valid = `The keep refrigerated below temperature must a number be between
      0 °C and 30 °C when the food is to be refrigerated below a specified
      temperature.`;
    return;
  }
  // Can not be above 30
  if (
    data.storageConditions.keepRefrigeratedAtOrBelow &&
    data.storageConditions.keepRefrigeratedAtOrBelowTemperature > 30
  ) {
    valid = `The keep refrigerated below temperature must a number be between
    0 °C and 30 °C when the food is to be refrigerated below a specified
    temperature.`;
    return;
  }
  // Can`t be left blank
  if (
    data.storageConditions.keepRefrigeratedAtOrBelow &&
    typeof data.storageConditions.keepRefrigeratedAtOrBelowTemperature ===
      'undefined'
  ) {
    valid = `The keep refrigerated below temperature must a number be between
    0 °C and 30 °C when the food is to be refrigerated below a specified
    temperature.`;
    return;
  }
  valid = true;
})();

// Other please enter
(() => {
  // Can`t be left blank
  if (
    data.storageConditions.otherPleaseEnter &&
    data.storageConditions.otherPleaseEnterDetails === ''
  ) {
    valid = `The other storage condition details must be entered when the other
    is selected as a storage condition.`;
    return;
  }
  if (
    data.storageConditions.otherPleaseEnter &&
    typeof data.storageConditions.otherPleaseEnterDetails.length > 10000
  ) {
    valid = `The other storage condition details must have less than 1000
    characters.`;
    return;
  }
  valid = true;
})();

// Consume withing x days of opening.
(() => {
  // Can`t be left blank
  if (
    data.directionsForUse.consumeWithin &&
    typeof data.directionsForUse.consumeWithinDaysOfOpening === 'undefined'
  ) {
    valid = `The number of days that the food must be consumed within after the
    package is opened must be entered.`;
    return;
  }
  // Can`t be less than zero days.
  if (
    data.directionsForUse.consumeWithin &&
    data.directionsForUse.consumeWithinDaysOfOpening < 0
  ) {
    valid = `The number of days that the food must be consumed within after the
    package is opened must be a number between 0 and 14 days.`;
    return;
  }
  // Can`t be more than 14 days.
  if (
    data.directionsForUse.consumeWithin &&
    data.directionsForUse.consumeWithinDaysOfOpening > 14
  ) {
    valid = `The number of days that the food must be consumed within after the
    package is opened must be a number between 0 and 14 days.`;
    return;
  }
  valid = true;
})();

// Once thawed
(() => {
  // Can`t be left blank
  if (
    data.directionsForUse.onceThawedUseWithin &&
    typeof data.directionsForUse.onceThawedUseWithinHours === 'undefined'
  ) {
    valid = `The number of hours that the food must be consumed within after the
    food has been thawed must be entered.`;
    return;
  }
  // Can`t be less than zero days.
  if (
    data.directionsForUse.onceThawedUseWithin &&
    data.directionsForUse.onceThawedUseWithinHours < 0
  ) {
    valid = `The number of hours that the food must be consumed within after the
    food has been thawed must be a number between 0 and 100 hours.`;
    return;
  }
  // Can`t be more than 14 days.
  if (
    data.directionsForUse.onceThawedUseWithin &&
    data.directionsForUse.onceThawedUseWithinHours > 100
  ) {
    valid = `The number of hours that the food must be consumed within after the
    food has been thawed must be a number between 0 and 100 hours.`;
    return;
  }
  valid = true;
})();

// Microwave instructions power
(() => {
  // Can`t be left blank
  if (
    data.directionsForUse.microwaveOn &&
    typeof data.directionsForUse.microwavePower === 'undefined'
  ) {
    valid = `The microwave cooking temperature must be entered.`;
    return;
  }
  // Maximum length 100 characters
  if (
    data.directionsForUse.microwaveOn &&
    data.directionsForUse.microwavePower.length > 100
  ) {
    valid = ` The microwave cooking temperature must have less than 100
    characters.`;
    return;
  }
  valid = true;
})();

// Microwave instructions time
(() => {
  // Can`t be left blank
  if (
    data.directionsForUse.microwaveOn &&
    typeof data.directionsForUse.microwaveOnPowerForMinutes === 'undefined'
  ) {
    valid = ` The microwave cooking time must be entered.`;
    return;
  }
  // Can`t be less than zero minutes.
  if (
    data.directionsForUse.microwaveOn &&
    data.directionsForUse.microwaveOnPowerForMinutes < 0
  ) {
    valid = `The microwave cooking time must be greater than zero.`;
    return;
  }
  // Can`t be greater than 1000 minutes
  if (
    data.directionsForUse.microwaveOn &&
    data.directionsForUse.microwaveOnPowerForMinutes > 1000
  ) {
    valid = `The microwave cooking time must be less than one thousand.`;
    return;
  }
  valid = true;
})();

// oven instructions time
(() => {
  // Can`t be left blank
  if (
    data.directionsForUse.cookFor &&
    typeof data.directionsForUse.cookForTime === 'undefined'
  ) {
    valid = `The oven cooking time must be entered. `;
    return;
  }
  // Time can't be zero
  if (data.directionsForUse.cookFor && data.directionsForUse.cookForTime < 0) {
    valid = `The oven cooking time must be a number between 0 and 999 minutes.`;
    return;
  }
  // Time can't be greater than 999 minutes
  if (
    data.directionsForUse.cookFor &&
    data.directionsForUse.cookForTime >= 1000
  ) {
    valid = `The oven cooking time must be a number between 0 and 999 minutes.`;
    return;
  }
  valid = true;
})();

// oven instructions temperature
(() => {
  // Can`t be left blank
  if (
    data.directionsForUse.cookFor &&
    typeof data.directionsForUse.cookForTimeAtTemperature === 'undefined'
  ) {
    valid = `The oven cooking temperature must be entered.`;
    return;
  }
  // Can`t be less than zero minutes.
  if (
    data.directionsForUse.cookFor &&
    data.directionsForUse.cookForTimeAtTemperature < 0
  ) {
    valid = `The oven cooking temperature must be a number between 0 and 999
    °C.`;
    return;
  }
  // Can`t be greater than 1000 minutes
  if (
    data.directionsForUse.cookFor &&
    data.directionsForUse.cookForTimeAtTemperature > 1000
  ) {
    valid = `The oven cooking temperature must be a number between 0 and 999
    °C.`;
    return;
  }
  valid = true;
})();

// allow to stand for
(() => {
  // Can`t be left blank
  if (
    data.directionsForUse.allowToStandFor &&
    typeof data.directionsForUse.allowToStandForMinutesBeforeServing ===
      'undefined'
  ) {
    valid = `The time to stand before serving the food must be entered.`;
    return;
  }
  // Can`t be less than zero minutes.
  if (
    data.directionsForUse.allowToStandFor &&
    data.directionsForUse.allowToStandForMinutesBeforeServing < 0
  ) {
    valid = `The time to stand before serving food must be a number between 0
    and 999 minutes.`;
    return;
  }
  // Can`t be greater than 1000 minutes
  if (
    data.directionsForUse.allowToStandFor &&
    data.directionsForUse.allowToStandForMinutesBeforeServing > 1000
  ) {
    valid = `The time to stand before serving food must be a number between 0
    and 999 minutes.`;
    return;
  }
  valid = true;
})();

// other directions for use
(() => {
  // Can`t be left blank
  if (
    data.directionsForUse.otherDirectionsForUse &&
    data.directionsForUse.otherDirectionsForUseDetails === ''
  ) {
    valid = `The other directions for use details must be entered when the other
    is selected as a direction for use.`;
    return;
  }
  // Can`t be less than zero minutes.
  if (
    data.directionsForUse.otherDirectionsForUse &&
    data.directionsForUse.otherDirectionsForUseDetails.length > 1000
  ) {
    valid = `The other directions for use details must have less than 1000
    characters.`;
    return;
  }
  valid = true;
})();

// cooking / preparation instructions
(() => {
  // Can`t be left blank
  if (
    data.directionsForUse.cookingPreparationInstructions &&
    data.directionsForUse.cookingPreparationInstructionsDetails === ''
  ) {
    valid = `The cooking / preparation instructions must be entered when the
    selected as a direction for use.
    `;
    return;
  }
  // Can`t be less than zero minutes.
  if (
    data.directionsForUse.cookingPreparationInstructions &&
    data.directionsForUse.cookingPreparationInstructionsDetails.length > 1000
  ) {
    valid = `The cooking / preparation instruction details must have less than
    1000 characters. `;
    return;
  }
  valid = true;
})();
