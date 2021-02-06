const express = require('express');
const app = express();

process.env.PORT = 3000
const port = process.env.PORT

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.get('/', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>hello world</h1>')
})

app.post('/', (req, res) => {
  console.log(req.body.todo)
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('hello world\n')
});

const server = app.listen(port, () => console.log('Server ready'));