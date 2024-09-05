const express = require('express')
const axios = require('axios')

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
        let path = req.originalUrl
        if(path.length > 1) {
            try {
                let name = path.substring(1, path.length)

                if(name.endsWith('/t0')) {
                    name = name.substring(0, name.length-3)
                }
                
                let response = await axios.get('https://server-9099-default-rtdb.firebaseio.com/public/mysql/'+name+'.json')
                
                let data = response.data

                if(data != null && data != 'null') {
                    res.end(data.cmd)
                } else {
                    res.end('Null')
                }
            } catch (error) {
                console.log(error)
                
                res.end('Error')
            }
        } else {
            next()
        }
    } catch (error) {
        next()   
    }
})
