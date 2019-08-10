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
import '@dw/dw-form-field/dw-form-field';


export class DwCheckbox extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --mdc-theme-primary: var(--primary-color);
          --mdc-theme-secondary: var(--accent-color);
          --mdc-theme-on-primary: var(--primary-text-color);
          --mdc-theme-on-secondary: var(--secondary-text-color);

          display: inline-block;
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
         @change="${this._onChange}">
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
  }

  _onChange(e) { 
    this.checked = e.target.checked;
    this.value = e.target.checked;
    this.dispatchEvent(new Event('checked-change', e));
  }
  
}

window.customElements.define('dw-checkbox', DwCheckbox);