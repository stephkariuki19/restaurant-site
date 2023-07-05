import React from "react"
export default function Form({onSubmit}){
    function handleChild(e){
        e.preventDefault()
        onSubmit()
    }
return(
    <form onSubmit={handleChild}>
        <input type="text" />
        <button type="submit">submit  4 child</button>
    </form>
)
}