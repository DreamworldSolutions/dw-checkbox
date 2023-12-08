import { css } from '@dreamworld/pwa-helpers/lit.js';
import { Checkbox } from "@material/mwc-checkbox";

export class CheckboxButton extends Checkbox {
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

customElements.define("checkbox-button", CheckboxButton);
