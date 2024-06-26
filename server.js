import express from 'express';
import  mongoose  from 'mongoose';
import 'dotenv/config'
import routes from './routes/todoRoute.js'
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/health",(req, res)=> {
  res.send({message:"Working etc etc"});
})
//middleware
app.use(cors());

app.use(express.json());

app.use(express.static("dist"));

// app.use(cors({
//     origin: 'https://todo-frontend-gamma-three.vercel.app'
//   }));


// app.use("/",(req,res)=> {
//   res.send("WElcome to the server")
// })

const URI = process.env.URI;

try {
  mongoose.connect(URI)
.then(() => console.log("Connected to MongoDB"))
} catch (error) {
  console.log(error + "mongo db connection error");
}



app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at port ${PORT}...`))