import clsx from 'clsx'

export class CallToActionElement extends HTMLAnchorElement {
  connectedCallback() {
    const variant = this.getAttribute('variant')

    this.className = clsx(
      `
        inline-block cursor-pointer rounded-sm px-3 py-2 text-center text-base
        font-bold uppercase
        hover:opacity-80
      `,
      {
        'bg-lightest text-lightest-foreground': variant === 'lightest',
        'bg-light text-light-foreground': variant === 'light',
        'bg-dark text-dark-foreground': variant === 'dark,',
      },
    )
  }
}

customElements.define('ptsfo-call-to-action', CallToActionElement, { extends: 'a' })
