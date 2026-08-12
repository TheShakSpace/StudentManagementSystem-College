import express from 'express'

const app = express()

let students = [
  { id: 1, name: 'Shakshi', age: 20 },
  { id: 2, name: 'Khushi', age: 22 },
  { id: 3, name: 'Rohan', age: 19 }
]

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})