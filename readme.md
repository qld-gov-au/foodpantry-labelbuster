<!--
*** https://www.markdownguide.org/basic-syntax/
-->
# Label Buster

The Label Buster is a product that allows you to better understand requirements for selling food in QLD.


## Table of Contents

- [Label Buster](#label-buster)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
    - [Built With](#built-with)
    - [Decisions](#decisions)
      - [Form.io](#formio)
      - [Squiz](#squiz)
      - [Misc](#misc)
      - [Development and build tools](#development-and-build-tools)
        - [Eslint](#eslint)
        - [Prettier](#prettier)
        - [Karma](#karma)
        - [Parcel](#parcel)
    - [Unknowns](#unknowns)
      - [Form.io](#formio-1)
      - [Squiz](#squiz-1)
    - [Resources](#resources)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Setting up Squiz with Form.io](#setting-up-squiz-with-formio)
    - [Leveraging Form.io](#leveraging-formio)
  - [Decisions](#decisions-1)
- [Documentation for Formio Wrapper](#documentation-for-formio-wrapper)
  - [Rationale](#rationale)
  - [Technology](#technology)
  - [Configuration](#configuration)
    - [Each part will now be detailed](#each-part-will-now-be-detailed)
- [Documentation for Button Group and Step Navigation](#documentation-for-button-group-and-step-navigation)
  - [Rationale](#rationale-1)
  - [Usage](#usage-1)
  - [Extension - Step navigation.](#extension---step-navigation)
- [Documentation for Help Guide](#documentation-for-help-guide)
  - [Rationale](#rationale-2)
  - [Technology](#technology-1)
  - [Usage](#usage-2)
      - [new HelpGuide(target, config)](#new-helpguidetarget-config)
    - [Example](#example)
    - [How to use Help Guide](#how-to-use-help-guide)


## About The Project

This project is a single page application embedded within a Squiz Matrix page. It uses Form.io to manage both the rendering and back end of the application, and SWE components to achieve the design.

### Built With
* [Form.io](https://www.form.io/)
* [Squiz Matrix](https://www.squiz.net/platform/products/cms)
* [SWE](https://qld-gov-au.github.io/web-template-release/)

### Decisions

#### Form.io
* Using the "Wizard" form in Form.io.
* Name-spacing CSS Styles.
* Versioning Form.io forms as JSON.
#### Squiz
* Global styles/JS for Form in Squiz.
#### Misc
* To be added.
#### Development and build tools
The following tools were decided on for this project
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Karma](https://karma-runner.github.io/latest/index.html)
* [Parcel](https://parceljs.org/)

##### Eslint
Eslint configuration is an extension on the Airbnb rules adding a more rigid
development environment, leveraging auto format and auto correct these rules
allow for a more consistent better documented codebase.

##### Prettier
Prettier is the code formatter of choice for javascript, it is the fastest way
to resolve code formatting issues and help the team focus on solving problems.

##### Karma
The simplest way to test in real browsers.

##### Parcel
Blazing fast zero configuration web application bundler

This means that the developers can work on individual files commit those files
and when deploying bundle those files ready to use.

[Babel](https://babeljs.io/)

### Unknowns

#### Form.io
* CI/CD? (Unlikely to be resolved)
#### Squiz
* Versioning Squiz code?

### Resources
* Zeplin : https://app.zeplin.io/project/5ef040ac25b1322a575ffac8
* Sktech : https://www.sketch.com/s/de2eeaee-d83b-4c09-9a36-1424c690fee3/a/K1YzEy

## Getting Started

This is how to get started with what you need to contribute to the application.


### Prerequisites
1. Access to Squiz
2. Access to Form.io (Form Wizard project)
3. Access to SWE documentation (https://github.com/qld-gov-au/swe)


### Installation
1. Get the repostory.

```sh
git clone git@github.com:qld-gov-au/foodpantry-labelbuster.git
```


<!-- USAGE EXAMPLES -->
## Usage
Any How-to's for contributing to specific parts of the project. Guides on how to
develop components/features.

### Setting up Squiz with Form.io
To set up Squiz with Form.io you must embed the Form.io JavaScript as a raw html
content block in Squiz..
TODO: Show examples on how

### Leveraging Form.io
This project calls for Formio to be setup as a CMS for the form, allowing faster
changes of the form without the need for a developer resource.
Form.io is not a developer centric platform therefore the front-end is not
easily extensible and the support team suggest using Form.io as a backend only.
The requirements for this project stipulate that Form.io isn't to save collected
data.

To this end we need to:
* Create a wrapper around the form.io API to expose useful functionality in a way that doesn't pollute the single responsibility of the other parts of the app
* Create button, menu and help generating sections of the application
* Leverage Form.io as a CMS
* Contribute to SWE to allow it to work within the "application" nature of Form.io

## Decisions
* Modules
* ES Modules
* Parcel
* Testing frameworks
* Code splitting

TBC


# Documentation for Formio Wrapper
## Rationale
Given the task to leverage formio the team decided a wrapper around the formio provided the flexibility needed to achieve the required outcome and helped overcome some perceived shortcomings with the base Formio.js API that make it difficult to extend for custom development

We do expect further implementation of tweaks to make formio behave as the users expect and additions to this wrapper could include missing functionality like the reapply css selection we have kept separate for now.

## Technology
The formio wrapper has no external dependencies and uses pure es6 javasccript (framework agnostic) to accomplish the task.
The formio wrapper is designed to be an external npm dependency to your appliction.
Your application components can communicate with the formio wrapper through the events.

* formiowrapperGoToNext
* formiowrapperGoToPrevious
* formiowrapperCancel
* formiowrapperGoToPage
* formiowrapperSendAdminEmail

To fire extra events for other parts of your application to respond to you would use the configuration
```extraTriggersOnActions```
This would then fire the extra event and your application can respond accordingly.

## Configuration
The main way to alter the functionality of the wrapper is to configure it differently.
The configuration object is passed in as follows.
```javascript
const wrapper = new FormioWrapper(configuration);
```
The best way to modify the configuration is to create a config.js and import it like this.
```javascript
import { configuration } from './config';
```
It is best to use native es module imports rather than other types of importing.

**Here is an example config:**
```javascript
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
    pdfEndpoint: 'pdf',
    selector: '#formio',
    title: 'Title',
    location: '',
    baseLocation: 'asdf',
  },
  scroll: {
    target: 0,
    type: 'auto',
    focusTarget: '#focusTarget',
  },
  terms: {
    title: 'terms',
    termsStorageType: sessionStorage,
    termsStorageName: 'name',
    skipIfTermsAlreadyAccepted: true,
    dataName: 'termsteerms',
  },
  buttons: {
    overwriteFirstButton: true,
    overwriteValue: 'Go',
    showButtonsOnLast: true,
    css: {
      base: 'baseClass',
      previous: 'previous-class',
      next: 'next-class',
      cancel: 'cancel-class',
    },
  },
  navigation: {
    baseClass: 'navigationclass',
  },
  storage: {
    type: localStorage,
    name: 'storagenameforcompletion',
  },
  extraTriggersOnActions: {
    next: 'checkForAutoEmail',
  },
};
```
### Each part will now be detailed

**baseElement: window,**

This is the base element, most of the time you would leave this to window, unless you are using webcomponents or  are writing tests.


**queryElement: document,**

This is the query element, best to leave that as is unless you are using webcomponents. This is for querying for focus and scolling.


**formioConfig: {}**

This is the config used to control formio's buttons, these are best being turned off, as our navigation can be styled


**adminEmail: '',**

This is the admin email address, which can be triggered by the `formiowrapperSendAdminEmail` event.


**endpoint: 'submission',**

This is used to build the submission object, to submit to the formio backend.
```${this.config.form.baseLocation}${this.config.form.pdfEndpoint}/${this.config.form.endpoint};```


**pdfEndpoint: 'pdf',**

This is used to build the pdf formio form (since formio needs pdf in a separate form)


**selector: '#formio',**

This is the query selector.


**title: 'Title',**

This is the title of the form


**location: '',**

This is the location of the original form.


**baseLocation: 'asdf',**

This is the base location to build several locations like below
```${this.config.form.baseLocation}${this.config.form.pdfEndpoint}/${this.config.form.endpoint};```


**scroll: {}**

This is the object that deals with the properties of the scroll top and focus on page change


**target: 0,** 

This is the target in pixels from the top of the page, you can scroll to another element by changing it


**type: 'auto',**

This is the scroll types, auto and smooth are the available options at the time of writing this. (As per javascript)


**focusTarget: '#focusTarget',**

This is the ID of the target element for the focus. This helps with a11y.


**terms: {}**

This is a special terms and conditions view configuration.
Use this to setup a page/view a special conditional page that the user must agree to.


**title: 'terms',**

This is the title of the view, it is used to match to run the conditions for terms and conditions views.


**termsStorageType: sessionStorage,**

This is the type of storage used to see if the user has accepted terms and conditions optioins are sessionStorage and localStorage (as per javascript)


**termsStorageName: 'name',**

The name that the storage stores the condition under.


**skipIfTermsAlreadyAccepted: true,**

Do we skip the view if the user has already accepted the terms and conditions?


**dataName: 'termsteerms',**

This is the name for the terms checkbox on the formio side.


**buttons: {}**

This is for the configuration of the navigation buttons to replace formio controls as they don't style well.


**overwriteFirstButton: true,**

This overwrites the first button, instead of saying next it can say whatever value you set.


**overwriteValue: 'Go',**

This contains the overwrite value for the first button.


**showButtonsOnLast: true,**

This flag determines if you have the buttons cancel and back on the last view.


**css: {}**

This is the button css classes so that your buttons have the right classes.


**base: 'baseClass',**

This is the class string applied to all buttons.


**previous: 'previous-class',**

This is the class string applied to all previous buttons


**next: 'next-class',**

This is the class string applied to all next buttons


**cancel: 'cancel-class',**

This is the class string applied to all cancel buttons


**navigation: {}**

This is the configurations specifically for the alternate step menu, specifically for styling.


**baseClass: 'navigationclass',**

This is the class string applied to all steps returned.


**storage: {}**

This the storage setup for completed topics and extended for form data


**type: localStorage,**

Storage type is as above for other storage types.


**name: 'storagenameforcompletion',** 

This is the name for the storage on completion. As in if you have completed a multi form you can show it as done.


**extraTriggersOnActions: {}** 

This object has several extra triggers on actions, leave blank for none but this way you can trigger something after a formio action like go to next or check to see if you should trigger and admin email.
Options are previous, next, goto, and cancel.


**next: 'checkForAutoEmail',**

Eg. This triggers an event inside your application that you can fire functions from.


# Documentation for Button Group and Step Navigation

## Rationale
The button group was used as formio buttons are difficult to style properly.


The button group is framework agnostic and but uses lit-html to emulate some of the functionality of a true web component. However is just a light-dom javascript object.


This functionality was extended to work with the step navigation of the form steps.


## Usage
This imports lit element from a npm module like this.

```import { html, render } from 'lit-html';```


To use the button group include it in your index.js like so.

```import { ButtonGroup } from './thelocation/button-group';```


Then make sure you initialise the button group.

```const bg = new ButtonGroup(document.querySelector('.button-container'));```


Your html will need a target.

```<div class="button-container"></div>```


## Extension - Step navigation.

To use the step navigation part of the button group you only need to create the target like above and intialise like this:

```const sectionNavigation = new ButtonGroup(sectionNavTarget, 'navigation');```

Finding the target for the inject depends on the use case.

# Documentation for Help Guide
## Rationale
The Help Guide is a component which allows supplementary content to be deployed along side the main form content. It also supports interaction between links in the main content and sections within the guide to allow users to find information quicker. 

In supports multiple states based on user interaction and form state. It requires the Formio Wrapper to be deployed along side it to support these state updates.

## Technology
The Help Guide has no external dependencies and uses ES6 class  to encapsulate all state and functionality related to it.

<a name="HelpGuide"></a>

## Usage
**Kind**: global class  


<a name="HelpGuide+HelpGuide"></a>


#### new HelpGuide(target, config)

| Param | Type | Description |
| --- | --- | --- |
| target | <code>HTMLElement</code> | the DOM target for the help guide to render it's template result |
| config | <code>Object</code> | an object containing views and initialState setting of menu
| config.views | <code>Object</code> | an object which can describe an <code>initial</code> property and any number property which correlates to a step. The value of initial should be the initial view to render, and the value of any numbered step describes the view rendered for the subsequent steps.
| config.initialState | <code>string</code> | describes what view should be rendered first and if the menu should be open. Currently includes 'minimized', 'active' and other which will will default to onboarding. |
| config.displayOnSteps | <code>Array</code> | An array of what steps of the wizard the help guide should render|
| config.formWrapper | <code>FormioWrapper</code> | An instance of the form.io wrapper to listen to.
### Example
```javascript
const hg = new HelpGuide(document.getElementById('help-guide'), {
    views: {
      initial: initialView,
      3: mainView,
      4: nameView,
      5: businessView,
      6: dateMarks,
      7: storageView,
      8: ingredients,
      9: statements,
    },
    initialState: 'onboarding',
    displayOnSteps: [3, 4, 5, 6, 7, 8, 9],
    formWrapper: lb,
  });
  ```

### How to use Help Guide
This is an example of what is required to get started.

```javascript
import { HelpGuide } from './components/help-guide';
import mainView from './components/partials/help-guide-lb-main';
import initialView from './components/partials/help-guide-lb-initial';

const hg = new HelpGuide(document.getElementById('help-guide'), {
    views: {
      1: initialView,
      2: mainView,
      3: mainView,
    },
    initialState: 'active',
    displayOnSteps: [1, 2, 3],
    formWrapper: new FormioWrapper(config),
  });
```
The a view should consist of a function that returns html, such as the lit-html template below:
```javascript
export default () => html` <div class="main-content">some-html</div> `;

```


