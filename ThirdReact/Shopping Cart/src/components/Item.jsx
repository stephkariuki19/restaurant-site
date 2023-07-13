import React from 'react'
import { useParams } from 'react-router-dom'
export default function Item(){
    return(
        <>
        <h1>Item PAGE</h1>
        const {id} = useParams()
        <h3>Book {id}</h3>
        </>
    )
}