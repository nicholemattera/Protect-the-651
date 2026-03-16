class HeaderElement extends HTMLElement {
  _initialized = false

  static links = [
    {
      name: 'Resources',
      children: [
        {
          name: 'Whistle System',
          url: '/whistle-system.html',
        },
        {
          name: 'Immigrants Rights',
          url: '/immigrants-rights.html',
        },
        {
          name: 'Signal Support',
          url: '/signal-support.html',
        },
        {
          name: 'Group Toolkits',
          url: '/group-toolkits.html',
        },
      ],
    },
    {
      name: 'About',
      url: '/about.html',
    },
  ]

  constructor() {
    super()
    this._onWindowScroll = this._onWindowScroll.bind(this)
  }

  connectedCallback() {
    if (this._initialized) {
      return
    }
    this._initialized = true

    this.role = 'banner'
    this.className = 'header'
    this.id = 'header'
    window.addEventListener('scroll', this._onWindowScroll)

    const logo = document.createElement('h1')
    logo.className = 'logo'
    this.appendChild(logo)

    const image = document.createElement('img')
    image.src = '/images/protect-the-651.png'
    image.width = 96
    image.height = 96
    image.alt = 'Protect the 651 - We keep us safe'
    logo.appendChild(image)

    const navigation = document.createElement('nav')
    navigation.className = 'navigation'
    this.appendChild(navigation)

    const orderedList = document.createElement('ol')
    navigation.appendChild(orderedList)

    const getEngagedCTA = document.createElement('a')
    getEngagedCTA.className = 'call-to-action'
    getEngagedCTA.href = '/get-engaged.html'
    getEngagedCTA.innerText = 'Get Engaged'
    this.appendChild(getEngagedCTA)

    HeaderElement.links.forEach((link) => {
      const listItem = document.createElement('li')

      if (link.children) {
        listItem.innerText = link.name

        const childOrderedList = document.createElement('ol')
        link.children.forEach((childLink) => {
          const childListItem = document.createElement('li')

          const anchor = document.createElement('a')
          anchor.href = childLink.url
          anchor.innerText = childLink.name
          childListItem.appendChild(anchor)

          childOrderedList.appendChild(childListItem)
        })

        listItem.appendChild(childOrderedList)
      } else {
        const anchor = document.createElement('a')
        anchor.href = link.url
        anchor.innerText = link.name
        listItem.appendChild(anchor)
      }

      orderedList.appendChild(listItem)
    })
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this._onWindowScroll)
  }

  _onWindowScroll() {
    console.log('scroll')
    if (window.scrollY !== 0) {
      this.classList.add('opaque')
    } else {
      this.classList.remove('opaque')
    }
  }
}

customElements.define('ptsfo-header', HeaderElement)
