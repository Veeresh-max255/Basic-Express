// express .js

//express is the web applicatioon used for productivity,
const express = require('express')
const app = express()
const port = 3000

// app.get, app.post, app.put, app.delete always has (path,handler(or func))
app.get('/', (req, res) => {
  res.send('Hello World!!')
})
app.get('/about', (req, res) => {
  res.send('About us ')
})
app.get('/blog', (req, res) => {
  res.send('Blog')
})
app.get('/blog/intro', (req, res) => {
  res.send('introoo')
})
app.get('/blog/conclusion', (req, res) => {
  res.send('Hello conclusion')
})

// in above two, you can seee about and conclusion onnly there 
// if we want all, like myeducation it shows not found, for this we do..
//we use :name 

app.get('/blog/:slu/:ff', (req,res) => {
    res.send(`Hello, ${req.params.slu} and ${req.params.ff}`)
    
console.log(req.params)


//http://localhost:3000/blog/kk/hh?dark=yes?girl=no: Url is this
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'))

//This creates the file publiccc. which makes all available of this file
// this can make only this file available not all
// best practice is to make seperate folder called public  and use it..

