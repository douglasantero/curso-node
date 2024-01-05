interface User {
  birthYear: number
}

function calcularAgeOfUser(user: User) { 
  return new Date().getFullYear() - user.birthYear
}

calcularAgeOfUser({
  birthYear: 1997 
})

// Runtime Type Checking

// Static Type Cheking

// Ao mudar o código de .js para .ts, ele já começa a apresentar alguns erros

// Para evitar esses tipos de erros quando for usar o typescript, é dar tipos
// para cada tipo de informação, a cada informação que tivermos em nossa
// aplicação, principalmente parametros de informação, para poder realizar isso
// precisamos informar qual é o formato dessa informação, usando o type ou o 
// interface