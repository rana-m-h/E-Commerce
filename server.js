
import express from 'express'
import { dbConnection } from './database/db.Connection.js'
import { bootstrap } from "./src/modules/bootstrap.js"
import { globalError } from './src/modules/middelware/globalError.js'
import { AppError } from './src/utilts/appError.js'
import 'dotenv/config'
const app = express()
const port = 3000

app.use(express.json())
app.use('/uploads', express.static('uploads'))

bootstrap(app)

app.use('*', (req, res, next) => {
  next(new AppError(`route not found ${req.originalUrl}`, 404))
})


app.use(globalError)
app.post('/signup', (req, res, next) => {
  console.log('Request Body:', req.body)  // هنا هتشوف كل الحقول اللي جايه

  const { error } = singUpVal.validate(req.body)
  if (error) {
    return next(new AppError(error.details.map(d => d.message).join(','), 400))
  }

  res.send('Signup data is valid!')
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))