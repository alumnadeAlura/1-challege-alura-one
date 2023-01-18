const inputTexto= document.querySelector(".input-text");
const mensaje= document.querySelector(".input-textarea");


    function botonEncriptar(){
        const textoEncriptado = encriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
}

    function encriptar(encriptacion){
     let matrizCodigo = [["e","ero"],["i","ilo"],["a","anto"],["o","opi"],["u","uli"]];
    encriptacion = encriptacion.toLowerCase();
    for(let x = 0 ; x < matrizCodigo.length ; x++){
    if (encriptacion.includes(matrizCodigo[x][0])){
    encriptacion = encriptacion.replaceAll(matrizCodigo[x][0],matrizCodigo[x][1])
        }
    }      
    return encriptacion;
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
}
function desencriptar(desencriptacion){
    let matrizCodigo = [["ero","e"],["ilo","i"],["anto","a"],["opi","o"],["uli","u"]];
   dsencriptacion = desencriptacion.toLowerCase();
   for(let x = 0 ; x < matrizCodigo.length ; x++){
   if (desencriptacion.includes(matrizCodigo[x][0])){
   desencriptacion = deseencriptacion.replaceAll(matrizCodigo[x][0],matrizCodigo[x][1])
       }
   }      
   return desencriptacion;
}

