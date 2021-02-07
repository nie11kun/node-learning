const express = require('express');
const app = express();
const cowsay = require('cowsay')

process.env.PORT = 3000
const port = process.env.PORT

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.get('*', (req, res) => {
    console.log(req.url)
    console.log(req.params)
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>hello world</h1>')
})

app.post('/', (req, res) => {
  console.log(req.body.todo)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  cs = cowsay.say({text: 'wow'})
  res.end(cs + '\n')
});

const server = app.listen(port, () => console.log('Server ready'));