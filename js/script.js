const sonic = document.querySelector('.sonic');
const pipe = document.querySelector('.pipe');

const jump = () => {
sonic.classList.add('sjump');

setTimeout(() => {
    sonic.classList.remove('sjump');
}, 1000);
}

const loop = setInterval(() => {

console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace
    ('px', '');


    if (pipePosition <=  115 && pipePosition > 0 && sonicPosition < 60)
    
    {

pipe.style.animation = 'none';
pipe.style.left = `${pipePosition}px`;

pipe.style.animation = 'none';
pipe.style.bottom = `${sonicPosition}px`;

sonic.src = 'image/gameover.png'
sonic.style.width = '135px'

clearInterval(loop)

    }

}, 10);

document.addEventListener('keydown', jump);