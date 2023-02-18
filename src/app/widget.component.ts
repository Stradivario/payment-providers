import './sprite.component';
import '@rxdi/credit-card-form';
import '@rxdi/ui-kit/button';

import { Component } from '@rhtml/component';
import { FlexLayout } from '@rhtml/modifiers';
import { Bootstrap } from '@rxdi/core';
import { CardModel } from '@rxdi/credit-card-form';
import { css, html, LitElement, property } from '@rxdi/lit-html';
import { ReactiveUiModule } from '@rxdi/ui-kit';

import { paymentProviders } from './providers';
/**
 * @customElement winbet-payment-widget
 */
@Component({
  Settings: {
    selector: 'winbet-payment-widget',
    modifiers: [...FlexLayout],
    styles: [
      css`
        .container {
          padding: 10px;
          background-color: #323334;
          grid-template-columns: repeat(5, 1fr);
        }

        .provider {
          margin-bottom: 5px;
          margin-right: 5px;
          border-radius: 3px;
          width: 150px;
          height: 150px;
          color: #e9ecef;
          fill: #e9ecef;
          border: 1px solid #575859;
          background-color: #48494a;
        }

        .provider:hover {
          background-color: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          user-select: none;
        }

        sprite-part-selector {
          background-color: #c1c2c3;
          width: 70px;
          height: 46px;
        }

        p {
          margin-bottom: 0;
          color: white;
        }

        button {
          margin: 10px;
          cursor: pointer;
          width: 150px;
          height: 50px;
        }
      `,
    ],
  },
  State(this: WidgetComponent) {
    return {
      providers: Object.entries(paymentProviders),
      selectedProvider: null,
    };
  },
  Render: () =>
    function (this, state, setState) {
      const { providers, selectedProvider } = state;
      return html`
        <div class="container" fxLayout="row wrap" fxLayoutAlign="center">
          ${selectedProvider
            ? html`
                <div style="width: 420px; background: white; padding: 30px;border-radius: 10px;">
                  <rx-button
                    palette="primary"
                    style="margin-bottom: 20px;"
                    fxLayoutAlign="center"
                    @click=${() => setState({ ...state, selectedProvider: null })}
                    >BACK</rx-button
                  >
                  <credit-card-form
                    @submit=${(e: CustomEvent<CardModel>) => {
                      console.log(e.detail);
                    }}
                  ></credit-card-form>
                </div>
              `
            : html`
                ${providers.map(
                  ([key, provider]) =>
                    html`
                      <div
                        @click=${() => setState({ providers, selectedProvider: provider })}
                        class="provider"
                        fxLayoutAlign="center"
                      >
                        <div fxLayout="column" fxLayoutAlign="center">
                          <sprite-part-selector .key=${key} fxLayoutAlign="center"></sprite-part-selector>
                          <p>${provider.title}</p>
                        </div>
                      </div>
                    `
                )}
              `}
        </div>
      `;
    },
})
export class WidgetComponent extends LitElement {
  @property({ type: String })
  apiKey: string;

  OnInit() {
    Bootstrap(ReactiveUiModule.forRoot()).subscribe();
  }
}
