# MiPrimerProyecto-Codex

Gestor de tareas creado con HTML, CSS y JavaScript para aprender
desarrollo web y practicar el uso de Git y GitHub.

## Funciones

- Agregar tareas con el botón «Agregar tarea» o con Enter.
- Rechazar tareas vacías o que contengan solamente espacios.
- Marcar tareas como completadas y volver a dejarlas pendientes.
- Eliminar tareas.
- Conservar las tareas y su estado al recargar la página.

## Tecnologías

- **HTML:** estructura de la página.
- **CSS:** diseño y apariencia.
- **JavaScript:** comportamiento y almacenamiento de las tareas.
- **Git y GitHub:** control de versiones y alojamiento del código.

## Archivos del proyecto

```text
MiPrimerProyecto-Codex/
├── README.md
├── index.html
├── styles.css
└── script.js
```

- `README.md`: documentación del proyecto.
- `index.html`: formulario y lista de tareas.
- `styles.css`: estilos de la página y sus controles.
- `script.js`: funciones para agregar, completar, eliminar y guardar tareas.

## Cómo ejecutarlo

1. Clona el repositorio:

   ```bash
   git clone https://github.com/AndersonHV/MiPrimerProyecto-Codex.git
   ```

   También puedes descargarlo desde GitHub mediante
   **Code → Download ZIP** y descomprimirlo.

2. Abre la carpeta `MiPrimerProyecto-Codex`.
3. Abre `index.html` en un navegador moderno, como Chrome.

Mantén los archivos HTML, CSS y JavaScript en la misma carpeta.

La aplicación no necesita instalar paquetes, ejecutar Node.js
ni configurar un servidor.

## Cómo usarlo

1. Escribe una tarea en el campo «Nueva tarea».
2. Pulsa «Agregar tarea» o presiona Enter.
3. Marca la casilla para completar la tarea.
4. Desmarca la casilla para dejarla pendiente nuevamente.
5. Pulsa «Eliminar» para quitarla de la lista.

## Almacenamiento

Las tareas se guardan en el navegador mediante `localStorage`,
incluyendo su texto y su estado de completado.

Para recuperarlas, utiliza el mismo navegador y la misma ubicación
de la página.

Los datos no se sincronizan entre navegadores ni computadoras.
Si borras los datos del sitio en el navegador, puedes perder las tareas.

GitHub conserva el código del proyecto; las tareas personales
permanecen en el navegador.

## Comprobación manual

- Agrega una tarea con el botón y otra con Enter.
- Comprueba que no se agregan tareas vacías ni con solo espacios.
- Marca una tarea y recarga: debe seguir completada.
- Desmárcala y recarga: debe seguir pendiente.
- Elimina una tarea y recarga: no debe reaparecer.
- Cierra la página y vuelve a abrirla: las tareas restantes deben recuperarse.