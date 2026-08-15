'use strict';

// INIT VARIABLES
const img = document.getElementById('img');
const play = document.getElementById('play');
const playIcon = document.getElementById('play-icon');
const speedOptions = document.getElementById('speed-options');
const back = document.getElementById('back');
const forward = document.getElementById('forward');

let speed = Number(speedOptions.value); // Initial speed
let index = 0; // For changing images
let intervalId; // For removing timer

// Change slideshow speed
speedOptions.addEventListener('change', () => {
  speed = Number(speedOptions.value);

  if (playIcon.classList.contains('ph-pause')) {
    clearInterval(intervalId);
    startSlideshow();
  }
});

// Helper function for starting the slideshow when play/pause or speed change occurs
const startSlideshow = function () {
  intervalId = setInterval(() => {
    index++;

    // Reset index when at the end
    if (index === 10) index = 0;

    img.src = `images/image-${index}.jpg`;
  }, speed);
};

// Play/pause functionality
play.addEventListener('click', () => {
  playIcon.classList.toggle('ph-play');
  playIcon.classList.toggle('ph-pause');

  if (playIcon.classList.contains('ph-pause')) {
    startSlideshow();
  } else clearInterval(intervalId);
});

// Next image (works during slideshow as well)
back.addEventListener('click', () => {
  if (index !== 0) index--;
  else index = 9;

  img.src = `images/image-${index}.jpg`;
  console.log(index);
});

// Previous image (works during slideshow as well)
forward.addEventListener('click', () => {
  if (index !== 9) index++;
  else index = 0;

  img.src = `images/image-${index}.jpg`;
  console.log(index);
});
