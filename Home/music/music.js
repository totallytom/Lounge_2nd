const trackArt = document.querySelector('.track-art');
const audioElement = document.querySelector('audio');

trackArt.addEventListener('click', togglePlayPause);

function togglePlayPause() {
  if (audioElement.paused) {
    audioElement.play().catch((error) => {
      console.error('Error playing audio:', error);
    });
    trackArt.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audioElement.pause();
    trackArt.innerHTML = '<i class="fas fa-play"></i>';
  }
}

