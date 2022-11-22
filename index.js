const btnMobile = document.querySelector('.cabecalho__menu-hamburguer');

const toogleMenu =  (e) => {
    // if(e.type === 'touchstart') e.preventDefault ()


    const nav = document.querySelector('.menu__lista')
    nav.classList.toggle('active')

}


btnMobile.addEventListener('click', toogleMenu)
btnMobile.addEventListener('blur', toogleMenu)


// btnMobile.addEventListener('touchstart', toogleMenu)