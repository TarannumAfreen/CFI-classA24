const axios = require('axios');
const fs = require('fs');

function fetchAndModifyTodos(url) {
  axios.get(url)
    .then((result) => {
      // Filter completed todos
      const completedTodos = result.data.filter(todo => todo.completed === true);

      // Update completed status to false
      const updatedTodos = completedTodos.map(todo => {
        return { ...todo, completed: false };
      });

      // Write the updated todos to data.json
      fs.writeFile('data.json', JSON.stringify(updatedTodos), (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Updated todos have been written to data.json');
        }
      });
    })
    .catch((error) => {
      console.error('Error fetching or modifying todos:', error);
    });
}

fetchAndModifyTodos('https://jsonplaceholder.typicode.com/todos');