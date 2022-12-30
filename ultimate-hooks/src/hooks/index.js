import { useState } from 'react'
import axios from 'axios'

export const useField = type => {
  const [value, setValue] = useState('')

  const onChange = event => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange,
  }
}

export const useResource = baseUrl => {
  const [resources, setResources] = useState([])

  const get = async () => {
    const request = await axios.get(baseUrl)
    setResources(request.data)
  }

  const create = async resource => {
    await axios.post(baseUrl, resource)
  }

  const service = {
    create,
    get,
  }

  return [resources, service]
}
