// let titulo=document.querySelector("h1");
let titulo=document.getElementById("titulo");
console.log(titulo);
let principal=document.querySelector(".principal");
console.log(principal);
let lista=document.querySelectorAll("ul.lista li ");
console.log(lista);



titulo.innerText="Cambiando el DOM";
titulo.innerHTML=" Nuevo dom";


let foto=document.querySelector("img");
foto.setAttribute("src","img/logo_javascript2.png");
foto.classList.add("foto_cambio");

principal.style.background="";


let extra=document.querySelector(".extra");
document.body.removeChild(extra);

let nuevoarticle=document.createElement ("article");
nuevoarticle.innerText = "Nuevo article";
nuevoarticle.style.color="white";
nuevoarticle.style.background="purple";
nuevoarticle.style.padding="20px";
document.body.appendChild(nuevoarticle);

let boton=document.querySelector("button");
boton.addEventListener("click",() function name(params) {
    
})


muestraMensaje = (mensaje) fu


