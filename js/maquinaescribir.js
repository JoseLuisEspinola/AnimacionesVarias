const textos = document.querySelectorAll('.escribe');
const anchoContenedor = document.querySelector('.typing-container').clientWidth;
const retrasoEntreLetras = 100;

textos.forEach((texto, indice) => {
  let textoActual = texto.textContent;
  let i = 0;
  let intervalo = setInterval(() => {
    texto.textContent = textoActual.slice(0, i + 1);
    i++;

    if (i === textoActual.length || texto.offsetWidth >= anchoContenedor) {
      clearInterval(intervalo);
    }
  }, retrasoEntreLetras);
});