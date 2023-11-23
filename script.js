const movingDiv = document.getElementById('movingDiv');

let currentPosition = 0;

function moveDiv() {
  currentPosition += 1;
  movingDiv.style.left = currentPosition + 'px';

  if (currentPosition >= window.innerWidth - 50) {
    currentPosition = 0;
  }
}

setInterval(moveDiv, 100);