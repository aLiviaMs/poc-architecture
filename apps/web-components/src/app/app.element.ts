import { LitElement, html, unsafeCSS } from 'lit';
import styles from './app.element.scss?inline';

export class AppElement extends LitElement {
  static styles = unsafeCSS(styles);

  render() {
    const title = 'web-components';
    return html`
      <div class="wrapper">
        <div class="container">
          <div id="welcome">
            <h1><span>Hello there,</span> Welcome ${title} 👋</h1>
          </div>
      </div>
    `;
  }
}
customElements.define('poc-architecture-root', AppElement);
