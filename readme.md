# dw-checkbox

A material checkbox element made with lit-html. It's an wrapper of [mwc-checkbox](https://github.com/material-components/material-components-web-components/tree/master/packages/checkbox) element. Supports all the features of `mwc-checkbox`.


## Installation

``` html
npm install --save @dreamworld/dw-checkbox
```

## Usage

``` html
  import '@dreamworld/dw-checkbox';
```

## [Demo](https://dreamworldsolutions.github.io/dw-checkbox/demo/index.html)

## Properties

It supports below properties:

- disabled

- label

- alignEnd

- checked

- indeterminate

- value

## Events

Triggers `checked-changed` event on checked status change.

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

#### `value` property usage
`value` property used to get selected item's value. e.g. `apple`.
In below example, dwForm.serialize() method's result is `{fruit: ['apple', 'kiwi']}`

``` html
  <dw-form>
    <dw-checkbox name="fruit" value="apple" label="Apple" checked></dw-checkbox>
    <dw-checkbox name="fruit" value="grapes" label="Grapes"></dw-checkbox>
    <dw-checkbox name="fruit" value="kiwi" label="Kiwi" checked></dw-checkbox>
  </dw-form>
```