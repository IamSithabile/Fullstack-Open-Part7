import { useState } from 'react'

export const useField = (name, type = 'text') => {
  const [value, setValue] = useState()

  const onChange = e => {
    setValue(e.target.value)
  }

  const onReset = () => {
    setValue('')
  }

  return {
    type,
    name,
    onChange,
    value,
    onReset,
  }
}
