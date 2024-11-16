import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";




const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 5000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.listen(port,() => {
    console.log(`Server is running on port ${port} and the directory is ${__dirname}`);
});

app.get('/',(req,res)=>{

    res.json('this is server');


})