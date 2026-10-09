// Busca los elementos de la página.
const formulario = document.querySelector("form");
const campoTarea = document.getElementById("nueva-tarea");
const listaTareas = document.getElementById("lista-tareas");

function agregarTarea(evento) {
  // Evita que el formulario recargue la página.
  evento.preventDefault();

  // Elimina espacios al inicio y al final.
  const texto = campoTarea.value.trim();

  // Rechaza una tarea que tenga solamente espacios.
  if (texto === "") {
    campoTarea.value = "";
    campoTarea.reportValidity();
    return;
  }

  // Crea una tarea y la agrega a la lista.
  const tarea = document.createElement("li");
  tarea.textContent = texto;
  listaTareas.appendChild(tarea);

  // Limpia el campo y permite escribir otra tarea.
  formulario.reset();
  campoTarea.focus();
}

// Ejecuta la función al enviar el formulario.
formulario.addEventListener("submit", agregarTarea);