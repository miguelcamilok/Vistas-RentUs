document.getElementById("btn-pagar").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("hidden");
});

document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});

document.getElementById("ir-metodos").addEventListener("click", () => {
  document.getElementById("paso1").classList.add("hidden");
  document.getElementById("paso2").classList.remove("hidden");
});
