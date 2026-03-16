export class CallToActionElement extends HTMLAnchorElement {
  _initialized: boolean

  constructor() {
    super()

    this._initialized = false
  }

  connectedCallback() {
    this.className = 'hover:opacity-80 inline-block px-3 py-2 rounded-sm font-bold text-base text-center uppercase'

    switch (this.getAttribute('variant')) {
      case 'lightest':
        this.className += ' bg-lightest text-lightest-foreground'
        break

      case 'light':
        this.className += ' bg-light text-light-foreground'
        break

      case 'dark':
        this.className += ' bg-dark text-dark-foreground'
        break
    }
  }
}

customElements.define('ptsfo-call-to-action', CallToActionElement, { extends: 'a' })
