// const axios  = require("axios");

// function fetchData(username){
//     axios.get(`https://api.github.com/users/${username}`)
//     .then((result)=>{
//         console.log(result.data)
//     }).catch((error)=>{
//         console.error(error.response.data)
//         console.log("Something went wrong")
//     })
// }
// fetchData('TarannumAfreen');

readlineSync = require('readline-sync');
const axios = require('axios');

let username = readlineSync.question('Please enter the git username: ');
while (!username) {
    username = readlineSync.question('Please re-enter the valid  git username: ');
}
axios.get(`https://api.github.com/users/${username}`)
.then((result)=>{
    console.log(result.data)
}).catch((error)=>{
    console.error(error.response.data)
    console.log("Something went wrong")
})

