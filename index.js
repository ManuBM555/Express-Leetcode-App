const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.json());
const port = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


const USERS = [
  {
    "email": "manu@gmail.com",
    "password": "manu1",
    "role": "admin"
  },
  {
    "email": "charan@gmail.com",
    "password": "charan1",
    "role": "user"
  },
  {
    "email": "pratap@gmail.com",
    "password": "pratap1",
    "role": "user"
  }
];

const QUESTIONS = [{
    title: "Two states",
    description: "Given an array , return the maximum of the array?",
    testCases: [{
        input: "[1,2,3,4,5]",
        output: "5"
    }]
}];


const SUBMISSION = [

]

app.get('/',function(req, res) {
  res.send('Home Page');
})

// SignUP
app.post('/signup', function(req, res) {
  
  // Add logic to decode body
  // body should have email and password

  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)

  // return back 200 status code to the client

  

  const { email, password, role} = req.body
  // console.log(req.body);
  if(!email || !password || !role) {
    res.status(400).send('enter email and password')
  }

  const UserExist = USERS.find((user) => user.email === email);

  if(UserExist) {
    return res.status(400)
    .json({
      message:'User already exist'})
  }
  else {
    const newUSer = req.body;
    USERS.push(newUSer)
    res.send('SignUp successfull')
  }
})

app.get('/signup', function(req,res) {
  res.json(USERS)
})

app.post('/login', function(req, res) {
  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same


  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client
  
  const { email, password } = req.body;

  if(!email || !password) {
    res.status(400).send('enter email and password')
  }

  const UserExist = USERS.find((user) => user.email === email && user.password === password);
  
  if(UserExist) {
    const token = 'You are now logged in';
    return res.status(200).send(token)
  }
  else {
    return res.status(401).send('Invalid email or password')
  }
})

app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.send("Hello World from route 3!")
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  res.send("Hello World from route 4!")
});


app.post("/submissions", function(req, res) {
   // let the user submit a problem, randomly accept or reject the solution
   // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!")
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})


