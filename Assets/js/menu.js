const d = document;
const $toggle = d.getElementById("toggle"),
$menu = d.querySelector(".nav__menu");



const abrirMenu = e => {
    if(e.target.matches("#toggle")){
        $menu.classList.toggle("showme")
    }
}