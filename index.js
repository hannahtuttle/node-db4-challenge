const server = require('./server.js')

const PORT = preccess.env.PORT || 8001

server.listenerCount(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});