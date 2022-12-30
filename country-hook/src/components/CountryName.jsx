import { useField } from '../hooks'

const CountryName = ({ fetch }) => {
  const nameInput = useField('nameInput')
  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>
    </div>
  )
}

export default CountryName
