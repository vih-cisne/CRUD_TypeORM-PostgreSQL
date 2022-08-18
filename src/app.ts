import express from 'express';
import { AppDataSource } from './data-source';
import usersRouter from './routers/users.routes'
import "dotenv/config";

const app = express();

app.use(express.json())

app.use('/users', usersRouter)

const PORT = process.env.PORT || 3000;


const init = async () => {
  app.listen(PORT, async () => {
    console.log(`server running on ${PORT}`)
  
    await AppDataSource.initialize()
    .then(() => {
      console.log("Data Source initialized")
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err)
    })   
  });
}

process.env.NODE_ENV === "test" ? null : init()

export default app