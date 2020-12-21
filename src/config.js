export const configuration = {
  form: {
    baseElement: window,
    queryElement: document,
    formioConfig: {
      showCancel: false,
      showPrevious: false,
      showNext: false,
      showSubmit: false,
    },
    adminEmail: '',
    endpoint: 'submission',
    pdfEndpoint: 'lbpdf',
    pdfDownloadName: data => `Label Buster summary - Label Buster Foods ${data.foodName}`,
    selector: '#formio',
    title: 'Label Buster',
    location: '',
    baseLocation: 'https://api.forms.platforms.qld.gov.au/fesrqwsyzlbtegd/',
  },
  scroll: {
    target: 0,
    type: 'auto',
    focusTarget: '#focusTarget',
  },
  terms: {
    title: 'terms of use',
    termsStorageType: sessionStorage,
    termsStorageName: 'lbtermsAndConditions',
    skipIfTermsAlreadyAccepted: true,
    dataName: 'lbtermsAndConditions',
  },
  buttons: {
    overwriteFirstButton: true,
    overwriteValue: 'Start',
    showButtonsOnLast: true,
    css: {
      base: 'qg-btn',
      previous: 'btn-default',
      next: 'btn-primary',
      cancel: 'btn-link',
    },
  },
  navigation: {
    baseClass: 'qg-btn btn-link',
  },
  storage: {
    type: localStorage,
    name: 'lbcompleted',
  },
  extraTriggersOnActions: {
  },
};
