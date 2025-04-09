const axios = require('axios')  
const urls = ['https://www.google.com', 'https://www.example.com']

axios.post('http://localhost:3000/openUrls', { urls }).then((response) => {
  console.log(response.data)
 }).catch((error) => {
   console.error(error.message)  })