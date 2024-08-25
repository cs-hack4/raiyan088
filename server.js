const express = require('express')

let app = express()

app.use(express.json())

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Listening on port 3000')
})

app.get('/', async (req, res) => {
    res.status(200).send('<button onclick="openDB()">Database</button><script>function openDB() { window.location.href="https://php-myadmin.net/login.php?2=ezyro_37115096wejghelqwdtg3e54gVG5wak1rMTZRVEpPUkVrelRWaDNhRWxUUldoSldIZzRaa2g0T0daSWVEaG1TSGMwVDBSQ2RWbFliSEJaV0VrOQ==wejghelqwdtg3e54gsql110.ezyro.comwejghelqwdtg3e54gezyro_37115096_raiyan&db=ezyro_37115096_raiyan"; }</script>')
})
