import { LitElement, html } from 'lit-element';

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
    this.message = 'holas'
  }

  render() {
    return html`
      <h1>${this.message}</h1>
    `;
  }
}

// Register the element with the browser
customElements.define('pay-lesly-app', PayLeslyApp);
