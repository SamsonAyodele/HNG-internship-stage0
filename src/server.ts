import express, { Express, Request, Response } from "express";
const cors = require('cors');
const port = process.env.PORT || 4000;
import dotenv from 'dotenv';
import {connect} from 'mongoose'
import router from "./routes";

dotenv.config()


const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: ["http://localhost:4000"],
    methods: "GET",
    allowedHeaders: "Content-Type,Authorization"
  }));
  


app.use('/', router)




app.get('/', (req: Request, res: Response) => {
    try {
        res.status(200).json(`Welcome to my ${process.env.APP_NAME}` )
    } catch (error) {
        res.status(500).json({error: 'App not found'})
    }
})

app.listen(port, async() => {
    console.log(`Server running on port ${port}`);
    try {
        await connect('mongodb://localhost:27017/Public-Api')
        console.log('Connected to database')
    } catch (error) {
        console.log(error)
        throw new Error('Error connecting to database')
    }
})

