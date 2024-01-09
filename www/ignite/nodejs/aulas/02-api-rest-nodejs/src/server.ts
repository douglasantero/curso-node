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



// npm install tsx -D, É instalada como uma ferramenta, uma dependencia de 
// desenvolvimento para aplicação que ajudara no processo de converter o código
// para javascript e executar o node que foi convertido de forma automatizada.

// npx tsx src/server.ts, faz a conversão e automaticamente roda o node.
// só é recomendado utilizar em desenvolvimento, não iremos utilizar em produção
// Para produção o melhor é converter para javascript e executar o código js