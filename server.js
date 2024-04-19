import express from 'express';
import { mongoose } from 'mongoose';
import 'dotenv/config'
import routes from './routes/todoRoute.js'
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 5000;


//middleware
app.use(cors());

app.use(express.json());

app.use(cors({
    origin: 'https://todo-frontend-gamma-three.vercel.app'
  }));


app.get("/", (req, res) => {
    res.send("THE SERVER IS WORKING");
})

mongoose.connect(process.env.URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err))

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at port ${PORT}...`))