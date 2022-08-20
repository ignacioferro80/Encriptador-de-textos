const inputTexto = document.querySelector(".encryptInput")
const message = document.querySelector(".message")

/*Encrypt Text*/ 
function encryptButton(){

    if (inputTexto.value=="") {
        alert("Write something to be encrypted!")
    }

    const textoEncriptado = encriptar(inputTexto.value);
    message.value = textoEncriptado; 
    message.style.backgroundImage = "none";

}

function encriptar(string){
    let matrizCódigo = [["e","enter"], 
                        ["i", "imes"], 
                        ["a", "ai"], 
                        ["o", "ober"],
                        ["u", "ufat"]];
    string = string.toLowerCase();

    for( let index = 0; index < matrizCódigo.length; index++){

        if(string.includes(matrizCódigo[index][0])){ //Verifica si la letra actual es una de matrizCódigo
            string = string.replaceAll( matrizCódigo[index][0],
                                        matrizCódigo[index][1]);
        }

    }

    return string;
}

/*Decrypt Text*/
function decryptButton(){

    if (inputTexto.value=="") {
        alert("Write something to be decrypted!")
    }

    const textoEncriptado = desencriptar(inputTexto.value);
    message.value = textoEncriptado; 
    message.style.backgroundImage = "none";
}

function desencriptar(string){
    let matrizCódigo = [["enter","e"], //enter, imes, ai, ober, ufat == posición 0 del array
                        ["imes", "i"], //e, i, a, o, u == posición 1 del array
                        ["ai", "a"], 
                        ["ober", "o"],
                        ["ufat", "u"]];
    string = string.toLowerCase();

    for( let index = 0; index < matrizCódigo.length; index++){

        if(string.includes(matrizCódigo[index][0])){ //Verifica si la letra actual es una de matrizCódigo
            string = string.replaceAll( matrizCódigo[index][0],
                                        matrizCódigo[index][1]);
        }

    }

    return string;
}

/*Copy button*/
//Ya tenemos la variable message
const copyButton = document.querySelector(".copyButton");

copyButton.onclick = function copyText(){

    if (inputTexto.value=="") {
        alert("There´s nothing to copy yet!")
    }

    else{
        message.select();
        document.execCommand("Copy");
    }
    
}

/*New De/Encryption*/
const newEncryptionButton = document.querySelector(".newEncryptionButton");

newEncryptionButton.onclick = function newEncryption(){
    message.value="";
    inputTexto.value="";
}