
let objetoManzanilla = document.querySelector("#Manzanilla")
let objetoMenta = document.querySelector("#Menta")
let objetoCilantro = document.querySelector("#Cilantro")
let objetoAlbahaca = document.querySelector("#Albahaca")
let objetoPerejil = document.querySelector("#Perejil")
let objetoOregano = document.querySelector("#Oregano")

let objetoAgua = document.querySelector("#Agua")
let objetoSol = document.querySelector("#Sol")
let objetoBotella = document.querySelector("#Botella")

if(objetoPerejil != null){
    objetoPerejil.addEventListener("click",
    function mostrarInformacion() {
    
        let contenedor = document.querySelector("#Mensaje")
        while (contenedor.hasChildNodes()) {
            contenedor.removeChild(contenedor.firstChild);
        }
        let mensaje = document.createTextNode("p")
        mensaje.textContent = "Nombre: PEREJIL"
        contenedor.appendChild(mensaje);

    }
)
}

if(objetoManzanilla != null){

    objetoManzanilla.addEventListener("click",
    function mostrarInformacion() {
  
        
        let contenedorNombre = document.querySelector("#Mensaje")
        while (contenedorNombre.hasChildNodes()) {
            contenedorNombre.removeChild(contenedorNombre.firstChild);
        }
        let mensaje = document.createTextNode("p")
        mensaje.textContent = "Nombre: MANZANILLA"
        contenedorNombre.appendChild(mensaje);
        

    }
)
}

if(objetoCilantro != null){
    objetoCilantro.addEventListener("click",
    function mostrarInformacion() {
    
        let contenedorNombre = document.querySelector("#Mensaje")
        while (contenedorNombre.hasChildNodes()) {
            contenedorNombre.removeChild(contenedorNombre.firstChild);
        }
        let mensaje = document.createTextNode("p")
        mensaje.textContent = "Nombre: CILANTRO"
        contenedorNombre.appendChild(mensaje);
    
    }
    )
}

if(objetoAlbahaca != null){

    objetoAlbahaca.addEventListener("click",
    function mostrarInformacion() {
    
    
        let contenedorNombre = document.querySelector("#Mensaje")
        while (contenedorNombre.hasChildNodes()) {
            contenedorNombre.removeChild(contenedorNombre.firstChild);
        }
        let mensaje = document.createTextNode("p")
        mensaje.textContent = "Nombre: ALBAHACA"
        contenedorNombre.appendChild(mensaje);
        
    }
    )
}

if(objetoMenta != null){

    objetoMenta.addEventListener("click",
    function mostrarInformacion() {


        let contenedorNombre = document.querySelector("#Mensaje")
    while (contenedorNombre.hasChildNodes()) {
        contenedorNombre.removeChild(contenedorNombre.firstChild);
    }
    let mensaje = document.createTextNode("p")
    mensaje.textContent = "Nombre: MENTA"
    contenedorNombre.appendChild(mensaje);

    }
)
}


if(objetoOregano != null){

    objetoOregano.addEventListener("click",
    function mostrarInformacion() {
  
        
        let contenedorNombre = document.querySelector("#Mensaje")
        while (contenedorNombre.hasChildNodes()) {
            contenedorNombre.removeChild(contenedorNombre.firstChild);
        }
        let mensaje = document.createTextNode("p")
        mensaje.textContent = "Nombre: ORÉGANO"
        contenedorNombre.appendChild(mensaje);
        

    }
)
}

if(objetoSol != null){

    objetoSol.addEventListener("click",
    function mostrarInformacion() {


        let contenedorNombre = document.querySelector("#Mensaje")
    while (contenedorNombre.hasChildNodes()) {
        contenedorNombre.removeChild(contenedorNombre.firstChild);
    }
    let mensaje = document.createTextNode("p")
    mensaje.textContent = "Nombre: SOL"
    contenedorNombre.appendChild(mensaje);

    }
)
}

if(objetoAgua != null){

    objetoAgua.addEventListener("click",
    function mostrarInformacion() {


        let contenedorNombre = document.querySelector("#Mensaje")
    while (contenedorNombre.hasChildNodes()) {
        contenedorNombre.removeChild(contenedorNombre.firstChild);
    }
    let mensaje = document.createTextNode("p")
    mensaje.textContent = "Nombre: AGUA"
    contenedorNombre.appendChild(mensaje);

    }
)
}

if(objetoBotella != null){

    objetoBotella.addEventListener("click",
    function mostrarInformacion() {


        let contenedorNombre = document.querySelector("#Mensaje")
    while (contenedorNombre.hasChildNodes()) {
        contenedorNombre.removeChild(contenedorNombre.firstChild);
    }
    let mensaje = document.createTextNode("p")
    mensaje.textContent = "Nombre: BOTELLA"
    contenedorNombre.appendChild(mensaje);

    }
)
}