function encriptar() {

    let texto  =document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado=texto
      .replace(/e/gi, "ever" )
      .replace(/i/gi, "yii")
      .replace(/a/gi, "aiaai")
      .replace(/o/gi, "ouber")
      .replace(/u/gi, "uiud"); 
    if (texto.length  != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent= "";
        muñeco.src = "./img/gatolupa.jpg"; 
    }else {
        muñeco.src = "./img/gato.png";
        tituloMensaje.textContent = "Ningun texto fue encontrado";
        parrafo.textContent= "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }
}


function desencriptar() {
    let texto  =document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado=texto
        .replace(/ever/gi, "e" )
        .replace(/yii/gi, "i")
        .replace(/aiaai/gi, "a")
        .replace(/ouber/gi, "o")
        .replace(/uiud/gi, "u"); 
      
     if (texto.length  != 0) {
         document.getElementById("texto").value = textoCifrado;
         tituloMensaje.textContent = "Texto desencriptado con exito";
         parrafo.textContent= "";
         muñeco.src = "./img/desencriptado.jpg"; 
        }else{
            muñeco.src = "./img/gato.png";
            tituloMensaje.textContent = "Ningun texto fue encontrado";
            parrafo.textContent= "Ingresa el texto que deseas encriptar o desencriptar";
            alert("Debes ingresar algun texto");
        }

}