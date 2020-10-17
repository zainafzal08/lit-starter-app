import {css, customElement, html, LitElement, property} from 'lit-element';

@customElement('app-view')
export class AppView extends LitElement {
  @property() private message: string = 'Hello World!';

  static get styles() {
    return css`
      :host h1 {
        color: #444;
      }
    `;
  }

  render() {
    return html`
      <h1>${this.message}</h1>
    `;
  }
}
