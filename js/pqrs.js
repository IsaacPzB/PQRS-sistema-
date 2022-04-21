/**  Ventanas flotantes*/
function registrarte() {
    document.getElementById("popRegistrar").style.display = "block";
    document.getElementById("popIniciar").style.display = "none";
    document.getElementById("popSesionUser").style.display = "none";
}

function cerrar01() {
    document.getElementById("popRegistrar").style.display = "none";
}

function iniciar() {
    document.getElementById("popIniciar").style.display = "block";
    document.getElementById("popRegistrar").style.display = "none";
    document.getElementById("popSesionUser").style.display = "none";
}

function cerrar() {
    document.getElementById("popIniciar").style.display = "none";
}

function sesion() {
    document.getElementById("popSesionUser").style.display = "block";
    document.getElementById("popIniciar").style.display = "none";
    document.getElementById("popRegistrar").style.display = "none";
}

function cerrar02() {
    document.getElementById("popSesionUser").style.display = "none";
}

function cerrarSesion() {
    let validacion = confirm("¿Seguro de querer cerrar sesión?");
    if (validacion == true) {
        document.getElementById("body").innerHTML = "";
        window.location = "../index.html";
        
    }
}

/**  funcion para registrar usuarios*/
function registrar() {

    let nombre, apellido, correo, tipo_identificacion, numero_identificacion,
        telefono, contraseña;
    nombre = document.getElementById("exampleInputNombre").value;
    apellido = document.getElementById("exampleInputApellido").value;
    correo = document.getElementById("exampleInputEmail").value;
    tipo_identificacion = document.getElementById("tipoIdentificacion").value;
    numero_identificacion = document.getElementById("exampleInputIdentificacion").value;
    telefono = document.getElementById("exampleInputTelefono").value;
    contraseña = document.getElementById("exampleInputContraseña").value;

    if (nombre == "" || apellido == "" || correo == "" ||
        tipo_identificacion == "Tipo de identificación" ||
        numero_identificacion == "" || telefono == "" || contraseña == "") {

        alert("Error!, verificar los campos");

    } else {
        alert("Funciona")
        document.getElementById("registroUsuario").reset();
    }

}

/** Funcion Para iniciar sesion(Admin y asesor) */
function iniciarAdminAsesor() {

    let rol, usuario, contraseña;
    rol = document.getElementById("rol").value;
    usuario = document.getElementById("exampleInputUser").value;
    contraseña = document.getElementById("exampleInputPassword1").value;

    if (rol == "Seleccionar el rol" || usuario == "" || contraseña == "") {
        alert("Error!, verificar los campos");
        document.getElementById("iniciosesionAdminAsesor").reset();

    } else if (usuario == "Admin" && contraseña == "admin") {
        window.open("html/pageAdmi.html");
        document.getElementById("iniciosesionAdminAsesor").reset();
    }
}


/** Admin modul */
/** insertar usuario */
function insertUser() {
    document.getElementById("insertUserAdmin").style.display= "block";
}
/** Cancelar insertar usuario */
function adminCancelar() {
    document.getElementById("insertUserAdmin").style.display= "none";
    document.getElementById("AdminRegistrarUsuario").reset();
}