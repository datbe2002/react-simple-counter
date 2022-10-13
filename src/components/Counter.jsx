import React from 'react'

export default function Counter(props) {
  const { count, setCount } = props;
  return (
    <>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>

    </>

  )
}
