import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from "lit-html/directives/class-map.js";
import styles from "./style.scss";

export class TsButton extends LitElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  static get properties() {
    return {
      size: { type: String },
      variant: { type: String },
      format: { type: String },
      label: { type: String },
      disabled: { type: Boolean },
      loading: { type: Boolean }, // TODO: implement loading state
      inverse: { type: Boolean }, // TODO: implement inverse state
    };
  }

  constructor() {
    super();
    this.size = "medium";
    this.variant = "primary";
    this.format = "flat";
    this.label = "Button";
    this.disabled = false;
    this.loading = false;
    this.inverse = false;
  }

  _tsHandleButtonClick() {
    this.dispatchEvent(
      new CustomEvent("ts-button-click", {
        composed: true,
        bubbles: true,
        detail: {
          click: true,
          message: "clicked",
        },
      })
    );
  }

  render() {
    return html`
      <div
        class="${classMap({
      "ts-button": true,
      [`ts-button--${this.size}`]: this.size,
      [`ts-button--${this.variant}`]: this.variant,
      [`ts-button--${this.format}`]: this.format,
      "ts-button--loading": this.loading,
      "ts-button--inverse": this.inverse,
      "ts-button--disabled": this.disabled,
    })}"
      >
        <button
          class="ts-button ${classMap({
      "ts-button__button": true,
      [`ts-button__button--${this.variant}`]: this.variant,
      "ts-button__button--inverse": this.inverse,
    })}"
          @click=${this._tsHandleButtonClick}
          type="button"
          aria-label=${this.loading ? "Loading" : undefined}
          aria-disabled=${this.disabled}
          ?disabled=${this.disabled}
        >
          <span>
          ${this.loading ? `Loading` : this.label}
          </span>
        </button>
      </div>
    `;
  }
}

customElements.define("ts-button", TsButton);
