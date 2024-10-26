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

const restartButton = document.getElementById('restartButton');
      
      restartButton.addEventListener('click', restartAudio);

      function restartAudio() {
        audioElement.currentTime = 0;
        audioElement.play();
      }

const nextButton = document.getElementById('nextButton');
      
      nextButton.addEventListener('click', nextAudio);
  
      function nextAudio() {
        audioElement.currentTime = 0;
        audioElement.play();
      }

const rewindbutton = document.getElementById('rewindbutton');
      
      rewindbutton.addEventListener('click', rewindAudio);
  
      function rewindAudio() {
        audioElement.currentTime -= 10;
        audioElement.play();
      }

const forwardbutton = document.getElementById('forwardbutton');
      
      forwardbutton.addEventListener('click', forwardAudio);
  
      function forwardAudio() {
        audioElement.currentTime += 10;
        audioElement.play();
      }