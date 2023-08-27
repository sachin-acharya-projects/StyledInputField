import "../css/style.scss"
import "../css/input-style.scss"

const background_el = document.querySelector(".background")
const password_visibility = document.querySelector(".material-symbols-outlined")
const input_el = document.querySelector(".input-field")

password_visibility.addEventListener("click", () => {
    if (input_el.type === 'password') {
        input_el.type = 'text'
    } else {
        input_el.type = 'password'
    }
    background_el.classList.toggle('active')
})