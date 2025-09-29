console.log("Ta funcionando");
let sort = Math.floor(Math.random()*100)+1;
let saida = document.getElementById("output");
let tentativa = 5;
document.getElementById("numTentativa").innerText = "Tentativas: " + tentativa;

function clique(){
    let valor = document.getElementById("input").value;

    if(valor > 0 && valor <= 100){
        if(valor == sort){
            saida.innerText = "Acertou";
        } if(valor < sort){
            saida.innerText = "O numero sorteado é maior";
        } if(valor > sort){
            saida.innerText = "O numero sorteado é menor";
        }
    } else {
        saida.innerText = "Está fora do intervalo";
    }

    tentativa--;
    document.getElementById("numTentativa").innerText = "Tentativas: " + tentativa;
   
    if (tentativa == 0){
        document.getElementById("botao").disabled =  true;
        if (valor == sort){
            saida.innerText = "Acertou";
        }else {
            saida.innerText = "Acabaram as tentativas, o numero era: " + sort;
        }
    }

}

function novo(){
    sort = Math.floor(Math.random()*100)+1;
    tentativa = 5;
    document.getElementById("botao").disabled = false;
    document.getElementById("numTentativa").innerText = "Tentativas: " + tentativa;
    saida.innerText = "";
    document.getElementById("input").value = "";
}