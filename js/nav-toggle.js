document.addEventListener("DOMContentLoaded", () => {
  // === SLIDER DE NAVEGACIÓN ===
  const buttons = document.querySelectorAll(".nav-btn");
  const slider = document.querySelector(".slider-bg");

  if (buttons.length > 0 && slider) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const index = btn.getAttribute("data-index");
        slider.style.left = `calc(${index} * (100% / 3) + 4px)`;

        const tab = btn.getAttribute("data-tab");
        setTimeout(() => {
          if (tab === "register") window.location.href = "registro.html";
          else if (tab === "login") window.location.href = "login.html";
          else if (tab === "back") window.location.href = "index.html";
        }, 300);
      });
    });
  }

  // === MENÚ DESPLEGABLE DEL USUARIO ===
  const userToggle = document.getElementById("userToggle");
  const dropdown = document.getElementById("userDropdown");

  if (userToggle && dropdown) {
    userToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!userToggle.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  }
});

function openProfileModal() {
  document.getElementById('profileModal').style.display = 'flex';
}

function closeProfileModal() {
  document.getElementById('profileModal').style.display = 'none';
}

// Cerrar con clic fuera del modal
window.addEventListener("click", function (e) {
  const modal = document.getElementById('profileModal');
  if (e.target === modal) {
    closeProfileModal();
  }
});
//notificaciones:
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('notifModal');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Abrir el modal mantenimiento:
function openMaintenanceModal() {
  document.getElementById("maintenanceModal").style.display = "flex";
}

// Cerrar el modal
function closeMaintenanceModal() {
  document.getElementById("maintenanceModal").style.display = "none";
}

// Enviar formulario
document.getElementById("maintenanceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Aquí puedes conectar con tu backend o API
  alert("Solicitud enviada. Nos comunicaremos pronto.");
  this.reset();
  closeMaintenanceModal();
});

function openSolicitudesModal() {
  document.getElementById("solicitudesModal").style.display = "flex";
}

function closeSolicitudesModal() {
  document.getElementById("solicitudesModal").style.display = "none";
}

// Opcional: cerrar al hacer clic fuera del contenido
window.addEventListener("click", function (e) {
  const modal = document.getElementById("solicitudesModal");
  if (e.target === modal) {
    closeSolicitudesModal();
  }
});
