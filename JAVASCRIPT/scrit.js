function rolarAteElemento(id){
    const elemento = document.getElementById(id);
    elemento.scrollIntoView({ 
    behavior: "smooth", // Faz o efeito de rolagem suave (animação)
    block: "center"     // Alinha o topo do elemento com o topo da tela
    });}
