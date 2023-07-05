import React from "react"
import {useState} from 'react'
export default function Overview({id,text,onDelete}){
    return(
        <div>
            <p>{text}</p>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </div>
    )
}