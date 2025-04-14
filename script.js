let contador = 0;

document.getElementById("botaoClique").addEventListener("click", function () {
  contador++;
  document.getElementById("contador").textContent = contador;
});

document.getElementById("resetar").addEventListener("click", function () {
  contador = 0;
  document.getElementById("contador").textContent = contador;
});
