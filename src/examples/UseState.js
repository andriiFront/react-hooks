import { useState} from 'react'

function computeInitialCounter() {
  console.log('Some calculation...');
  return Math.trunc(Math.random() * 20)
}

export function UseState() {
  // const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = useState(computeInitialCounter())
  const [counter, setCounter] = useState(() => computeInitialCounter())
  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

function increment() {
  // setCounter(counter + 1)
  setCounter(prevCounter => prevCounter + 1)
}

function decrement() {
  setCounter(counter - 1)
}

function updateTitle() {
  setState(prev => ({
    ...prev,
    title: 'newTitle'
  }))
}



  return (
    <>
      <h3>Counter: {counter}</h3>
      <button onClick={increment} className="btn btn-success">Add</button>
      <button onClick={decrement} className="btn btn-danger">Remove</button>
      <button onClick={updateTitle} className="btn btn-warning">Update title</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
}
