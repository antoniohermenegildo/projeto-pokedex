//variaveis que contem os elementos da pagina necessario para fazer o evento
const btnAlterarTema = document.getElementById('botao-alterar-tema');
const corpoDaPagina = document.querySelector("body");
const iconeTrocaTema = document.getElementById('icone-btn-tema');

//adicinando o evento ao click do botao
btnAlterarTema.addEventListener("click", () => {
    //condicionante de verificação se a classe ja existe
    const modoEscuroAtivo = corpoDaPagina.classList.contains("modo-escuro");
    
    corpoDaPagina.classList.toggle("modo-escuro"); //Alterna entre tirar e colocar a classe modo-escuro
    if (modoEscuroAtivo){
        iconeTrocaTema.setAttribute("src", "./src/img/sun.png"); // outra forma de trocar o icone do tema
    }else{
        iconeTrocaTema.src = "./src/img/moon.png"; // troca o icone do Tema 
    }
});