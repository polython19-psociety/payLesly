import { html, LitElement } from 'lit-element';
import style from './product-list-styles.js';

class ProductList extends LitElement {
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
        <h2>${this.hello} product-list</h2>
      `;
    }
}

window.customElements.define("product-list", ProductList);
