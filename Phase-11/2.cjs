const axios = require('axios');

function fetchAndModifyTodos(url) {
  axios.get(url)
    .then((result) => {
      // Filter completed todos
      const completedTodos = result.data.filter(todo => todo.completed === true);

      // Update completed status to false
      const updatedTodos = completedTodos.map(todo => {
        return { ...todo, completed: false };
      });

      // Logging the updated todos to the console
      console.log(updatedTodos);
    })
    .catch((error) => {
      console.error('Error fetching or modifying todos:', error);
    });
}

fetchAndModifyTodos('https://jsonplaceholder.typicode.com/todos')