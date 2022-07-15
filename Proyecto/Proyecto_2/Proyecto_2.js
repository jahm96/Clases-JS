alert ("GAY")

const carrito = document.getElementById('carrito');
const platos  = document.getElementById('lista-platos');
const listaPlatos = document.querySelector ('#lista-carrito tbody');
const vaciarCaritoBtn = document.getElementById ('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    platos.addEventListener ("click",comprarPlato);
    carrito-addEventListener ("click", eliminarPlato);
    vaciarCaritoBtn.addEventListener ("click", vaciarCarrito);
    document-addEventListener ("DOMContentLoaded", leerLocalStorage);

}

function comprarPlatos (e) {
    e.preventDefault();
    if (e.target-classList.contains('agregar-carrito')){
        const platos = e.target.parentElement.parentElement;
        leerDatosPlato(platos);
    }

}

function leerDatosPlatos (platos) {
    const infoplato = {
        imagen: platos.querySelector('img').src,
        titulo: platos.querySelector ('h4').textContet,
        precio: platos.querySelector('.preci spn').textContet,
        id: platos.querySelector('a').getAtribute('data-id')

    }
    insertarCarrito(infoPlatos);
}

function insertarCarrito (platsos){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src ="${platos.imagen}" width=100>
        </td>
        <td>${platos.titulo}<td/>
        <td>${platos.precio}<td/>
        <td>
        <a href= "#" class="borrar-platos" data-id="${platos}">X</a>
        <td/>
    `;
    listaPlatos.appendChild (row);
    guardarPlatosLocalStorange(platos);
}

function eliminarPlato (e){
    e.preventDefault();
    let platos,
        platosid;
    if (e.target.classList.contains('borrar-platos')){
        e.target.parentElement.parentElement.remove();
        platos = e.target.parentElement.parentElement;
        platosId = platos.querySelector('a').getAtribute('data-id');
    }
    eliminarPlatoLocalStorage(platoId)
}

function vaciarCarrito (){
    while (listaPlatos.firstChild){
        listaPlatos.removeChild(listaPlatos.firstChild);
    }
    vaciarLocalStorage();
    return false;
}

function guardarPlatosLocalStorange (platos){
    let platos;
    platos = obtenerPlatosLocalStorage();
    platos.push (platos);
    localStorage.setItem('platos',JSON.stringify(platos));
}

function obtenerPlatosLocalStorage (){
    let platosLS;
    if (localStorage.getItem('platos')===null){
        platosLS=[];    
    }
    else{
        platosLS = JSON.parse(localStorage.getItem('platos'));
    }
    return platosLS;
}

function leerLocalStorage() {
    let platosLS;
    platosLS = obtenerPlatosLocalStorage();

    platosLS.forEach(function(platos){
        const row = document.createElement('tr');
        row.innerHTML= `
        <td>
            <img scr="${platos.imagen}" width=100>
        </td>
        <td>${platos.titulo}</td>
        <td>${platos.precio}</td>
        <td>
            <a href="#" class="borrar-platos" data-id="${platos.id}">X</a>
        </td>
    
        `;
        listaPlatos.appendChild(row);
    });
}
 
function eliminarPlato(platos){
    let platosLS;
    platosLS = obtenerPlatosLocalStorage();
    platosLS.forEach(function(platosLS, index){
        if (platosLS.id===platos){
            platosLS.splice(index, 1);
        }

    });
    localStorage.setItem('platos',JSON.stringify(platosLS));
}
function vaciarLocalStorage (){
    localStorage.clear();
}