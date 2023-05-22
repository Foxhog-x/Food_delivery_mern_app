 
const express = require('express')
const app = express()
const port = 5000
const mongodb = require('./db')
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello Worldx!')
})

app.use('/api' ,require('./Routes/Createuser'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


mongodb();