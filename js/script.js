const COLLISION_DELAY = 1000;
const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');
let isJumping = false;
let gameStopped = false;

const jump = () => {
  if (!isJumping && !gameStopped) {
    isJumping = true;
    sonic.classList.add('sjump');
    sonic.src = 'image/pulinho.gif';

    setTimeout(() => {
      sonic.classList.remove('sjump');
      sonic.src = 'image/sonic.gif';
      isJumping = false;
    }, 750);
  }
};

const stopGame = () => {
  gameStopped = true;
  clearInterval();

  setTimeout(() => {
    gameStopped = false;
    startGame();
  }, COLLISION_DELAY);
};

const restartGame = () => {
  location.reload();
};

const checkCollision = () => {
  const pipePosition = pipe.offsetLeft;
  const sonicPosition = parseInt(window.getComputedStyle(sonic).bottom, 10);
  const pipeOffset = 127;
  const sonicBottom = sonicPosition < 60;
  const isPipeVisible = pipePosition > 0;

  if (isPipeVisible && pipePosition <= pipeOffset && sonicBottom) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    pipe.style.bottom = `${sonicPosition}px`;

    sonic.src = 'image/gameover.png';
    sonic.style.width = '150px';

    stopGame();
    setTimeout(restartGame, COLLISION_DELAY);
  }
};

const startGame = () => {
  loop = setInterval(() => {
    console.log('loop');
    checkCollision();
  }, 10);
};

document.addEventListener('keydown', jump);

startGame();
