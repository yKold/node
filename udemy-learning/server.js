import http from 'http'

const server = http.createServer(
    (request, response) => {

        console.log('headers', request.headers)
        console.log('method',request.method)
        console.log('url',request.url)

        response.setHeader('Content-Type', 'application/json')
        response.end('<h1>HEloooooooo</h1>')
    }
)

server.listen(3000)