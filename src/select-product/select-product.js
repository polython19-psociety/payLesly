import { html, LitElement } from 'lit-element';
import style from './select-product-styles.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class SelectProduct extends LitElement {
  static get properties() {
    return {
      items: { type: Array }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.items = [
      {product: 'leshe shabo', price: 9999},
      {product: 'leshe', price: 9999},
      {product: 'leshe de la vaca', price: 9999},
      {product: 'leshe ALV', price: 9999}
    ];
  }

  render() {
    console.log(this.items);
    return html`
    <div class="card-container">
        ${this.items.map((item, index) =>
          html`
          <div class="card-item">
          <iron-icon icon="icons:delete"></iron-icon>
            name: ${item.product}
            price: ${item.price}
          </div>
          `)}
    </div>
      `;
    }
}

window.customElements.define("select-product", SelectProduct);
