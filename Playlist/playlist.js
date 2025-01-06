// Seleciona todos os botões de play e players de áudio
const playButtons = document.querySelectorAll('.play-button');
const audioPlayers = document.querySelectorAll('.audio-player');

playButtons.forEach((button, index) => {
  let isPlaying = false;
  const audio = audioPlayers[index]; // Correspondente player de áudio

  button.addEventListener('click', () => {
    // Pausa todos os áudios antes de tocar o atual
    audioPlayers.forEach((player, i) => {
      if (i !== index) {
        player.pause();
        playButtons[i].textContent = 'Play';
      }
    });

    if (isPlaying) {
      audio.pause(); // Pausa o áudio atual
      button.textContent = 'Play';
    } else {
      audio.play(); // Toca o áudio atual
      button.textContent = 'Pause';
    }
    isPlaying = !isPlaying; // Alterna o estado de reprodução
  });

  // Reseta o botão para "Play" quando a música termina
  audio.addEventListener('ended', () => {
    button.textContent = 'Play';
    isPlaying = false;
  });
});
