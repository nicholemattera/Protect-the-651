class FooterElement extends HTMLElement {
  _initialized = false

  connectedCallback() {
    if (this._initialized) {
      return
    }
    this._initialized = true

    this.role = 'contentinfo'
    this.className = 'footer'

    const title = document.createElement('h1')
    title.className = 'title'
    title.innerText = 'Protect the 651'
    this.appendChild(title)

    const logo = document.createElement('img')
    logo.src = '/images/protect-the-651.png'
    logo.width = 96
    logo.height = 96
    logo.alt = 'Protect the 651 - We keep us safe'
    logo.className = 'logo'
    this.appendChild(logo)
  }
}

customElements.define('ptsfo-footer', FooterElement)
