const formulario = document.querySelector("form");
const campoTarea = document.getElementById("nueva-tarea");
const listaTareas = document.getElementById("lista-tareas");

const claveAlmacenamiento = "gestor-tareas";

// Muestra una tarea en la página.
function mostrarTarea(texto) {
  const tarea = document.createElement("li");
  tarea.textContent = texto;
  listaTareas.appendChild(tarea);
}

// Guarda el texto de todas las tareas.
function guardarTareas() {
  const tareas = Array.from(
    listaTareas.children,
    tarea => tarea.textContent
  );

  try {
    localStorage.setItem(
      claveAlmacenamiento,
      JSON.stringify(tareas)
    );
  } catch (error) {
    console.error("Error al guardar las tareas:", error);
    alert("La tarea aparece en la lista, pero no se pudo guardar.");
  }
}

// Recupera las tareas cuando se abre la página.
function cargarTareas() {
  try {
    const datos = localStorage.getItem(claveAlmacenamiento);
    const tareas = JSON.parse(datos || "[]");

    // Comprueba que los datos sean una lista de textos.
    if (
      !Array.isArray(tareas) ||
      !tareas.every(tarea => typeof tarea === "string")
    ) {
      throw new Error("El formato de las tareas no es válido.");
    }

    tareas.forEach(mostrarTarea);
  } catch (error) {
    console.error("Error al recuperar las tareas:", error);
    alert("No se pudieron recuperar las tareas guardadas.");
  }
}

// Agrega una tarea y guarda la lista actualizada.
function agregarTarea(evento) {
  evento.preventDefault();

  const texto = campoTarea.value.trim();

  if (texto === "") {
    campoTarea.value = "";
    campoTarea.reportValidity();
    return;
  }

  mostrarTarea(texto);
  guardarTareas();

  formulario.reset();
  campoTarea.focus();
}

cargarTareas();
formulario.addEventListener("submit", agregarTarea);