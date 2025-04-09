const express = require('express')
const axios = require('axios')
const app = express()

const port = 3000

app.use(express.json())
app.post('/openUrls', async (req, res) => {
const urls = req.body.urls 

try { for (const url of urls) { 
await axios.get(url)
  console.log(Opened, URL, {url})
}
res.status(200).send('Successfully opened all URLs') }
 catch (error) { 
 console.error(error)
 res.status(500).send('Error opening URLs') 
 } 
 })
 
 app.listen(port, () =>{
  console.log()
 }) 