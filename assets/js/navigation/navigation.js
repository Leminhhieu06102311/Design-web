const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
export var clickItem = () => {
    // add active and remove active
    var addRemoveActive = (event) => {
        // class active query in html
        let itemActive = $('.navigation__list-item.active')
        event.srcElement.classList.add('active')
        itemActive.classList.remove('active')
    }
    // class query in html
    const nav = $$('.navigation__list-item')
    // loop item and addremove active
    for(var i = 0; i < nav.length; i++) {
        nav[i].addEventListener('click', (e) => {
            addRemoveActive(e)
        })
    }
}
export var transformNav = () => {
    const iconNav = $('.header__logo-tablet')
    const nav = $('.navigation')
    const root = $('.root')
    if (screen.width < 667) {
        nav.classList.add('mobile')
        console.log('succes')
    } else {
        nav.classList.remove('mobile')
    }
    const navMb = $('.navigation.mobile').children[0]
    var addRemoveActive = () => {
        if (iconNav.classList.contains('active')) {
            root.style.cssText = 'transform: translateX(0%);'
            iconNav.classList.remove('active')
            navMb.style.cssText = 'left: -100%;'
        } else {
            root.style.cssText = 'transform: translateX(50%);'
            iconNav.classList.add('active')
            navMb.style.cssText = 'left: 0%;'
        }
    }
    iconNav.addEventListener('click',() => {
       addRemoveActive()
    })
    navMb.onclick = () => {
        root.style.cssText = 'transform: translateX(0%);'
        iconNav.classList.remove('active')
        navMb.style.cssText = 'left: -100%;'
    }

}   