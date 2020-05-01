import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import data from './data.json'

let userList = data
// Defines the port the app will run on. Defaults to 8080, but can be 
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(bodyParser.json())

// Start defining your routes here
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/users', (req, res) => {
  res.json(userList)
})
// add new user
app.post('/users', (req, res) => {
  const user = req.body;
  console.log(user)
  userList.push(user)
  res.send('new user added')
})
// delete end-point
app.delete('/users/id/:id',(req, res) =>{
  const user = req.params.id
      userList = userList.filter(item => {
        if (item.id !== user) {
            return true;
        }
        return false;
    });

    res.send('User is deleted');
})

app.delete('/users/id/:id',(req, res) =>{
  const user = req.params.id
      userList = userList.filter(item => {
        if (item.id !== user) {
            return true;
        }
        return false;
    });

    res.send('User is deleted');
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
