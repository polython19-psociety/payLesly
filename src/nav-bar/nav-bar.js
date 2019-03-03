// jshint esversion:6

import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-icon-item.js';


import {
  html,
  LitElement
} from 'lit-element';
import style from './nav-bar-styles.js';

class NavBar extends LitElement {
  static get properties() {
    return {
      mainTitle: {
        type: String
      },
      condensedTitle: {
        type: String
      },
      menuItems: {
        type: Array
      }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.menuItems = [{
        icon: "inbox",
        name: "Primer item"
      },
      {
        icon: "favorite",
        name: "Segundo item"
      }
    ];
  }

  render() {
    return html `
    <app-drawer-layout>

        <app-drawer swipe-open slot="drawer">
            <app-header-layout has-scrolling-region>
                <app-toolbar class="navToolbar">Menu</app-toolbar>

                ${this.menuItems.map(i => {
                    return html`
                        <paper-icon-item class="iconItem">
                            <iron-icon class="grayIcon" icon=${i.icon} slot="item-icon"></iron-icon>
                            <span>${i.name}</span>
                        </paper-icon-item>                    
                    `;
                })}
            </app-header-layout>
        </app-drawer>

        <app-header-layout>
          <app-header class="mainHeader" condenses fixed effects="resize-title blend-background waterfall" slot="header">
            <app-toolbar>
              <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
              <h4 condensed-title>${this.condensedTitle}}</i></h4>
              <paper-icon-button icon="search"></paper-icon-button>
              <paper-icon-button icon="more-vert"></paper-icon-button>
            </app-toolbar>
            <app-toolbar class="tall">
              <h1 main-title>${this.mainTitle}</h1>
            </app-toolbar>
          </app-header>
        <slot></slot>

    <app-drawer-layout>
      `;
  }
}

window.customElements.define("nav-bar", NavBar);
