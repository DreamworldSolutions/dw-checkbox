# dw-checkbox

A material checkbox element made with lit-html. It's an wrapper of [mwc-checkbox](https://github.com/material-components/material-components-web-components/tree/master/packages/checkbox) element. Supports all the features of `mwc-checkbox`.

## Installation

``` html
npm install --save @dw/dw-checkbox
```

## Usage

``` html
  import '@dw/dw-checkbox/dw-checkbox';
```

## [Demo](https://dreamworldsolutions.github.io/dw-checkbox/demo/index.html)

## Properties

It supports below properties:

- disabled

- label

- alignEnd

- checked

- indeterminate

## Events

Triggers `checked-change` event on checked status change.

## Features

- It provides checkbox with it's label
- On label click it changes checkbox's selection

### Examples

#### Set `alignEnd` property to show label after checkbox
``` html
  <dw-checkbox label="This is checkbox" alignEnd></dw-checkbox>
```

#### Use `disabled` property to disable checkbox
``` html
  <dw-checkbox label="This is checkbox" disabled checked></dw-checkbox>
```