/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { LitElement } from '@dreamworld/pwa-helpers/lit-element.js';
import '@material/mwc-checkbox';
import '@dreamworld/dw-form/dw-form-field';
import { DwFormElement } from '@dreamworld/dw-form/dw-form-element';

export class DwCheckbox extends DwFormElement(LitElement) {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          outline:none;
        }

        :host[hidden] {
          display: none;
        }
      `
    ];
  }

  static get properties() {
    return {
      
      /**
       * A name of this element.
       */
      name: {
        type: String
      },
      
      /**
       * A value of this element which is uses at the serialization time when used with `dw-form`.
       * 
       * It's an input property in case of multiple choices are to be presented. Put multiple checkboxes with same 
       * 'name' and different values. e.g. name=fruits, values=['apple', 'banana', 'strawberry', 'orange']
       * When form is serialized, it will have fruits key set to the Array of string, representing selected/checked 
       * fruits.
       */
      value: {
        type: String
      },
      
      /**
       * Input property. Text to be shown for checkbox label. 
       * 
       * It's optional, you may render checkbox without lable as well. 
       * Checkbox can be checked/unchecked by clicking in the label area as well.
       */
      label: { type: String },

      /**
       * Set to `true` to show label before checkbox
       */
      alignEnd: { type: Boolean },
      
      /**
       * Set to `true` to disable checkbox.
       */
      disabled: { type: Boolean },

      /**
       * Input as well as output property.
       */
      checked: { type: Boolean },

      /**
       * Set to true to set the partial selection of checkbox
       */
      indeterminate: { type: Boolean}
    };
  }

  render() {
    return html`
      <dw-form-field .label="${this.label}" ?alignEnd="${this.alignEnd}" ?disabled="${this.disabled}">

        <mwc-checkbox
         ?disabled="${this.disabled}"
         ?checked="${this.checked}"
         ?indeterminate="${this.indeterminate}"
         @change="${this._onChange}"
         @click="${(e) => { setTimeout(() => { e.target.blur(); }, 1)}}">
        </mwc-checkbox>

      </dw-form-field>
    `;
  }

  constructor() { 
    super();
    this.disabled = false;
    this.alignEnd = false;
    this.checked = false;
    this.indeterminate = false;
    this.label = "";
    this.value = "";
  }
  
  /**
   * Toggles current state of the checkbox
   */
  toggle(){
    this.shadowRoot.querySelector('dw-form-field').input.focus();
    this.shadowRoot.querySelector('dw-form-field').input.click();
  }

  /**
   * Trigger's `checked-changed` event
   * Sets value of `checked` property
   */
  _onChange(e) { 
    this.checked = e.target.checked;
    this.dispatchEvent(new Event('checked-changed', e));
  }
  
}

window.customElements.define('dw-checkbox', DwCheckbox);