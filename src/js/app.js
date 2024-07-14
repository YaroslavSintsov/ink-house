// Импорт bootstrap
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import {isWebp} from './includes/functions/isWebp.js'
import {menuInit} from './includes/functions/burgerMenu.js'
import {tabs} from './includes/functions/tabs.js'
import {spollers} from './includes/functions/spollers.js'
import * as scroll from './includes/functions/scroll/scroll.js'
import * as forms from './includes/functions/forms/forms.js'

let btnAdd = document.getElementById('menu-btn')
let nav = document.getElementById('nav')
btnAdd.addEventListener('click', () =>{
    nav.classList.toggle('menu-open')
    document.body.classList.toggle('scroll-lock')
    document.classList.toggle('scroll-lock')
})
menuInit()
console.log('Hi');