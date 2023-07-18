 
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


mongodb();