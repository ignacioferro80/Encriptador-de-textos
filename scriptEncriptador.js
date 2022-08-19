const inputTexto = document.querySelector(".encryptInput")
const message = document.querySelector(".message")

function encryptButton(){

    const textoEncriptado = encriptar(inputTexto.value);
    message.value = textoEncriptado; 
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