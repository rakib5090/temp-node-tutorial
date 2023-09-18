const http = require('http')

const server = http.createServer((req, res)=> {
    if (req.url === '/') {
        res.end('Welcome')
    }
    if (req.url === '/about') {
        res.end('Here is our short story')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>we cant seem to find the page</p>
        <a href= "/">back home</a>`
    )
})

server.listen(3456)