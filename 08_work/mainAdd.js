const toDoInput = document.getElementById("userInput");
const toDoButton = document.getElementById("btnSave");


toDoButton.onclick = async function () {
  const newTodo = {
    name: toDoInput.value,
    completed: false
  }

  await createToDoServer(newTodo)
  location.reload();
}