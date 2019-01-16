const express = require('express')
const bodyParser = require('body-parser')
const messagesctrl = require('./controllers/messages_controller')

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', messagesctrl.read)

app.post('/api/messages', messagesctrl.create)

app.put('/api/messages/:id', messagesctrl.update)

app.delete('/api/messages/:id', messagesctrl.delete)



const port = 3001;
app.listen(port, () => {
    console.log(`${port} i like turtles`)
})