/**
 * CRUD
 * C - Create
 * R - Read
 * U - Update
 * D - Delete
 */

const pageTitle = document.querySelector(".page-title");
const todoField = document.querySelector(".todo-field");
const saveBtn = document.querySelector(".save-btn");
const todoList = document.querySelector(".todo-list");



pageTitle.textContent = "Most awesomest website ever";
pageTitle.style.color = "navy";
pageTitle.style.backgroundColor = "lightgreen";


function saveTodo() {
  const li = document.createElement('li');
  const todoValue = todoField.value;

  li.textContent = todoValue;

  todoList.append(li);
}
saveBtn.addEventListener('click', saveTodo);


// Övning: Lägg till en ta bort knapp på varje todo

// Level up Övning: Gör så att man kan uppdatera en todo genom att trycka på den