function sim() {

    
    // Exibe a tela escura e a div #hamster
    document.getElementById("escurecerTela").style.display = "block";
    document.getElementById("hamster").style.display = "block";
    document.getElementById("carregando").style.display = "block";
    
    // Oculta a tela escurecida e a div #hamster após 2 segundos
    setTimeout(function(){ 
        document.getElementById("escurecerTela").style.display = "none";
        document.getElementById("hamster").style.display = "none";
        document.getElementById("carregando").style.display = "none";
    }, 4000);
    
    // Redireciona para a URL
    setTimeout(function() {
        alert("Parabéns! Você está totalmente certo! :)");
        window.location.reload();
    }, 4000);

}




function desvia(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}



// function sim() {
//     alert("Parabéns Você está totalmente certo! :)");
//     // redireciona para um URL após clicar no SIM
//     location.href = "https://music.youtube.com/watch?v=izGwDsrQ1eQ";
// }