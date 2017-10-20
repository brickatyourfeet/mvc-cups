const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(morgan('dev'))

const listener = () => console.log(`listening on port ${port}`)
app.listen(port, listener)



// get glasses  -return all glasses
const glassesController = require('./controllers/glasses.controller.js')
app.get('/glasses', glassesController.getAllGlasses)
app.post('/glasses/:id/:name', glassesController.createGlass)


// app.use((err, req, res, next) => {
//   const status = err.status || 500
//   res.status(status).json({
//     error: err
//   })
// })
//
// app.use((req, res, next) => {
//   res.status(404).json({
//     error: {
//       message: 'Nope.'
//     }
//   })
// })
