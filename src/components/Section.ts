import clsx from 'clsx'

class SectionElement extends HTMLElement {
  get template() {
    const variant = this.getAttribute('variant') || 'center'
    const background = this.getAttribute('background')
    const theme = this.getAttribute('theme')

    return `
    <div class="${clsx(
      `
      relative z-1 flex
      before:absolute before:inset-0 before:z-0 before:bg-cover before:bg-center
      before:bg-no-repeat
    `,
      background,
      {
        'bg-dark text-dark-foreground before:opacity-20': theme === 'dark',
        'bg-light text-light-foreground before:opacity-20': theme === 'primary',
        'bg-lightest text-lightest-foreground before:opacity-10': theme === 'light',
        'items-center justify-start px-12 pt-40 pb-30 *:z-1 *:w-1/2': variant === 'hero',
        'px-12 py-20 *:z-1 *:shrink *:grow *:basis-1/2': variant === 'split',
        'items-center justify-center px-12 py-20 *:z-1 *:w-1/2 *:text-center': variant === 'center',
      },
    )}">
      ${variant === 'hero' || variant === 'center' ? `<div>${this.innerHTML}</div>` : ''}
      ${variant === 'split' ? this.innerHTML : ''}
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
