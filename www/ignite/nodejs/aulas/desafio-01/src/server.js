import http from 'node:http'

const server = http.createServer((req, res) => {
const { method, url } = req
  if (method === 'GET' && url === '/tasks' ) {
    return res.end('Listagem de tasks')
  }
  if ( method === 'POST' && url === '/tasks' ){
    return res.end('Criação de tasks')
  }

  return res.end('Tasks')

})

server.listen(4343)