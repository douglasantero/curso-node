import http from 'node:http'

// HTTP Status code - Tem uma importancia semantica na comunicação entre 
// front-end e back-end da aplicação, 

// mdn http status code - Guia dos status mais comuns e utilizados onde são
// portas já pré salvas e que retornam uma mensagem. As portas Variam entre -
// Respostas informativas (100 - 199), Respostas bem-sucessidas (200 - 299),
// Mensagens de redirecionamento (300 - 399), Respostas de erro do cliente 
// (400 - 499), Respostas de erro do servidor (500 - 599)

const users = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    const buffers = [] // conceito de leitura de streams, para que consigamos ler todo o corpo da nossa requisição
    // JSON é uma estrutura global, pode ser usado tanto para criar o JSON,
    // como pode usar o JSON.parse, para transformar o JSON já criado em uma
    // estrutura legivel pelo javascript, um objeto, um array ou tipo primitivo
    for await (const chunk of req) { 
      buffers.push(chunk)
    }
  
    try{
    req.body = JSON.parse(Buffer.concat(buffers).toString())
    // com o parse nos transformamos o corpo em um objeto em um 
    // tipo primitivo do javascript 
    } catch {
      req.body = null
    }

    console.log(body)

    if( method === 'GET' && url === '/users' ) {
      return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if ( method == 'POST' && url === '/users' ) {
      const { name, email } = req.body

      users.push({
        id: 1,
        name,
        email,
      })

      return res.writeHead(201).end()
    }
  
    return res.writeHead(404).end()
  })

server.listen(3333)