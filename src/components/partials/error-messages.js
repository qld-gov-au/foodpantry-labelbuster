const errorMessages = {
    browserNotSupported: () => {
      // TODO - waiting for the correct wordings
      return `<div class="alert alert-danger mt-2 mb-4" id="browser-warning" role="alert">
                 <p>Your browser is not suppported. Some functionality might not work as expected.</p>
              </div>`
    }
  }

export default errorMessages;
