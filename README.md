# primo-explore-custom-no-search-results

[![CircleCI](https://circleci.com/gh/NYULibraries/primo-explore-custom-no-search-results.svg?style=svg)](https://circleci.com/gh/NYULibraries/primo-explore-custom-no-search-results)
[![npm version](https://img.shields.io/npm/v/primo-explore-custom-no-search-results.svg)](https://www.npmjs.com/package/primo-explore-custom-no-search-results)
[![Coverage Status](https://coveralls.io/repos/github/NYULibraries/primo-explore-custom-no-search-results/badge.svg?branch=master)](https://coveralls.io/github/NYULibraries/primo-explore-custom-no-search-results?branch=master)

## Description

Create a custom no results templates.

## Installation

1. Assuming you've installed and are using [primo-explore-devenv](https://github.com/ExLibrisGroup/primo-explore-devenv).

2. Navigate to your template/central package root directory. For example:
    ```
    cd primo-explore/custom/MY_VIEW_ID
    ```
3. If you do not already have a package.json file in this directory, create one:
    ```
    npm init -y
    ```
4. Install this package:
    ```
    npm install primo-explore-custom-no-search-results --save-dev
    ```

## Usage

Once installed, inject `customNoSearchResults` as a dependency:

```js
let app = angular.module('viewCustom', ['customNoSearchResults'])
```

**Note:** If you're using the --browserify build option, you will need to first import the module with:

```js
import 'primo-explore-custom-no-search-results';
```

You'll need to set a `customNoSearchResultsTemplateUrl` value in your `main.js` to point to your custom no search results template:

```js
app.value('customNoSearchResultsTemplateUrl', 'custom/MY_VIEW_ID/html/customNoSearchResults.html');
```

## Example

```js
// main.js

import 'primo-explore-custom-no-search-results';

let app = angular.module('viewCustom', ['customNoSearchResults']);

app.value('customNoSearchResultsTemplateUrl', 'custom/MY_VIEW_ID/html/customNoSearchResults.html');

```

```html
<!-- html/customNoSearchResults.html -->

<md-card class="default-card zero-margin _md md-primoExplore-theme">
  <md-card-title>
    <md-card-title-text>
      <span translate="" class="md-headline">No records found</span>
    </md-card-title-text>
  </md-card-title>
  <md-card-content>
    <p>
      <span>Your search returned 0 results. Try one of the options below:</span>
    </p>
    <ul>
      <li><a ng-href="https://ezborrow.url?query={{ $ctrl.parentCtrl.term }}">Request a book from E-ZBorrow (NYU only)</a></li>
      <li><a ng-href="http://www.worldcat.org/search?qt=worldcat_org_all&q={{ $ctrl.parentCtrl.term }}">Search WorldCat for items in nearby libraries</a></li>
      <li><a href="http://library.institution.edu">Ask a Librarian</a></li>
    </ul>
  </md-card-content>
</md-card>
```
