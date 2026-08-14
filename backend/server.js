const express = require('express')

const app = express()
// middleware
app.use(express.json());
let students=[
    {
        id:1,
        name:"John",
        email:"john@example.com",
        course:"Computer Science"

    },
    {
        id:2,
        name:"Jane",
        email:"jane@example.com",
        course:"Mathematics"
    }  ,     
    {
        id:3,
        name:"Bob",
        email:"bob@example.com",
        course:"Physics"
    },
    {
        id:4,
        name:"Alice",
        email:"alice@example.com",
        course:"Biology"
    },
    {
        id:5,
        name:"Charlie",
        email:"charlie@example.com",
        course:"Chemistry"
    },
    {
        id:6,
        name:"David",
        email:"david@example.com",
        course:"Engineering"
    },
    {
        id:7,
        name:"Eve",
        email:"eve@example.com",
        course:"Medicine"
    },
    {
        id:8,
        name:"Frank",
        email:"frank@example.com",
        course:"Psychology"
    },
    {
        id:9,
        name:"Grace",
        email:"grace@example.com",
        course:"Law"
    },
    {
        id:10,
        name:"Henry",
        email:"henry@example.com",
        course:"Business"
    }

 ]
 app.get('/api/students', (req, res) => {
  res.status(200).json(students);
})
app.get("/api/students/:id", (req, res) => {
    const id = req.params.id;

    const student = students.find((s) => s.id == id);

    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({
            message: "Student not found"
        });
    }
});

app.use(express.json());

app.post("/api/students", (req, res) => {
    const { name, email, course } = req.body;
    // validation
      if (!name || !email || !course) {
        return res.status(400).json({
            message: "Name, email and course are required"
        });
    }

// create object
    const newStudent = {
        id: students.length + 1,
        name: name,
        email: email,
        course: course
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
       message: "Student created successfully"
});

app.patch("/api/students/:id", (req, res) => {
    const id = req.params.id;

    const student = students.find((s) => s.id == id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, email, course } = req.body;

    if (!name==undefined)
       student.name = name;
    if (!email==undefined)
         student.email = email;
    if (!course==undefined)
         student.course = course;

    res.status(200).json(student)
     
});
app.delete("/api/students/:id", (req, res) => {
    const id = req.params.id;

    const index = students.findIndex((s) => s.id == id);

    if (index == -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})