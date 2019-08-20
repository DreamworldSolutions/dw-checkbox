/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css } from 'lit-element';
import '@material/mwc-checkbox';
import '@dw/dw-form/dw-form-field';
import { DwFormElement } from '@dw/dw-form/dw-form-element';

export class DwCheckbox extends DwFormElement(LitElement) {
  static get styles() {
    return [
      css`
        :host {
          --mdc-theme-primary: var(--primary-color);
          --mdc-theme-secondary: var(--accent-color);
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-on-secondary: var(--secondary-text-color);

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
       */
      value: {
        type: String
      },
      
      /**
       * A string to be shown for checkbox label
       */
      label: { type: String },

      /**
       * Set to true to show label before checkbox
       */
      alignEnd: { type: Boolean },
      
      /**
       * Set to true to disabled checkbox
       */
      disabled: { type: Boolean },

      /**
       * Set to true to set the checked status of checkbox
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
         @click="${(e) => { e.target.blur(); }}">
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
   * Trigger's `checked-changed` event
   * Sets value of `checked` property
   */
  _onChange(e) { 
    this.checked = e.target.checked;
    this.dispatchEvent(new Event('checked-changed', e));
  }
  
}

window.customElements.define('dw-checkbox', DwCheckbox);