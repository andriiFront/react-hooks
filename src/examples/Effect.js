import { useEffect, useState } from "react";

export function Effect() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  })
 
  // console.log('component render')
 
  // useEffect(() => {console.log('render')})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  const mouseMoveHandler = event => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log('ComponentDidMount');

    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div className="container">
      <h3>Source: {type}</h3>

      <button onClick={() => setType('users')}>users</button>
      <button onClick={() => setType('todos')}>todo</button>
      <button onClick={() => setType('posts')}>posts</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>

    </div>
  );
}
