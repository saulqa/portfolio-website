import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './pages/Index'
import {getAll} from './routers/projectRouter'
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
    <Index projects = {projects}/>
    </>
    )
}

export default App
