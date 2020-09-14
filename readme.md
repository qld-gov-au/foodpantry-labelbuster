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


## About The Project

This project is a single page application embedded within a Squiz Matrix page. It uses Form.io to manage both the rendering and back end of the application, and SWE components to achieve the design.

### Built With
* [Form.io](https://www.form.io/)
* [Squiz Matrix](https://www.squiz.net/platform/products/cms)
* [SWE](https://github.com/qld-gov-au/swe)

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
git clone git@github.com:DanielTurner/label-buster.git
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
