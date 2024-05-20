//Accept UserId and fetch the related Todos and Display them

readlineSync = require('readline-sync');
const axios = require('axios');

let userId = readlineSync.questionInt('Please enter the userId: ');
while (!userId) {
    userId = readlineSync.questionInt('Please re-enter the valid userId: ');
}

function fetchTodos(userId) {
    const url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
    axios.get(url)
        .then((response) => {
            const todos = response.data;
            console.log('Todos for userId:', userId);
            console.log(todos);
        })
        .catch((error) => {
            console.error('Error:', error.message);
        });
 }

 fetchTodos(userId);