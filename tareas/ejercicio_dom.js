function inicio (){
    document.getElementById("crearParrafo").addEventListener("click",crearParrafo);
    document.getElementById("borrarUltimo").addEventListener("click",borrarUltimo);
    document.getElementById("borrarPrimero").addEventListener("click",borrarPrimero);
    document.getElementById("sustituirPrimerVacio").addEventListener("click",sustituirPrimerVacio);
    document.getElementById("sustituirUltimoVacio").addEventListener("click",sustituirUltimoVacio);
}

function crearParrafo (){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(document.getElementById("texto").value);    
    parrafo.appendChild(texto);
    parrafo.setAttribute("class","miClase");
    var cont= document.getElementById("div1")
    cont.appendChild(parrafo);
}

function borrarPrimero(){
    var cont = document.getElementById ("div1");
    var hijo = cont.firstChild;
    cont.removeChild(hijo);
}

function borrarUltimo (){
    var cont = document.getElementById ("div1");
    var hijo = cont.lastChild;
    cont.removeChild(hijo);
}

function sustituirPrimerVacio(){
    var cont = document.getElementById("div1");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode ("vacio");
    parrafo.appendChild(texto);
    cont.replaceChild(parrafo,cont.firstChild);
}


function sustituirUltimoVacio(){
    var cont = document.getElementById("div1");
    var parrafo = document.createElement("p");
    var texto = document.createTextNode ("vacio");
    parrafo.appendChild(texto);
    cont.replaceChild(parrafo,cont.lastChild);
}