let cuentas = [
    {
        "nombre": "Mali",
        "saldo": 200,
        "pass": "password1"
    },
    {
        "nombre": "Gera",
        "saldo": 290,
        "pass": "password2"
    },
    {
        "nombre": "Maui",
        "saldo": 67,
        "pass": "password3"
    },
]

function sesion(){
    let usuario = document.getElementById("user").value
    let contra = document.getElementById("password").value

    if(usuario == "" || contra == ""){
        alert("Por favor ingresa los datos.")
    } else {
        alert("Hay algo")
    }
}

function inicio(id) {
    // Encontrar el id del usuario con el username
    if(cuentas[id].pass == prompt("¿Cuál es la contraseña?")){
        // comparar si tiene la misma contraseña en la locacion
        console.log("Nombre: " + cuentas[id].nombre)
        console.log("Saldo actual: " + cuentas[id].saldo)
        // Redireccionar a la página principal
    } else{
        console.log("Contraseña incorrecta")
    }    
}

function show(){
    var comp = document.getElementById("formulario")
    comp.style.display = "block"
}