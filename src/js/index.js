import "../sass/index.scss";
// import jpg from '../assets/'; FIXME: RESOLVER PROBLEMA DE IMPORTACIÓN DE IMÁGENES CON WEBPACK

window.addEventListener('load', inicio);

function inicio(){
    document.getElementById('btn-menu').addEventListener('click', mostrarMenu);
}
function mostrarMenu(){
    document.getElementById('nav-primary').classList.toggle('mostrar-nav')
}