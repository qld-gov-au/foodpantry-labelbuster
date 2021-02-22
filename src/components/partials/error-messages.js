const errorMessages = {
    browserNotSupported: () => {
      // TODO - waiting for the correct wordings
      return `<div class="alert alert-danger mt-2 mb-4" id="browser-warning" role="alert">
                <h2>Your browser is not supported.</h2>
                <p>Our application has detected that you are using an unsupported browser that will prevent you from using this online tool. We recommend you switch to one of our supported browsers on the <a href="https://www.google.com.au/intl/en_au/chrome/">Google Chrome</a> (Version 84 and later), <a href="https://www.apple.com/au/safari/">Safari</a> (Version 12 and later), <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> (Version 80 and later) or <a href="https://www.microsoft.com/en-us/edge">Microsoft Edge</a> (Version 18 or later).</p>
              </div>`
    }
  }

export default errorMessages;
