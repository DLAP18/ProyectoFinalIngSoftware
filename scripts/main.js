/*Logica Inicio Sesion*/
function inicioSesion(){
    var done = 0;
    var user = document.sesionInicio.user.value;
    var password = document.sesionInicio.password.value;
    if(user == "1" && password == "123"){
        window.location="adminInicio.html";
    }
    else if(user == "2" && password == "456"){
        window.location="userRegistra.html";
    }
    else if(user == "3" && password == "789"){
        window.location="userComun.html";
    }
    else{
        alert("Usuario o contraseña incorrectos");
    }
}
/*Logica Inicio Sesion*/
/*Logica Admin*/
function prueba(){
    alert("ohayo sekai good morning world!");
}

function altaPermiso(){
    alert("Se han dado de alta los elementos seleccionados exitósamente");
}

function guardarCambios(){
    alert("Se guardaron los cambios exitósamente");
}

function generarPDF(){
    alert("Generando PDF");
}
/*Logica Admin*/
/*Logica User R*/
function botonUsuarioR(){
    window.location="userRegistraF.html";
}
/*Logica User R*/
/*Logica User C*/
function botonUsuarioCCD(){
    window.location="userComunCD.html";
}

function botonUsuarioCRI(){
    window.location="userComunRI.html";
}

function envInformacion(){
    alert("Información enviada con éxito");
}

function envInformacioneImpT(){
    alert("Información enviada con éxito");
    window.location="userRegistraT.html";
}

function imprimirTicket(){
    alert("El ticket se mando a imprimir");
}
/*Logica User C*/