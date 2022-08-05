import React from 'react'

export default function ChangeCountButton({ operation, setCount }) {

  const handleClick = () => {
    setCount(prevCount => prevCount + parseInt(operation + 1))
  }

  return (
    <button onClick={handleClick}>{operation}</button>
  )
}
