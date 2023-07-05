import { useState } from 'react'
import './App.css'
import Overview from './components/Overview'
import OverviewForm from './components/OverviewForm'
import uniqid from "uniqid"

function App() {
  const [actualtasks,setActualTasks] = useState([ ])

  function handleaddTask(text){
    const atask = {
      id: uniqid(),
      text
      
    }
    setActualTasks([atask,...actualtasks])
    
  }
  function handleDelete(id){
    setActualTasks(
      actualtasks.filter(atask=> atask.id !==id)
    )
  }

  return (
    <>
      <h5>LIST OF TASKS</h5>
      <OverviewForm onAddTask={handleaddTask}/>
        {
          actualtasks.map(atask=>(
            <Overview
            onDelete={handleDelete}
            key = {atask.id}
            text = {atask.text}
            />
          ))
        }

    </>
  )
}

export default App
