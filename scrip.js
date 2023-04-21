const titulo = document.querySelector("#titulo");
const imagen = document.querySelector("#imagen");
const enlace = document.querySelector("#enlace");
const cuerpoPagina = document.querySelector("body");

const IMG_1= "https://comunidad.retorn.com/wp-content/uploads/2018/09/gatitos.jpg";
const IMG_2="https://tupersonajefavorito.com/wp-content/uploads/2018/05/Buscando-a-Nemo-03.jpg";
const IMG_3="https://th.bing.com/th/id/OIP.X4hQyBZp9cvNv_dls-HotQHaE8?pid=ImgDet&rs=1";

const ENLACE_1= "https://github.com/Erick-C3/Trayecto-de-Programador-";
const ENLACE_2= "https://discord.com/";
const ENLACE_3= "https://stackoverflow.com/";

let opciones = prompt("ingresar las siguientes opciones: 1, 2 o 3");

function modificarPagina (colorFondo, colorTexto, enlaceImg, enlacePag) {
    
    cuerpoPagina.style.backgroundColor = colorFondo;
    cuerpoPagina.style.color = colorTexto;
    imagen.src = enlaceImg;
    enlace.href = enlacePag;
}


if (opciones == 1) {
    modificarPagina ("orange","black",IMG_1, ENLACE_1);
    /* cuerpoPagina.style.backgroundColor = "orange";
    cuerpoPagina.style.color = "black";
    imagen.src = IMG_1;
    enlace.href = ENLACE_1; */
    
} else if (opciones == 2) {
    modificarPagina ("black", "white", IMG_2, ENLACE_2);
    /* cuerpoPagina.style.backgroundColor= "black";
    cuerpoPagina.style.color = "white";
    imagen.src = IMG_2
    enlace.href = ENLACE_2; */

} else if (opciones == 3) {
    modificarPagina ("pink", "green", IMG_3, ENLACE_3);
    /* cuerpoPagina.style.backgroundColor = "pink";
    cuerpoPagina.style.color ="green";
    imagen.src =IMG_3
    enlace.href = ENLACE_3;  */

}{
    
}