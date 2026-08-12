import express from 'express'

const app = express()

let students = [
  { id: 1, name: 'Shakshi', age: 20 },
  { id: 2, name: 'Khushi', age: 22 },
  { id: 3, name: 'Rohan', age: 19 }
]

// Get all students
app.get('/api/students', (request, response) => {
  response.status(200).json(students)
})

// Get one student by ID
app.get('/api/students/:id', (request, response) => {
  const id = parseInt(request.params.id)

  const student = students.find(student => student.id === id)

  if (!student) {
    return response.status(404).send('Student not found')
  }

  response.status(200).json(student)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})