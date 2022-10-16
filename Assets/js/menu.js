const d = document;
const $toggle = d.getElementById("toggle"),
$menu = d.querySelector(".nav__menu"),
$searchIcon = d.getElementById('iconSearch'),
$searchForm = d.querySelector('.search__form');



const abrirMenu = e => {
    if(e.target.matches("#toggle")){
        $menu.classList.toggle("showme")
    }
}


const abrirSearch = e => {
    if(e.target.matches("#iconSearch")){
        $searchForm.classList.toggle("showme")
    }
}