class SectionElement extends HTMLElement {
  get template() {
    const variant = this.getAttribute('variant') || 'center'

    let theme = ''
    if (this.getAttribute('theme') == 'dark') {
      theme = 'bg-dark text-dark-foreground before:opacity-20'
    } else if (this.getAttribute('theme') == 'primary') {
      theme = 'bg-light text-light-foreground before:opacity-20'
    } else if (this.getAttribute('theme') == 'light') {
      theme = 'bg-lightest text-lightest-foreground before:opacity-10'
    }

    let className = ''
    let content = ''
    if (variant === 'hero') {
      className = 'items-center justify-start pt-40 pb-30 px-12'
      content = `
      <div class="w-1/2 z-1">
        ${this.innerHTML}
      </div>
      `
    } else if (variant === 'split') {
      className = 'px-12 py-20 *:grow-1 *:shrink-1 *:basis-1/2 *:z-1'
      content = this.innerHTML
    } else if (variant === 'center') {
      className = 'items-center justify-center px-12 py-20'
      content = `
      <div class="text-center w-1/2 z-1">
        ${this.innerHTML}
      </div>
      `
    }

    return `
    <div class="${this.getAttribute('background')} ${className} ${theme} relative flex z-1 before:absolute before:inset-0 before:z-0 before:bg-center before:bg-no-repeat before:bg-cover">
      ${content}
    </div>
    `
  }
  _initialized = false

  connectedCallback() {
    if (this._initialized) return
    this._initialized = true

    this.innerHTML = this.template
  }
}

customElements.define('ptsfo-section', SectionElement)
