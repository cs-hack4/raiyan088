const SMTPServer = require('smtp-server').SMTPServer

const server = new SMTPServer({
    allowInsecureAuth: true,
    authOptional: true,
    
    onConnect(session, connection) {
        console.log('onConnect:', session.id)
        connection()
    },
    onMailFrom(adress, session, connection) {
        console.log('onMailFrom:', adress.address, session.id)
        connection()
    },
    onRcptTo(adress, session, connection) {
        console.log('onRcptTo:', adress.address, session.id)
        connection()
    },
    onData(stream, session, connection) {
        stream.on('data', (data) => {
            console.log('onData:', data.toString())
        })

        stream.on('end', connection)
    }
})

server.listen(25, () => {
    console.log('Server Runing Port 25...')
})