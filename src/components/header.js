import { LitElement, html } from 'lit';

export class Title extends LitElement {
    render() {
        return html`<h1>Log101</h1>`;
    }
}

customElements.define('main-title', Title);
