const modalBlur = document.getElementById("modal-blur");
const modalCard = document.getElementById("modal-card");

modalCard.style.boxShadow = "0 0 9000px 9000px rgba(0, 0, 0, 0.65)";

const close = document.getElementById("close");

close.addEventListener("click", function () {
  modalBlur.style.display = "none";
});
