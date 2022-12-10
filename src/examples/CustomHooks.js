import { useEffect, useState } from "react"

// INFO: https://usehooks.com/

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value);
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = event => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {value, onChange},
    value,
    clear
 }
}

export function CustomHooks() {
  const input = useInput('')
  const lastName = useInput('')

  useLogger(input.value)

  return (
    <div className="container pt=-3">
      {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
      <input type="text" {...input.bind} />
      <input type="text" {...lastName.bind} />
      <button className="btn btn-warning" onClick={input.clear}>
        Clear
      </button>
      <hr />
      <h1>{input.value} {lastName.value}</h1>
    </div>
  )
}
