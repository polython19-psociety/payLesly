import { html, LitElement } from 'lit-element';
import style from './compara-page-styles.js';

class ComparaPage extends LitElement {
  static get properties() {
    return {
      hello: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.hello = 'Hello';
  }

  render() {
    return html`
        <p>Some static DOM</p>
        <h2>${this.hello} compara-page</h2>
      `;
    }
}

window.customElements.define("compara-page", ComparaPage);
