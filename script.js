const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
document.addEventListener("keydown", jump);
function jump() {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
}
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /* o getcomputedstyle pega o estilo que foi computado ness elemento e ai conseguimos acessar todas as propriedades css*/

  if (pipePosition <= 190 && pipePosition > 0  && marioPosition <117) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
  }
}, 10);
