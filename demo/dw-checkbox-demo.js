/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css} from 'lit-element';
import '../dw-checkbox.js';

class DwCheckboxDemo extends LitElement {
  static get styles() {
    return [
      css`
        dw-checkbox{
          margin-bottom: 24px;
        }

        h4{
          margin-top:0;
          margin-bottom: 16px;
        }

        .table-wrapper{
          background: #fff;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,.12);
          display: flex;
          flex-direction: column;
          max-width: 600px;
        }

        .table-wrapper dw-checkbox{
          margin: 0;
        }

        .table-wrapper div{
          border-bottom: 1px solid rgba(0,0,0,.12);
          padding: 4px;
          display:flex;
          flex-direction: row;
          flex: 1;
          align-items: center;
        }

        .table-wrapper div span{
          flex:1;
        }

        .header{
          font-weight: 600;
        }

        .custom-checkbox{
          --accent-color: #00BCD4;
          --primary-text-color: #00BCD4;
          font-size: 30px;
        }
      `
    ];
  }

  static get properties() {
    return {
      _item1Checked: { type: Boolean },
      
      _item2Checked: { type : Boolean}
    }
  }

  render() {
    
    return html`
      <h4>Basic</h4>
      <dw-checkbox label="This is a checkbox"></dw-checkbox>

      <h4>Checked</h4>
      <dw-checkbox label="This is a checkbox" checked></dw-checkbox>

      <h4>End aligned</h4>
      <dw-checkbox label="This is a checkbox" alignEnd></dw-checkbox>

      <h4>Disabled</h4>
      <dw-checkbox label="This is a checkbox" disabled></dw-checkbox>

      <h4>Custom checkbox</h4>
      <dw-checkbox class="custom-checkbox" checked label="This is a custom checkbox"></dw-checkbox>

      <h4>Indeterminate</h4>
      <section class="table-wrapper">
        <div class="header">
          <dw-checkbox @checked-changed="${this._manageRowItemSelection}" ?indeterminate=${this._isIndeterminate(this._item1Checked, this._item2Checked)} ?checked=${this._isChecked(this._item1Checked, this._item2Checked)}></dw-checkbox>
          <span>Dessert</span>
          <span>Fat</span>
          <span>Protein</span>
        </div>

        <div>
          <dw-checkbox ?checked="${this._item1Checked}" name="item1" @checked-changed="${this._onItem1CheckedChange}"></dw-checkbox>
          <span>Frozen yogurt</span>
          <span>9</span>
          <span>4</span>
        </div>

        <div>
          <dw-checkbox ?checked="${this._item2Checked}" name="item2" @checked-changed="${this._onItem2CheckedChange}"></dw-checkbox>
          <span>Ice cream sandwich</span>
          <span>3</span>
          <span>4</span>
        </div>
      </section>
    `;
  }

  _onItem1CheckedChange(e) { 
    this._item1Checked = e.target.checked;
  }

  _onItem2CheckedChange(e) { 
    this._item2Checked = e.target.checked;
  }

  _isIndeterminate(item1Checked, item2Checked) { 
    return item1Checked && item2Checked ? false : item1Checked || item2Checked;
  }

  _isChecked(item1Checked, item2Checked) { 
    return item1Checked && item2Checked;
  }

  _manageRowItemSelection(e) { 
    let isChecked = e.target.checked;
    this._item1Checked = isChecked;
    this._item2Checked = isChecked;

  }

}

window.customElements.define('dw-checkbox-demo', DwCheckboxDemo);