/* Third Party Imports */
import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'
/* Files in Project */
import router from './routes/index.js'

dotenv.config() // loads the .env file contents into process.env IMPORTANT :D
const port = process.env.PORT || 3999

const app = express()
app.use(cors()) // allows web apps to request recources from a different domain
app.use(express.json()) // parses incoming json payloads -> converts it as a js object to req.body
app.use(express.urlencoded({ extended: true })) // parses incoming urlencoded payloads -> converts it as a js object to req.body


try {
  const conn = await mongoose.connect(process.env.MONGO_URI)
  console.log('connected to' + conn.connection.host)
} catch (error) {
  console.log('error', error)
  process.exit(1)
}

app.use('/', router)

app.listen(port, () => console.log('Server listening on port: ' + port))