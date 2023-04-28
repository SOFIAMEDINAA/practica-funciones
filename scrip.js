const titulo = document.querySelector("#titulo");
const imagen = document.querySelector("#imagen");
const enlace = document.querySelector("#enlace");
const cuerpoPagina = document.querySelector("body");
const h2Usuario = document.querySelector("#usuario");

const IMG_1= "https://comunidad.retorn.com/wp-content/uploads/2018/09/gatitos.jpg";
const IMG_2="https://tupersonajefavorito.com/wp-content/uploads/2018/05/Buscando-a-Nemo-03.jpg";
const IMG_3="https://th.bing.com/th/id/OIP.X4hQyBZp9cvNv_dls-HotQHaE8?pid=ImgDet&rs=1";

const ENLACE_1= "https://github.com/Erick-C3/Trayecto-de-Programador-";
const ENLACE_2= "https://discord.com/";
const ENLACE_3= "https://stackoverflow.com/";

const IMG_TAM_1= "200px";
const IMG_TAM_2= "300px";
const IMG_TAM_3= "450px";

const TXT_TAM_1= "15PX";
const TXT_TAM_2= "20PX";
const TXT_TAM_3= "30PX";

const TXT_FUENTE_1 = "monospace";
const TXT_FUENTE_2 = "cursive";
const TXT_FUENTE_3 = "fantasy";

const TXT_COLOR_USUARIO_1 = "red";
const TXT_COLOR_USUARIO_2 = "violet";
const TXT_COLOR_USUARIO_3 = "white";



let usuarioRecibido = prompt("ingresar su usuario");
let opciones = prompt("ingresar las siguientes opciones: 1, 2 o 3");

h2Usuario.innerHTML = usuarioRecibido; 


function modificarPagina (colorFondo, colorTexto, enlaceImg, enlacePag, imgTam, tamTexto, fuenteTexto, txtUsuarioColor ) {
    
    cuerpoPagina.style.backgroundColor = colorFondo;
    cuerpoPagina.style.color = colorTexto;
    imagen.src = enlaceImg;
    enlace.href = enlacePag;

    imagen.style.width = imgTam;
    cuerpoPagina.style.fontSize = tamTexto;
    cuerpoPagina.style.fontFamily= fuenteTexto;
    h2Usuario.style.color= txtUsuarioColor;
}


if (opciones == 1) {
    modificarPagina ("orange","black",IMG_1, ENLACE_1, IMG_TAM_1, TXT_TAM_1, TXT_FUENTE_1, TXT_COLOR_USUARIO_1);
    /* cuerpoPagina.style.backgroundColor = "orange";
    cuerpoPagina.style.color = "black";
    imagen.src = IMG_1;
    enlace.href = ENLACE_1; */
    
} else if (opciones == 2) {
    modificarPagina ("black", "white", IMG_2, ENLACE_2, IMG_TAM_2, TXT_TAM_2, TXT_FUENTE_2, TXT_COLOR_USUARIO_2);
    /* cuerpoPagina.style.backgroundColor= "black";
    cuerpoPagina.style.color = "white";
    imagen.src = IMG_2
    enlace.href = ENLACE_2; */

} else if (opciones == 3) {
    modificarPagina ("pink", "green", IMG_3, ENLACE_3,IMG_TAM_3, TXT_TAM_3, TXT_FUENTE_3, TXT_COLOR_USUARIO_3);
    /* cuerpoPagina.style.backgroundColor = "pink";
    cuerpoPagina.style.color ="green";
    imagen.src =IMG_3
    enlace.href = ENLACE_3;  */

}{
    
}