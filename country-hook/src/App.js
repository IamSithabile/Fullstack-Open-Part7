import { useState } from 'react'
import Country from './components/Country'
import CountryName from './components/CountryName'
import { useCountry } from './hooks'

const App = () => {
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = e => {
    e.preventDefault()
    setName(e.target.nameInput.value)
  }

  return (
    <div>
      <CountryName {...{ fetch }} />

      <Country country={country} />
    </div>
  )
}

export default App
