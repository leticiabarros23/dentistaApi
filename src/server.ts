import express,{Request,Response,NextFunction} from 'express'
import dotenv from "dotenv";
import cors from 'cors';


import pacienteRoutes from './routes/pacienteRoutes';

dotenv.config();




const app = express()
const port = process.env.PORT || 3333

app.use(cors());

app.options('*', cors());


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(pacienteRoutes)

app.get('/',(req,res)=>{
  res.status(200).send('<h1>Está Online</h1>')
})

app.use((error:Error,request:Request,response:Response,next:NextFunction)=>{
  response.json({
    status:"error",
    message:error.message
  });
  next()
})

app.listen(port,()=>{
  console.log(`Aplicação online na porta ${port}`)
})