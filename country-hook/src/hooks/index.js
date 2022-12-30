import { useState, useEffect } from 'react'
import axios from 'axios'

export const useField = (name, type = 'text') => {
  const [value, setValue] = useState('')

  const onChange = event => {
    setValue(event.target.value)
  }

  return {
    name,
    type,
    value,
    onChange,
  }
}

export const useCountry = name => {
  const [country, setCountry] = useState(null)

  useEffect(() => {
    const fetchCountries = async name => {
      try {
        const countries = await axios.get(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        )

        setCountry(countries.data[0])
      } catch (error) {
        return 'error'
      }
    }

    fetchCountries(name)
  }, [name])

  return country
}
