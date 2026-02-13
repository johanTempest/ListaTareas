// Variables globales (sí, esto está 'mal', pero por ahora lo hacemos así)
var tareas = []; // Array para guardar las tareas
var contador = 0; // Para darle un ID único a cada tarea
// Función para agregar una tarea
function agregarTarea() {
 // Obtener el valor del input
 var input = document.getElementById('input-tarea');
 var textoTarea = input.value;

 // Validar que no esté vacío
 if (textoTarea === '' || textoTarea.trim() === '') {
 alert('Por favor escribe algo');
 return;
 }

 // Aumentar el contador para el ID
 contador = contador + 1;

 // Crear un objeto tarea
 var tarea = {
 id: contador,
 texto: textoTarea,
 completada: false
 };

 // Agregar la tarea al array
 tareas.push(tarea);

 // Limpiar el input
 input.value = '';

 // Mostrar las tareas actualizadas
 mostrarTareas();
}
// Función para mostrar todas las tareas
function mostrarTareas() {
 // Obtener el contenedor donde van las tareas
 var contenedor = document.getElementById('lista-tareas');

 // Limpiar el contenedor
 contenedor.innerHTML = '';

 // Si no hay tareas, mostrar un mensaje
 if (tareas.length === 0) {
 contenedor.innerHTML = '<p>No hay tareas. ¡Agrega una!</p>';
 return;
 }

 // Recorrer todas las tareas y crear el HTML
 for (var i = 0; i < tareas.length; i++) {
 var tarea = tareas[i];

 // Determinar la clase CSS según si está completada
 var clase = tarea.completada ? 'tarea completada' : 'tarea';

 // Crear el HTML de la tarea
 var html = '<div class="' + clase + '">';
 html += '<span>' + tarea.texto + '</span>';
 html += '<div>';

 // Botón de completar (solo si no está completada)
 if (!tarea.completada) {
 html += '<button class="btn-completar" onclick="completarTarea(' +
tarea.id + ')">✓ Completar</button>';
 }

 // Botón de eliminar
 html += '<button class="btn-eliminar" onclick="eliminarTarea(' + tarea.id
+ ')"> Eliminar</button>';
 html += '</div>';
 html += '</div>';

 // Agregar el HTML al contenedor
 contenedor.innerHTML += html;
 }
}
// Función para marcar una tarea como completada
function completarTarea(id) {
 // Buscar la tarea en el array
 for (var i = 0; i < tareas.length; i++) {
 if (tareas[i].id === id) {
 tareas[i].completada = true;
 break;
 }
 }

 // Volver a mostrar las tareas
 mostrarTareas();
}
// Función para eliminar una tarea
function eliminarTarea(id) {
 // Crear un nuevo array sin la tarea eliminada
 var nuevasTareas = [];

 for (var i = 0; i < tareas.length; i++) {
 if (tareas[i].id !== id) {
 nuevasTareas.push(tareas[i]);
 }
 }

 // Reemplazar el array de tareas
 tareas = nuevasTareas;

 // Volver a mostrar las tareas
 mostrarTareas();
}
// Permitir agregar tarea con la tecla Enter
document.addEventListener('DOMContentLoaded', function() {
 var input = document.getElementById('input-tarea');
 input.addEventListener('keypress', function(e) {
 if (e.key === 'Enter') {
 agregarTarea();
 }
 });
});