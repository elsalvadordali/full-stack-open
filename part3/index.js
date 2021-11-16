const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(express.json())


app.use(morgan(morgan(':method :url :status :res[content-length] - :response-time ms')))
let notes = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
    //let answer = notes.map(note => {if (note.id === req.body.id) return note })
    res.json(notes)
})

app.post('/api/persons', (req, res) => {
  let id = Math.floor(Math.random() * 10000)
  if (req.body.number.length > 0) {
    if (req.body.name.length > 0) {
      let proceed = true
      notes.forEach(note => { if (note.name == req.body.name) return proceed = false})
      if (proceed) {
      notes.push({"id" : id, "name": req.body.name, "number": req.body.number})
      } else {
        res.send('error: name must be unique')
      }
    }
  }
  res.send(notes)
})


app.get('/api/persons/:id', (req, res) => {
    let id = req.params.id
    let answer = false
    answer = notes.filter(note => note.id == id)
    answer === false ? res.status(204).end() : res.json(answer)
})

app.get('/info', (req, res) => {
    let n = notes.length
    res.send(`<div><p>Phonebook has info for ${n} people</p><p>${new Date()}</p></div>`)
})
app.delete('/delete/:id', (req, res) => {
    let before = notes.length
    const id = req.params.id
    let answer = notes.filter(note => note.id != id)
    console.log(before.length > answer.length);
    notes = answer
    if (before > answer.length) return res.send(`successfully deleted ${id}`)
    res.send(`couldn't find id ${id}`)
})

app.listen(3001)