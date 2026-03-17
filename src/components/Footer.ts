class FooterElement extends HTMLElement {
  get template() {
    return `
    <footer class="bg-dark text-dark-foreground flex items-center px-4 py-6">
     <h1 class="text-3xl grow-1 shrink-0 uppercase">Protect the 651</h1>
     <img src="/images/protect-the-651.png" width="96" height="96" alt="Protect the 651 - We keep us safe" class="grow-0 shrink-1" />
    </footer>
    `
  }

  connectedCallback() {
    this.innerHTML = this.template
  }
}

customElements.define('ptsfo-footer', FooterElement)
