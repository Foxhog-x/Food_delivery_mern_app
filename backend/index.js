 
const express = require('express')
const app = express()
const port = 5000
const mongodb = require('./db')
const cors = require('cors')


app.use(express.json())
app.use(cors({
  origin: "*"
}))

 
app.get('/', (req, res) => {
  res.send('Hello Worldx!')
})

app.use('/api' ,require('./Routes/DisplayData'))
app.use('/api' ,require('./Routes/Createuser'))
app.use('/api' ,require('./Routes/OrderData'))
app.use('/api' ,require('./Routes/Loginuser'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


mongodb();