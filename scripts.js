
function openModal(title) {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal").style.display = "block";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
window.onclick = function(event) {
  if (event.target == document.getElementById("modal")) {
    closeModal();
  }
}
