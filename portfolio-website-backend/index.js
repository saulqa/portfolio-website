const express = require('express')
const cors = require('cors')
const app = express()


const projects = [
  {

    id:'1',
    url: `project-sfi-codes.html`,
    thumbnail: "SfiCodes",
    text: "Personal Website",
  },
  {
    id:'2',
    url: `project-plant-trees.html`,
    thumbnail: "PlantTrees",
    text: "Android Kotlin and Java App",
  },
  {    
    id:'3',
    url: `project-clash.html`,
    thumbnail: "Clash",
    text: "C# Multiplayer Game",
  },
  {    
    id:'4',
    url: `project-business-website.html`,
    thumbnail: "Business Website",
    text: "React Website",
  },
  {    
    id:'5',
    url: `project-task-management.html`,
    thumbnail: "Task Management",
    text: "MERN Application",
  },
  {    
    id:'6',
    url: `project-secure-chat.html`,
    thumbnail: "Secure Chat",
    text: "Java Application",
  },
];

app.use(cors())
app.use(express.static('dist'))

app.get('/', (request, response) => {
  response.send('Hello World')
})

app.get('/api/projects', (request, response) => {
  response.json(projects)
})

app.get('/api/projects/:id', (request, response) => {
  const id = request.params.id
  const project = projects.find(project => project.id === id)
  response.json(project)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
