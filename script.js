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
    let nombre = document.getElementById("user").value
    let contra = document.getElementById("password").value

    if(nombre == "" || contra == ""){
        alert("Por favor ingresa los datos.")
    } else if(nombre != null && nombre != null){
        // buscar el id del usuario con el nombre
        let user = cuentas.find(usuario => getUsuario(usuario, nombre));
        if(contra == user.pass){
            console.log("Contraseña correcta")
        } else {
            console.log("Contraseña incorrecta")
        }
    }
}

function getUsuario(usuario, nombre){
    return usuario.nombre === nombre
}

function show(){
    var comp = document.getElementById("formulario")
    comp.style.display = "none"
}