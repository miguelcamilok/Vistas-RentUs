function mostrarSeccion(id) {
  // Oculta todas
  const secciones = document.querySelectorAll('.seccion-ajuste');
  secciones.forEach(sec => sec.classList.remove('activo'));

  // Muestra la seleccionada
  document.getElementById(id).classList.add('activo');

  // Marca la pestaña activa
  const items = document.querySelectorAll('.ajustes-sidebar li');
  items.forEach(li => li.classList.remove('active'));
  const activo = Array.from(items).find(li => li.textContent.toLowerCase().includes(id));
  if (activo) activo.classList.add('active');
}
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('toggle-tema');
  const texto = document.getElementById('modo-texto');

  // Restaurar preferencia
  const temaGuardado = localStorage.getItem('temaPreferido') || 'claro';
  document.body.setAttribute('data-tema', temaGuardado);
  toggle.checked = temaGuardado === 'oscuro';
  texto.textContent = temaGuardado.charAt(0).toUpperCase() + temaGuardado.slice(1);

  // Cambiar tema al hacer toggle
  toggle.addEventListener('change', function () {
    const nuevoTema = toggle.checked ? 'oscuro' : 'claro';
    document.body.setAttribute('data-tema', nuevoTema);
    localStorage.setItem('temaPreferido', nuevoTema);
    texto.textContent = nuevoTema.charAt(0).toUpperCase() + nuevoTema.slice(1);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa las preferencias guardadas al cargar
  inicializarPreferencias();

  // Eventos
  document.getElementById("toggle-tema").addEventListener("change", (e) => {
    const modo = e.target.checked ? "oscuro" : "claro";
    cambiarTema(modo);
    guardarPreferencia("tema", modo);
  });

  document.getElementById("idioma-preferido").addEventListener("change", (e) => {
    guardarPreferencia("idioma", e.target.value);
  });

  document.getElementById("notif-email").addEventListener("change", (e) => {
    guardarPreferencia("notificacionesCorreo", e.target.checked);
  });

  document.getElementById("notif-sms").addEventListener("change", (e) => {
    guardarPreferencia("notificacionesSMS", e.target.checked);
  });
});

// Guardar una preferencia en localStorage
function guardarPreferencia(clave, valor) {
  localStorage.setItem(`preferencia_${clave}`, JSON.stringify(valor));
}

// Cargar todas las preferencias guardadas
function inicializarPreferencias() {
  const tema = JSON.parse(localStorage.getItem("preferencia_tema")) || "claro";
  cambiarTema(tema);
  document.getElementById("toggle-tema").checked = tema === "oscuro";

  const idioma = JSON.parse(localStorage.getItem("preferencia_idioma")) || "es";
  document.getElementById("idioma-preferido").value = idioma;

  const notifCorreo = JSON.parse(localStorage.getItem("preferencia_notificacionesCorreo")) || false;
  document.getElementById("notif-email").checked = notifCorreo;

  const notifSMS = JSON.parse(localStorage.getItem("preferencia_notificacionesSMS")) || false;
  document.getElementById("notif-sms").checked = notifSMS;
}

