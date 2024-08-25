const express = require('express')

let app = express()

app.use(express.json())

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Listening on port 3000')
})

app.get('/', async (req, res) => {
    res.end('Raiyan')
})

app.get('/database', async (req, res) => {
    res.end('Database')
})
