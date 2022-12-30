import React from 'react'
import { Link } from 'react-router-dom'

const AnecdoteItem = ({ anecdote }) => {
  const { content, votes, author, info } = anecdote

  return (
    <>
      <h2>
        {content} by {author}
      </h2>
      <p>has {votes} votes</p>
      <p>
        For more info see : <Link to={info}>{info}</Link>
      </p>
    </>
  )
}

export default AnecdoteItem
