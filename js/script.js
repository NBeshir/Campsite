const a = document.getElementById("reserveButton");
a.addEventListener("click", () => {
  $("#reserveModal").modal();
});

const b = document.getElementById("loginButton");
b.addEventListener("click", () => {
  $("#loginModal").modal();
});
