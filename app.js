const texto = document.getElementById('txt-encriptar');
const mensaje = document.getElementById('mensaje-salida');
let matrizCode = [
    ['e','enter'],
    ['i','imes'],
    ['a','ai'],
    ['o','ober'],
    ['u','ufat']
];
//funcion para cifrar el mensaje
function btnEncriptar(){
    const encriptarOn = encriptar(texto.value);
    mensaje.value = encriptarOn;
    
    document.getElementById('homero-1').style.display = 'none';
    document.getElementById('mensaje-1').style.display = 'none';
    document.getElementById('mensaje-2').style.display = 'none';
    document.getElementById('btncopiar').style.display = 'inherit';
    document.getElementById('mensaje-salida').style.display = 'inherit';
}
function encriptar(fraseEncriptada){
    for (let i = 0; i < matrizCode.length; i++){
        if(fraseEncriptada.includes(matrizCode[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matrizCode[i][0],
                matrizCode[i][1]
            );
        }
    }
    return fraseEncriptada;
}
function btnDesencriptar(){
    const desencriptarOff = desencriptar(texto.value)
    mensaje.value = desencriptarOff;

    document.getElementById('homero-1').style.display = 'none';
    document.getElementById('mensaje-1').style.display = 'none';
    document.getElementById('mensaje-2').style.display = 'none';
    document.getElementById('btncopiar').style.display = 'inherit';
    document.getElementById('mensaje-salida').style.display = 'inherit';
}

function desencriptar(cadenaCodificada){
    for (let i = 0; i <  matrizCode.length; i++){
        if(cadenaCodificada.includes(matrizCode[i][1])){
            cadenaCodificada = cadenaCodificada.replaceAll(
                matrizCode[i][1],
                matrizCode[i][0]
            );
        }
    }
    return cadenaCodificada;
}
function copiarTexto(){
    navigator.clipboard.writeText(mensaje.value);
    alert("Se ha copiado el texto")
}