// Botón en el modal de propiedad
const rentBtn = document.querySelector(".property-detail-rent-btn");

// Modales
const propertyModal = document.getElementById("property-detail-modal");
const requestModal = document.getElementById("rental-request-modal");
const confirmationModal = document.getElementById("confirmation-modal");

// Botones de cierre
const closeRequestModal = document.getElementById("close-request-modal");
const closeConfirmationModal = document.getElementById("close-confirmation-modal");
const backToProperties = document.getElementById("back-to-properties");

// Formulario de solicitud
const rentalForm = document.getElementById("rental-request-form");

// Abrir modal de solicitud desde el modal de propiedad
rentBtn.addEventListener("click", () => {
  propertyModal.style.display = "none";
  requestModal.style.display = "block";
});

// Cerrar modal de solicitud
closeRequestModal.addEventListener("click", () => {
  requestModal.style.display = "none";
});

// Cerrar modal de confirmación
closeConfirmationModal.addEventListener("click", () => {
  confirmationModal.style.display = "none";
});

backToProperties.addEventListener("click", () => {
  confirmationModal.style.display = "none";
});

// Enviar formulario
rentalForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita recargar la página
  requestModal.style.display = "none";
  confirmationModal.style.display = "block";

  // Aquí luego puedes hacer la llamada a tu API con fetch() o axios
  // Ejemplo:
  // fetch('/api/solicitudes', { method: 'POST', body: new FormData(rentalForm) });
});

// Cerrar modales haciendo clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === requestModal) {
    requestModal.style.display = "none";
  }
  if (event.target === confirmationModal) {
    confirmationModal.style.display = "none";
  }
});
