const btnAnterior = document.getElementById("btnAnterior");
const btnPause = document.getElementById("btnPause");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnIr3 = document.getElementById("btnIr3");
const btnPlay = document.getElementById("btnPlay");

btnAnterior.onclick = () => {
  $("#carouselId").carousel("prev");
};

btnPause.onclick = () => {
  $("#carouselId").carousel("pause");
};

btnSiguiente.onclick = () => {
  $("#carouselId").carousel("next");
};

btnIr3.onclick = () => {
  // se coloca el numero del slider. tener en cuenta que inicia desde 0 como en un arreglo
  $("#carouselId").carousel(2);
};

btnPlay.onclick = () => {
  $("#carouselId").carousel("cycle");
};

// PARA PAUSAR EL SLIDER CUANDO COLOCAMOS O NO EL MOUSE
// btnPause.onmouseover = () => {
//   $("slider").carousel("pause");
// };

// btnPause.onmouseout = () => {
//   $("slider").carousel("pause");
// };
