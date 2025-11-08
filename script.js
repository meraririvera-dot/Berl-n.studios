// Simulación de formulario de contacto
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Tu mensaje ha sido enviado correctamente ✅');
  form.reset();
});
