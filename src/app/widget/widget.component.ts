import { ApiService } from '@core/api';
import { Component, DefineDependencies } from '@rhtml/component';
import { FlexLayout } from '@rhtml/modifiers';
import { Container } from '@rxdi/core';
import { CardModel } from '@rxdi/credit-card-form';
import { html, LitElement, property } from '@rxdi/lit-html';
import { map } from 'rxjs/operators';

import { WidgetStyle } from './widget.component.css';

/**
 * @customElement winbet-payment-widget
 */
@Component({
  Settings: {
    selector: 'winbet-payment-widget',
    modifiers: [...FlexLayout],
    styles: [WidgetStyle],
  },
  Providers: DefineDependencies(ApiService)(Container),
  State(this: WidgetComponent, [api]) {
    return api.getProviders().pipe(map((providers) => ({ providers, selectedProvider: null })));
  },
  Render: () =>
    function (this, state, setState) {
      return html`
        <div class="container" fxLayout="row wrap" fxLayoutAlign="center">
          ${state.selectedProvider
            ? html`
                <div class="selected-provider">
                  <rx-button
                    palette="primary"
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
                ${state.providers.map(
                  ([key, provider]) =>
                    html`
                      <div
                        @click=${() => setState({ ...state, selectedProvider: provider })}
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
}
