# @dreamworld/dw-checkbox

A LitElement-based Material Design checkbox web component that wraps [`@material/mwc-checkbox`](https://github.com/material-components/material-components-web-components/tree/master/packages/checkbox) and integrates with `@dreamworld/dw-form` for form serialization.

---

## 1. User Guide

### Installation & Setup

```bash
yarn add @dreamworld/dw-checkbox
```

The package is an ES module (`"type": "module"`). Import it as a side-effect to register the `<dw-checkbox>` custom element:

```javascript
import '@dreamworld/dw-checkbox';
```

### Basic Usage

```html
<script type="module">
  import '@dreamworld/dw-checkbox';
</script>

<!-- Unchecked -->
<dw-checkbox label="Accept terms"></dw-checkbox>

<!-- Pre-checked -->
<dw-checkbox label="Remember me" checked></dw-checkbox>
```

Listen for changes:

```javascript
const cb = document.querySelector('dw-checkbox');

// Preferred
cb.addEventListener('change', () => {
  console.log(cb.checked);
});
```

---

### API Reference

#### Props / Attributes

| Name | Type | Default | Required | Description |
|---|---|---|---|---|
| `name` | `String` | — | No | Name of the element, used as the key during `dw-form` serialization. |
| `value` | `String` | `""` | No | Value submitted during form serialization. When multiple checkboxes share the same `name`, only the checked ones contribute their `value` to the serialized array. |
| `label` | `String` | `""` | No | Text label rendered alongside the checkbox. Clicking the label area toggles the checkbox. Omit for a label-less checkbox. |
| `alignEnd` | `Boolean` | `false` | No | When `true`, renders the label before (to the left of) the checkbox. |
| `disabled` | `Boolean` | `false` | No | Disables interaction with the checkbox. |
| `checked` | `Boolean` | `false` | No | Reflects and controls the checked state. Acts as both an input and output property — updated automatically on user interaction. |
| `indeterminate` | `Boolean` | `false` | No | Renders the checkbox in a partial-selection (mixed) state. |
| `reducedTouchTarget` | `Boolean` | `false` | No | Removes touch-screen padding and increases density. |

#### Events

| Event | Description |
|---|---|
| `change` | Dispatched when the user toggles the checkbox. Preferred over `checked-changed`. Read the new state via `element.checked`. |
| `checked-changed` | **Deprecated.** Dispatched alongside `change` on every user interaction. Prefer `change` for new code. |

#### Slots

| Name | Description |
|---|---|
| `label` | Named slot inside `<dw-form-field>`'s label area. Use for custom label markup (e.g. formatted text, icons). Takes precedence over the `label` property when both are present in the rendered output. |

**Example:**

```html
<dw-checkbox>
  <span slot="label">Accept <a href="/terms">Terms of Service</a></span>
</dw-checkbox>
```

#### Methods

| Method | Signature | Description |
|---|---|---|
| `toggle()` | `toggle(): void` | Programmatically focuses and clicks the internal checkbox, toggling its checked state. |
| `focus()` | `focus(): void` | Moves focus to the internal `<base-checkbox>` element. |

#### CSS Custom Properties

These properties are set on `:host` and cascade into the underlying `mwc-checkbox`:

| Property | Default Value | Description |
|---|---|---|
| `--mdc-checkbox-unchecked-color` | `var(--mdc-theme-text-secondary-on-background)` | Border color of the unchecked checkbox. |
| `--mdc-checkbox-disabled-color` | `var(--mdc-theme-text-disabled-on-background)` | Color applied when `disabled` is set. |

> All other CSS custom properties from `@material/mwc-checkbox` are also accepted and passed through.

---

### Advanced Usage

#### Custom Theming

```html
<style>
  .teal-checkbox {
    --mdc-theme-secondary: #00BCD4;
    --mdc-theme-text-primary: #00BCD4;
    font-size: 30px;
  }
</style>

<dw-checkbox class="teal-checkbox" checked label="Custom styled"></dw-checkbox>
```


#### Form Integration with `dw-form`

When multiple `<dw-checkbox>` elements share the same `name` inside a `<dw-form>`, `dw-form.serialize()` returns an array of the `value`s of all checked boxes.

```html
<dw-form>
  <dw-checkbox name="fruit" value="apple"  label="Apple"  checked></dw-checkbox>
  <dw-checkbox name="fruit" value="grapes" label="Grapes"></dw-checkbox>
  <dw-checkbox name="fruit" value="kiwi"   label="Kiwi"   checked></dw-checkbox>
</dw-form>
```

`dwForm.serialize()` → `{ fruit: ['apple', 'kiwi'] }`

---

## 2. Developer Guide / Architecture

### Architecture Overview

```
DwCheckbox (dw-checkbox.js)
  extends DwFormElement( LitElement )
    └── renders <dw-form-field> (from @dreamworld/dw-form)
          └── <base-checkbox> (base-checkbox.js)
                extends Checkbox from @material/mwc-checkbox
```

| Module | Responsibility |
|---|---|
| [dw-checkbox.js](dw-checkbox.js) | Public API — properties, events, methods, host styles, form-element mixin wiring. |
| [base-checkbox.js](base-checkbox.js) | Internal override of `mwc-checkbox`. Narrows the indeterminate (mixed) mark width to `8px` via a CSS override on `.mdc-checkbox__mixedmark`. |

### Design Patterns

- **Mixin composition** — `DwFormElement(LitElement)` applies the `@dreamworld/dw-form` form-element mixin, which handles `name`/`value` serialization without modifying the base LitElement class.
- **Delegation** — All checked-state logic is delegated to the inner `<base-checkbox>`. `DwCheckbox` only syncs the `checked` property and re-dispatches events from the shadow DOM.
- **Auto-blur on click** — A `setTimeout(..., 1)` inside the `@click` handler on `<base-checkbox>` removes focus immediately after interaction, preventing a persistent focus ring on pointer devices.

### Development

Run the demo locally (requires Node.js):

```bash
yarn start
# Launches: wds --node-resolve --app-index demo/index.html --open --watch
```
