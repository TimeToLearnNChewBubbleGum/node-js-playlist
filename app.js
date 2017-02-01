/* http://127.0.0.1:3000/ */

const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response){        
    console.log(`request was made: ${request.url}`)        
    if (request.url === '/home' || request.url === '/') {

        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(`${__dirname}/index.html`).pipe(response)
    
    } else if (request.url === '/contact-us') {

        response.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(`${__dirname}/contact.html`).pipe(response)

    } else if (request.url === '/api/json') {

        let object = [
            {name: 'dan', age: 60}, 
            {name: 'tibor', age: 124}
        ]

        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(object))
    } else {

        response.writeHead(404, { 'Content-Type': 'text/html' })
        fs.createReadStream(`${__dirname}/404.html`).pipe(response)

    }
})

server.listen(3000, '127.0.0.1')
console.log('Now listening to port 3000')
