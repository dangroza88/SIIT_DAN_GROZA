const todoList = document.querySelector(".todo-display");

async function displayTodos() {
    const todos = await getTodos()
    const ulHTML = document.createElement("ul");
    ulHTML.classList.add("display-list");
    for (let i = 0; i < todos.length; i++) {
      const itemHTML = createTodo(todos[i].name, todos[i].id);
  
      const deleteBtn = getDeleteButton(todos[i].id)
      deleteBtn.classList.add("delete-task");
      itemHTML.appendChild(deleteBtn);
  
      ulHTML.appendChild(itemHTML);
    }
    todoList.appendChild(ulHTML)
  }
  
  displayTodos();
  
  function createTodo(text, id) {
    const todoHtml = document.createElement("li")
    todoHtml.innerText = text;
    return todoHtml;
  }
  
