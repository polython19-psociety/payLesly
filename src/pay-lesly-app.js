// jshint esversion:6
import { LitElement, html } from 'lit-element';
import './nav-bar/nav-bar.js';



export class PayLeslyApp extends LitElement {
  /**
   * Define properties. Properties defined here will be automatically
   * observed.
   */
  static get properties() {
    return {
      message: { type: String }
    };
  }

  constructor() {
    super();
    this.message = 'holas';
  }

  render() {
    return html`
      <nav-bar mainTitle="Paylesly" condensedTitle="Tu mejor opcion" menuItems='[{
            "icon": "search",
            "name": "Compara"
        },
        {
            "icon": "create",
            "name": "Registra"
        },
        {
            "icon": "shopping-cart",
            "name": "Compra"
        },
        {
            "icon": "mail",
            "name": "Contáctanos"
        },
        {
            "icon": "info",
            "name": "Conócenos"
        }]
        '>
      </nav-bar>
      
    `;
  }
}

// Register the element with the browser
customElements.define('pay-lesly-app', PayLeslyApp);
