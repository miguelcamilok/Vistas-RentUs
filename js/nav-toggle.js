document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-btn");
  const slider = document.querySelector(".slider-bg");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const index = btn.getAttribute("data-index");
      slider.style.left = `calc(${index} * (100% / 3) + 4px)`;

      const tab = btn.getAttribute("data-tab");

      setTimeout(() => {
        if (tab === "register") {
          window.location.href = "registro.html";
        } else if (tab === "login") {
          window.location.href = "login.html";
        } else if (tab === "back") {
          window.location.href = "index.html";
        }
      }, 300);
    });
  });
});


