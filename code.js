const inputMensaje=document.querySelector("#msn");  
const inputResultado=document.querySelector("#resultado-msn");

const btnEncriptar=document.querySelector("#btnEncriptar");
const btnDesencriptar=document.querySelector("#btnDesencriptar");
const btnCopiar=document.querySelector("#btnCopiar");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


function encriptar(){

    var mensaje=inputMensaje.value;

    if(validar(mensaje)){

        var cifrado=mensaje.replaceAll("e","enter"); 
        var cifrado=cifrado.replaceAll("i","imes"); 
        var cifrado=cifrado.replaceAll("a","ai"); 
        var cifrado=cifrado.replaceAll("o","ober"); 
        var cifrado=cifrado.replaceAll("u","ufat");
    
        document.getElementById("intro").style.display = "none";
        document.getElementById("contenedorR").style.display = "block";
        inputResultado.value=cifrado;
        
    }

    
}

function desEncriptar(){

    var mensaje=inputMensaje.value; 
    
    if(validar(mensaje)){

    var cifrado=mensaje.replaceAll("enter","e"); 
    var cifrado=cifrado.replaceAll("imes","i"); 
    var cifrado=cifrado.replaceAll("ai","a"); 
    var cifrado=cifrado.replaceAll("ober","o"); 
    var cifrado=cifrado.replaceAll("ufat","u");

    document.getElementById("intro").style.display = "none";
    document.getElementById("contenedorR").style.display = "block";
    inputResultado.value=cifrado;

    }
    
}

function copiar(){

    var msn=inputResultado.value;
    navigator.clipboard.writeText(msn); 
    alert("Se Copió el Mensaje Encriptado");
    limpiarCampo();
}

function validar(msn){
    
    if(msn==msn.toLowerCase()){
        return true;
    }else{
        alert("El Texto debe Estar en Minuscula");
    }
}

function limpiarCampo(){
    document.getElementById('msn').value='';
}

btnEncriptar.onclick=encriptar;
btnCopiar.onclick=copiar;
btnDesencriptar.onclick=desEncriptar;