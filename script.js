const formulario = document.querySelector("form");
const campoTarea = document.getElementById("nueva-tarea");
const listaTareas = document.getElementById("lista-tareas");
const claveAlmacenamiento = "gestor-tareas";

// Muestra una tarea con su casilla y su botón de eliminar.
function mostrarTarea(texto, completada = false) {
  const tarea = document.createElement("li");
  tarea.classList.toggle("completada", completada);

  const etiqueta = document.createElement("label");
  etiqueta.className = "tarea-etiqueta";

  const casilla = document.createElement("input");
  casilla.type = "checkbox";
  casilla.className = "tarea-casilla";
  casilla.checked = completada;

  const descripcion = document.createElement("span");
  descripcion.className = "tarea-texto";
  descripcion.textContent = texto;

  etiqueta.append(casilla, descripcion);

  casilla.addEventListener("change", function () {
    tarea.classList.toggle("completada", casilla.checked);
    guardarTareas();
  });

  const botonEliminar = document.createElement("button");
  botonEliminar.type = "button";
  botonEliminar.className = "boton-eliminar";
  botonEliminar.textContent = "Eliminar";
  botonEliminar.setAttribute("aria-label", "Eliminar tarea: " + texto);

  botonEliminar.addEventListener("click", function () {
    tarea.remove();
    guardarTareas();
  });

  tarea.append(etiqueta, botonEliminar);
  listaTareas.appendChild(tarea);
}

// Guarda tanto el texto como el estado de cada tarea.
function guardarTareas() {
  const tareas = Array.from(listaTareas.children, function (tarea) {
    return {
      texto: tarea.querySelector(".tarea-texto").textContent,
      completada: tarea.querySelector(".tarea-casilla").checked
    };
  });

  try {
    localStorage.setItem(claveAlmacenamiento, JSON.stringify(tareas));
  } catch (error) {
    console.error("Error al guardar las tareas:", error);
    alert("El cambio aparece en la página, pero no se pudo guardar.");
  }
}

// Recupera las tareas, incluyendo las de la versión anterior.
function cargarTareas() {
  try {
    const datos = localStorage.getItem(claveAlmacenamiento);
    const tareas = JSON.parse(datos || "[]");

    if (!Array.isArray(tareas)) {
      throw new Error("Las tareas deben ser una lista.");
    }

    const tareasNormalizadas = tareas.map(function (tarea) {
      // Antes guardábamos solamente el texto.
      if (typeof tarea === "string") {
        return { texto: tarea, completada: false };
      }

      if (
        tarea &&
        typeof tarea.texto === "string" &&
        typeof tarea.completada === "boolean"
      ) {
        return tarea;
      }

      throw new Error("El formato de una tarea no es válido.");
    });

    tareasNormalizadas.forEach(function (tarea) {
      mostrarTarea(tarea.texto, tarea.completada);
    });
  } catch (error) {
    console.error("Error al recuperar las tareas:", error);
    alert("No se pudieron recuperar las tareas guardadas.");
  }
}

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