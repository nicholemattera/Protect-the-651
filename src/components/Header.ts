import './CallToAction'
import type { CallToActionElement } from './CallToAction'

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
    this.className =
      'flex items-center bg-transparent text-dark-foreground fixed top-0 inset-x-0 h-16 px-2 py-4 z-2 duration-300 ease-in-out'
    window.addEventListener('scroll', this._onWindowScroll)

    const logo = document.createElement('h1')
    logo.className = 'grow-0 shrink-1'
    this.appendChild(logo)

    const image = document.createElement('img')
    image.src = '/images/protect-the-651.png'
    image.width = 96
    image.height = 96
    image.alt = 'Protect the 651 - We keep us safe'
    logo.appendChild(image)

    const navigation = document.createElement('nav')
    navigation.className = 'flex items-center grow-1 shrink-0 justify-center font-normal'
    this.appendChild(navigation)

    const orderedList = document.createElement('ol')
    navigation.appendChild(orderedList)

    const getEngagedCTA = document.createElement('a', { is: 'ptsfo-call-to-action' }) as CallToActionElement
    getEngagedCTA.setAttribute('variant', 'light')
    getEngagedCTA.setAttribute('href', '/get-engaged.html')
    getEngagedCTA.innerText = 'Get Engaged'
    this.appendChild(getEngagedCTA)

    HeaderElement.links.forEach((link) => {
      const listItem = document.createElement('li')
      listItem.className = 'group/parent cursor-pointer relative inline-block px-1 py-2 text-lg/3 tracking-wide'

      if (link.children) {
        listItem.innerText = link.name

        const childOrderedList = document.createElement('ol')
        childOrderedList.className =
          'hidden group-hover/parent:block group-focus/parent:block bg-dark text-dark-foreground absolute top-[calc(100% - 1px)] min-w-25'
        link.children.forEach((childLink) => {
          const childListItem = document.createElement('li')
          childListItem.className = 'group/child py-1 px-2'

          const anchor = document.createElement('a')
          anchor.className = 'group-hover/child:underline'
          anchor.setAttribute('href', childLink.url)
          anchor.innerText = childLink.name
          childListItem.appendChild(anchor)

          childOrderedList.appendChild(childListItem)
        })

        listItem.appendChild(childOrderedList)
      } else {
        const anchor = document.createElement('a')
        anchor.className = 'group-hover/parent:underline'
        anchor.setAttribute('href', link.url)
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
    if (window.scrollY !== 0) {
      this.classList.add('bg-dark')
      this.classList.remove('bg-transparent')
    } else {
      this.classList.remove('bg-dark')
      this.classList.add('bg-transparent')
    }
  }
}

customElements.define('ptsfo-header', HeaderElement)
