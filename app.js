import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import router from './routes/info.js'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 10000;

app.set("json spaces", 4);

app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT}`)
})