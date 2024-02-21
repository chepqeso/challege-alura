const texto = document.getElementById('txt-encriptar');
const mesaje = document.getElementById('mesaje-salida');
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
    mesaje.value = encriptarOn;
} 

    document.getElementById('homero-1').style.display = 'none';
    document.getElementById('mensaje-1').style.display = 'none';
    document.getElementById('mensaje-2').style.display = 'none';
    document.getElementById('btncopiar').style.display = 'inherit';
    document.getElementById('mesaje-salida').style.display = 'inherit';
    //document.getElementById('mesaje-salida').innerHTML = ;
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
