/* eslint-disable */

// Other please enter
(() => {
  // Can`t be left blank
  if (data.storageConditions.otherPleaseEnter && data.storageConditions.otherPleaseEnterDetails === '') {
    valid = `The other storage condition details must be entered when the other
    is selected as a storage condition.`;
    return;
  }
  if (data.storageConditions.otherPleaseEnter && typeof data.storageConditions.otherPleaseEnterDetails.length > 10000) {
    valid = `The other storage condition details must have less than 1000
    characters.`;
    return;
  }
  valid = true;
})();
