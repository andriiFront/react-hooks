import { useState, useCallback } from "react";
import { ItemsList } from "./ItemsList";

export function Callback() {
  const [count, setCount] = useState(1)
  const [colored, setColored] = useState(false)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
  }, [count])

  return (
    <>
      <h2 style={styles}>Number of elements: {count}</h2>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="btn btn-success"
      >
        Add
      </button>
      <button
        onClick={() => setColored((prev) => !prev)}
        className="btn btn-warning"
      >
        Change
      </button>

      <ItemsList getItems={generateItemsFromAPI} />
    </>
  );
}
