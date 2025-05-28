import { useState, useEffect } from 'react'
import Index from './pages/Index'
import Project from './pages/Project'

import {getAll} from './routers/projectRouter'
import { Routes, Route } from 'react-router-dom';

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const projectData = getAll()
    projectData.then(response => {
      setProjects(response.data)
    })
    .catch(e => console.log(e))
  }, []);


  return (
    <>
          <Routes>
        <Route path="/" element={<Index projects = {projects}/>} />
        <Route path="/:id" element={<Project projects = {projects} />} />
      </Routes>
    </>
    )
}

export default App
