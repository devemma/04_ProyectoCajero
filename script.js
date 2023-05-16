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

function inicio(id) {
    if(cuentas[id].pass == prompt("¿Cuál es la contraseña?")){
        console.log("Nombre: " + cuentas[id].nombre)
        console.log("Saldo actual: " + cuentas[id].saldo)
    } else{
        console.log("Contraseña incorrecta")
    }    
}

function show(){
    var comp = document.getElementById("formulario")
    comp.style.display = "block"
}