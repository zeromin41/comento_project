const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">삭제</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
}

function removeTask(button) {
  const taskItem = button.parentElement;
  taskList.removeChild(taskItem);
}
