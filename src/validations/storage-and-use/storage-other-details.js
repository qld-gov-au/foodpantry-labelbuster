/* eslint-disable */

// Other please enter
(() => {
  // Can`t be left blank
  if (data.storageConditions.otherPleaseEnter && !input) {
    valid = `The other storage condition details must be entered when other is
      selected as a storage condition.`;
    return;
  }
  if (data.storageConditions.otherPleaseEnter && input.length > 1000) {
    valid = `The other storage condition details must have less than 1000
      characters.`;
    return;
  }

  if (/[|&;$%"<>()\{\}+\\]/.test(input)) {
    valid = 'Please do not include html or special characters e.g. not any of these |&;$%"<>(){}+\/';
    return;
  }

  valid = true;
})();
