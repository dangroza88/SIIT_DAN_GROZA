function getDeleteButton(todoId) {
  const deleteButton = document.createElement("button")
  deleteButton.innerHTML = "Delete"

  deleteButton.addEventListener("click", async function () {
    await fetch(`${baseUrl}/todos/${todoId}`, {
      method: "DELETE",
    });
    location.reload();

  })

  return deleteButton;
}