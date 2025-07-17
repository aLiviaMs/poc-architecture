import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './theme-switcher.scss?inline';

@customElement('theme-switcher')
export class ThemeSwitcher extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  @property({ type: String, attribute: 'default-theme' })
  defaultTheme = 'light';

  @property({ type: String })
  currentTheme: string = this.defaultTheme;

  connectedCallback() {
    super.connectedCallback();
    this._loadThemeFromStorage();
  }

  firstUpdated() {
    this._applyTheme(this.currentTheme);
  }


  _loadThemeFromStorage() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.currentTheme = storedTheme;
    } else {
      this.currentTheme = this.defaultTheme;
    }
  }


  _applyTheme(theme: string) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
  }

  _toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this._applyTheme(newTheme);
  }

  render() {
    return html`
      <button @click=${this._toggleTheme} aria-label="Toggle theme">
        Switch to ${this.currentTheme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'theme-switcher': ThemeSwitcher;
  }
}
