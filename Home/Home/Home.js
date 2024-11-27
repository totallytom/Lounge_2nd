// Import Howler.js
import Howler from 'howler';

// Set up audio file sources
const audioSources = [
  {
    src: 'https://example.com/audio/track1.mp3',
    title: 'Track 1'
  },
  {
    src: 'https://example.com/audio/track2.mp3',
    title: 'Track 2'
  }
];

// Create an audio player instance
const player = new Howler({
  src: audioSources[0].src,
  html5: true
});

// Create a play button
const playButton = document.createElement('button');
playButton.textContent = 'Play';
playButton.addEventListener('click', () => {
  player.play();
});

// Add the play button to the page
document.body.appendChild(playButton);