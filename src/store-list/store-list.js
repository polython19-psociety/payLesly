import { html, LitElement } from 'lit-element';
import style from './store-list-styles.js';

class StoreList extends LitElement {
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
        <h2>${this.hello} store-list</h2>
      `;
    }
}

window.customElements.define("store-list", StoreList);
