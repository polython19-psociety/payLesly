// jshint esversion:6

import './nav-bar/nav-bar.js';
import './card-btn/card-btn.js';
import './card-grid/card-grid.js';

import { LitElement, html, css } from 'lit-element';


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

  static get styles() {
      return css`
        card-btn {
            max-width: 25%;
            margin: 30px 15px;
        }  
      `;
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
        
            <card-grid>
                <card-btn title="Compara" image='../img/search.jpg' description="Consulta entre las principales cadenas de supermercados los precios de tus productos favoritos y consigue el mejor presupuesto para tu despensa!" link="components/compara-page">
                </card-btn>
                
                <card-btn title="Registra" image='../img/registra.jpg' description="Como comerciante hazte visible en el mercado minorista ofreciendo los mejores precios a más consumidores" link="components/registra">
                </card-btn>
                
                <card-btn title="Consigue" image='../img/compra.jpg' description="¿Ya tienes tu lista de despensa lista? ¡Consíguela ya mismo y recógela en tienda o recíbela en la puerta de tu hogar!" link="components/compra">
                </card-btn>              
            </card-grid>
      
    </nav-bar>
      
    `;
  }
}

// Register the element with the browser
customElements.define('pay-lesly-app', PayLeslyApp);
