import fastify from 'fastify'

const app = fastify()
// apartir da variavel app, podemos fazer todas as funcionalidades simples que 
// uma aplicação web tem que é principalmente a parte de rotas.

app.get('/hello', () => {
  return 'Hello World'
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running!')
})