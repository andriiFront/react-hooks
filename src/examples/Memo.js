import { useState, useMemo } from "react";

function complexCompute(num) {
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

export function Memo() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({
    color: colored ? 'darkred' : 'black'
  }), [colored])

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  return (
    <>
      <h2 style={styles}>Сomputed property: {computed}</h2>
      <button
        onClick={() => setNumber((prev) => prev + 1)}
        className="btn btn-success"
      >
        Add
      </button>
      <button
        onClick={() => setNumber((prev) => prev - 1)}
        className="btn btn-danger"
      >
        Remove
      </button>
      <button
        onClick={() => setColored((prev) => !prev)}
        className="btn btn-warning"
      >
        Change
      </button>
    </>
  );
}
