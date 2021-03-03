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

  // check if not a valid character
  if (!/^[a-zA-Z0-9" .,'°]*$/.test(input)) {
    valid = 'You have entered an invalid character, please use only letters, numbers and these special characters ".,\'°';
    return;
  }

  valid = true;
})();
