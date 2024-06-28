
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
        mensaje.textContent = "Nombre: PEREJIL. Nombre científico: Petroselinum crispum. Tiempo de siembra: Todo el año. Forma de sembrado: Las semillas deben estar a menos de 1 cm de profundidad. Riego: Moderado." ;
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
        mensaje.textContent = "Nombre: MANZANILLA. Nombre científico: Matricaria Chamomilla. Tiempo de siembra: De Julio a Febrero. Forma de sembrado: Huerta o maceta. Riego: Por goteo. ";
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
        mensaje.textContent = "Nombre: CILANTRO. Nombre científico: Coriandrum Sativum. Tiempo de siembra: Final de mayo y durante el verano. Forma de sembrado: Huerta o maceta, profundidad de 1 o 2 cm. Riego: Regar seguido. ";
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
        mensaje.textContent = "Nombre: ALBAHACA.  Nombre científico: Basilicum Ocimum. Tiempo de siembra: Mayo a Julio. Forma de sembrado: a medio cm de profundidad aproximadamente. Riego: Regar seguido. ";
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
    mensaje.textContent = "Nombre: MENTA. Nombre científico: Mentha. Tiempo de siembra: Abril, Mayo y Junio. Forma de sembrado: Profundidad de 1cm aproximadamente, en maceta. Riego: Regar poco. ";
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
        mensaje.textContent = "Nombre: ORÉGANO. Nombre científico: Origanum Vulgare. Tiempo de siembra: Febrero hasta Julio, luego se trasplanta. Forma de sembrado: En maceta con poca profundidad. Riego: Demasiado riego. ";
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
    mensaje.textContent = "Nombre: SOL. Mediante proceso de la fotosíntesis, es como se producen alimentos a partir de la luz solar. Con la energía solar –como principal recurso energético– las plantas convierten el agua y el dióxido de carbono absorbidos, en azúcar simple, llamada glucosa, la que actúa como su fuente de alimento.";
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
    mensaje.textContent = "Nombre: AGUA. Para sobrevivir, las plantas necesitan agua, así como nutrientes que son absorbidos por las raíces del suelo. Las plantas son un 90% agua. El agua es transportada por toda la planta de manera casi continua para mantener sus procesos vitales funcionando.";
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
    mensaje.textContent = "Nombre: BOTELLA DE PLÁSTICO. Se calcula que el plástico tarda entre 100 y 1.000 años en descomponerse, por lo que está considerado como un material de descomposición muy lento y a largo plazo. Una botella de plástico tarda hasta 500 años en desintegrarse.";
    contenedorNombre.appendChild(mensaje);

    }
)
}