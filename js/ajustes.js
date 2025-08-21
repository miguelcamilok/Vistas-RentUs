// ajustes.js
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remover active de todas las pestañas
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Activar la seleccionada
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});
