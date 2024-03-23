/*let textInput = document.getElementById('text');
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptButton() {
   let textoAEncriptar = (textInput).value;
   
    console.log(textoAEncriptar);
}*/

//Asignar valor a segundo textArea
/*function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}*/


//Función encriptar
function encriptarTexto(texto) {
    // Reemplazar las letras según las reglas dadas
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    
    return texto;
}

//función de boton encriptar
function encriptButton(){
    var textoOriginal = document.getElementById('text').value;
    var textoEncriptado = encriptarTexto(textoOriginal);
    let textAreaResult = document.getElementById('text-de');
    textAreaResult.innerHTML = textoEncriptado;
    //console.log(textoEncriptado);
    document.getElementById('text').value = "";
}

//Bloqueo de mayusculas y caracteres especiales
document.getElementById("text").addEventListener("keypress", function(event) {
    // Obtener el código de la tecla presionada
    var keyCode = event.keyCode || event.which;
    
    // Obtener el carácter correspondiente al código de la tecla
    var charStr = String.fromCharCode(keyCode);
    
    // Verificar si el carácter es una letra mayúscula o un carácter especial
    if (charStr.toUpperCase() === charStr && charStr.toLowerCase() !== charStr || /[^a-zA-Z0-9]/.test(charStr)) {
        // Mostrar una alerta indicando que el carácter no es soportado
        alert("Carácter no soportado");
        // Cancelar el evento (bloquear la entrada)
        event.preventDefault();
    }
});

//Función desencriptar
function desencriptarTexto(textoEncriptado) {
    // Reemplazar las cadenas encriptadas con las letras originales
    textoEncriptado = textoEncriptado.replace(/enter/g, "e");
    textoEncriptado = textoEncriptado.replace(/imes/g, "i");
    textoEncriptado = textoEncriptado.replace(/ai/g, "a");
    textoEncriptado = textoEncriptado.replace(/ober/g, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/g, "u");
    
    return textoEncriptado;
}


function decriptButton(){
    var textoEncript = document.getElementById('text').value;
    var textoDecript = desencriptarTexto(textoEncript);
    let textAreaResult = document.getElementById('text-de');
    textAreaResult.innerHTML = textoDecript;
    let textAreaInput = document.getElementById('text');
    textAreaInput.innerHTML = 0 ; 
    //console.log(textoDecript);
    document.getElementById('text').value = "";

}

//Función copiar a portapapeles
function copiarAlPortapapeles() {
    var texto = document.getElementById("text-de");
    
    // Seleccionar el texto
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móviles
    
    // Copiar el texto seleccionado
    document.execCommand("copy");
    
    // Deseleccionar el texto
    texto.setSelectionRange(0, 0);
    
    //Limpiar textArea
    //document.getElementById('text-de').value = "";

    // Mensaje de éxito
    console.log("Texto copiado al portapapeles: " + texto.value);
}

// Ejemplo de uso
/*var textoOriginal = "murcielago";
var textoEncriptado = encriptarTexto(textoOriginal);
console.log("Texto original: " + textoOriginal);
console.log("Texto encriptado: " + textoEncriptado);*/
