<!--
*** https://www.markdownguide.org/basic-syntax/
-->
# Label Buster

The Label Buster is a product that allows you to better understand requirements for selling food in QLD.


## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
  * [Decisions](#decisions)
  * [Unknowns](#unknowns)
  * [Resources](#resources)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
    * [Setting up Squiz with Form.io](#settingupsquizwithformio)


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

### Unknowns

#### Form.io
* CI/CD? (Unlikely to be resolved)
#### Squiz
* Versioning Squiz code?
#### Misc
* How to contribute to SWE?

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

Any How-to's for contributing to specific parts of the project. Guides on how to develop components/features.

### Setting up Squiz with Form.io

To set up Squiz with Form.io you must embed the Form.io JavaScript as a raw html content block in Squiz.. (TBC)
