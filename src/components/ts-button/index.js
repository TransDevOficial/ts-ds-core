import { html, LitElement, unsafeCSS } from "lit";
import { classMap } from 'lit-html/directives/class-map.js';
import style from './style.scss';

export class TsButton extends LitElement {

    static get styles() {
        return unsafeCSS(style)
    }

    static get properties() {
        return {
            size: { type: String },
            variant: { type: String },
            format: { type: String },
            label: { type: String },
            disabled: { type: Boolean },
            loading: { type: Boolean }, // TODO: implement loading state
            inverse: { type: Boolean } // TODO: implement inverse state
        }
    }

    constructor() {
        super();
        this.size = 'medium';
        this.variant = 'primary';
        this.format = 'flat';
        this.label = 'Button';
        this.disabled = false;
        this.loading = false;
        this.inverse = false;
    }

    _tsHandleClick() {
        this.dispatchEvent(new CustomEvent('ts-button-click', {
            composed: true,
            bubbles: true,
            detail: {
                click: true,
                message: 'clicked'
            }
        }));
    }

    render() {
        return html`
        <div class="${classMap({
            'ts-button': true,
            [`ts-button--${this.size}`]: this.size,
            [`ts-button--${this.variant}`]: this.variant,
            [`ts-button--${this.format}`]: this.format,
            'ts-button--loading': this.loading,
            'ts-button--inverse': this.inverse,
            'ts-button--disabled': this.disabled
        })}">
        
        <button 
            class='ts-button ts-button__button ${this.variant ? `ts-button__button--${this.variant}` : ''}'
            @click=${this._tsHandleClick} 
            type='button' 
            aria-label=${this.loading ? 'Loading' : undefined} 
            aria-disabled=${this.disabled} 
            ?disabled=${this.disabled}>
                ${this.loading ? `Loading` : this.label}
        </button>
        </div>
        `
    }
}

customElements.define('ts-button', TsButton);