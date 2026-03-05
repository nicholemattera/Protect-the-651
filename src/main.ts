const headerElement = document.getElementById('header')

window.addEventListener('scroll', () => {
  if (window.scrollY !== 0) {
    headerElement?.classList.add('opaque')
  } else {
    headerElement?.classList.remove('opaque')
  }
})
