const todoList = [{
  name: 'Wake up',
  date: '2024-01-20',
  time: '07:00'
},{
  name: 'Break fast',
  date: '2024-01-20',
  time: '07:15'
}];
renderTodoList();
function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const {name, date, time} = todoObject;
    const html =`
    <div>${name}</div>
    <div>${date}</div>
    <div>${time}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;  
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton ,index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
    });
  });

}
document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-date-input');
  const date = dateInputElement.value;
  const timeInputElement = document.querySelector('.js-time-input');
  const time = timeInputElement.value;
  todoList.push({name ,date ,time});
  inputElement.value = '';
  timeInputElement.value = '';
  renderTodoList();
  
}