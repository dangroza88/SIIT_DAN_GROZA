console.log("api up");
const baseUrl = 'http://localhost:3000';

const getTodos = async () => {
  const response = await fetch(`${baseUrl}/todos`)
  const todos = await response.json()
  return todos
}


const createToDoServer = async (newToDo) => {
  const response = await fetch(`${baseUrl}/todos`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newToDo)
  })

  return response.json();
}


