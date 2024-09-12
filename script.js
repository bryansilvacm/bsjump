const avatar = document.querySelector(".avatar");
const cerca = document.querySelector(".cerca");
document.addEventListener("keydown", jump);
function jump() {
  avatar.classList.add("jump");
  setTimeout(() => {
    avatar.classList.remove("jump");
  }, 500);
}
const loop = setInterval(() => {
  const cercaPosition = cerca.offsetLeft;
  const avatarPosition = +window.getComputedStyle(avatar).bottom.replace('px', ''); /* o getcomputedstyle pega o estilo que foi computado ness elemento e ai conseguimos acessar todas as propriedades css*/

  if (cercaPosition <= 120 && cercaPosition > 0  && avatarPosition <74) {
    cerca.style.animation = "none";
    cerca.style.left = `${cercaPosition}px`;

    avatar.style.animation = "none";
    avatar.style.bottom = `${avatarPosition}px`;
    avatar.src = "C:/Users/Caixa/Downloads/here/JUMP/avatar perdeu.png";
  
  }
}, 10);