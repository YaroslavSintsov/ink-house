// Импорт bootstrap
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"

import {isWebp} from './includes/functions/isWebp.js'
import {menuInit} from './includes/functions/burgerMenu.js'
import {tabs} from './includes/functions/tabs.js'
import {spollers} from './includes/functions/spollers.js'
import * as scroll from './includes/functions/scroll/scroll.js'
import * as forms from './includes/functions/forms/forms.js'

menuInit()
const buttons = document.querySelectorAll('.world-btn')
const gallery = document.querySelectorAll('.img-down')
const clear = (e) => {
    for (const btn of buttons){
        btn.classList.remove('active')
    }
    for (const cards of gallery){
        cards.classList.add('noned')
    }
}

for (const cards of gallery){
    buttons[0].onclick = function(){
        clear()
        gallery[0].classList.remove('noned')
        buttons[0].classList.add('active')
    }
    buttons[1].onclick = function(){
        clear()
        gallery[1].classList.remove('noned')
        buttons[1].classList.add('active')
    }
    buttons[2].onclick = function(){
        clear()
        gallery[2].classList.remove('noned')
        buttons[2].classList.add('active')
    }
}