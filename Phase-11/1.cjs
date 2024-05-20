

// const axios=require ("axios");

// function fetchData(url){
//     axios.get(url)
//     .then((result)=>{
//         const completedTools=result.data.filter((ele)=>ele.id==100);
//         console.log(completedTools);
//     }).catch((error)=>{
//         console.error("something went wrong")
//     })
// }
// fetchData("https://jsonplaceholder.typicode.com/posts")

const axios=require ('axios');

function fetchData(url){
    axios.get(url)
    .then((result)=>{
        console.log(result.data.filter((task)=>task.completed==true))
        // let tasks=result.data.filter((task)=>task.completed==true)
        // console.log(tasks);
    }).catch((error)=>{
        console.error(error)
    })
}
fetchData("https://jsonplaceholder.typicode.com/todos");



