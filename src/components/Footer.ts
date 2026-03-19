import clsx from 'clsx'

class FooterElement extends HTMLElement {
  get template() {
    return `
    <footer class="${clsx(`
      flex items-center bg-dark px-4 py-6 text-dark-foreground
    `)}">
     <h1 class="${clsx('shrink-0 grow text-3xl uppercase')}">Protect the 651</h1>
     <img src="/images/protect-the-651.png" width="96" height="96" alt="Protect the 651 - We keep us safe" class="${clsx(`
       shrink grow-0
     `)}" />
    </footer>
    `
  }

  connectedCallback() {
    this.innerHTML = this.template
  }
}

customElements.define('ptsfo-footer', FooterElement)
