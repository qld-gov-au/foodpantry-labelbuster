export class Environment {
  /**
   * @param {String} environment overwritten environment
   * @param {Object} base overwrite window to get location
   */
  constructor(environment = '', base = window.location.href) {
    let selectedEnvironment = 'production';
    if (!environment) {
      if (base.includes('localhost')) {
        selectedEnvironment = 'development';
      }
      if (base.includes('dev')) {
        selectedEnvironment = 'development';
      }
      if (base.includes('uat')) {
        selectedEnvironment = 'uat';
      }
    } else {
      selectedEnvironment = environment;
    }

    switch (selectedEnvironment) {
      case 'development': {
        this.flag = 'dev'
        this.url = 'https://api.forms.platforms.qld.gov.au/dev-tzkqydhwrjrviss/labelbuster';
        this.baseLocation = 'https://api.forms.platforms.qld.gov.au/dev-tzkqydhwrjrviss/';
        this.email = '001.daniel.turner@gmail.com';
        break;
      }
      case 'uat': {
        this.flag = 'uat'
        this.url = 'https://api.forms.platforms.qld.gov.au/uat-tzkqydhwrjrviss/labelbuster';
        this.baseLocation = 'https://api.forms.platforms.qld.gov.au/uat-tzkqydhwrjrviss/';
        this.email = '';
        break;
      }
      default: {
        this.flag = 'dev'
        this.url = 'https://api.forms.platforms.qld.gov.au/dev-tzkqydhwrjrviss/labelbuster';
        this.baseLocation = 'https://api.forms.platforms.qld.gov.au/dev-tzkqydhwrjrviss/';
        this.email = '';
        break;
      }
    }
  }
}
