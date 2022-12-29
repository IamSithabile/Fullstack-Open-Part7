import { Routes, Route, useMatch, useNavigate } from 'react-router-dom'

import { useState } from 'react'

import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import About from './pages/About'
import CreateNew from './pages/CreateNew'
import Footer from './components/Footer'
import AnecdoteItem from './components/AnecdoteItem'
import Notification from './components/Notification'

const App = () => {
  const [notification, setNotification] = useState('')
  const match = useMatch('/anecdotes/:id')
  const navigate = useNavigate()

  const anecdote = match
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1,
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2,
    },
  ])

  const displayNotification = notification => {
    setNotification(notification)
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const addNew = anecdote => {
    anecdote.id = Math.round(Math.random() * 10000)
    console.log(anecdotes.concat(anecdote))
    setAnecdotes(anecdotes.concat(anecdote))
    navigate('/')
    displayNotification(
      `A new anecdote :-> ${anecdote.content} has been created`
    )
  }

  const anecdoteById = id => anecdotes.find(a => a.id === id)

  const vote = id => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    }

    setAnecdotes(anecdotes.map(a => (a.id === id ? voted : a)))
  }

  return (
    <div>
      <h1>Software anecdotes</h1>

      <Menu />
      {notification && <Notification {...{ notification }} />}

      <Routes>
        <Route
          path="/"
          element={<AnecdoteList {...{ anecdotes }} />}
        />

        <Route
          path="/anecdotes/:id"
          element={<AnecdoteItem {...{ anecdote }} />}
        />

        <Route
          path="/create"
          element={<CreateNew {...{ addNew }} />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
