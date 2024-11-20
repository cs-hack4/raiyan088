const twofactor = require('node-2fa')
const express = require('express')
const axios = require('axios')
const path = require('path')

let app = express()

app.use(express.json())

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Listening on port 3000')
})

app.get('/', async (req, res) => {
    res.status(200).send('<button onclick="openDB()">Database</button><script>function openDB() { window.open("https://php-myadmin.net/login.php?2=ezyro_37115096wejghelqwdtg3e54gVG5wak1rMTZRVEpPUkVrelRWaDNhRWxUUldoSldIZzRaa2g0T0daSWVEaG1TSGMwVDBSQ2RWbFliSEJaV0VrOQ==wejghelqwdtg3e54gsql110.ezyro.comwejghelqwdtg3e54gezyro_37115096_raiyan&db=ezyro_37115096_raiyan") }</script>')
})

app.use(async (req, res, next) => {
    try {
        let originalUrl = req.originalUrl
        if(originalUrl.length > 1) {
            try {
                let name = originalUrl.substring(1, originalUrl.length)

                if(name.startsWith('2fa/')) {
                    try {
                        let newToken = twofactor.generateToken(name.substring(4, name.length))
                        res.end(newToken['token'])
                    } catch (e) {
                        res.end('')
                    }
                } else if(name.startsWith('bastu')) {
                    res.sendFile(path.join(__dirname, '/birthday.html'))
                } else if(name.startsWith('munny')) {
                    res.sendFile(path.join(__dirname, '/munny.html'))
                } else if(name.startsWith('delete/')) {
                    let single = name.substring(7, name.length)
                    if(single.includes('/')) {
                        res.end('Error')
                    } else {
                        res.end('Delete Success')
                    }
                } else if(!name.includes('/')) {
                    res.sendFile(path.join(__dirname, '/index.html'))
                } else {
                    res.end('Error')
                }
            } catch (error) {
                res.end('Error')
            }
        } else {
            next()
        }
    } catch (error) {
        next()   
    }
})
