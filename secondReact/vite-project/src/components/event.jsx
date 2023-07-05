import React from "react"
export default function Event(){
    function handleClick(){
        console.log("button clicked")
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("form submitted")
        //inline within curly could be (e)=> console.log(e.target.value)
    }
    function handleChange(e){
        console.log("change made")
        console.log(e.target.value)
    }
    return(
        <div>
            <h3>from event</h3>
            <button onClick={handleClick}>CLICK ME</button>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button>submit</button>
            </form>
        </div>
    )
}