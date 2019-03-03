// jshint esversion:6

import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';

import { html, LitElement } from 'lit-element';
import style from './card-btn-styles.js';

class CardBtn extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String },
      link: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.title = "Title";
    this.description = "Description Bacon ipsum dolor amet meatball alcatra tenderloin spare ribs. Salami ribeye sausage chuck capicola, hamburger landjaeger picanha andouille shoulder brisket. Short ribs pork loin short loin kevin pig tri-tip beef swine landjaeger. Ham hock drumstick shank burgdoggen t-bone. Frankfurter ham sausage, tenderloin alcatra leberkas beef ribs bresaola buffalo jerky pork belly.";
    this.image = "http://placehold.it/350x150/FFC107/000000";
  }

  render() {
    return html `
        <paper-card heading=${this.title} image=${this.image} alt="Emmental">
            <div class="card-content">
                ${this.description}
            </div>
            <div class="card-actions">
                <a href=${this.link}><paper-button>Ver más!</paper-button></a>
            </div>
        </paper-card>
        `;
        }
}

window.customElements.define("card-btn", CardBtn);
