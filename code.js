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

    if(validarText(mensaje)){

        validarScreen();

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
    
    if(validarText(mensaje)){

        validarScreen();

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

async function copiar(){

    try {
        
        var msn=inputResultado.value;

        await navigator.clipboard.writeText(msn); 
        alert("Se Copió el Mensaje Encriptado");
        limpiarCampo();
    } catch (error) {
        alert("Se produjo un error al copiar el texto: ",error);
    }
    
}

function validarText(msn){

    if(msn==""){
        alert("Debe Ingresar un texto en el campo");        
    }else if(msn==msn.toLowerCase()){
        return true;
    }else{
        alert("El Texto debe Estar en Minuscula");
    }
}

function limpiarCampo(){
    document.getElementById('msn').value='';
}

function validarScreen(){               //Cuando damos click en btn-Encriptar salta la pantalla a un punto de resolucion definido.
    
    if(screen.width<=375){
        scroll(0 , 560);
    }else if(screen.width>375 && screen.width<=768){
        scroll(0 , 650);
    }
}

btnEncriptar.onclick=encriptar;
btnCopiar.onclick=copiar;
btnDesencriptar.onclick=desEncriptar;