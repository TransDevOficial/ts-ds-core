import { html, LitElement, unsafeCSS } from "lit";
import styles from './styles.scss';
import '../ts-icon/index.js';
import { classMap } from "lit/directives/class-map.js";

export class TsButtonIcon extends LitElement {
    static get styles() {
        return unsafeCSS(styles)
    }

    static get properties() {
        return {
            iconSrc: { type: String, attribute: 'icon-src' },
            label: { type: String },
            size: { type: String },
            variant: { type: String },
            labeled: { type: Boolean },
            disabled: { type: Boolean },
            inverse: { type: Boolean },
        }
    }

    constructor() {
        super();
        this.iconSrc = '';
        this.label = 'Label';
        this.size = 'medium';
        this.variant = 'primary';
        this.labeled = false;
        this.disabled = false;
        this.inverse = false;
    }

    _tsHandleButtonIconClick() {
        this.dispatchEvent(
            new CustomEvent("ts-button-icon-click", {
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
        <div class='${classMap({
            'ts-button-icon': true,
            [`ts-button-icon--${this.variant}`]: this.variant,
            [`ts-button-icon--${this.size}`]: this.size,
            [`ts-button-icon--labeled`]: this.labeled,
            [`ts-button-icon--disabled`]: this.disabled,
            [`ts-button-icon--inverse`]: this.inverse,
        })}'>
            
        <button type='button' class='${classMap({
            'ts-button-icon__button': true,
            [`ts-button-icon__button--${this.variant}`]: this.variant,
            [`ts-button-icon__button--inverse`]: this.inverse,
        })}' @click=${this._tsHandleButtonIconClick}>
            <ts-icon src=${this.iconSrc} size=${this.size} ?inverse=${this.inverse}></ts-icon>
        </button>
                ${this.labeled ? html`
                <span>${this.label}</span>
                ` : ''}
        </div>
        `;
    }
}

if (!customElements.get('ts-button-icon')) {
    customElements.define('ts-button-icon', TsButtonIcon);
}