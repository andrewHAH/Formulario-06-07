let nombre, correo, mensaje;

let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    leerdatos()
})

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.getElementById('textarea').value
    validardata(nombre, correo, mensaje)
}

function ValidarData(nombre, correo, mensaje) {

    if (nombre.length == 0 || correo.length == 0 || mensaje.length == 0) {
        alert('error')
        swal("diria que lo hiciste bien, pero bien lo hicieron tus padres al tenerte", "You clicked the button!", "success", "... F")
    }
}
function guardarlocalstorage(nombre, correo, mensaje) {
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('correo', correo)
    localStorage.setItem('mensaje', mensaje)
    listardata()
}

function listardata(params) {
    let NombreUsu = localStorage.getitem('nombre')
    let NombreUsu = localStorage.getitem('correo')
    let NombreUsu = localStorage.getitem('mensaje')
}