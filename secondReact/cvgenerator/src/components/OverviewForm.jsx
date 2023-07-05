import React from "react"
import {useState} from 'react'
export default function OverviewForm({onAddTask}){
    const [text, setText] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        onAddTask(text)
        setText('')
    }
 return(
    
    <form onSubmit = {handleSubmit}>
        <label htmlFor="text">New Task</label>
        <br />
        <input 
        type="text"
        id="text"
        value={text}
        onChange ={ (e)=>setText(e.target.value)}
         />
         <button type="submit">Add Task</button>
    </form>
    
 )

}