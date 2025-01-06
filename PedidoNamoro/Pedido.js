let clickCount = 0;
const simButton = document.querySelector(".button.yes");
const noButton = document.querySelector(".button.no");

// Array de mensagens personalizadas
const messages = [
    "Ooh, tem certeza que deseja apertar isso?",
    "Estou te avisando, melhor pensar bem..",
    "Você é destemida né?!!",
    "Caramba você quer mesmo isso",
    "Okay então, vamos lá..."
];

// Evento para o botão "Sim"
simButton.addEventListener("click", function () {
    clickCount++;

    // Exibindo mensagens personalizadas de acordo com o clique
    if (clickCount <= messages.length) {
        alert(messages[clickCount - 1]);
    } else {
        // Depois do 5º clique, redireciona para outro site
        window.location.href = "../flowers4u/index.html"; // Substitua pelo URL desejado
    }
});


// Evento para o botão "Não"
noButton.addEventListener("mouseover", function () {
    // Obtém a largura e altura do botão
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Gera posições aleatórias dentro dos limites da janela
    const randomX = Math.floor(Math.random() * (window.innerWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - buttonHeight));

    // Define as novas posições para o botão
    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});
