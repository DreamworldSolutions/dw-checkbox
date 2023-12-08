import { css } from '@dreamworld/pwa-helpers/lit.js';
import { Checkbox as mwcCheckbox } from "@material/mwc-checkbox";

export class BaseCheckbox extends mwcCheckbox {
  static get styles() {
    return [
      super.styles,
      css`
        .mdc-checkbox__mixedmark {
          width: 8px;
        }
      `,
    ];
  }
}

customElements.define("base-checkbox", BaseCheckbox);
