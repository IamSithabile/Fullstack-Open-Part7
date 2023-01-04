import React, { useEffect } from 'react'
import { useField, useResource } from '../hooks'

const Persons = () => {
  const [persons, personService] = useResource('http://localhost:3005/persons')

  useEffect(() => {
    const getPersons = async () => {
      const persons = await personService.get()
      return persons
    }

    getPersons()
  }, [])

  const name = useField('text')
  const number = useField('text')

  const handlePersonSubmit = event => {
    event.preventDefault()
    personService.create({ name: name.value, number: number.value })
  }
  return (
    <>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name} /> <br />
        number <input {...number} />
        <button>create</button>
      </form>
      {persons.map(n => (
        <p key={n.id}>
          {n.name} {n.number}
        </p>
      ))}
    </>
  )
}

export default Persons
