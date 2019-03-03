// jshint esversion:6

import { html, LitElement } from 'lit-element';
import style from './card-grid-styles.js';

class CardGrid extends LitElement {
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
  }

  render() {
    return html`
        <slot class="flex-container"></slot>
      `;
    }

    // firstUpdated() {
    //     console.log(this.shadowRoot.querySelector('slot'));
    //     this.shadowRoot.querySelector('slot').addEventListener('slotchange', (e) => {
    //         // this.parentNode.classList.add('grid-item');
    //         this.shadowRoot.querySelector('slot').assignedNodes().forEach(el=>{
    //             if (el.innerHTML){
    //                 el.classList.add('grid-item');
    //                 console.log('hola');
    //             }
    //         });
    //     });
    // }
}

window.customElements.define("card-grid", CardGrid);
