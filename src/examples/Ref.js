import { useEffect, useState, useRef } from "react";


export function Ref() {
  const [value, setValue] = useState('')

  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    renderCount.current++
    console.log(renderCount)
    console.log(inputRef);
  })

  useEffect(() => {
    prevValue.current = value
  })

  const focus = () => inputRef.current.focus()
 
  return (
    <div className="container">
      <h2>Number of renders: {renderCount.current}</h2>
      <h2>Previous state: {prevValue.current}</h2>
      <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} />
      <button className="btn btn-success" onClick={focus}>Focus</button>
    </div>
  );
}
