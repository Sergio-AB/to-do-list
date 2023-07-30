// Referencias a elementos HTML
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Arreglo para almacenar las tareas
let tasks = [];

// Función para agregar una nueva tarea
function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = {
      id: Date.now(),
      text: taskText,
    };
    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
  }
}

// Función para eliminar una tarea
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

// Función para renderizar las tareas
function renderTasks() {
  taskList.innerHTML = '';
  if (tasks.length === 0) {
    const emptyLi = document.createElement('li');
    emptyLi.classList.add('empty-list');
    emptyLi.textContent = 'No hay tareas pendientes.';
    taskList.appendChild(emptyLi);
  } else {
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task.text}</span>
        <span class="delete-btn" onclick="deleteTask(${task.id})">&#10005;</span>
      `;
      taskList.appendChild(li);
    });
  }
}

// Event listeners
taskForm.addEventListener('submit', addTask);

// Renderizar tareas iniciales (si las hay)
renderTasks();
