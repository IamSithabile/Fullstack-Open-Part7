import React, { useEffect } from 'react'
import { useField, useResource } from '../hooks'

const Notes = () => {
  const [notes, noteService] = useResource('http://localhost:3005/notes')

  useEffect(() => {
    const getNotes = async () => {
      const notes = await noteService.get()
      return notes
    }

    getNotes()
  }, [noteService])

  const handleNoteSubmit = event => {
    event.preventDefault()
    noteService.create({ content: content.value })
  }

  const content = useField('text')
  return (
    <>
      <form onSubmit={handleNoteSubmit}>
        <input {...content} />
        <button>create</button>
      </form>
      {notes.map(n => (
        <p key={n.id}>{n.content}</p>
      ))}
    </>
  )
}

export default Notes
