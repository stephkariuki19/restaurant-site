import { useState } from "react"//  simple funcs that ca be used to isolate the reusable part from a functional component
import { useState } from "react"

export default function Joke({ id, text, onDelete, likes, onLike, onDislike }) {

  const handleLike = () => {
    onLike(id)
  }

  const handleDislike = () => {
    onDislike(id)
  }

  return (
    <div>
      <p>{text}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>👍</button>
      <button onClick={handleDislike}>👎</button>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  )
}