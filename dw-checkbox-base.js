import { Checkbox } from '@material/mwc-checkbox';

export class DwCheckboxBase extends Checkbox {
  /**
   * Web view crashing on iOS 14 b5 and Safari Technology Preview when interacting with mwc elements
   * for Details see this[https://github.com/material-components/material-components-web-components/issues/1720]
   * @override
   */
  createRenderRoot() {
    // don't set delegatesFocus: true due to https://bugs.webkit.org/show_bug.cgi?id=215732
    return this.attachShadow({mode: 'open'});
  }
}

customElements.define('dw-checkbox-base', DwCheckboxBase);


