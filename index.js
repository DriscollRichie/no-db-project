const express = require('express')
const bodyParser = require('body-parser')
const mc = require('./controllers/movieController')

const app = express()
app.use(bodyParser.json())

app.get('/api/movies', mc.getMovies)
app.post('/api/movies', mc.postMovie)
app.get('/api/userList', mc.getUserList)
app.delete('/api/userList/:id', mc.deleteMovie)
app.put('/api/userList/:id', mc.updateMovie)

const port = 3001;
app.listen(port, () => console.log(`Server is listening on port ${port}`))