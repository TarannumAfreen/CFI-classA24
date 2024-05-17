import express from 'express';
import './dbconnect.js'; //Connect to DB
import UserRoutes from './controller/User.Controller.js';


const app = express();

const port = 8085;

//JSON 
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Express is UP')
});

app.use('/api/users',UserRoutes );

app.listen(port,()=>{
    console.log(`Server is Up on Port ${port}`);
})
